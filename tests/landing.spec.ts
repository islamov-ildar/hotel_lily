import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'

const html = readFileSync('dist/index.html', 'utf8')
const state = vm.runInNewContext(html.match(/window\.__INITIAL_STATE__=([\s\S]*?)<\/script>/)![1])
const data = typeof state === 'string' ? JSON.parse(state).hotelData : state.hotelData
const api = '**/hotel-lily-default-rtdb.firebaseio.com/allData.json'

test('HTML contains content without JavaScript and unknown URLs return 404', async ({ browser, request, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL })
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Лилия')
  await expect(page.locator('#rooms')).toContainText(`Цены на ${data.priceYear} год`)
  expect((await request.get('/missing-page')).status()).toBe(404)
  await context.close()
})

test('refreshes prices and sales on each reload without Firebase SDK', async ({ page }) => {
  const errors: string[] = []
  const missing: string[] = []
  const requests: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('response', (response) => { if (response.url().startsWith('http://127.0.0.1') && response.status() >= 400) missing.push(response.url()) })
  page.on('request', (request) => requests.push(request.url()))
  let count = 0
  const fresh = structuredClone(data)
  fresh.standard[0].price = 12345
  fresh.isSalesEnabled = false
  await page.route(api, async (route) => {
    count++
    await route.fulfill({ json: fresh })
  })
  await page.goto('/')
  await expect(page.locator('#rooms')).toContainText('12345')
  await expect(page.locator('#social-float')).toHaveCount(0)
  await page.reload()
  await expect(page.locator('#rooms')).toContainText('12345')
  expect(count).toBe(2)
  await page.screenshot({ path: 'test-results/desktop.png' })
  await page.locator('#rooms').scrollIntoViewIfNeeded()
  await expect(page.locator('#rooms img.responsive').first()).toBeVisible()
  await expect.poll(() => page.locator('#rooms img.responsive').first().evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0)
  await page.locator('.headerBig').getByText('Контакты', { exact: true }).click()
  await expect(page.getByText('asmatka2008@mail.ru').last()).toBeVisible()
  expect(requests.some((url) => /firebase-api-.*\.js/.test(url))).toBe(false)
  expect(errors).toEqual([])
  expect(missing).toEqual([])
})

test('keeps generated prices when Firebase is unavailable', async ({ page }) => {
  await page.route(api, (route) => route.fulfill({ status: 503, body: 'Unavailable' }))
  await page.goto('/')
  await expect(page.getByRole('status')).toContainText('Не удалось обновить цены')
  await expect(page.locator('#rooms')).toContainText(String(data.standard[0].price))
})

test('mobile accordion shows fresh prices', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const fresh = structuredClone(data)
  fresh.standard[0].price = 12345
  await page.route(api, (route) => route.fulfill({ json: fresh }))
  await page.goto('/')
  await page.screenshot({ path: 'test-results/mobile.png' })
  await page.locator('#rooms').getByText('Стандарт', { exact: true }).first().click()
  await expect(page.locator('#rooms')).toContainText('12345')
})

test('login shell opens directly and is not indexed', async ({ page }) => {
  await page.goto('/login')
  await expect(page.locator('input[type="password"]')).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
})


test('first render does not wait for Firebase; invalid data preserves snapshot', async ({ page }) => {
  let release!: () => void
  const pending = new Promise<void>((resolve) => { release = resolve })
  await page.route(api, async (route) => {
    await pending
    await route.fulfill({ json: { invalid: true } })
  })
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('#rooms')).toContainText(String(data.standard[0].price))
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Лилия')
  release()
  await expect(page.getByRole('status')).toContainText('Не удалось обновить цены')
  await expect(page.locator('#rooms')).toContainText(String(data.standard[0].price))
})

test('warms video after page load and reuses the completed download', async ({ page }) => {
  await page.route(api, (route) => route.fulfill({ json: data }))
  const downloads: string[] = []
  page.on('request', (request) => {
    if (request.url().endsWith('.mp4') && request.resourceType() === 'fetch') downloads.push(request.url())
  })
  const download = page.waitForResponse((response) => response.url().endsWith('.mp4') && response.request().resourceType() === 'fetch')
  await page.goto('/')
  expect(downloads).toHaveLength(0)
  const response = await download
  await response.finished()
  await page.locator('#about .carousel:visible button').first().click()
  const video = page.locator('#about video:visible')
  await expect(video).toHaveAttribute('src', /^blob:/)
  await expect(video).toHaveAttribute('poster', /\.webp$/)
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.readyState)).toBeGreaterThanOrEqual(1)
  await video.evaluate((el: HTMLVideoElement) => el.play())
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.currentTime)).toBeGreaterThan(0)
  expect(downloads).toHaveLength(1)
})

test('data saver skips background download; video still streams on demand', async ({ page, request }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'connection', { value: { saveData: true, effectiveType: '4g' } }))
  await page.route(api, (route) => route.fulfill({ json: data }))
  const downloads: string[] = []
  page.on('request', (request) => { if (request.url().endsWith('.mp4')) downloads.push(request.url()) })
  await page.goto('/')
  // Observe past the 2s scheduling delay to ensure no background request was made.
  await page.waitForTimeout(2600)
  expect(downloads).toHaveLength(0)
  await page.locator('#about .carousel:visible button').first().click()
  const video = page.locator('#about video:visible')
  await expect(video).toHaveAttribute('src', /\/assets\/hotel-lily-.*\.mp4$/)
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.readyState)).toBeGreaterThanOrEqual(1)
  const url = await video.getAttribute('src')
  const partial = await request.get(url!, { headers: { Range: 'bytes=0-1023' } })
  expect(partial.status()).toBe(206)
  expect((await partial.body()).length).toBe(1024)
})

test('video autoplays muted in view and pauses outside the viewport or on slide change', async ({ page }) => {
  await page.route(api, (route) => route.fulfill({ json: data }))
  await page.goto('/')
  const controls = page.locator('#about .carousel:visible button')
  await controls.first().click()
  const video = page.locator('#about video:visible')
  await video.scrollIntoViewIfNeeded()
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(false)
  expect(await video.evaluate((el: HTMLVideoElement) => el.muted)).toBe(true)
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.currentTime)).toBeGreaterThan(0)
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
  })
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(true)
  await video.scrollIntoViewIfNeeded()
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(false)
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'hidden' })
    document.dispatchEvent(new Event('visibilitychange'))
  })
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(true)
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' })
    document.dispatchEvent(new Event('visibilitychange'))
  })
  await expect.poll(() => video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(false)
  await video.evaluate((el) => { (window as any).__previousVideo = el })
  await controls.last().click()
  await expect(video).toHaveCount(0)
  expect(await page.evaluate(() => (window as any).__previousVideo.paused)).toBe(true)
})

import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { JSDOM } from 'jsdom'
import path from 'node:path'

const html = await readFile('dist/index.html', 'utf8')
const doc = new JSDOM(html).window.document
assert.equal(doc.documentElement.lang, 'ru')
assert.equal(doc.querySelectorAll('h1').length, 1)
assert.match(doc.querySelector('h1').textContent, /Лилия.*Гудауте/)
assert.equal(doc.querySelector('link[rel="canonical"]').href, 'https://hotel-lily.ru/')
assert.ok(doc.querySelector('meta[name="description"]').content.length > 50)
for (const id of ['rooms', 'about', 'feedbacks', 'map', 'footer']) assert.ok(doc.getElementById(id), `${id} missing from HTML`)
assert.match(doc.getElementById('rooms').textContent, /Цены на \d{4} год/)
assert.ok(doc.querySelector('img[fetchpriority="high"][srcset]'))
assert.ok(doc.querySelector('iframe[loading="lazy"]'))
assert.equal(JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent)['@type'], 'Hotel')
assert.ok(html.includes('window.__INITIAL_STATE__'))
assert.ok(!html.includes('/src/assets/'), 'Source paths must not leak into production')
for (const el of doc.querySelectorAll('[src], link[href], img[srcset]')) {
  const urls = [el.getAttribute('src'), el.getAttribute('href'), ...(el.getAttribute('srcset')?.split(',').map((s) => s.trim().split(/\s+/)[0]) ?? [])]
  for (const url of urls.filter((s) => s?.startsWith('/') && !s.startsWith('//'))) {
    const target = path.join('dist', decodeURI(url.split('?')[0]))
    assert.ok((await stat(target)).isFile(), `Missing asset: ${url}`)
  }
}
for (const route of ['admin', 'login']) {
  const shell = new JSDOM(await readFile(`dist/${route}/index.html`, 'utf8')).window.document
  assert.equal(shell.querySelector('meta[name="robots"]').content, 'noindex, nofollow')
  assert.equal(shell.getElementById('app').textContent, '')
  assert.ok(shell.querySelector('script[type="module"]'))
  assert.ok(!shell.querySelector('link[rel="canonical"]'))
}
assert.match(await readFile('dist/404.html', 'utf8'), /Страница не найдена/)
assert.match(await readFile('dist/sitemap.xml', 'utf8'), /<loc>https:\/\/hotel-lily.ru\/<\/loc>/)
assert.match(await readFile('dist/.htaccess', 'utf8'), /ErrorDocument 404 \/404.html/)
// The public entry must not import Firebase chunks; admin chunks may do so lazily.
const entry = doc.querySelector('script[type="module"]').src
const source = await readFile(path.join('dist', entry), 'utf8')
assert.ok(!source.includes('firebaseio.com/.ws'), 'Firebase SDK leaked into the public entry')
console.log('SSG checks passed: content, SEO, local assets, administrative shells and 404.')

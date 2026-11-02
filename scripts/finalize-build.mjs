import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { loadEnv } from 'vite'

const { VITE_SITE_URL } = loadEnv('production', process.cwd(), 'VITE_')
const url = new URL(VITE_SITE_URL)
if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
  throw new Error('VITE_SITE_URL must be the HTTPS origin of the production site.')
}
const origin = url.origin
const html = await readFile('dist/index.html', 'utf8')
const resources = html.match(/<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>|<link\b[^>]*(?:rel="stylesheet"|rel="modulepreload")[^>]*>/g)?.join('\n') ?? ''
if (!resources.includes('type="module"')) throw new Error('Client entry missing')
const shell = `<!doctype html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Управление сайтом — Отель Лилия</title><link rel="icon" href="/favicon.png">${resources}</head><body><div id="app"></div></body></html>`
for (const route of ['admin', 'login']) {
  await mkdir(`dist/${route}`, { recursive: true })
  await writeFile(`dist/${route}/index.html`, shell)
}
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`)
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>\n`)
console.log('Administrative shells, robots.txt and sitemap.xml generated.')

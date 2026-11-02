// Local verification server. Production on REG.RU only serves the dist files.
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
const root = path.resolve('dist')
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain' }
createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
  let file = path.resolve(root, `.${pathname}`)
  if (!file.startsWith(`${root}/`) && file !== root) { res.writeHead(403).end(); return }
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html')
    const content = await readFile(file)
    const headers = {
      'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
    }
    const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/)
    if (range) {
      const start = Number(range[1])
      const end = Math.min(range[2] ? Number(range[2]) : content.length - 1, content.length - 1)
      if (start > end || start >= content.length) {
        res.writeHead(416, { 'Content-Range': `bytes */${content.length}` }).end()
        return
      }
      res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${content.length}`, 'Content-Length': end - start + 1 }).end(content.subarray(start, end + 1))
      return
    }
    res.writeHead(200, { ...headers, 'Content-Length': content.length }).end(content)
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end(await readFile(path.join(root, '404.html')))
  }
}).listen(Number(process.env.LILY_PREVIEW_PORT ?? 4173), '127.0.0.1', () => console.log(`SSG preview: http://127.0.0.1:${process.env.LILY_PREVIEW_PORT ?? 4173}`))

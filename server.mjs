import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, 'dist')
const PORT = Number(process.env.PORT) || 3000

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  return MIME[ext] || 'application/octet-stream'
}

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', 'http://localhost')
    let pathname = decodeURIComponent(url.pathname)
    if (pathname.includes('\0') || pathname.includes('..')) {
      res.writeHead(400)
      res.end()
      return
    }

    if (pathname !== '/' && pathname.endsWith('/')) pathname += 'index.html'

    let filePath =
      pathname === '/' ? path.join(root, 'index.html') : path.join(root, pathname)

    if (!(await exists(filePath))) {
      const ext = path.extname(pathname)
      if (ext && ext !== '.html') {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      const indexHtml = path.join(root, 'index.html')
      if (await exists(indexHtml)) {
        const buf = await fs.readFile(indexHtml)
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache',
        })
        res.end(buf)
        return
      }
      res.writeHead(404)
      res.end('Not found')
      return
    }

    const buf = await fs.readFile(filePath)
    const isHtml = path.extname(filePath).toLowerCase() === '.html'
    res.writeHead(200, {
      'Content-Type': mimeFor(filePath),
      'Cache-Control': isHtml ? 'no-cache' : 'public, max-age=31536000, immutable',
    })
    res.end(buf)
  } catch (err) {
    console.error(err)
    res.writeHead(500)
    res.end('Internal Server Error')
  }
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server listening on ${PORT}`)
})

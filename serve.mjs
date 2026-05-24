import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, "dist")
const PORT = process.env.PORT || 3000

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".webp": "image/webp",
}

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0])
  if (urlPath.endsWith("/")) urlPath += "index.html"
  let filePath = path.join(DIST, urlPath)
  if (!filePath.startsWith(DIST)) { res.writeHead(403); return res.end("forbidden") }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const alt = path.join(filePath, "index.html")
    if (fs.existsSync(alt)) filePath = alt
  } else if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    const alt = path.join(filePath, "index.html")
    if (fs.existsSync(alt)) filePath = alt
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "content-type": "text/html" })
    return res.end("<h1>404</h1>")
  }

  const type = types[path.extname(filePath)] || "application/octet-stream"
  res.writeHead(200, { "content-type": type })
  fs.createReadStream(filePath).pipe(res)
}).listen(PORT, () => console.log(`http://localhost:${PORT}`))

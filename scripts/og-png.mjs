// After `next build`: Next saves link-preview images as "opengraph-image" with no file extension,
// and GitHub Pages then serves them without an image type, which LinkedIn and Slack can reject.
// This copies each one to "opengraph-image.png" and points the page tags at the .png copy.
// The tag also gets "?v=" plus a short fingerprint of the image, so when an image changes its
// address changes too, and apps that saved the old picture (Telegram, LinkedIn) fetch the new one.

import { createHash } from "node:crypto"
import { copyFileSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { join, relative } from "node:path"

const OUT = new URL("../out/", import.meta.url).pathname
const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else files.push(p)
  }
}
walk(OUT)

// Folder of each image (e.g. "/projects/billpro") → short fingerprint of its content.
const versions = {}
for (const p of files.filter((f) => f.endsWith("/opengraph-image"))) {
  copyFileSync(p, p + ".png")
  const folder = "/" + relative(OUT, join(p, ".."))
  versions[folder.replace(/\/$/, "")] = createHash("sha256").update(readFileSync(p)).digest("hex").slice(0, 8)
}

let pages = 0
for (const p of files.filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(p, "utf8")
  const next = html.replace(/((?:\/[\w.-]+)*)\/opengraph-image\?[\w-]+/g, (match, path) => {
    // `path` may still start with the host ("/pikalokate.github.io/projects/billpro"), so match the
    // longest image folder it ends with; the homepage image ("") is the fallback.
    const folder = Object.keys(versions)
      .sort((a, b) => b.length - a.length)
      .find((k) => path === k || (k && path.endsWith(k)) || k === "")
    const v = versions[folder]
    return v ? `${path}/opengraph-image.png?v=${v}` : `${path}/opengraph-image.png`
  })
  if (next !== html) {
    writeFileSync(p, next)
    pages++
  }
}

const images = Object.keys(versions).length
console.log(`Link previews: ${images} images saved as .png, ${pages} pages updated`)

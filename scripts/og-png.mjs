// After `next build`: Next saves link-preview images as "opengraph-image" with no file extension,
// and GitHub Pages then serves them without an image type, which LinkedIn and Slack can reject.
// This copies each one to "opengraph-image.png" and points the page tags at the .png copy.

import { copyFileSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const OUT = new URL("../out/", import.meta.url).pathname
let images = 0
let pages = 0

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (name === "opengraph-image") {
      copyFileSync(p, p + ".png")
      images++
    } else if (name.endsWith(".html")) {
      const html = readFileSync(p, "utf8")
      const next = html.replace(/\/opengraph-image\?[\w-]+/g, "/opengraph-image.png")
      if (next !== html) {
        writeFileSync(p, next)
        pages++
      }
    }
  }
}

walk(OUT)
console.log(`Link previews: ${images} images saved as .png, ${pages} pages updated`)

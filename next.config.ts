import type { NextConfig } from "next"

// The site lives at the root of https://pikalokate.github.io, so no base path is needed.
// Set BASE_PATH (e.g. "/portfolio") only if it's ever served from a sub-folder.
const basePath = process.env.BASE_PATH ?? ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  // Plain <img>/<video> tags don't get basePath added, so lib/asset.ts reads it from here.
  env: { BASE_PATH: basePath },
  images: { unoptimized: true },
  devIndicators: false,
  // Lets the dev server be opened through a cloudflared tunnel to check the site on a phone.
  allowedDevOrigins: ["*.trycloudflare.com"],
}

export default nextConfig

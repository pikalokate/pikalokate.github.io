import { ogSize, videoOg } from "@/lib/og"
import { site } from "@/lib/site"

export const dynamic = "force-static"
export const size = ogSize
export const contentType = "image/png"
export const alt = `Intro video by ${site.name}`

export default function Image() {
  return videoOg("/talks/seller-to-buyer/intro-poster.webp", "Intro to our call · under a minute")
}

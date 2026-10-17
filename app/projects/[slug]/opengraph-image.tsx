import { ogImage, ogSize } from "@/lib/og"
import { projects, site } from "@/lib/site"

export const dynamic = "force-static"
export const dynamicParams = false
export const size = ogSize
export const contentType = "image/png"
export const alt = `Case study by ${site.name}`

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  return ogImage(`Case study · ${site.name}, ${site.role}`, p?.title ?? site.name, p?.summary ?? "")
}

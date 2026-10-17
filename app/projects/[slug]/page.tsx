import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SiteHeader from "@/components/SiteHeader"
import CaseStudy from "@/components/case-study/CaseStudy"
import { studies } from "@/content"
import { projects } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    openGraph: { title: p.title, description: p.description, url: `/projects/${p.slug}/` },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) notFound()

  const study = studies[slug]
  if (study) {
    const listed = projects.filter((x) => !x.unlisted)
    const next = listed[(listed.findIndex((x) => x.slug === slug) + 1) % listed.length]
    return (
      <>
        <SiteHeader back />
        <CaseStudy project={p} study={study} next={next} />
      </>
    )
  }

  return (
    <>
      <SiteHeader back />
      <main className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <h1 className="rise pt-16 text-[40px] leading-[1.05] font-medium tracking-[-0.035em] sm:pt-24 sm:text-[64px]">{p.title}</h1>
      </main>
    </>
  )
}

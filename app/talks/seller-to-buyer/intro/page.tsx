// A short intro video for the interviewer, sent before the call. Unlisted: nothing links here.
import type { Metadata } from "next"
import Link from "next/link"
import { asset } from "@/lib/asset"
import IntroVideo from "@/components/talk/IntroVideo"
import { site } from "@/lib/site"
import MoreAboutMe from "@/components/talk/MoreAboutMe"
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Hi Juan Posse: intro to our call",
  description: "A short video intro to our call: one journey from seller to buyer.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Intro to our call · Kate Pikalo",
    description: "A short video, under a minute: one journey from seller to buyer.",
    url: "/talks/seller-to-buyer/intro/",
  },
}

const plan = [
  { part: "Seller", text: "Creating a product with its own product page and payment link, ready to share or place anywhere." },
  { part: "Buyer", text: "The product page, checkout on mobile, and managing the order in the Order portal." },
  { part: "How I work", text: "The UX decisions behind each step, what happens when things go wrong, and how I build with the team in code." },
]

export default function Page() {
  return (
    <>
    <div className="border-b border-border">
    <header className="mx-auto flex h-12 w-full max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
      <p className="text-[14px] text-muted-foreground">
        Kate Pikalo<span className="hidden sm:inline"> · Lead Product Designer</span>
      </p>
      <nav className="flex items-center gap-4 text-[14px] text-muted-foreground sm:gap-6">
        <a href="https://pikalokate.github.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          Portfolio <ArrowUpRight />
        </a>
        {[
          { ...site.linkedin, Icon: LinkedInIcon },
          { ...site.github, Icon: GitHubIcon },
        ].map(({ label, url, Icon }) => (
          <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Icon />
            <span className="hidden sm:inline">{label}</span>
            <ArrowUpRight />
          </a>
        ))}
      </nav>
    </header>
    </div>
    <main className="mx-auto w-full max-w-[1120px] px-5 pt-8 pb-28 sm:px-8 sm:pt-10">
      <h1 className="text-[24px] leading-tight font-medium tracking-[-0.02em] sm:text-[28px]">Hi Juan Posse,</h1>
      <p className="mt-3 max-w-[680px] text-[16px] leading-7 text-muted-foreground">
        I&apos;m Kate, and I&apos;m looking forward to our call. Here is a short video, under a minute, so you know what we&apos;ll
        go through together. Sound on.
      </p>

      <IntroVideo
        src={asset("/talks/seller-to-buyer/intro.mp4")}
        poster={asset("/talks/seller-to-buyer/intro-poster.webp")}
        captions={asset("/talks/seller-to-buyer/intro.vtt")}
      />

      <section className="mt-16 border-t border-border pt-10">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <h2 className="text-[24px] leading-tight font-medium tracking-[-0.02em]">What we&apos;ll cover</h2>
          <p className="text-[15.5px] text-muted-foreground">One case study: a full journey from seller to buyer.</p>
        </div>
        <ol className="mt-8 grid gap-3 md:grid-cols-3">
          {plan.map((p, i) => (
            <li key={p.part} className="rounded-2xl border border-border p-6">
              <span className="text-[13px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-6 text-[17px] font-medium">{p.part}</p>
              <p className="mt-2 text-[15px] leading-6 text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-3 flex flex-col gap-4 rounded-2xl border border-dashed border-border p-6 sm:flex-row sm:items-end sm:justify-between sm:gap-16">
          <div className="max-w-[740px]">
            <p className="text-[15px] font-medium">The case study page</p>
            <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
              <span className="text-foreground">No need to read it before our call.</span> You can skip it, since I&apos;ll walk you through everything on our call. It&apos;s there to look back at afterwards, or to explore if you&apos;re curious.
            </p>
          </div>
          <Link href="/talks/seller-to-buyer/" className="shrink-0 self-end text-[14px] text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground">
            Open the page →
          </Link>
        </div>
      </section>

      <MoreAboutMe className="mt-16" />

    </main>
    </>
  )
}

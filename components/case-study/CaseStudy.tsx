import Link from "next/link"
import SectionNav from "./SectionNav"
import Media from "./Media"
import { asset } from "@/lib/asset"
import type { Project } from "@/lib/site"

export type Section = { id: string; nav: string; title: string; body: React.ReactNode }

export type Study = {
  /** Short line above the title, e.g. "Case study · Fintech acquisition". */
  eyebrow: string
  /** The outcome, in one sentence. Shown under the project name. */
  headline: string
  summary: React.ReactNode
  meta: { label: string; value: React.ReactNode }[]
  results: React.ReactNode[]
  hero: React.ComponentProps<typeof Media>
  sections: Section[]
}

const rise = (i: number) => ({ "--i": i }) as React.CSSProperties

export default function CaseStudy({ project, study, next }: { project: Project; study: Study; next?: Project }) {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
      {/* Snapshot */}
      <header className="pt-14 sm:pt-20">
        <p className="rise text-[13px] text-muted-foreground" style={rise(0)}>{study.eyebrow}</p>
        <h1 className="rise mt-5 text-[40px] leading-[1.05] font-medium tracking-[-0.035em] sm:text-[64px]" style={rise(1)}>
          {project.title}
        </h1>
        <p className="rise mt-4 max-w-[26ch] text-[24px] leading-[1.25] tracking-[-0.02em] text-subtle sm:text-[32px]" style={rise(2)}>
          {study.headline}
        </p>
        <p className="rise mt-8 max-w-[60ch] text-[17px] leading-[1.65] text-foreground/85 sm:text-[18px]" style={rise(3)}>
          {study.summary}
        </p>

        <dl className="rise mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 sm:grid-cols-4" style={rise(4)}>
          {study.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[13px] text-muted-foreground">{m.label}</dt>
              <dd className="mt-1.5 text-[15px] leading-[1.5]">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="rise mt-12" style={rise(5)}>
        <Media {...study.hero} />
      </div>

      <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {study.results.map((r, i) => (
          <li key={i} className="bg-background p-6 text-[15px] leading-[1.55]">
            <span className="mb-3 block text-[13px] text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            {r}
          </li>
        ))}
      </ul>

      {/* Story */}
      <div className="mt-24 grid gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 sm:mt-32">
        <aside className="hidden lg:block">
          <SectionNav items={study.sections.map((s) => ({ id: s.id, label: s.nav }))} />
        </aside>

        <div className="min-w-0 max-w-[760px]">
          {study.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-t border-border pt-10 pb-20 first:border-t-0 first:pt-0">
              <p className="text-[13px] text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 mb-8 text-[28px] leading-[1.2] font-medium tracking-[-0.025em] sm:text-[34px]">{s.title}</h2>
              {s.body}
            </section>
          ))}
        </div>
      </div>

      {next ? (
        <section aria-label="Next case study" className="mb-24 border-t border-border pt-8">
          <div className="flex items-baseline justify-between gap-6">
            <span className="text-[13px] text-muted-foreground">Next case study</span>
            <Link href="/#work" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">
              All case studies →
            </Link>
          </div>
          <Link
            href={`/projects/${next.slug}/`}
            className="group mt-4 flex items-center gap-4 rounded-xl border border-border bg-[#fafafa] p-3 pr-5 transition-colors duration-300 outline-none hover:border-foreground/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:gap-5"
          >
            <span className="block aspect-[4/3] w-[96px] shrink-0 overflow-hidden rounded-lg bg-frame">
              {next.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={asset(next.cover)} alt="" width={1600} height={1200} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              ) : null}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] leading-[1.3] font-medium tracking-[-0.01em]">{next.title}</span>
              <span className="mt-1 hidden text-[14px] leading-[1.45] text-muted-foreground sm:block">{next.summary}</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-[18px] text-subtle transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground">
              →
            </span>
          </Link>
        </section>
      ) : null}
    </main>
  )
}

// "More about me" panel shared by the talk pages: text and profile links, with the portfolio covers beside them.
import { asset } from "@/lib/asset"
import { site } from "@/lib/site"
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons"

const covers = ["buyer-journey", "onbold-ai", "lytro", "billpro"]

export default function MoreAboutMe({ className = "" }: { className?: string }) {
  return (
    <section className={`grid items-end gap-10 overflow-hidden rounded-3xl bg-[#f6f6f7] p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] ${className}`}>
      <div>
        <p className="text-[13px] text-muted-foreground">If you&apos;d like to know more</p>
        <h2 className="mt-2 text-[24px] leading-tight font-medium tracking-[-0.02em]">More about me</h2>
        <p className="mt-3 max-w-[440px] text-[15.5px] leading-6 text-muted-foreground">
          My portfolio has four full case studies: checkout and order management, an AI readiness check, a billing platform and a
          stablecoin app.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 sm:flex-nowrap">
          <a href="https://pikalokate.github.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-[#111] px-3 py-2 text-[13.5px] font-medium whitespace-nowrap text-white hover:bg-[#333] sm:px-4 sm:text-[14px]">
            Portfolio <ArrowUpRight />
          </a>
          <a href={site.linkedin.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-[13.5px] font-medium whitespace-nowrap hover:border-foreground/30 sm:px-4 sm:text-[14px]">
            <LinkedInIcon /> LinkedIn <ArrowUpRight />
          </a>
          <a href={site.github.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-[13.5px] font-medium whitespace-nowrap hover:border-foreground/30 sm:px-4 sm:text-[14px]">
            <GitHubIcon /> GitHub <ArrowUpRight />
          </a>
        </div>
      </div>
      <a href="https://pikalokate.github.io" target="_blank" rel="noreferrer" aria-label="Portfolio" className="grid grid-cols-2 gap-3">
        {covers.map((c, i) => (
          <img
            key={c}
            src={asset(`/projects/${c}/cover.webp`)}
            alt=""
            className={`aspect-[4/3] w-full rounded-xl border border-black/5 object-cover shadow-[0_12px_30px_-18px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1 ${i % 2 ? "translate-y-4" : ""}`}
          />
        ))}
      </a>
    </section>
  )
}

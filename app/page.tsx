import Link from "next/link"
import ContributionSkyline from "@/components/ContributionSkyline"
import SiteHeader from "@/components/SiteHeader"
import ScrollReveal from "@/components/ScrollReveal"
import { asset } from "@/lib/asset"
import { listedProjects, site } from "@/lib/site"
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons"
import contributions from "@/data/contributions.json"

const updated = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
  new Date(contributions.updatedAt),
)

// A short call to action, and under it a clear button that opens the profile in a new tab.
const ProfileCta = ({
  text,
  link,
  Icon,
  aside,
}: {
  text: string
  link: { label: string; url: string }
  Icon: () => React.ReactElement
  /** Optional note on the right, on the same line as the call to action. */
  aside?: React.ReactNode
}) => (
  <div className="flex flex-col items-start gap-3">
    <div className="flex w-full flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <span className="text-[14px] text-muted-foreground">{text}</span>
      {aside}
    </div>
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${link.label} (opens in a new tab)`}
      className="group inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-[14px] transition-colors hover:border-foreground"
    >
      <Icon />
      {link.label}
      <ArrowUpRight />
    </a>
  </div>
)

// Structured profile for search engines and AI tools that read the page.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
  knowsAbout: ["Product design", "UX/UI design", "Figma", "Design systems", "Prototyping in code", "AI-assisted front-end development", "Fintech", "Payments"],
  sameAs: [site.github.url, site.linkedin.url],
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <script
        dangerouslySetInnerHTML={{
          __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver"in window)document.documentElement.classList.add("reveal")`,
        }}
      />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <main className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        {/* Name, position and what Kate does */}
        <section className="pt-8 sm:pt-12">
          <h1
            className="rise text-[38px] leading-[1] font-medium tracking-[-0.035em] sm:text-[60px]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {site.name}
          </h1>
          <div className="rise mt-5" style={{ "--i": 1 } as React.CSSProperties}>
            <p className="text-[15px] text-muted-foreground sm:text-[17px]">
              {site.role} · {site.tagline}
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-subtle sm:text-[14px]">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 14.5s4.75-4.2 4.75-8.1a4.75 4.75 0 1 0-9.5 0c0 3.9 4.75 8.1 4.75 8.1Z" />
                <circle cx="8" cy="6.4" r="1.7" />
              </svg>
              {site.location}
            </p>
          </div>
          <p
            className="rise mt-8 max-w-[30ch] text-[26px] sm:mt-12 leading-[1.2] tracking-[-0.02em] text-muted-foreground sm:text-[36px]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            I design fintech products and <span className="text-foreground">build the interface in code with AI</span>
          </p>
        </section>

        {/* Strong points */}
        <section aria-label="Strong points" className="pt-14 sm:pt-20">
          <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {site.strengths.map((s, i) => (
              <li key={s.title} data-reveal className="border-t border-border pt-4" style={{ "--d": 2 + i } as React.CSSProperties}>
                <span className="text-[12px] text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-[15px] font-medium tracking-[-0.01em]">{s.title}</h2>
                <p className="mt-2 text-[14px] leading-[1.55] text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section aria-labelledby="about" className="grid gap-6 pt-20 sm:pt-28 lg:grid-cols-[1fr_3fr] lg:gap-6">
          <h2 id="about" data-reveal className="text-[14px] font-medium">About</h2>
          <div className="max-w-[72ch]">
            {site.about.map((p, i) => (
              <p key={p.slice(0, 24)} data-reveal style={{ "--d": i + 1 } as React.CSSProperties} className="mb-4 text-[14px] leading-[1.6] text-foreground/85">
                {p}
              </p>
            ))}
            <div data-reveal style={{ "--d": site.about.length + 1 } as React.CSSProperties}>
              <ProfileCta text="Full experience" link={site.linkedin} Icon={LinkedInIcon} />
            </div>
          </div>
        </section>

        {/* GitHub calendar */}
        <section aria-labelledby="code" className="pt-20 sm:pt-28">
          <div data-reveal className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6">
            <h2 id="code" className="text-[14px] font-medium">Shipping in code</h2>
            <p className="max-w-[72ch] text-[15px] leading-[1.6] text-muted-foreground lg:text-right">
              Every square is a day I committed code, including private work on our company products.
            </p>
          </div>

          <div data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <ContributionSkyline data={contributions.days} defaultView="3d" palette="github" maxHeight3d={340} maxWidth2d={760} statScale={0.9} />
          </div>

          <div data-reveal style={{ "--d": 2 } as React.CSSProperties} className="mt-3">
            <ProfileCta
              text="See what I ship"
              link={site.github}
              Icon={GitHubIcon}
              aside={<span className="text-[12px] text-subtle tabular-nums">Live data from GitHub · updated {updated}</span>}
            />
          </div>
        </section>

        {/* Case studies */}
        <section id="work" className="scroll-mt-8 pt-20 pb-28 sm:pt-28">
          <div data-reveal className="flex items-baseline justify-between border-b border-border pb-4">
            <h2 className="text-[14px] font-medium">Case studies</h2>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4">
            {listedProjects.map((p, i) => (
              <li key={p.slug} data-reveal style={{ "--d": i % 4 } as React.CSSProperties}>
                <Link href={`/projects/${p.slug}/`} className="group block outline-none">
                  <div className="aspect-[2/1] overflow-hidden rounded-xl bg-frame sm:aspect-[4/3] transition-colors duration-500 group-hover:bg-frame-hover group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-foreground">
                    {p.cover ? (
                      <picture className="block h-full w-full">
                        {p.coverMobile ? <source media="(max-width: 639px)" srcSet={asset(p.coverMobile)} /> : null}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(p.cover)}
                          alt=""
                          width={1600}
                          height={1200}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top sm:object-center"
                        />
                      </picture>
                    ) : null}
                  </div>
                  <h3 className="mt-4 min-h-[2.6em] sm:mt-5 text-[18px] leading-[1.3] font-medium tracking-[-0.01em] lg:text-[17px]">{p.title}</h3>
                  <p className="mt-2 max-w-[42ch] text-[15px] leading-[1.5] text-muted-foreground lg:text-[14px]">{p.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-[1120px] px-5 text-[13px] text-muted-foreground sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-8">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-5">
            <a href={site.github.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
            <a href={site.linkedin.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

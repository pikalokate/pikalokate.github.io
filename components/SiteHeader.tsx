import Link from "next/link"
import { site } from "@/lib/site"
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons"

const external = [
  { ...site.github, Icon: GitHubIcon },
  { ...site.linkedin, Icon: LinkedInIcon },
]

export default function SiteHeader({ back = false }: { back?: boolean }) {
  const bar = (
    <header className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-5 sm:px-8">
      {back ? (
        <Link href="/#work" className="group inline-flex items-center gap-1.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground">
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">←</span>
          All case studies
        </Link>
      ) : (
        <span />
      )}
      <nav className="flex items-center gap-5 text-[14px] text-muted-foreground sm:gap-6">
        {!back && (
          <a href="#work" className="transition-colors hover:text-foreground">
            Case studies
          </a>
        )}
        {external.map(({ label, url, Icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Icon />
            {label}
            <ArrowUpRight />
          </a>
        ))}
      </nav>
    </header>
  )
  // Case-study pages: the header stays on screen, so "All case studies" is always one click away.
  return back ? <div className="sticky-bar sticky top-0 z-40 bg-background/85 backdrop-blur-md">{bar}</div> : bar
}

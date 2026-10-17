// Small building blocks for case-study text. Weights stay at 400/500.

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[17px] leading-[1.7] text-foreground/85 first:mt-0">{children}</p>
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="text-[20px] leading-[1.55] tracking-[-0.01em] text-foreground sm:text-[22px]">{children}</p>
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-12 text-[18px] font-medium tracking-[-0.01em] first:mt-0">{children}</h3>
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[17px] leading-[1.65] text-foreground/85">
          <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-subtle" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l border-foreground pl-6 text-[22px] leading-[1.45] tracking-[-0.015em] text-foreground sm:text-[24px]">
      {children}
    </blockquote>
  )
}

const statCols: Record<number, string> = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" }

export function Stats({ items }: { items: { value: React.ReactNode; label: React.ReactNode }[] }) {
  return (
    <dl className={`my-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border ${statCols[items.length] ?? "sm:grid-cols-4"}`}>
      {items.map((s, i) => (
        <div key={i} className="bg-background p-5">
          <dt className="sr-only">{typeof s.label === "string" ? s.label : ""}</dt>
          <dd className="text-[28px] leading-none font-medium tracking-[-0.03em] tabular-nums">{s.value}</dd>
          <dd className="mt-3 text-[13px] leading-[1.45] text-muted-foreground">{s.label}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Two short labelled columns, e.g. "I owned" vs "The team". */
export function Split({ cols }: { cols: { title: string; items: React.ReactNode[] }[] }) {
  return (
    <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
      {cols.map((c) => (
        <div key={c.title} className="bg-background p-6">
          <h4 className="text-[13px] text-muted-foreground">{c.title}</h4>
          <ul className="mt-4 space-y-2.5">
            {c.items.map((it, i) => (
              <li key={i} className="text-[15px] leading-[1.55]">{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/** One key decision: what we could do, what I chose, why, and what it cost. Rows left out are not shown. */
export function Decision({
  n,
  title,
  options,
  chose,
  why,
  tradeoff,
  children,
}: {
  n: number
  title: string
  options?: React.ReactNode
  chose: React.ReactNode
  why?: React.ReactNode
  tradeoff?: React.ReactNode
  children?: React.ReactNode
}) {
  const rows = (
    [
      ["Options", options],
      ["I chose", chose],
      ["Why", why],
      ["Trade-off", tradeoff],
    ] as [string, React.ReactNode][]
  ).filter(([, v]) => v)
  return (
    <article className="mt-20 first:mt-10">
      <p className="text-[13px] text-subtle tabular-nums">Decision {String(n).padStart(2, "0")}</p>
      <h3 className="mt-2 text-[24px] leading-[1.25] font-medium tracking-[-0.02em] sm:text-[28px]">{title}</h3>
      <dl className="mt-6 divide-y divide-border border-y border-border">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-4 sm:grid-cols-[120px_1fr] sm:gap-6">
            <dt className="text-[13px] leading-[1.7] text-muted-foreground">{k}</dt>
            <dd className="text-[16px] leading-[1.65] text-foreground/85">{v}</dd>
          </div>
        ))}
      </dl>
      {children}
    </article>
  )
}

export function Pills({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-border px-3 py-1 text-[13px] text-muted-foreground">{t}</li>
      ))}
    </ul>
  )
}

export function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-[14px] transition-colors hover:border-foreground"
    >
      {children}
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

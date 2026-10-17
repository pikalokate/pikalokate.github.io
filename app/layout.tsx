import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { site } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://pikalokate.github.io"),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { type: "website", url: "/", siteName: site.name, title: `${site.name} — ${site.role}`, description: site.description },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">{children}</body>
    </html>
  )
}

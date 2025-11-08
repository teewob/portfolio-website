import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type ButtonConfig = {
  label: string
  href: string
}

type QuoteCTAProps = {
  quote: string
  caption?: string
  body?: string[]
  links?: { label: string; href: string }[]
  primary: ButtonConfig
  secondary?: ButtonConfig
  tone?: "dark" | "light"
  className?: string
}

export function QuoteCTA({ quote, caption, body, links, primary, secondary, tone = "dark", className }: QuoteCTAProps) {
  const isDark = tone === "dark"
  const textColor = isDark ? "text-white" : "text-black"
  const subtle = isDark ? "text-white/60" : "text-black/60"
  const blockClasses = cn("mx-auto max-w-3xl text-center space-y-6", textColor, className)

  const buttonBase =
    "inline-flex items-center gap-3 rounded-full border px-8 py-4 text-[11px] font-display uppercase tracking-[0.32em] transition"
  const primaryClasses = cn(
    buttonBase,
    isDark ? "border-white/30 bg-white/10 text-white hover:-translate-y-1" : "border-black/30 bg-black/5 text-black hover:-translate-y-1",
  )
  const secondaryClasses = cn(
    buttonBase,
    isDark ? "border-white/20 bg-transparent text-white hover:bg-white/10" : "border-black/20 bg-transparent text-black hover:bg-black/5",
  )

  const linkClasses = cn(
    "text-xs font-display uppercase tracking-[0.4em] transition",
    isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black",
  )

  return (
    <div className={blockClasses}>
      <blockquote className="font-serif text-3xl font-semibold leading-tight md:text-5xl">{quote}</blockquote>
      {caption && <p className={cn("text-sm", subtle)}>{caption}</p>}
      {body && body.length > 0 && (
        <div className="space-y-1 text-sm">
          {body.map((line) => (
            <p key={line} className={subtle}>
              {line}
            </p>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link href={primary.href} className={primaryClasses}>
          {primary.label}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        {secondary && (
          <Link href={secondary.href} className={secondaryClasses}>
            {secondary.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  )}

"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type NavigationColumn = {
  label: string
  links: Array<{
    label: string
    href: string
    subtle?: string
  }>
}

const navigationColumns: NavigationColumn[] = [
  {
    label: "Studio",
    links: [
      { label: "Overview", href: "#studio" },
      { label: "Selected Work", href: "#selected-work" },
      { label: "Experience", href: "#experience" },
    ],
  },
]

export function FixedNavigation() {
  const [activeSection, setActiveSection] = useState<string>("#studio")

  const sectionAnchors = useMemo(() => {
    return Array.from(
      new Set(
        navigationColumns
          .flatMap((column) => column.links)
          .filter((link) => link.href.startsWith("#"))
          .map((link) => link.href),
      ),
    )
  }, [])

  useEffect(() => {
    if (sectionAnchors.length === 0) {
      return
    }

    const observers: IntersectionObserver[] = []

    sectionAnchors.forEach((anchor) => {
      const element = document.querySelector(anchor)

      if (!element) {
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(anchor)
            }
          })
        },
        {
          rootMargin: "-45% 0px -45%",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionAnchors])

  return (
    <aside className="pointer-events-none fixed right-10 top-32 hidden h-[240px] flex-col justify-between xl:flex">
      <div className="flex flex-col gap-10 font-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
        {navigationColumns.map((column) => (
          <div key={column.label} className="pointer-events-auto">
            <div className="text-muted-foreground/60">{column.label}</div>
            <ul className="mt-4 flex flex-col gap-2 text-base tracking-[0.08em] text-foreground">
              {column.links.map((link) => {
                const isAnchor = link.href.startsWith("#")
                const isActive = isAnchor && link.href === activeSection

                return (
                  <li key={link.label} className="relative flex flex-col">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 text-left text-[18px] font-light transition-all duration-300 hover:text-foreground",
                        isAnchor ? "font-light" : "font-normal",
                        isActive ? "text-foreground" : "text-muted-foreground/80",
                      )}
                    >
                      {isActive && <span className="size-1 rounded-full bg-accent" aria-hidden="true" />}
                      <span>{link.label}</span>
                    </Link>
                    {link.subtle && (
                      <span className="pl-4 text-xs font-sans uppercase tracking-[0.25em] text-muted-foreground/70">
                        {link.subtle}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}

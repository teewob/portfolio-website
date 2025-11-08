import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { essays } from "@/lib/pages/essays"

export default function EssaysPage() {

  return (
    <div className="flex min-h-screen flex-col bg-[#a0a0a0]">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <div className="rounded-[48px] border border-black/20 bg-[#12141c] text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="flex flex-col gap-6 rounded-t-[48px] border-b border-white/10 bg-[#0e1016] p-10 sm:p-14">
                <div className="text-sm font-display uppercase tracking-[0.35em] text-white/60">Written Word</div>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h1 className="font-serif text-[3.5rem] leading-none md:text-[4.5rem]">Curated Essays</h1>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                      Dispatches from Substack documenting island memory, creative process, and the intersection of visual and
                      written storytelling.
                    </p>
                  </div>
                  <Link
                    href="https://substack.com"
                    target="_blank"
                    className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs font-display uppercase tracking-[0.35em] text-white/80 transition hover:bg-white/10"
                  >
                    Subscribe
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="space-y-6 p-8 sm:p-10">
                {essays.map((essay) => (
                  <Card key={essay.id} className="group rounded-[28px] border border-white/10 bg-[#1b1f2b] text-white">
                    <CardContent className="space-y-5 p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-display uppercase tracking-[0.3em] text-white/50">
                        <time className="tracking-[0.25em]">{essay.date}</time>
                        <span className="size-[3px] rounded-full bg-white/30" />
                        <span>{essay.readTime}</span>
                      </div>
                      <h2 className="font-serif text-2xl font-semibold leading-snug text-white group-hover:text-white">
                        {essay.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-white/70">{essay.excerpt}</p>
                      <Link
                        href={`/essays/${essay.id}`}
                        className="group inline-flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.32em] text-white/80 transition-all duration-300 hover:gap-4"
                      >
                        Read Essay
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { artifacts } from "@/lib/pages/illustrations"

export default function IllustrationsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeArtifact = activeIndex !== null ? artifacts[activeIndex] : null

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return (prev + 1) % artifacts.length
    })
  }, [])

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return (prev - 1 + artifacts.length) % artifacts.length
    })
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox()
      }
      if (event.key === "ArrowRight") {
        showNext()
      }
      if (event.key === "ArrowLeft") {
        showPrev()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [activeIndex, closeLightbox, showNext, showPrev])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
            <div className="mb-14 space-y-4">
              <div className="text-sm font-display uppercase tracking-[0.35em] text-white/60">Artifacts archive</div>
              <h1 className="font-serif text-[4.5rem] leading-none md:text-[6rem]">Illustrations</h1>
              <Link
                href="https://instagram.com/worksbytiara"
                target="_blank"
                className="text-xs font-display uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
              >
                @worksbytiara
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {artifacts.map((artifact, index) => (
                <button
                  key={artifact.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex flex-col gap-3 rounded-[20px] bg-white/5 p-4 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-[16px] border border-white/10 bg-black/40">
                    <img
                      src={artifact.image}
                      alt={artifact.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="space-y-1 text-xs text-white/70">
                    <h3 className="font-serif text-lg font-semibold text-white">{artifact.title}</h3>
                    <p className="tracking-wide">{artifact.caption}</p>
                  </div>
                </button>
              ))}
            </div>

            <QuoteCTA
              tone="dark"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Contact", href: "/contact" }}
              className="mt-16"
            />
          </div>
        </section>
      </main>

      <Footer />

      {activeArtifact && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeLightbox}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex h-full flex-col items-center justify-center gap-6 px-6 py-10">
            <div className="relative flex w-full max-w-4xl items-center gap-4">
              <button
                type="button"
                onClick={showPrev}
                className="hidden rounded-full border border-white/20 bg-white/10 p-4 text-white transition hover:bg-white/25 sm:inline-flex"
                aria-label="Previous illustration"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex-1">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/20 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
                  <img src={activeArtifact.image} alt={activeArtifact.title} className="h-full w-full object-contain" />
                </div>
              </div>

              <button
                type="button"
                onClick={showNext}
                className="hidden rounded-full border border-white/20 bg-white/10 p-4 text-white transition hover:bg-white/25 sm:inline-flex"
                aria-label="Next illustration"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex w-full max-w-3xl flex-col items-center text-center text-xs uppercase tracking-[0.3em] text-white/70">
              <p className="font-serif text-2xl tracking-normal text-white">{activeArtifact.title}</p>
              <p className="mt-2 text-sm tracking-[0.2em] text-white/70">{activeArtifact.caption}</p>
              <div className="mt-4 flex items-center gap-4 text-[11px] font-display">
                <span>
                  {activeIndex !== null ? `${activeIndex + 1} / ${artifacts.length}` : null}
                </span>
                <div className="flex gap-2 sm:hidden">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/25"
                    aria-label="Previous illustration"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/25"
                    aria-label="Next illustration"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

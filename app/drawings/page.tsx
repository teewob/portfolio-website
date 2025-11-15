"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { illustrationPieces } from "@/lib/pages/illustrations"

export default function IllustrationsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const orderedPieces = illustrationPieces
  const activePiece = activeIndex !== null ? orderedPieces[activeIndex] : null

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return (prev + 1) % orderedPieces.length
    })
  }, [orderedPieces.length])

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return (prev - 1 + orderedPieces.length) % orderedPieces.length
    })
  }, [orderedPieces.length])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowRight") showNext()
      if (event.key === "ArrowLeft") showPrev()
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
              <div className="text-sm font-display uppercase tracking-[0.35em] text-white/60">Sketch Archive</div>
              <h1 className="font-serif text-[4.5rem] leading-none md:text-[6rem]">Illustrations</h1>
              <Link
                href="https://instagram.com/worksbytiara"
                target="_blank"
                className="text-xs font-display uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
              >
                @worksbytiara
              </Link>
            </div>

          </div>
        </section>

        <section>
          <div className="w-full px-4 pb-24 md:px-10">
            <div
              className="mx-auto grid w-full max-w-[1600px] gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gridAutoFlow: "dense" }}
            >
              {orderedPieces.map((piece, index) => {
                const span = Math.min(Math.max(piece.cols ?? 1, 1), 3)
                const isVideo = piece.type === "video"
                return (
                  <button
                    key={piece.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{ gridColumn: `span ${span}` }}
                    className="group relative block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                  >
                    {isVideo ? (
                      <video
                        src={piece.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        controls={false}
                        preload="metadata"
                        className="block h-auto w-full object-cover"
                      />
                    ) : (
                      <img
                        src={piece.src}
                        alt={`Illustration ${piece.id}`}
                        className="block h-auto w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </button>
                )
              })}
            </div>

          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto w-full max-w-5xl">
            <QuoteCTA
              tone="dark"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Contact", href: "/contact" }}
            />
          </div>
        </section>
      </main>

      <Footer />

      {activePiece && (
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
                <div className="w-full overflow-hidden border border-white/20 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
                  {activePiece.type === "video" ? (
                    <video
                      key={activePiece.id}
                      src={activePiece.src}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <img src={activePiece.src} alt={`Illustration ${activePiece.id}`} className="h-full w-full object-contain" />
                  )}
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

            <div className="flex w-full max-w-3xl flex-col items-center text-center text-xs font-display uppercase tracking-[0.3em] text-white/70">
              <div className="mt-4 flex items-center gap-4 text-[11px]">
                <span>{activeIndex !== null ? `${activeIndex + 1} / ${orderedPieces.length}` : null}</span>
                <div className="flex gap-2 sm:hidden">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/25"
                    aria-label="Previous piece"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/25"
                    aria-label="Next piece"
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

"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { PhotoStory } from "@/lib/pages/photography"

type PhotoEssayProps = {
  story: PhotoStory
}

type FlattenedImage = {
  src: string
  sectionId: string
  heading?: string
}

export function PhotoEssay({ story }: PhotoEssayProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const { images, lookup } = useMemo(() => {
    const flattened: FlattenedImage[] = []
    const keyMap = new Map<string, number>()

    story.sections.forEach((section) => {
      section.images.forEach((src, imageIdx) => {
        const key = `${section.id}-${imageIdx}`
        keyMap.set(key, flattened.length)
        flattened.push({ src, sectionId: section.id, heading: section.heading })
      })
    })

    return { images: flattened, lookup: keyMap }
  }, [story.sections])

  const openLightbox = (sectionId: string, imageIdx: number) => {
    const key = `${sectionId}-${imageIdx}`
    const index = lookup.get(key)
    if (typeof index === "number") {
      setActiveIndex(index)
      setOpen(true)
    }
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const currentImage = images[activeIndex]

  return (
    <>
      <div className="space-y-24">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-white/80">
          {story.intro.map((paragraph, idx) => (
            <p key={`intro-${idx}`}>{paragraph}</p>
          ))}
        </div>

        {story.sections.map((section, idx) => (
          <article key={section.id} className="border-t border-white/10 pt-12">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-white/85 text-center">
              <div className="text-[11px] font-display uppercase tracking-[0.4em] text-white/50">
                Section {String(idx + 1).padStart(2, "0")}
              </div>
              {section.heading && <h3 className="font-serif text-3xl text-white">{section.heading}</h3>}
              <div className="space-y-4 text-left leading-relaxed text-white/80">
                {section.body.map((paragraph, paragraphIdx) => (
                  <p key={`${section.id}-body-${paragraphIdx}`}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-6">
              {section.images.map((src, imageIdx) => (
                <button
                  key={`${section.id}-image-${imageIdx}`}
                  type="button"
                  onClick={() => openLightbox(section.id, imageIdx)}
                  className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Open image in fullscreen"
                >
                  <img
                    src={src}
                    alt={section.heading ? `${section.heading} frame ${imageIdx + 1}` : `Photo essay frame ${imageIdx + 1}`}
                    className="w-full max-w-full object-contain transition duration-500 group-hover:opacity-90"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </article>
        ))}

        <div className="border-t border-white/10 pt-12">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-white/80">
            {story.conclusion.map((paragraph, idx) => (
              <p key={`conclusion-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 text-white shadow-none sm:!max-w-none"
          showCloseButton={false}
          style={{ top: 0, left: 0 }}
        >
          <button className="absolute right-6 top-6 rounded-full border border-white/40 bg-black/70 p-3" onClick={() => setOpen(false)} aria-label="Close gallery">
            <X className="size-4" />
          </button>
          <div className="relative flex h-full w-full max-w-5xl flex-col">
            <div className="relative flex-1">
              {currentImage && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img src={currentImage.src} alt={currentImage.heading ?? "Photo essay frame"} className="h-full w-full object-contain" />
                </div>
              )}
            </div>
            <div className="absolute inset-y-0 left-8 flex items-center">
              <button className="rounded-full border border-white/40 bg-black/70 p-4" onClick={handlePrev} aria-label="Previous image">
                <ArrowLeft className="size-7" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-8 flex items-center">
              <button className="rounded-full border border-white/40 bg-black/70 p-4" onClick={handleNext} aria-label="Next image">
                <ArrowRight className="size-7" />
              </button>
            </div>
            <div className="pointer-events-none absolute bottom-12 left-0 right-0 text-center text-xs font-display uppercase tracking-[0.4em] text-white/70">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

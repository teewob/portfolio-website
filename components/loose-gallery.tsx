"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface LooseGalleryProps {
  photos: string[]
}

export function LooseGallery({ photos }: LooseGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (!photos?.length) return null

  const handleOpen = (idx: number) => {
    setIndex(idx)
    setOpen(true)
  }

  const showPrev = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const showNext = () => {
    setIndex((prev) => (prev + 1) % photos.length)
  }

  return (
    <>
      <div className="columns-1 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {photos.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            type="button"
            onClick={() => handleOpen(idx)}
            className="mb-6 block w-full break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <img src={src} alt={`Gallery image ${idx + 1}`} className="h-auto w-full" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl border-none bg-black/95 p-0 text-white" showCloseButton={false}>
          <div className="relative flex flex-col">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/70 p-2"
              onClick={() => setOpen(false)}
              aria-label="Close gallery"
            >
              <X className="size-4" />
            </button>
            <div className="relative h-[75vh] w-full overflow-hidden rounded-[32px] bg-black">
              <img src={photos[index]} alt={`Gallery image ${index + 1}`} className="h-full w-full object-contain" />
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
                <button
                  type="button"
                  className="rounded-full border border-white/30 bg-black/70 p-3"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/30 bg-black/70 p-3"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-xs font-display uppercase tracking-[0.35em] text-white/70">
                {index + 1} / {photos.length}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

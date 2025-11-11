"use client"

import { useState, type MouseEvent } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type GalleryItem = {
  src: string
  caption: string
}

type PhotoGalleryProps = {
  items: GalleryItem[]
  layout?: "grid" | "masonry"
  showCaptions?: boolean
}

export function PhotoGallery({ items, layout = "grid", showCaptions = true }: PhotoGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const isMasonry = layout === "masonry"
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }

  const handleOpen = (idx: number) => {
    setIndex(idx)
    setOpen(true)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length)
  }

  if (!items?.length) return null

  return (
    <>
      <div
        className={cn(
          isMasonry
            ? "columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:balance]"
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {items.map((item, idx) => (
          <button
            key={item.src}
            className={cn(
              "group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              isMasonry ? "mb-6 block w-full" : "flex flex-col gap-3"
            )}
            onClick={() => handleOpen(idx)}
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-[18px] border border-white/10 bg-white/5",
                isMasonry && "bg-black/60"
              )}
            >
              {isMasonry ? (
                <img
                  src={item.src}
                  alt={item.caption || `Gallery image ${idx + 1}`}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.caption || `Gallery image ${idx + 1}`}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              )}
            </div>
            {showCaptions && <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/60">{item.caption}</p>}
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 text-white shadow-none sm:!max-w-none"
          showCloseButton={false}
          style={{ top: 0, left: 0 }}
          onClick={handleBackdropClick}
        >
          <button className="absolute right-6 top-6 rounded-full border border-white/40 bg-black/70 p-3" onClick={() => setOpen(false)} aria-label="Close gallery">
            <X className="size-4" />
          </button>
          <div className="relative flex h-full w-full max-w-5xl flex-col">
            <div className="relative flex-1">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <Image src={items[index].src} alt={items[index].caption} fill className="!static h-full w-full object-contain" priority />
              </div>
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
              {index + 1} / {items.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

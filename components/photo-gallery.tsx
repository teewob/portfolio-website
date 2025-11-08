"use client"

import { useState } from "react"
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
}

export function PhotoGallery({ items }: PhotoGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.src}
            className="group flex flex-col gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => handleOpen(idx)}
          >
            <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/5">
              <Image src={item.src} alt={item.caption} width={600} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">{item.caption}</p>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-none bg-black/95 p-0 text-white" showCloseButton={false}>
          <div className="relative flex flex-col">
            <button className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/60 p-2" onClick={() => setOpen(false)}>
              <X className="size-4" />
            </button>
            <div className="relative h-[70vh] w-full overflow-hidden rounded-[24px]">
              <Image src={items[index].src} alt={items[index].caption} fill className="object-cover" />
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
                <button className="rounded-full border border-white/30 bg-black/60 p-3" onClick={handlePrev}>
                  <ArrowLeft className="size-5" />
                </button>
                <button className="rounded-full border border-white/30 bg-black/60 p-3" onClick={handleNext}>
                  <ArrowRight className="size-5" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-xs font-display uppercase tracking-[0.35em] text-white/70">
                {index + 1} / {items.length}
              </div>
            </div>
            <div className="p-6 text-sm text-white/80">{items[index].caption}</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

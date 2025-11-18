"use client"

import { useEffect, useState, type MouseEvent } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { cn, resolveMediaUrl } from "@/lib/utils"

type LooseGalleryItem = string | { src: string; type?: "image" | "video"; alt?: string }

interface LooseGalleryProps {
  photos: LooseGalleryItem[]
  variant?: "masonry" | "grid"
  wrapperClassName?: string
  itemClassName?: string
  mediaClassName?: string
  rounded?: boolean
  showLoader?: boolean
  unstyledItems?: boolean
}

const normalizeItem = (item: LooseGalleryItem) =>
  typeof item === "string"
    ? { src: item, type: "image" as const }
    : { src: item.src, type: item.type ?? "image", alt: item.alt }

export function LooseGallery({
  photos,
  variant = "masonry",
  wrapperClassName,
  itemClassName,
  mediaClassName,
  rounded = true,
  showLoader = true,
  unstyledItems = false,
}: LooseGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(showLoader)

  if (!photos?.length) return null

  const normalizedPhotos = photos.map(normalizeItem)

  const handleOpen = (idx: number) => {
    setIndex(idx)
    setOpen(true)
  }

  const showPrev = () => {
    setIndex((prev) => (prev - 1 + normalizedPhotos.length) % normalizedPhotos.length)
  }

  const showNext = () => {
    setIndex((prev) => (prev + 1) % normalizedPhotos.length)
  }

  useEffect(() => {
    if (!showLoader) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [photos, showLoader])

  const current = normalizedPhotos[index]
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }

  if (isLoading) {
    return <FilmLoader />
  }

  const containerClasses =
    variant === "grid"
      ? cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", wrapperClassName)
      : cn("columns-1 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-4", wrapperClassName)

  const sharedButtonClasses = unstyledItems
    ? ""
    : "block w-full overflow-hidden border border-white/10 bg-white/5 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
  const buttonClasses = cn(
    sharedButtonClasses,
    !unstyledItems && variant === "masonry" ? "mb-6 break-inside-avoid" : "",
    !unstyledItems ? (rounded ? (variant === "grid" ? "rounded-[20px]" : "rounded-[28px]") : "rounded-none") : "",
    itemClassName
  )

  const mediaClasses = cn(
    "h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]",
    !unstyledItems ? (rounded ? (variant === "grid" ? "rounded-[20px]" : "rounded-[28px]") : "rounded-none") : "",
    mediaClassName
  )

  return (
    <>
      <div className={containerClasses}>
        {normalizedPhotos.map((item, idx) => {
          const mediaUrl = resolveMediaUrl(item.src, item.type === "video" ? "video" : "image")
          return (
            <button
              key={`${item.src}-${idx}`}
              type="button"
              onClick={() => handleOpen(idx)}
              className={cn("group", buttonClasses)}
            >
              {item.type === "video" ? (
                <video src={mediaUrl} autoPlay loop muted playsInline className={mediaClasses} />
              ) : (
                <img src={mediaUrl} alt={item.alt ?? `Gallery image ${idx + 1}`} className={mediaClasses} />
              )}
            </button>
          )
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 text-white sm:!max-w-none"
          showCloseButton={false}
          style={{ top: 0, left: 0 }}
          onClick={handleBackdropClick}
        >
          <div className="sr-only">
            <DialogTitle>{current.alt ?? `Gallery item ${index + 1}`}</DialogTitle>
            <DialogDescription>Fullscreen gallery viewer with navigation controls</DialogDescription>
          </div>
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full border border-white/40 bg-black/70 p-3"
            onClick={() => setOpen(false)}
            aria-label="Close gallery"
          >
            <X className="size-4" />
          </button>
          <div className="relative flex h-full w-full max-w-6xl flex-col">
            <div className="relative flex-1">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                {current.type === "video" ? (
                  <video
                    key={current.src}
                    src={resolveMediaUrl(current.src, "video")}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <img
                    src={resolveMediaUrl(current.src)}
                    alt={current.alt ?? `Gallery image ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 left-8 flex items-center">
              <button
                type="button"
                className="rounded-full border border-white/40 bg-black/70 p-4"
                onClick={showPrev}
                aria-label="Previous image"
              >
                <ArrowLeft className="size-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-8 flex items-center">
              <button
                type="button"
                className="rounded-full border border-white/40 bg-black/70 p-4"
                onClick={showNext}
                aria-label="Next image"
              >
                <ArrowRight className="size-6" />
              </button>
            </div>
            <div className="pointer-events-none absolute bottom-10 left-0 right-0 text-center text-xs font-display uppercase tracking-[0.35em] text-white/70">
              {index + 1} / {normalizedPhotos.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function FilmLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-7 rounded-[32px] border border-white/10 bg-gradient-to-b from-black/85 via-black/70 to-black/85 p-12 text-white shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
      <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-[0.45em] text-white/60">
        <span className="inline-block h-px w-12 bg-white/25" />
        Processing Film
        <span className="inline-block h-px w-12 bg-white/25" />
      </div>
      <div className="relative w-full max-w-xl overflow-hidden rounded-[22px] border border-white/15 bg-black/40 p-6">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-[2/3] rounded-[10px] border border-white/10 bg-white/5 shadow-inner"
            >
              <div className="h-full w-full animate-pulse rounded-[10px] bg-gradient-to-b from-white/15 via-white/5 to-transparent" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_55%)]" />
      </div>
      <div className="w-full max-w-md">
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-white/60" />
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Winding Roll · Stand By</p>
    </div>
  )
}

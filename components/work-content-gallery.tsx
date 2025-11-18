"use client"

import { useCallback, useState, type MouseEvent } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import type { WorkGalleryItem } from "@/lib/pages/work"
import { cn, resolveMediaUrl } from "@/lib/utils"

type Orientation = NonNullable<WorkGalleryItem["aspect"]>

const tileClassMap: Record<Orientation, string> = {
  portrait: "",
  landscape: "sm:col-span-3",
}

const aspectRatioClassMap: Record<Orientation, string> = {
  portrait: "aspect-[9/16]",
  landscape: "aspect-[16/9]",
}

const fallbackOrientation: Orientation = "portrait"

const resolveTileClass = (orientation: Orientation) => tileClassMap[orientation]
const resolveAspectClass = (orientation: Orientation) => aspectRatioClassMap[orientation]

export function WorkContentGallery({ items }: { items: WorkGalleryItem[] }) {
  const [orientationMap, setOrientationMap] = useState<Record<string, Orientation>>({})
  const [viewerIndex, setViewerIndex] = useState<number | null>(null)

  const registerOrientation = useCallback((id: string, width: number, height: number) => {
    if (!width || !height) return
    const orientation: Orientation = width >= height ? "landscape" : "portrait"
    setOrientationMap((prev) => {
      if (prev[id] === orientation) return prev
      return { ...prev, [id]: orientation }
    })
  }, [])

  const openViewer = (index: number) => setViewerIndex(index)
  const closeViewer = () => setViewerIndex(null)

  const showPrev = () =>
    setViewerIndex((prev) => {
      if (prev === null) return prev
      return (prev - 1 + items.length) % items.length
    })

  const showNext = () =>
    setViewerIndex((prev) => {
      if (prev === null) return prev
      return (prev + 1) % items.length
    })

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeViewer()
    }
  }

  const orientationForItem = (item: WorkGalleryItem) =>
    orientationMap[item.id] ?? item.aspect ?? fallbackOrientation

  const activeItem = viewerIndex === null ? null : items[viewerIndex]

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {items.map((item, index) => (
          <figure
            key={item.id}
            className={cn("flex flex-col gap-3", resolveTileClass(orientationForItem(item)))}
          >
            <button
              type="button"
              onClick={() => openViewer(index)}
              className="group block w-full rounded-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-[32px] bg-white/5",
                  resolveAspectClass(orientationForItem(item))
                )}
              >
                {item.type === "video" ? (
                  item.provider === "youtube" ? (
                    <iframe
                      src={item.src}
                      title={item.alt}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={resolveMediaUrl(item.poster ?? "", "image")}
                      onLoadedMetadata={(event) =>
                        registerOrientation(item.id, event.currentTarget.videoWidth, event.currentTarget.videoHeight)
                      }
                      className="absolute inset-0 h-full w-full cursor-pointer object-cover"
                    >
                      <source src={resolveMediaUrl(item.src, "video")} />
                    </video>
                  )
                ) : (
                  <img
                    src={resolveMediaUrl(item.src)}
                    alt={item.alt}
                    onLoad={(event) =>
                      registerOrientation(item.id, event.currentTarget.naturalWidth, event.currentTarget.naturalHeight)
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
            </button>
            {item.caption && (
              <figcaption className="text-xs font-display uppercase tracking-[0.35em] text-white/50">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <Dialog open={viewerIndex !== null} onOpenChange={(open) => { if (!open) closeViewer() }}>
        <DialogContent
          className="flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 text-white sm:!max-w-none"
          showCloseButton={false}
          style={{ top: 0, left: 0 }}
          onClick={handleBackdropClick}
        >
          <div className="sr-only">
            <DialogTitle>{activeItem?.alt ?? "Work gallery asset"}</DialogTitle>
            <DialogDescription>Fullscreen viewer with navigation controls</DialogDescription>
          </div>
          {activeItem && (
            <div className="relative flex h-full w-full max-w-6xl flex-col" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="absolute right-3 top-4 z-10 rounded-full border border-white/40 bg-black/70 p-3 sm:right-4 sm:top-6"
                onClick={(event) => {
                  event.stopPropagation()
                  closeViewer()
                }}
                aria-label="Close gallery"
              >
                <X className="size-4" />
              </button>
              <div className="relative flex-1">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {activeItem.type === "video" ? (
                    activeItem.provider === "youtube" ? (
                      <iframe
                        key={activeItem.id}
                        src={activeItem.fullscreenSrc ?? activeItem.src}
                        title={activeItem.alt}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="max-h-[90vh] w-full rounded-[32px]"
                      />
                    ) : (
                      <video
                        key={activeItem.id}
                        src={resolveMediaUrl(activeItem.src, "video")}
                        poster={resolveMediaUrl(activeItem.poster ?? "", "image")}
                        autoPlay
                        loop
                        controls
                        playsInline
                        preload="metadata"
                        className="max-h-[90vh] w-full rounded-[32px] object-contain"
                      />
                    )
                  ) : (
                    <img
                      src={resolveMediaUrl(activeItem.src)}
                      alt={activeItem.alt}
                      className="max-h-[90vh] w-full rounded-[32px] object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-8 z-10 flex items-center sm:left-10">
                <button
                  type="button"
                  className="pointer-events-auto rounded-full border border-white/40 bg-black/70 p-4"
                  onClick={(event) => {
                    event.stopPropagation()
                    showPrev()
                  }}
                  aria-label="Previous asset"
                >
                  <ArrowLeft className="size-6" />
                </button>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-8 z-10 flex items-center sm:right-10">
                <button
                  type="button"
                  className="pointer-events-auto rounded-full border border-white/40 bg-black/70 p-4"
                  onClick={(event) => {
                    event.stopPropagation()
                    showNext()
                  }}
                  aria-label="Next asset"
                >
                  <ArrowRight className="size-6" />
                </button>
              </div>
              {activeItem.caption && (
                <p className="pointer-events-none mt-6 text-center text-xs font-display uppercase tracking-[0.35em] text-white/70">
                  {activeItem.caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

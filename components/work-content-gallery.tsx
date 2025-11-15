"use client"

import { useCallback, useRef, useState } from "react"

import type { WorkGalleryItem } from "@/lib/pages/work"
import { cn } from "@/lib/utils"

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
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})
  const [orientationMap, setOrientationMap] = useState<Record<string, Orientation>>({})

  const registerOrientation = useCallback((id: string, width: number, height: number) => {
    if (!width || !height) return
    const orientation: Orientation = width >= height ? "landscape" : "portrait"
    setOrientationMap((prev) => {
      if (prev[id] === orientation) return prev
      return { ...prev, [id]: orientation }
    })
  }, [])

  const handleVideoClick = (id: string) => {
    const video = videoRefs.current[id]
    if (!video) return

    video.muted = false
    video.controls = true
    video.loop = false
    const requestFullscreen =
      video.requestFullscreen || (video as any).webkitRequestFullscreen || (video as any).webkitEnterFullscreen

    if (requestFullscreen) {
      requestFullscreen.call(video)
    }

    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement

      if (!fullscreenElement) {
        video.muted = true
        video.controls = false
        video.loop = true
        document.removeEventListener("fullscreenchange", handleFullscreenChange)
        document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
        document.removeEventListener("mozfullscreenchange", handleFullscreenChange)
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("mozfullscreenchange", handleFullscreenChange)
    video.play()
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.id}
          className={cn(
            "group flex flex-col gap-3",
            resolveTileClass(orientationMap[item.id] ?? item.aspect ?? fallbackOrientation)
          )}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-[32px] bg-white/5",
              resolveAspectClass(orientationMap[item.id] ?? item.aspect ?? fallbackOrientation)
            )}
          >
            {item.type === "video" ? (
              <video
                ref={(node) => {
                  videoRefs.current[item.id] = node
                }}
                autoPlay
                loop
                muted
                playsInline
                poster={item.poster}
                onClick={() => handleVideoClick(item.id)}
                onLoadedMetadata={(event) =>
                  registerOrientation(item.id, event.currentTarget.videoWidth, event.currentTarget.videoHeight)
                }
                className="absolute inset-0 h-full w-full cursor-pointer object-cover"
              >
                <source src={item.src} />
              </video>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                onLoad={(event) =>
                  registerOrientation(item.id, event.currentTarget.naturalWidth, event.currentTarget.naturalHeight)
                }
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
          {item.caption && (
            <figcaption className="text-xs font-display uppercase tracking-[0.35em] text-white/50">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

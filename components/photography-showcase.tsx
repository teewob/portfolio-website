"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"

import { photoCollections } from "@/lib/pages/photography"
import { resolveMediaUrl } from "@/lib/utils"

const SLIDE_INTERVAL = 5000
const FADE_DURATION = 800

type Slide = {
  src: string
  title: string
}

export function PhotographyShowcase() {
  const slides = useMemo<Slide[]>(() => {
    const previewImages: Slide[] = []

    photoCollections.forEach((collection) => {
      collection.gallery.slice(0, 3).forEach((item) => {
        previewImages.push({ src: resolveMediaUrl(item.src), title: collection.title })
      })
    })

    return previewImages
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const [isCurrentVisible, setIsCurrentVisible] = useState(true)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const fadeCleanupRef = useRef<NodeJS.Timeout | null>(null)

  const advanceSlide = useCallback(() => {
    if (slides.length <= 1) return
    setIsCurrentVisible(false)
    setPreviousIndex(currentIndex)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [currentIndex, slides.length])

  useEffect(() => {
    if (!slides.length) return
    intervalRef.current = setInterval(advanceSlide, SLIDE_INTERVAL)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [advanceSlide, slides.length])

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsCurrentVisible(true))
    if (fadeCleanupRef.current) clearTimeout(fadeCleanupRef.current)
    fadeCleanupRef.current = setTimeout(() => setPreviousIndex(null), FADE_DURATION)
    return () => {
      cancelAnimationFrame(raf)
    }
  }, [currentIndex])

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (fadeCleanupRef.current) clearTimeout(fadeCleanupRef.current)
    },
    []
  )

  if (!slides.length) {
    return null
  }

  const currentSlide = slides[currentIndex]

  return (
    <Link
      href="/photography"
      className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        {previousIndex !== null && slides[previousIndex] && (
          <img
            src={slides[previousIndex].src}
            alt={slides[previousIndex].title}
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ opacity: isCurrentVisible ? 0 : 1, transition: `opacity ${FADE_DURATION}ms ease` }}
          />
        )}
        <img
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: isCurrentVisible ? 1 : 0, transition: `opacity ${FADE_DURATION}ms ease` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
          <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-[0.35em] text-white/70">
            <span className="inline-block size-2 rounded-full bg-white/80" />
            Visual Stories
          </div>
          <h3 className="mt-4 font-serif text-3xl font-semibold">Photography</h3>
          <p className="mt-2 max-w-md text-sm text-white/80">
         
          </p>
        </div>
      </div>
    </Link>
  )
}

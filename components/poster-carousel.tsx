"use client"

import { useState } from "react"

type Poster = { src: string; alt: string }

interface PosterCarouselProps {
  posters: Poster[]
  className?: string
}

export function PosterCarousel({ posters, className }: PosterCarouselProps) {
  const [index, setIndex] = useState(0)

  if (!posters.length) return null

  return (
    <div className={className}>
      <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/40">
        {posters.map((poster, idx) => (
          <img
            key={poster.src}
            src={poster.src}
            alt={poster.alt}
            className={`absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-500 ${
              idx === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
          {posters.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`h-2 w-2 rounded-full border border-white/60 transition ${
                idx === index ? "bg-white" : "bg-transparent opacity-70"
              }`}
              aria-label={`Show poster ${idx + 1}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

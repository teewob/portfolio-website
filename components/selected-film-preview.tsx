"use client"

import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

const filmThumbs = [
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448873/Screenshot_2025-11-14_003016_fj2ghj.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448867/Screenshot_2025-11-14_002939_c92aaw.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448850/Screenshot_2025-11-13_164231_rjshoe.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448841/Screenshot_2025-11-14_002641_wepecu.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448836/Screenshot_2025-11-13_174407_kbgxfo.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448826/Screenshot_2025-11-13_164913_zm4btj.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448821/Screenshot_2025-11-13_164851_lno0le.png",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763448811/Screenshot_2025-11-13_164645_mc6ez8.png",
]

type SelectedFilmPreviewProps = {
  className?: string
}

export function SelectedFilmPreview({ className }: SelectedFilmPreviewProps) {
  const images = useMemo(() => [...filmThumbs].sort(() => Math.random() - 0.5), [])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => window.clearInterval(id)
  }, [images.length])

  return (
    <div className={cn("relative h-full w-full", className)}>
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Film still from selected work"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
            idx === index ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
          aria-hidden={idx === index ? "false" : "true"}
        />
      ))}
    </div>
  )
}

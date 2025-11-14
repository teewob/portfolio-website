"use client"

import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

const filmThumbs = [
  "/homepage/Screenshot%202025-11-13%20164645.png",
  "/homepage/Screenshot%202025-11-13%20164851.png",
  "/homepage/Screenshot%202025-11-13%20164913.png",
  "/homepage/Screenshot%202025-11-13%20174557.png",
  "/homepage/Screenshot%202025-11-14%20002641.png",
  "/homepage/Screenshot%202025-11-14%20002826.png",
  "/homepage/Screenshot%202025-11-14%20002939.png",
  "/homepage/Screenshot%202025-11-14%20003016.png",
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

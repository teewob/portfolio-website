"use client"

import { useMemo } from "react"

import { illustrationPieces } from "@/lib/pages/illustrations"

export function SelectedIllustrationPreview() {
  const previewPieces = useMemo(() => {
    const preferred = illustrationPieces.filter((piece) => piece.type === "image").slice(0, 6)
    if (preferred.length < 6) {
      return [...preferred, ...illustrationPieces.slice(preferred.length, 6)]
    }
    return preferred
  }, [])

  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1">
      {previewPieces.map((piece) => (
        <div key={piece.id} className="relative overflow-hidden">
          {piece.type === "video" ? (
            <video
              src={piece.src}
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <img src={piece.src} alt="" className="h-full w-full object-cover" loading="lazy" />
          )}
        </div>
      ))}
    </div>
  )
}

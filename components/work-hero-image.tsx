"use client"

import { useState, type MouseEvent } from "react"
import { X } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type WorkHeroImageProps = {
  src: string
  alt: string
  className?: string
}

export function WorkHeroImage({ src, alt, className }: WorkHeroImageProps) {
  const [open, setOpen] = useState(false)

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group block w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          className
        )}
        aria-label="Open hero image"
      >
        <img src={src} alt={alt} className="h-full w-full object-cover transition group-hover:scale-[1.01]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-screen w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 text-white sm:!max-w-none"
          showCloseButton={false}
          style={{ top: 0, left: 0 }}
          onClick={handleBackdropClick}
        >
          <div className="relative flex h-full w-full max-w-5xl flex-col" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/40 bg-black/70 p-3 sm:right-6 sm:top-6"
              onClick={() => setOpen(false)}
              aria-label="Close hero image"
            >
              <X className="size-4" />
            </button>

            <div className="relative flex-1">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <img src={src} alt={alt} className="max-h-[90vh] w-full rounded-[32px] object-contain" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

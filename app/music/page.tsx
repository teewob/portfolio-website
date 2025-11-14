"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"

import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { sonicLandscapes } from "@/lib/pages/music"

export default function MusicPage() {
  const album = sonicLandscapes
  const [playingId, setPlayingId] = useState<number | null>(null)
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({})
  const [progress, setProgress] = useState<Record<number, number>>({})
  const pausedTrackRef = useRef<number | null>(null)

  const handleToggle = (trackId: number) => {
    const selected = audioRefs.current[trackId]
    if (!selected) return

    if (playingId === trackId) {
      selected.pause()
      setPlayingId(null)
      pausedTrackRef.current = trackId
      return
    }

    if (playingId !== null && playingId !== trackId) {
      const current = audioRefs.current[playingId]
      if (current) {
        current.pause()
        current.currentTime = 0
        setProgress((prev) => ({ ...prev, [playingId]: 0 }))
      }
    }

    if (pausedTrackRef.current !== trackId) {
      selected.currentTime = 0
      setProgress((prev) => ({ ...prev, [trackId]: 0 }))
    }

    selected.play()
    setPlayingId(trackId)
    pausedTrackRef.current = null
  }

  const handleEnded = (trackId: number) => {
    if (playingId === trackId) {
      setPlayingId(null)
    }
    const audio = audioRefs.current[trackId]
    if (audio) {
      audio.currentTime = 0
    }
    setProgress((prev) => ({ ...prev, [trackId]: 0 }))
    pausedTrackRef.current = null
  }

  const handleTimeUpdate = (trackId: number) => {
    const audio = audioRefs.current[trackId]
    if (!audio || !audio.duration) return

    setProgress((prev) => ({ ...prev, [trackId]: audio.currentTime / audio.duration }))
  }

  const handleSeek = (trackId: number, clientX: number, bounds: DOMRect) => {
    const ratio = Math.min(Math.max((clientX - bounds.left) / bounds.width, 0), 1)
    const audio = audioRefs.current[trackId]
    if (!audio || !audio.duration) return
    audio.currentTime = ratio * audio.duration
    setProgress((prev) => ({ ...prev, [trackId]: ratio }))
    pausedTrackRef.current = trackId
  }

  const handleBarInteraction = (trackId: number, event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    handleSeek(trackId, event.clientX, bounds)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="text-sm font-display uppercase tracking-[0.4em] text-white/60">Sonic Landscapes</div>
                <h1 className="font-serif text-[4rem] leading-none md:text-[5.5rem]">Curated Mixtapes</h1>
              </div>

              <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-[#0b1a2d] via-[#071224] to-black p-8 md:p-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-end">
                  <div className="md:w-60">
                    <div className="aspect-square overflow-hidden rounded-[28px] border border-white/20">
                      <img src={album.cover} alt={album.title} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-xs font-display uppercase tracking-[0.35em] text-white/60">Sonic Landscapes · Album</p>
                    <h1 className="font-serif text-[3.5rem] leading-none md:text-[5rem]">{album.title}</h1>
                    <p className="text-xs font-display uppercase tracking-[0.35em] text-white/60">{album.releaseYear}</p>
                    <p className="text-base leading-relaxed text-white/80 md:text-lg">{album.overview}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
                <div className="grid grid-cols-[60px_80px_1fr_160px_100px] gap-4 border-b border-white/10 px-6 py-4 text-xs font-display uppercase tracking-[0.3em] text-white/50">
                  <div>#</div>
                  <div></div>
                  <div>Title</div>
                  <div>Date Added</div>
                  <div>Duration</div>
                </div>
                <div>
                  {album.tracks.map((track) => (
                    <div
                      key={track.id}
                      className="grid grid-cols-[60px_80px_1fr_160px_100px] items-center gap-4 border-t border-white/5 px-6 py-5 text-white"
                    >
                      <div className="text-sm text-white/60">{track.order}</div>
                      <div>
                        <button
                          type="button"
                          onClick={() => handleToggle(track.id)}
                          className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
                          aria-label={`${playingId === track.id ? "Pause" : "Play"} ${track.title}`}
                        >
                          {playingId === track.id ? <Pause className="size-4" /> : <Play className="size-4" />}
                        </button>
                        <audio
                          ref={(el) => {
                            audioRefs.current[track.id] = el
                          }}
                          src={track.audioUrl}
                          onEnded={() => handleEnded(track.id)}
                          onTimeUpdate={() => handleTimeUpdate(track.id)}
                        />
                      </div>
                      <div>
                        <div className="font-serif text-xl">{track.title}</div>
                        <div
                          role="slider"
                          aria-label={`${track.title} progress`}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={Math.round((progress[track.id] ?? 0) * 100)}
                          tabIndex={0}
                          onClick={(event) => handleBarInteraction(track.id, event)}
                          onKeyDown={(event) => {
                            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                              event.preventDefault()
                              const delta = event.key === "ArrowRight" ? 0.05 : -0.05
                              const next = Math.min(Math.max((progress[track.id] ?? 0) + delta, 0), 1)
                              const audio = audioRefs.current[track.id]
                              if (audio && audio.duration) {
                                audio.currentTime = next * audio.duration
                                setProgress((prev) => ({ ...prev, [track.id]: next }))
                                pausedTrackRef.current = track.id
                              }
                            }
                          }}
                          className="mt-3 h-2 w-full cursor-pointer rounded-full bg-white/10"
                        >
                          <div
                            className="relative h-full rounded-full bg-white"
                            style={{ width: `${(progress[track.id] ?? 0) * 100}%` }}
                          >
                            <div className="absolute -top-1 right-0 size-4 rounded-full border border-black/20 bg-white"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-white/60">{track.dateAdded ?? album.releaseYear}</div>
                      <div className="text-sm text-white/60">{track.duration ?? "—:--"}</div>
                    </div>
                  ))}
                </div>
              </div>

              <QuoteCTA
                tone="dark"
                quote={contactCta.quote}
                body={[contactCta.email]}
                links={contactCta.socials}
                primary={{ label: "Contact", href: "/contact" }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

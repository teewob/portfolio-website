import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, FileText, Maximize2 } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { screenplays } from "@/lib/pages/film"

type ScreenplayDetailParams = { slug: string }
type ScreenplayPageParams = { params: Promise<ScreenplayDetailParams> }

const getScreenplay = (slug: string) => screenplays.find((script) => script.slug === slug)

export function generateStaticParams() {
  return screenplays.map((script) => ({ slug: script.slug }))
}

export async function generateMetadata({ params }: ScreenplayPageParams): Promise<Metadata> {
  const { slug } = await params
  const screenplay = getScreenplay(slug)

  if (!screenplay) {
    return {
      title: "Screenplays | Tiara Tenorio",
      description: "Pitch decks, treatments, and in-progress narrative projects.",
    }
  }

  return {
    title: `${screenplay.title} | Screenplay Pitch`,
    description: screenplay.summary,
  }
}

export default async function ScreenplayDetailPage({ params }: ScreenplayPageParams) {
  const { slug } = await params
  const screenplay = getScreenplay(slug)

  if (!screenplay) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        <section className="border-b border-white/10 bg-black">
          <div className="max-w-viewport mx-auto px-6 py-12 md:py-20">
            <Link
              href="/film#screenplays"
              className="inline-flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to screenplays
            </Link>
            <div className="mt-10 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[10px] font-display uppercase tracking-[0.35em] text-white/70">
                <FileText className="size-4" />
                Pitch deck
              </div>
              <h1 className="font-serif text-4xl leading-tight md:text-6xl">{screenplay.title}</h1>
              <p className="text-base leading-relaxed text-white/75 md:text-lg">{screenplay.summary}</p>
            </div>
          </div>
        </section>

        <section id="pitch" className="border-b border-white/10 bg-black">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
              <iframe
                src={`${screenplay.pdfUrl}#toolbar=0&view=fitH`}
                title={`${screenplay.title} pitch deck`}
                className="h-[75vh] w-full"
              />
              <Link
                href={screenplay.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/60 px-4 py-2 text-[10px] font-display uppercase tracking-[0.35em] text-white transition hover:bg-white/10"
              >
                <Maximize2 className="size-4" />
                Fullscreen
              </Link>
            </div>
          </div>
        </section>

        <section id="moodboard" className="bg-black">
          <div className="max-w-viewport mx-auto px-6 py-20">
            <div className="mb-6 text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Moodboard</div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {screenplay.moodboard.map((asset) => (
                <div key={asset.src} className="overflow-hidden bg-white/5">
                  <img src={asset.src} alt={asset.alt} className="h-48 w-full object-cover md:h-60" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

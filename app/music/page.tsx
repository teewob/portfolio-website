import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { sonicLandscapes } from "@/lib/pages/music"

export default function MusicPage() {
  const tracks = sonicLandscapes

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28">
            <div className="space-y-4">
              <div className="text-sm font-display uppercase tracking-[0.4em] text-white/60">Sonic Landscapes</div>
              <h1 className="font-serif text-[4rem] leading-none md:text-[5.5rem]">Curated Mixtapes</h1>
              <p className="text-xs font-display uppercase tracking-[0.3em] text-white/60">@tiara.sound</p>
            </div>

            <div className="mt-16 space-y-10">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 md:flex-row"
                >
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="text-xs font-display uppercase tracking-[0.35em] text-white/60">Latest mixtape</div>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-white">{track.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/70">{track.note}</p>
                    <Link
                      href={track.link}
                      className="inline-flex items-center gap-3 text-xs font-display uppercase tracking-[0.35em] text-white transition hover:gap-4"
                    >
                      Listen
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40 md:w-1/2">
                    <img src={track.cover} alt={track.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            <QuoteCTA
              tone="dark"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Contact", href: "/contact" }}
              className="mt-16"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

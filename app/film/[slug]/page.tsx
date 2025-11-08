import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { filmProjects } from "@/lib/pages/film"

type FilmDetailParams = { slug: string }
type FilmPageParams = { params: Promise<FilmDetailParams> }

const getFilm = (slug: string) => filmProjects.find((film) => film.slug === slug)

export function generateStaticParams() {
  return filmProjects.map((film) => ({ slug: film.slug }))
}

export async function generateMetadata({ params }: FilmPageParams): Promise<Metadata> {
  const { slug } = await params
  const film = getFilm(slug)

  if (!film) {
    return {
      title: "Film & Video | Tiara Tenorio",
      description: "Cinematic essays and documentary work spanning the Pacific.",
    }
  }

  return {
    title: `${film.title} | Tiara Tenorio`,
    description: film.description,
  }
}

export default async function FilmDetailPage({ params }: FilmPageParams) {
  const { slug } = await params
  const film = getFilm(slug)

  if (!film) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        <section className="border-b border-white/10 bg-black">
          <div className="max-w-viewport mx-auto px-6 py-10 md:py-16">
            <Link
              href="/film"
              className="mb-6 inline-flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Moving Pictures
            </Link>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">{film.category}</div>
                <h1 className="font-serif text-5xl leading-tight md:text-[4.5rem]">{film.title}</h1>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">{film.overview}</p>
              </div>

              <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-[0_50px_160px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-video w-full">
                  <iframe
                    src={film.videoUrl}
                    className="h-full w-full"
                    title={film.title}
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black">
          <div className="max-w-viewport mx-auto grid gap-8 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div>
                <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Synopsis</div>
                <p className="mt-4 text-base leading-relaxed text-white/80">{film.description}</p>
              </div>
              {film.awards && film.awards.length > 0 && (
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Festival Notes</div>
                  <ul className="mt-4 space-y-3 text-sm text-white/75">
                    {film.awards.map((award) => (
                      <li key={award} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
              <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Credits</div>
              <dl className="space-y-3 text-sm text-white/75">
                {film.credits.map((credit) => (
                  <div key={credit.label} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <dt className="uppercase tracking-[0.25em] text-white/60">{credit.label}</dt>
                    <dd className="font-serif text-lg text-white">{credit.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Stats</div>
              <div className="grid gap-3 text-sm text-white/80">
                {film.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="uppercase tracking-[0.3em] text-white/55">{stat.label}</span>
                    <span className="font-serif text-xl text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {film.gallery && film.gallery.length > 0 && (
          <section className="border-b border-white/10 bg-black">
            <div className="max-w-viewport mx-auto px-6 py-20">
              <div className="mb-8">
                <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Behind the scenes</div>
                <h2 className="mt-2 font-serif text-3xl text-white">Stills &amp; storyboard frames</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {film.gallery.map((asset) => (
                  <figure
                    key={asset.src}
                    className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
                  >
                    {asset.type === "video" ? (
                      <video src={asset.src} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                    ) : (
                      <img src={asset.src} alt={asset.alt} className="h-full w-full object-cover" />
                    )}
                    <figcaption className="px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/60">{asset.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-black">
          <div className="max-w-viewport mx-auto px-6 py-24">
            <QuoteCTA
              tone="dark"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Request full screener", href: "/contact" }}
              secondary={{ label: "Discuss distribution", href: "/contact" }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

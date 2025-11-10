import Link from "next/link"
import { ArrowRight, Award, ExternalLink, Play, Video } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { filmProjects, screenplays } from "@/lib/pages/film"

export default function FilmPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        <section className="relative border-b border-white/10">
          <div className="max-w-viewport mx-auto grid gap-10 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
            <div className="space-y-6">
              <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">Moving Pictures</div>
              <h1 className="font-serif text-5xl leading-tight md:text-[6.5rem]">Cinema</h1>
              <p className="text-base leading-relaxed text-white/75 md:text-lg">
                I film to remember what the world feels like when it’s honest. My process blends documentary practice with personal memory, edited with tenderness and accountability to the communities and stories that trust me to hold them.
              </p>
              <div className="flex flex-wrap gap-3 text-[11px] font-display uppercase tracking-[0.3em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1">
                  <Play className="size-4" />
                  Short Documentary
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1">
                  <Video className="size-4" />
                  Art Film
                </span>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-white/5 p-6">
              <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Awards & Festivals</div>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {filmProjects
                  .flatMap((film) => film.awards ?? [])
                  .slice(0, 6)
                  .map((award) => (
                    <li key={award} className="flex items-center gap-3">
                      <Award className="size-4 text-white/60" />
                      {award}
                    </li>
                  ))}
              </ul>
              
            </div>
          </div>
        </section>

        {filmProjects.map((film) => (
          <section key={film.id} className="border-b border-white/10 bg-black">
            <div className="max-w-viewport mx-auto px-6 py-20">
              <Link
                href={`/film/${film.slug}`}
                className="group relative block overflow-hidden rounded-[40px] border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
              >
                <div className="relative aspect-video w-full">
                  <iframe
                    src={film.videoUrl}
                    className="h-full w-full"
                    title={film.title}
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-display uppercase tracking-[0.35em] backdrop-blur">
                  Watch &amp; learn more
                  <ExternalLink className="size-4" />
                </div>
              </Link>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">{film.category}</div>
                  <h2 className="font-serif text-4xl leading-tight">{film.title}</h2>
                  <p className="text-base leading-relaxed text-white/75">{film.overview}</p>
                  <p className="text-sm leading-relaxed text-white/65">{film.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs font-display uppercase tracking-[0.35em] text-white/60">
                    <span>Role: {film.role}</span>
                    <span>Runtime: {film.stats.find((s) => s.label === "Runtime")?.value}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/film/${film.slug}`}
                      className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-[11px] font-display uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      About film
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                 
                  </div>
                </div>

                <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
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
            </div>
          </section>
        ))}

        <section id="screenplays" className="border-b border-white/10 bg-black">
          <div className="max-w-viewport mx-auto px-6 py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">Screenplays</div>
                <h2 className="mt-3 font-serif text-4xl">Pitch decks and narrative treatments in motion.</h2>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {screenplays.map((script) => (
                <Link
                  key={script.id}
                  href={`/film/screenplays/${script.slug}`}
                  className="group flex flex-col rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
                      <img
                        src={script.cover}
                        alt={script.title}
                        className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <h3 className="font-serif text-3xl">{script.title}</h3>
                      <div className="mt-auto inline-flex items-center gap-3 text-xs font-display uppercase tracking-[0.35em] text-white/80 group-hover:text-white">
                        View pitch
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black">
          <div className="max-w-viewport mx-auto px-6 py-24">
            <QuoteCTA
              tone="dark"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Contact", href: "/contact" }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

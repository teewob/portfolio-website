import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { photoCollections, photoGalleries } from "@/lib/pages/photography"
import { resolveMediaUrl } from "@/lib/utils"

export default function PhotographyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="max-w-viewport mx-auto px-6 py-24 md:py-28">
            <div className="mb-14 space-y-4">
              <div className="text-sm font-display uppercase tracking-[0.35em] text-black/60">Visual Stories</div>
              <h1 className="font-serif text-[4.5rem] leading-none text-black md:text-[6rem]">Photography</h1>
              <Link
                href="https://instagram.com/filmsfromtiara"
                target="_blank"
                className="text-xs font-display uppercase tracking-[0.3em] text-muted-foreground/70 transition hover:text-black"
              >
                @filmsfromtiara
              </Link>
            </div>

            <div className="mt-16 flex flex-col gap-12">
              {photoCollections.map((collection) => {
                const coverSrc = resolveMediaUrl(collection.cover)
                return (
                  <Link
                    key={collection.id}
                    href={`/photography/${collection.slug}`}
                    className="group flex flex-col gap-6 text-left lg:flex-row"
                  >
                    <div className="relative w-full overflow-hidden rounded-[32px] border border-border/70 bg-muted lg:w-2/3">
                      <img
                        src={`${coverSrc}?height=720&width=1280&query=photo+collection+${collection.id}`}
                        alt={collection.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-xs font-display uppercase tracking-[0.35em] text-white/70">
                        Preview
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between rounded-[32px] border border-border/70 bg-card/90 p-8 shadow-[0_25px_60px_rgba(18,17,15,0.12)]">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-display uppercase tracking-[0.3em] text-muted-foreground/70">
                          <span>{collection.role}</span>
                          <span className="size-[3px] rounded-full bg-muted-foreground/50" />
                          <span>{collection.category}</span>
                        </div>
                        <h3 className="font-serif text-3xl font-semibold text-foreground">{collection.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground/85">{collection.description}</p>
                      </div>
                      <span className="group inline-flex items-center gap-3 text-sm font-display uppercase tracking-[0.3em] text-foreground">
                        View Collection
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-viewport mx-auto px-6 pb-24">
            <div className="rounded-[42px] bg-black px-8 py-16 text-white md:px-12 md:py-20">
              <div className="space-y-4">
                <div className="text-sm font-display uppercase tracking-[0.35em] text-white/60">Gallery</div>
                <h2 className="font-serif text-[3.5rem] leading-none md:text-[4.5rem]">Loose Rolls</h2>
                <p className="text-sm text-white/70">
               
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {photoGalleries.map((gallery) => {
                  const coverSrc = resolveMediaUrl(gallery.cover)
                  return (
                    <Link
                      key={gallery.id}
                      href={`/photography/gallery/${gallery.slug}`}
                      className="group flex flex-col gap-4"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/15 bg-white/5">
                        <img
                          src={coverSrc}
                          alt={gallery.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <p className="text-xs font-display uppercase tracking-[0.35em] text-white/70">{gallery.subtitle}</p>
                          <p className="font-serif text-2xl text-white">{gallery.title}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {gallery.preview.map((preview) => (
                          <div
                            key={`${gallery.id}-${preview}`}
                            className="h-16 flex-1 overflow-hidden rounded-[12px] border border-white/15"
                          >
                            <img src={resolveMediaUrl(preview)} alt="Gallery preview" className="h-full w-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </Link>
                  )
                })}
              </div>

            </div>
            <QuoteCTA
              tone="light"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Contact", href: "/contact" }}
              className="mt-12"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

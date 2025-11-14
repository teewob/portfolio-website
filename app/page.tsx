import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FixedNavigation } from "@/components/fixed-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Camera, Film, Palette, FileText, Music } from "lucide-react"

import { QuoteCTA } from "@/components/quote-cta"
import { PhotographyShowcase } from "@/components/photography-showcase"
import { SelectedFilmPreview } from "@/components/selected-film-preview"
import { SelectedIllustrationPreview } from "@/components/selected-illustration-preview"
import { contactCta } from "@/lib/pages/contact"
import { experiences } from "@/lib/pages/home"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <FixedNavigation />

      <main className="flex-1">
        <section id="studio" className="relative bg-black">
          <div className="max-w-viewport mx-auto px-6 py-24 md:py-32 lg:py-36">
            <div className="mb-10 text-[12px] font-display uppercase tracking-superwide text-white/60">
              Visual Artist & Storyteller
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:items-end">
              <div className="space-y-10">
                <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-balance text-white md:text-6xl lg:text-[70px]">
                  I create stories through light, motion, and the living archive of place.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Tiara Tenorio is a Chamorro–Filipina photographer, videographer, and visual artist from Guam, now based
                  in Oʻahu, Hawaiʻi. Her multidisciplinary practice explores culture, identity, and the environment
                  through cinematic storytelling, illustration, and sound.
                </p>

                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="group h-auto min-h-[3.25rem] rounded-full border border-white/30 bg-white/10 px-9 py-4 font-display text-[11px] uppercase tracking-[0.32em] text-white transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Link href="#selected-work">
                        Explore Work
                        <ArrowRight className="ml-3 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-auto min-h-[3.25rem] rounded-full border border-white/20 bg-white/5 px-9 py-4 font-display text-[11px] uppercase tracking-[0.32em] text-white transition-all duration-300 hover:bg-white/10"
                    >
                      <Link href="#about">About Me</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grain-mask  p-10 shadow-[0_35px_90px_rgba(0,0,0,0.65)]">
                <div className="mx-auto aspect-square w-[60vw] max-w-[500px]">
                    <img
                      src="/homepage/tiara-portrait.jpg"
                      alt="Tiara Tenorio portrait"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="selected-work" className="relative bg-black">
          <div className="max-w-viewport mx-auto px-6 py-20 md:py-28">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">
                  Selected Work
                </div>
                <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Visual narratives exploring culture, identity, and the human experience.
                </h2>
              </div>
            </div>

            <div className="mt-16 space-y-8">
              <Link
                href="/film"
                className="group relative block overflow-hidden rounded-[36px] border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <SelectedFilmPreview className="absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                    <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-[0.35em] text-white/70">
                      <span className="inline-block size-2 rounded-full bg-white/80" />
                      Moving Pictures
                    </div>
                    <h3 className="mt-4 font-serif text-[40px] font-semibold md:text-[52px]">Film</h3>
                    <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">
                      
                    </p>
                  </div>
                </div>
              </Link>

              <div className="grid gap-8 lg:grid-cols-2">
                <PhotographyShowcase />

                <Link
                  href="/drawings"
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <div className="absolute inset-0">
                      <SelectedIllustrationPreview />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-[0.35em] text-white/70">
                      <span className="inline-block size-2 rounded-full bg-white/80" />
                      Sketch Archive
                    </div>
                    <h3 className="mt-3 font-serif text-3xl font-semibold">Illustration</h3>
                    <p className="mt-2 text-sm text-white/80">
                      
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Link
                href="/essays"
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-[0.35em] text-white/60">
                  <span className="inline-block size-2 rounded-full bg-white/70" />
                  Written Word
                </div>
                <h3 className="mt-5 flex items-center gap-3 font-serif text-2xl font-semibold text-white">
                  Essays
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Reflections, thoughts, and personal stories.
                </p>
              </Link>

              <Link
                href="/music"
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-[0.35em] text-white/60">
                  <span className="inline-block size-2 rounded-full bg-white/70" />
                  Sonic Landscapes
                </div>
                <h3 className="mt-5 flex items-center gap-3 font-serif text-2xl font-semibold text-white">
                  Music
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Compositions, sound design, and my music.
                </p>
              </Link>

              <Link
                href="/contact"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-white/90 p-8 text-black transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-[11px] font-display uppercase tracking-[0.35em] text-primary-foreground/70">
                  
                </div>
                <div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold">Let's Connect</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    Share your story, project, or idea—let's craft it together.
                  </p>
                </div>
                <ArrowRight className="mt-6 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <section id="experience" className="relative bg-black">
          <div className="max-w-viewport mx-auto px-6 py-24 md:py-32">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">
                  Work Resume
                </div>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
                  Selected collaborations and roles shaping my multidisciplinary practice.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-white/70">
                Across my experiences, I have embraced roles that fuses creativity with stewardship—where storytelling, sustainability, 
                and human connection shape every project I take on.
              </p>
            </div>

            <div className="mt-14 overflow-x-auto pb-4">
              <div className="flex snap-x snap-mandatory gap-6">
                {experiences.map((experience) => (
                  <Link
                    key={experience.company}
                    href={`/work/${experience.slug}`}
                    aria-label={`View ${experience.company} case study`}
                    className="group relative flex min-w-[280px] max-w-[360px] snap-start flex-col rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <div className="relative h-56 overflow-hidden rounded-t-[28px]">
                      <img
                        src={experience.image}
                        alt={experience.company}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-5 left-6 text-xs font-display uppercase tracking-[0.35em] text-white/70">
                        Role
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-white">{experience.company}</h3>
                        <div className="mt-1 text-sm text-white/70">
                          <span>{experience.title}</span>
                          <span className="block text-white/50">{experience.tenure}</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">{experience.description}</p>
                      <div className="mt-auto flex items-center gap-2 text-xs font-display uppercase tracking-[0.35em] text-white/60">
                        View Role
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative bg-gradient-to-b from-black via-[#05050a] to-[#0d0f1d] text-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div className="flex justify-center">
                <img
                  src="/homepage/tiara-oceanside.jpg"
                  alt="Tiara Tenorio sitting oceanside at dusk"
                  className="w-full max-w-3xl h-auto object-contain"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="text-[11px] font-display uppercase tracking-[0.45em] text-white/50">About</div>
                  <h2 className="font-serif text-5xl leading-[1.1] md:text-[64px]">Na’an-hu si Tiara Tenorio</h2>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/60">“My name is Tiara”</p>
                </div>
                <div className="space-y-6 text-lg leading-relaxed text-white/80">
                  <p>
                    I was born in Saipan and raised on Guam, where my dad’s stories traveled through constellations. Nights on
                    the roof of his Toyota made me a listener before I ever held a camera, and that listening guides every
                    project I step into.
                  </p>
                  <p>
                    At eighteen, I moved to Oʻahu to study at the University of Hawaii at Mānoa and graduated in 2025 with a Bachelors in Cinematic Arts—with
                    a deeper conviction that film can be stewardship. Documentary and Indigenous storytelling anchor my
                    practice because they honor land, lineage, and community.
                  </p>
                  <p>
                    I’m Chamorro–Filipina. My work is island-rooted—photos and films about people who keep knowledge of ʻāina
                    and culture alive. Time spent in sustainability roles and agroforestry on the Waiʻanae coast reshaped how I frame
                    light, pace, and gesture.
                  </p>
                  <p>
                    Today I live on Oʻahu inspired by Hawai'i whilst carrying the voices that raised me from Guam and Saipan. If my work does
                    its job, it helps people recognize themselves, honor their elders, and care for land. If you want to
                    collaborate on film, photo, or community documentation—let’s take our time together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="relative bg-black">
          <div className="max-w-viewport mx-auto px-6 py-24 md:py-32">
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

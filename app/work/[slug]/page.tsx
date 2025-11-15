import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCTA } from "@/components/quote-cta"
import { contactCta } from "@/lib/pages/contact"
import { getWorkRole, workRoles } from "@/lib/pages/work"
import { WorkContentGallery } from "@/components/work-content-gallery"
import { WorkHeroImage } from "@/components/work-hero-image"

type WorkDetailParams = { slug: string }
type WorkPageParams = { params: Promise<WorkDetailParams> }

export function generateStaticParams() {
  return workRoles.map((role) => ({ slug: role.slug }))
}

export async function generateMetadata({ params }: WorkPageParams): Promise<Metadata> {
  const { slug } = await params
  const role = getWorkRole(slug)

  if (!role) {
    return {
      title: "Work Resume | Tiara Tenorio",
      description: "Selected collaborations and creative roles rooted in Pacific storytelling.",
    }
  }

  return {
    title: `${role.company} · ${role.title} | Tiara Tenorio`,
    description: role.intro,
  }
}

export default async function WorkDetailPage({ params }: WorkPageParams) {
  const { slug } = await params
  const role = getWorkRole(slug)

  if (!role) {
    notFound()
  }

  const isSensei = role.slug === "sensei-farms"
  const pageBackground = isSensei
    ? "bg-gradient-to-b from-[#020f08] via-[#0a2814] to-[#031208]"
    : "bg-black"
  const sectionBackground = isSensei ? "bg-transparent" : "bg-black"

  return (
    <div className={`flex min-h-screen flex-col text-white ${pageBackground}`}>
      <Header />

      <main className="flex-1">
        <section className={`border-b border-white/10 ${sectionBackground}`}>
          <div className="max-w-viewport mx-auto px-6 py-16 md:py-24">
            <Link
              href="/#experience"
              className="mb-8 inline-flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.4em] text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to resume
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div className="space-y-6">
                <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">Experience</div>
                <h1 className="font-serif text-5xl leading-tight md:text-6xl">{role.company}</h1>
                <p className="max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{role.summary}</p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">Role</div>
                <p className="mt-4 font-serif text-2xl font-semibold">{role.title}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.3em] text-white/60">{role.tenure}</p>
                {role.location && (
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">Based in {role.location}</p>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  {role.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/15 px-4 py-1 text-[11px] font-display uppercase tracking-[0.3em] text-white/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3 rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="text-[11px] font-display uppercase tracking-[0.35em] text-white/60">
                  Core Contributions
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-white/80">
                  {role.contributions.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <WorkHeroImage src={role.heroImage} alt={`${role.company} hero`} />
            </div>
          </div>
        </section>

        <section className={`border-b border-white/5 ${sectionBackground}`}>
          <div className="max-w-viewport mx-auto px-6 py-20 md:py-28">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[12px] font-display uppercase tracking-superwide text-white/60">Content Gallery</div>
                <h2 className="mt-4 font-serif text-4xl">
                  {isSensei ? "Campaign reels, portraits, and process artifacts." : "Drone Operations and Visual Assets"}
                </h2>
              </div>
              <div className="text-xs font-display uppercase tracking-[0.35em] text-white/60">
                {role.gallery.length} assets
              </div>
            </div>

            <WorkContentGallery items={role.gallery} />
          </div>
        </section>

        <section className={sectionBackground}>
          <div className="max-w-viewport mx-auto px-6 py-24 md:py-32">
            <QuoteCTA
              tone="dark"
              quote={contactCta.quote}
              body={[contactCta.email]}
              links={contactCta.socials}
              primary={{ label: "Book a project", href: "/contact" }}
              secondary={{ label: "Download resume", href: "/contact" }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

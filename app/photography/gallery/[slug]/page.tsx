import { notFound } from "next/navigation"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LooseGallery } from "@/components/loose-gallery"
import { getGalleryBySlug, photoGalleries } from "@/lib/pages/photography"

interface GalleryPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return photoGalleries.map((gallery) => ({ slug: gallery.slug }))
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params
  const gallery = getGalleryBySlug(slug)

  if (!gallery) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
            <div className="mb-12 space-y-4">
              <div className="text-sm font-display uppercase tracking-[0.35em] text-white/60">Gallery</div>
              <h1 className="font-serif text-[3.5rem] leading-none md:text-[4.5rem]">{gallery.title}</h1>
              <p className="text-xs font-display uppercase tracking-[0.35em] text-white/60">{gallery.subtitle}</p>
              <p className="max-w-3xl text-sm leading-relaxed text-white/75">
                
              </p>
            </div>

            <LooseGallery photos={gallery.photos} />

            <div className="mt-16 text-center text-xs font-display uppercase tracking-[0.35em] text-white/60">
              <Link href="/photography" className="transition hover:text-white">
                Back to Visual Stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoGallery } from "@/components/photo-gallery"
import { PhotoEssay } from "@/components/photo-essay"
import { getCollectionBySlug, photoCollections } from "@/lib/pages/photography"

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return photoCollections.map((collection) => ({ slug: collection.slug }))
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative bg-black">
          <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
            <div className="mb-12 flex justify-center text-xs font-display uppercase tracking-[0.35em] text-white/60">
              <Link href="/photography" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-2 transition hover:border-white/50 hover:text-white">
                Back to Visual Stories
              </Link>
            </div>

            <div className="mb-12 rounded-[32px] border border-white/15 bg-white/[0.02] px-8 py-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="text-sm font-display uppercase tracking-[0.4em] text-white/60">Photo Collection</div>
              <h1 className="mt-4 font-serif text-[3.5rem] leading-none md:text-[4.5rem]">{collection.title}</h1>
              <p className="mt-2 text-xs font-display uppercase tracking-[0.35em] text-white/60">
                {collection.role} · {collection.category}
              </p>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80">{collection.description}</p>
            </div>

            {collection.story ? <PhotoEssay story={collection.story} /> : <PhotoGallery items={collection.gallery} />}

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

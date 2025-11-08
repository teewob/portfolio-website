import { notFound } from "next/navigation"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoGallery } from "@/components/photo-gallery"
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
        <section className="relative">
          <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
            <div className="mb-12 space-y-4">
              <div className="text-sm font-display uppercase tracking-[0.4em] text-white/60">Photo Collection</div>
              <h1 className="font-serif text-[3.5rem] leading-none md:text-[4.5rem]">{collection.title}</h1>
              <p className="text-xs font-display uppercase tracking-[0.35em] text-white/60">
                {collection.role} · {collection.category}
              </p>
              <p className="max-w-3xl text-sm leading-relaxed text-white/80">{collection.description}</p>
            </div>

            <PhotoGallery items={collection.gallery} />

            <div className="mt-16 text-center text-xs font-display uppercase tracking-[0.35em] text-white/60">
              <Link href="/photography" className="transition hover:text-white">
                Back to Archive
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

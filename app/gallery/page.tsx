'use client';

import { CldImage } from 'next-cloudinary';

const demoImages = [
  { id: 'portfolio/waikiki-sunset', alt: 'Waikiki sunset over the ocean' },
  { id: 'portfolio/black-and-white-portrait', alt: 'Black and white portrait' },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {demoImages.map((photo) => (
        <div
          key={photo.id}
          className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm"
        >
          <CldImage
            src={photo.id}
            width={1200}
            height={800}
            alt={photo.alt}
            crop="fill"
            gravity="auto"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
            className="h-full w-full object-cover"
          />
          <div className="px-4 py-3 text-sm text-neutral-600">
            {photo.alt}
          </div>
        </div>
      ))}
    </main>
  );
}

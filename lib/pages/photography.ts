export const photoCollections = [
  {
    id: 1,
    slug: "filipinos-in-hawaii",
    title: "Filipinos in Hawai'i",
    role: "Series",
    category: "Photo Essay",
    description:
      "A portrait series documenting the everyday lives of Filipinos who shape Hawai‘i’s working landscape—from hotel staff and construction crews to lei makers and local shopkeepers. Shot across Waikīkī and Chinatown, the collection traces stories of migration, belonging, and identity within Hawai‘i’s layered multicultural history. ",
    cover: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
    gallery: [
      {
        src: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
        caption: "Gold light brushing the reef crest at low tide.",
      },
      {
        src: "/cinematic-landscape-photography-hawaii-ocean.jpg",
        caption: "Salt spray captured on 35mm along Tumon Bay.",
      },
      {
        src: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
        caption: "Saipan horizon stitched from six medium-format frames.",
      },
    ],
  },
  {
    id: 2,
    slug: "the-strays",
    title: "The Strays",
    role: "Series",
    category: "Photo Essay",
    description:
      "An exploration of cat gangs and rogues of Honolulu, revealing how these creatures have formed communities, navigate survial, and adapt to the city's edges. ",
    cover: "/artistic-sketches-drawings-portraits-illustration.jpg",
    gallery: [
      {
        src: "/artistic-sketches-drawings-portraits-illustration.jpg",
        caption: "Mother and daughter preparing woven lei in Kalihi.",
      },
      {
        src: "/artistic-sketches-drawings-portraits.jpg",
        caption: "Studio portrait of a Chamorro tattoo artist in Honolulu.",
      },
      {
        src: "/placeholder-user.jpg",
        caption: "Candid laughter after a long interview session.",
      },
    ],
  },
  {
    id: 3,
    slug: "honolulu-visuals",
    title: "Honolulu Grit",
    role: "Series",
    category: "Documentary Photography",
    description:
      "A street-level portrait of Honolulu’s pulse, the working class, wanderers, and the unseen the geometry of concrete and sun.  ",
    cover: "/film-production-videography-cinematic-storytelling.jpg",
    gallery: [
      {
        src: "/film-production-videography-cinematic-storytelling.jpg",
        caption: "Hands preparing ulu saplings for planting rows.",
      },
      {
        src: "/film-production-videography-cinematic.jpg",
        caption: "Pano view of the mala and irrigation lines at dawn.",
      },
      {
        src: "/placeholder.jpg",
        caption: "Harvest day notes taped to the tool shed wall.",
      },
    ],
  },
]

export const getCollectionBySlug = (slug: string) => photoCollections.find((collection) => collection.slug === slug)

export const photoGalleries = [
  {
    id: "roll001",
    slug: "roll-001",
    title: "Roll001",
    subtitle: "August 2024 · 33mm",
    cover: "/cinematic-landscape-photography-hawaii-ocean.jpg",
    preview: [
      "/cinematic-landscape-photography-hawaii-ocean.jpg",
      "/film-production-videography-cinematic-storytelling.jpg",
      "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
    ],
    photos: [
      "/cinematic-landscape-photography-hawaii-ocean.jpg",
      "/film-production-videography-cinematic-storytelling.jpg",
      "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
      "/artistic-sketches-drawings-portraits-illustration.jpg",
      "/film-production-videography-cinematic.jpg",
    ],
  },
  {
    id: "roll002",
    slug: "roll-002",
    title: "Roll002",
    subtitle: "September 2024 · Junk Film",
    cover: "/artistic-sketches-drawings-portraits.jpg",
    preview: [
      "/artistic-sketches-drawings-portraits.jpg",
      "/placeholder.jpg",
      "/placeholder-user.jpg",
    ],
    photos: [
      "/artistic-sketches-drawings-portraits.jpg",
      "/placeholder.jpg",
      "/placeholder-user.jpg",
      "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
      "/film-production-videography-cinematic-storytelling.jpg",
    ],
  },
  {
    id: "roll003",
    slug: "roll-003",
    title: "Roll003",
    subtitle: "Studio Fragments",
    cover: "/film-production-videography-cinematic.jpg",
    preview: [
      "/film-production-videography-cinematic.jpg",
      "/placeholder-user.jpg",
      "/cinematic-landscape-photography-hawaii-ocean.jpg",
    ],
    photos: [
      "/film-production-videography-cinematic.jpg",
      "/placeholder-user.jpg",
      "/cinematic-landscape-photography-hawaii-ocean.jpg",
      "/artistic-sketches-drawings-portraits-illustration.jpg",
      "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
    ],
  },
]

export const getGalleryBySlug = (slug: string) => photoGalleries.find((gallery) => gallery.slug === slug)

export default {
  photoCollections,
  photoGalleries,
  getCollectionBySlug,
  getGalleryBySlug,
}

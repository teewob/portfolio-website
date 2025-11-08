export const photoCollections = [
  {
    id: 1,
    slug: "saltwater-horizons",
    title: "Saltwater Horizons",
    role: "Series",
    category: "Photo Essay",
    description:
      "Evening light over the Pacific documenting the tidal rhythms of Saipan and Guam—shot across medium-format film and digital.",
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
    slug: "island-kinship",
    title: "Island Kinship",
    role: "Portrait",
    category: "Editorial",
    description:
      "Portraits of Pacific Island artists and families, pairing staged moments with candid stills to honor lineage and ritual.",
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
    slug: "agroforestry-futures",
    title: "Agroforestry Futures",
    role: "Documentary",
    category: "Environmental",
    description:
      "Documenting land stewards restoring native agroforestry systems on Oʻahu’s North Shore, blending stills with field notes.",
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

export default {
  photoCollections,
  getCollectionBySlug,
}

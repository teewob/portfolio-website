export type FilmProject = {
  id: number
  slug: string
  title: string
  description: string
  overview: string
  role: string
  category: string
  cover: string
  videoUrl: string
  stats: { label: string; value: string }[]
  credits: { label: string; value: string }[]
  awards?: string[]
  gallery?: { type: "image" | "video"; src: string; alt: string }[]
}

export type ScreenplayProject = {
  id: number
  slug: string
  title: string
  summary: string
  cover: string
  treatment: string
  pdfUrl: string
  moodboard: { src: string; alt: string }[]
}

export const filmProjects: FilmProject[] = [
  {
    id: 1,
    slug: "saltwater-kin",
    title: "Saltwater Kin",
    description:
      "An intimate short documentary following a Guam-based family of fisherwomen, blending interviews with underwater cinematography.",
    overview:
      "Shot between Guam and the Northern Mariana Islands, Saltwater Kin follows three generations of women as they pass on reef knowledge, spiritual practice, and the patience that comes with reading the tides.",
    role: "Director",
    category: "Short Documentary",
    cover: "/film-production-videography-cinematic-storytelling.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871?h=bf0ad95b09",
    stats: [
      { label: "Release", value: "2023" },
      { label: "Runtime", value: "08:32" },
      { label: "Location", value: "Guam • Saipan" },
    ],
    credits: [
      { label: "Director", value: "Tiara Camacho" },
      { label: "Producer", value: "Kai Reyes" },
      { label: "Cinematography", value: "Noa Faatoia" },
      { label: "Editor", value: "Tiara Camacho" },
    ],
    awards: [
      "Winner • Tokyo Film Awards",
      "Official Selection • Dumbo Film Festival",
      "Official Selection • Maui Film Festival",
    ],
    gallery: [
      { type: "image", src: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg", alt: "Open water sunrise" },
      { type: "image", src: "/music-instruments-sound-recording-studio.jpg", alt: "Voiceover booth session" },
    ],
  },
  {
    id: 2,
    slug: "isla-futures",
    title: "Isla Futures",
    description:
      "A collaboration with young agroforestry advocates on Oʻahu, examining the future of Indigenous land management.",
    overview:
      "Isla Futures documents the replanting of over 400 ʻulu trees while following the student-led collective that is redefining food security through protocol, wayfinding, and soil science.",
    role: "Director",
    category: "Short Documentary",
    cover: "/film-production-videography-cinematic.jpg",
    videoUrl: "https://player.vimeo.com/video/32704256?h=1c8ed7e708",
    stats: [
      { label: "Release", value: "2022" },
      { label: "Runtime", value: "10:14" },
      { label: "Location", value: "Waiʻanae, Oʻahu" },
    ],
    credits: [
      { label: "Director", value: "Tiara Camacho" },
      { label: "Producer", value: "Ava Kapule" },
      { label: "Sound", value: "Siena Cruz" },
      { label: "Color", value: "Kaleo Lee" },
    ],
    awards: [
      "Official Selection • Mountain & Adventure Film Festival",
      "Official Selection • Surf City Festival",
    ],
    gallery: [
      { type: "image", src: "/film-production-videography-cinematic.jpg", alt: "ʻUlu grove steadicam" },
      { type: "image", src: "/artistic-sketches-drawings-portraits-illustration.jpg", alt: "Storyboards for Isla Futures" },
    ],
  },
  {
    id: 3,
    slug: "echoes-of-tano",
    title: "Echoes of Tāno",
    description:
      "A cinematic essay on Chamorro land protectors, pairing dreamlike vignettes with vérité footage and archival narration.",
    overview:
      "The film weaves protest soundscapes with underwater macro cinematography to explore how memory, mythology, and sovereignty intersect across the Marianas Archipelago.",
    role: "Director",
    category: "Art Film",
    cover: "/artistic-sketches-drawings-portraits-illustration.jpg",
    videoUrl: "https://player.vimeo.com/video/1084537?h=4b0f9f7d27",
    stats: [
      { label: "Release", value: "2021" },
      { label: "Runtime", value: "06:05" },
      { label: "Location", value: "Northern Mariana Islands" },
    ],
    credits: [
      { label: "Director", value: "Tiara Camacho" },
      { label: "Writer", value: "Lehua Gogue" },
      { label: "Composer", value: "Noah Tait" },
      { label: "Narration", value: "Ipo Shimizu" },
    ],
    gallery: [
      { type: "image", src: "/film-production-videography-cinematic-storytelling.jpg", alt: "Underwater still" },
      { type: "image", src: "/film-production-videography-cinematic.jpg", alt: "Field audio capture" },
    ],
  },
]

export const screenplays: ScreenplayProject[] = [
  {
    id: 1,
    slug: "notch-the-canoe-at-dawn",
    title: "Notch the Canoe at Dawn",
    summary:
      "A young Chamorro navigator steals a carbon-fiber canoe to guide her brother back from deployment, only to discover the stars are shifting.",
    cover: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
    treatment: "A tactile blend of spacefaring lore and island futurism told through logbook entries and underwater macro frames.",
    pdfUrl: "/pitches/notch-the-canoe.pdf",
    moodboard: [
      { src: "/film-production-videography-cinematic-storytelling.jpg", alt: "Night paddle practice" },
      { src: "/cinematic-landscape-photography-hawaii-ocean.jpg", alt: "Pre-dawn coastline" },
      { src: "/music-instruments-sound-recording-studio.jpg", alt: "Analog navigation console" },
    ],
  },
  {
    id: 2,
    slug: "taro-circuit",
    title: "Taro Circuit",
    summary:
      "In a near-future Waikīkī, climate refugees race underground hydroponic pods to earn water rations, forcing one teen mechanic to sabotage the system.",
    cover: "/film-production-videography-cinematic-storytelling.jpg",
    treatment: "Textured neon palettes meet mud-stained engineering notebooks in a kinetic coming-of-age chase film.",
    pdfUrl: "/pitches/taro-circuit.pdf",
    moodboard: [
      { src: "/artistic-sketches-drawings-portraits-illustration.jpg", alt: "Hydroponic pod sketches" },
      { src: "/film-production-videography-cinematic.jpg", alt: "Underground growlights" },
      { src: "/music-instruments-sound-recording.jpg", alt: "Tactile Foley lab" },
    ],
  },
]

export default {
  filmProjects,
  screenplays,
}

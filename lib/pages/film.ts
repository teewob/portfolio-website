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
    slug: "loko'ia-o-ho'ola",
    title: "Loko I'a Ho'ōla",
    description:
      "Produced by University of Hawaii at Manoa's Cinematic Arts CINE 386 — Techniques in Cinematic Arts: Environmental Storytelling. Loko Iʻa o Ho‘ōla was officially selected for screening at the Doris Duke Theatre in Honolulu as part of the Sustainability Film Series (2025), presented in partnership with the Hawai‘i State Climate Commission. The film was also invited to be featured on the Commission’s official website (climate.hawaii.gov) to promote environmental education and awareness throughout the islands.",
    overview:
      "Loko Iʻa o Ho‘ōla (“Fishponds of Restoration”) explores the revival of ancient Hawaiian fishponds and their connection to community, climate resilience, and the ʻāina. Through conversations with Native Hawaiian caretakers and conservation practitioners, the film reflects on how traditional aquaculture systems—once central to feeding island populations—offer sustainable solutions to modern environmental challenges. Shot on location across Oʻahu, the documentary weaves together images of water, labor, and culture to honor the living relationship between people and place.",
    role: "Director",
    category: "Short Environmental Documentary",
    cover: "/film-production-videography-cinematic-storytelling.jpg",
    videoUrl: "https://www.youtube.com/embed/G5DVhND8MD4?rel=0",
    stats: [
      { label: "Release", value: "2025" },
      { label: "Runtime", value: "08:54" },
      { label: "Location", value: "O'ahu" },
    ],
    credits: [
      { label: "Director & Producer", value: "Tiara Tenorio" },
      { label: "Co-Director & Producer", value: "Keely Knauff" },
     
    ],
    awards: [
      "Official Screening • Doris Duke Theatre at the Honolulu Museum of Art",
      "Official Selection • Sustainability Film Series (2025)",
      "Partnership • Hawai'i State Climate Commission",
    ],
    gallery: [
      { type: "image", src: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg", alt: "Open water sunrise" },
      { type: "image", src: "/music-instruments-sound-recording-studio.jpg", alt: "Voiceover booth session" },
    ],
  },
  {
    id: 2,
    slug: "pedestrians",
    title: "Pedestrians",
    description:
      "Produced by University of Hawaii at Manoa's Cinematic ArtsCINE 310: Introduction to Cinematic Arts Production at the University of Hawaiʻi at Mānoa",
    overview:
      "A fleeting collision between two strangers on a city bridge sparks a chain of encounters that unravels..",
    role: "Director",
    category: "Short Film",
    cover: "/film-production-videography-cinematic.jpg",
    videoUrl: "https://www.youtube.com/embed/RMsBlELK5gk?rel=0",
    stats: [
      { label: "Release", value: "2024" },
      { label: "Runtime", value: "5:35" },
      { label: "Location", value: "Honolulu, Oʻahu" },
    ],
    credits: [
      { label: "Director", value: "Tiara Tenorio" },
      { label: "Sound", value: "Sebbie Williams" },
      { label: "Cinematography", value: "Hunter Sprung" },
      { label: "Editor", value: "Tiara Tenorio" },
    ],
    awards: [
     
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

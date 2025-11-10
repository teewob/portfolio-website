export type WorkGalleryItem = {
  id: string
  type: "image" | "video"
  src: string
  alt: string
  caption?: string
  aspect?: "portrait" | "square" | "landscape" | "wide"
  poster?: string
}

export type WorkRole = {
  slug: string
  company: string
  title: string
  tenure: string
  intro?: string
  summary: string
  heroImage: string
  cardImage: string
  contributions: string[]
  services: string[]
  gallery: WorkGalleryItem[]
  location?: string
}

export const workRoles: WorkRole[] = [
  {
    slug: "sensei-farms",
    company: "Sensei Farms",
    title: "Social Media Content Creator",
    tenure: "Dec 2021 — May 2024",
   
    summary:
      "Sensei Farms is an indoor hydroponic farming company dedicated to strengthening local food security by growing fresh produce year-round. As part of the in-house marketing team, I helped translate the farm’s mission and innovation into visual storytelling—producing reels, photography, and campaigns that highlighted sustainability, community impact, and Hawai‘i-grown wellness across digital platforms.",
    heroImage: "/film-videography-.jpg",
    cardImage: "/cinematic-landscape-photography-hawaii-ocean.jpg",
    contributions: [
      "Produced 100+ short-form videos and photo sets showcasing Sensei’s farm-to-table process, chef collaborations, and greenhouse innovation.",
      "Curated and maintained the Instagram grid and content calendar to grow engagement and align with brand campaigns..",
      "Conducted quarterly shoots across Lāna‘i—capturing interviews, portraits, and product imagery.",
      "Designed branded motion graphics and visuals while analyzing performance metrics to refine creative direction.",
    ],
    services: ["Content Strategy", "Vertical Video", "Campaign Photography", "On-site Direction"],
    gallery: [
      {
        id: "sf-reel-01",
        type: "video",
        src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
        poster: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
        alt: "Behind-the-scenes harvest reel",
        caption: "Morning harvest check-in · IG Reel",
        aspect: "portrait",
      },
      {
        id: "sf-reel-02",
        type: "video",
        src: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
        poster: "/film-production-videography-cinematic-storytelling.jpg",
        alt: "Chef-led tasting video",
        caption: "Chef Tasting Menu · Paid Social Cut",
        aspect: "portrait",
      },
      {
        id: "sf-photo-01",
        type: "image",
        src: "/film-production-videography-cinematic.jpg",
        alt: "Greenhouse still portrait",
        caption: "Hydroponic bloom portraits",
        aspect: "square",
      },
      {
        id: "sf-photo-02",
        type: "image",
        src: "/music-instruments-sound-recording-studio.jpg",
        alt: "Lifestyle moment inside the spa",
        caption: "Wellness residency campaign",
        aspect: "landscape",
      },
      {
        id: "sf-photo-03",
        type: "image",
        src: "/artistic-sketches-drawings-portraits.jpg",
        alt: "Detail shot of Sensei produce",
        caption: "Product stills for e-comm drops",
        aspect: "portrait",
      },
    ],
    location: "Lānaʻi, HI",
  },
  {
    slug: "hans-hedemann-surf-school",
    company: "Hans Hedemann Surf School",
    title: "Shop Photographer & Videographer",
    tenure: "Jan 2025 — Present",

    summary:
      "Located at the most populated destination in Waikīkī, Hans Hedemann Surf School is one of Hawaiʻi’s most established surf institutions—founded by professional surfer Hans Hedemann to share the joy and discipline of surfing with visitors from around the world. Within this setting, I support both lesson operations and creative media, guiding students through ocean safety and hands-on instruction while documenting their surf experiences through aerial and DSLR footage.",
    heroImage: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
    cardImage: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
    contributions: [
      "Produce narrative decks and shot lists rooted in cultural protocols before every commission.",
      "Light, shoot, and edit multi-day field assignments with a hybrid cinema + still workflow.",
      "Deliver cohesive asset libraries (photo + motion) tailored to partner press kits.",
    ],
    services: ["Ocean Instruction", " Aerial Media Production", "Client Experience Management"],
    gallery: [
      {
        id: "plc-photo-01",
        type: "image",
        src: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
        alt: "Ocean horizon at dusk",
        caption: "ʻĀina stewardship residency portrait",
        aspect: "wide",
      },
      {
        id: "plc-photo-02",
        type: "image",
        src: "/cinematic-landscape-photography-hawaii-ocean.jpg",
        alt: "Cultural practitioner portrait",
        caption: "Cultural practitioner series",
        aspect: "portrait",
      },
      {
        id: "plc-photo-03",
        type: "image",
        src: "/film-production-videography-cinematic-storytelling.jpg",
        alt: "Documentary still",
        caption: "Documentary stills for festival decks",
        aspect: "square",
      },
    ],
    location: "Honolulu, HI",
  },
  {
    slug: "chamorro-stories-initiative",
    company: "Chamorro Stories Initiative",
    title: "Creative Director",
    tenure: "2021 — 2023",
    intro:
      "Produced community-centered film installations highlighting intergenerational narratives across Guam.",
    summary:
      "Developed a multi-channel storytelling platform archiving Chamorro elders’ memories. Guided crews, motion designers, and community partners through every activation to ensure cultural stewardship.",
    heroImage: "/film-production-videography-cinematic-storytelling.jpg",
    cardImage: "/film-production-videography-cinematic-storytelling.jpg",
    contributions: [
      "Designed immersive installation layouts for village pop-ups.",
      "Facilitated oral history interviews and archival digitization workflows.",
      "Delivered bilingual subtitles and motion captions for accessibility.",
    ],
    services: ["Creative Direction", "Exhibition Design", "Archival Production"],
    gallery: [
      {
        id: "csi-photo-01",
        type: "image",
        src: "/film-production-videography-cinematic.jpg",
        alt: "Film still with projector glow",
        caption: "Installation still · Hagåtña",
        aspect: "landscape",
      },
      {
        id: "csi-photo-02",
        type: "image",
        src: "/placeholder.jpg",
        alt: "Community gathering",
        caption: "Community story circle",
        aspect: "portrait",
      },
      {
        id: "csi-photo-03",
        type: "image",
        src: "/artistic-sketches-drawings-portraits-illustration.jpg",
        alt: "Storyboard sketches",
        caption: "Storyboard frames for projection walls",
        aspect: "square",
      },
    ],
    location: "Guam",
  },
  {
    slug: "indigo-studio",
    company: "Indigo Studio",
    title: "Multimedia Artist",
    tenure: "2019 — 2021",
    intro: "Blended illustration, sound, and photography for experiential campaigns with environmental partners.",
    summary:
      "Worked inside a small studio bridging analog illustration, photography, and ambient sound for campaigns focused on environmental education.",
    heroImage: "/artistic-sketches-drawings-portraits-illustration.jpg",
    cardImage: "/artistic-sketches-drawings-portraits-illustration.jpg",
    contributions: [
      "Developed illustration systems used across environmental curriculum kits.",
      "Captured supporting stills + textures that informed animation palettes.",
      "Sound-designed looping beds for interactive installations.",
    ],
    services: ["Illustration", "Mixed Media", "Sound Design"],
    gallery: [
      {
        id: "indigo-photo-01",
        type: "image",
        src: "/artistic-sketches-drawings-portraits-illustration.jpg",
        alt: "Illustration board",
        caption: "Campaign sketches",
        aspect: "portrait",
      },
      {
        id: "indigo-photo-02",
        type: "image",
        src: "/artistic-sketches-drawings-portraits.jpg",
        alt: "Mixed media collage",
        caption: "Mixed media boards",
        aspect: "square",
      },
      {
        id: "indigo-photo-03",
        type: "image",
        src: "/music-instruments-sound-recording-studio.jpg",
        alt: "Studio sound tools",
        caption: "Sound design workspace",
        aspect: "landscape",
      },
    ],
    location: "Remote",
  },
]

export const getWorkRole = (slug: string) => workRoles.find((role) => role.slug === slug)

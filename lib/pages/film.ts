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
  posters?: { src: string; alt: string }[]
  storyboardUrl?: string
  festivalGallery?: { src: string; alt: string }[]
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
    festivalGallery: [
      { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088011/IMG_7407_c22rmj.jpg", alt: "Q&A at Doris Duke Theatre — panel wide shot" },
      { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088000/IMG_7415_xadqbo.jpg", alt: "Audience question during Loko Iʻa Hoʻōla screening" },
      { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763087977/IMG_7404_tdtx4y.jpg", alt: "Tiara Tenorio speaking during festival Q&A" },
      { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763087960/IMG_7403_iao4ah.jpg", alt: "Panel close-up at the Doris Duke Theatre" },
    ],
    gallery: [
   
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088733/Screenshot_2025-11-13_164231_zrwpeo.png", alt: "Loko Iʻa still 01" },
      
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088732/Screenshot_2025-11-13_164308_jygmah.png", alt: "Loko Iʻa still 02" },
      //moanalua fishpond http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088733/Screenshot_2025-11-13_164505_eiiy60.png
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088733/Screenshot_2025-11-13_164505_eiiy60.png", alt: "Loko Iʻa still 03" },
      //koolau mountain range
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763089703/Screenshot_2025-11-13_164741_ifl5xz.png", alt: "Loko Iʻa still 04" },
     //grid fishpond 
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088733/Screenshot_2025-11-13_164243_u0wht9.png", alt: "Loko Iʻa still 05" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088732/Screenshot_2025-11-13_164333_wjr4x1.png", alt: "Loko Iʻa still 06" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088734/Screenshot_2025-11-13_164256_ihezsb.png", alt: "Loko Iʻa still 07" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088734/Screenshot_2025-11-13_164913_psopij.png", alt: "Loko Iʻa still 08" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088734/Screenshot_2025-11-13_164948_bapt2l.png", alt: "Loko Iʻa still 09" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088735/Screenshot_2025-11-13_164831_v4glvt.png", alt: "Loko Iʻa still 10" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088735/Screenshot_2025-11-13_164851_k4fla5.png", alt: "Loko Iʻa still 11" },

      //herb
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088741/Screenshot_2025-11-13_164928_znvr6k.png", alt: "Loko Iʻa still 12" },

      //derek
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088742/Screenshot_2025-11-13_164543_yjk7ut.png", alt: "Loko Iʻa still 13" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088736/Screenshot_2025-11-13_164608_ukqknw.png", alt: "Loko Iʻa still 14" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088736/Screenshot_2025-11-13_164637_z3n2cn.png", alt: "Loko Iʻa still 15" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088736/Screenshot_2025-11-13_164616_paomye.png", alt: "Loko Iʻa still 16" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088737/Screenshot_2025-11-13_164703_etfdvt.png", alt: "Loko Iʻa still 17" },

      //composition trash 
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088741/Screenshot_2025-11-13_164645_sobwg2.png", alt: "Loko Iʻa still 18" },
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088741/Screenshot_2025-11-13_164721_zvbjtw.png", alt: "Loko Iʻa still 19" },

      //blue fish pond
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088737/Screenshot_2025-11-13_165016_lhw5te.png", alt: "Loko Iʻa still 20" },

    //i'a gates 
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088735/Screenshot_2025-11-13_165002_x99mxa.png", alt: "Loko Iʻa still 21" },

      //underwater gopro
      { type: "image", src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763088735/Screenshot_2025-11-13_164954_xh5yfg.png", alt: "Loko Iʻa still 22" },
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
    posters: [
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763091232/PEDESTRIANS_SYNOPSIS_POSTER_ffmuwi.png", alt: "Pedestrians synopsis poster" },
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763091231/PEDESTRIANS_POSTER_1_nbkwvw.png", alt: "Pedestrians key art poster" },
    ],
    storyboardUrl: "/pedestrians/PEDESTRIANS%20STORY%20BOARDING.pdf",
    awards: [
     
    ],
    gallery: [
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763092399/Screenshot_2025-11-13_174056_j6d8wv.png", alt: "Pedestrians still 01" }, //1-1
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763092400/Screenshot_2025-11-13_174109_ge6vf6.png", alt: "Pedestrians still 02" }, //1-2
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763091604/Screenshot_2024-05-05_205444_mwjaod.png", alt: "Pedestrians still 03" }, //2-1
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763092424/Screenshot_2025-11-13_174557_b1oo08.png", alt: "Pedestrians still 04" }, //2-2
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763091587/Screenshot_2024-05-05_201531_zgq4xr.png", alt: "Pedestrians still 05" }, //3-1
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763091588/Screenshot_2024-05-05_205106_sraq64.png", alt: "Pedestrians still 06" }, //3-2
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763092463/Screenshot_2025-11-13_174944_erqsno.png", alt: "Pedestrians still 07" }, //4-1
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763092481/Screenshot_2025-11-13_175003_wecqu6.png", alt: "Pedestrians still 08" }, //4-2
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763091606/Screenshot_2024-05-05_205659_e3dowm.png", alt: "Pedestrians still 09" }, //5-1
      { type: "image", src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763092497/Screenshot_2025-11-13_174912_wb0qmr.png", alt: "Pedestrians still 10" }, //5-2
 
    ],
    //1-1 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763092399/Screenshot_2025-11-13_174056_j6d8wv.png
    //1-2 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763092400/Screenshot_2025-11-13_174109_ge6vf6.png
    //2-1 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763091604/Screenshot_2024-05-05_205444_mwjaod.png
    //2-2 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763092424/Screenshot_2025-11-13_174557_b1oo08.png
    //3-1 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763091587/Screenshot_2024-05-05_201531_zgq4xr.png
    //3-2 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763091588/Screenshot_2024-05-05_205106_sraq64.png
    //4-1 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763092463/Screenshot_2025-11-13_174944_erqsno.png
    //4-2 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763092481/Screenshot_2025-11-13_175003_wecqu6.png
    //5-1 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763091606/Screenshot_2024-05-05_205659_e3dowm.png
    //5-2 http://res.cloudinary.com/djgkz5rkx/image/upload/v1763092497/Screenshot_2025-11-13_174912_wb0qmr.png

  },
  {
    id: 3,
    slug: "self-care-mental-health",
    title: "Self Care: Mental Health Awareness",
    description:
      "Created at age 16 for Youth for Youth LIVE! Guam, this hand-illustrated PSA shares tools for students to protect their mental wellbeing while honoring the organization’s mission to empower island youth.",
    overview:
      "Video brought to you by Youth for Youth Guam presents SELF CARE and why you need it—a motion-illustrated short I wrote, directed, voiced, edited, and animated to normalize conversations about stress, suicide prevention, and asking for help.",
    role: "Writer • Director • Editor • Illustrator",
    category: "Youth PSA",
    cover: "/artistic-sketches-drawings-portraits-illustration.jpg",
    videoUrl: "https://www.youtube.com/embed/9ZtNLj4Vr70?rel=0",
    stats: [
      { label: "Release", value: "2014 (High School)" },
      { label: "Runtime", value: "Short PSA" },
      { label: "Location", value: "Guam" },
    ],
    credits: [
      { label: "Writer / Director", value: "Tiara Tenorio" },
      { label: "Voiceover", value: "Tiara Tenorio" },
      { label: "Illustration & Animation", value: "Tiara Tenorio" },
      { label: "Organization", value: "Youth for Youth LIVE! Guam" },
    ],
    awards: [
      "Youth for Youth LIVE! Guam Conference Showcase",
    ],
    gallery: undefined,
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

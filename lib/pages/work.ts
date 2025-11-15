export type WorkGalleryItem = {
  id: string
  type: "image" | "video"
  src: string
  alt: string
  caption?: string
  aspect?: "portrait" | "landscape"
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
    heroImage: "/homepage/sensei farms.png",
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
        id: "sf-photo-01",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763161805/L1090791_m5bo4e.jpg",
        alt: "Lanai greenhouse walkway at sunrise",
        aspect: "landscape",
      },
      {
        id: "sf-video-spiral",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161788/tomatoSPIRALversion_3_przb2b.mp4",
        alt: "Tomato spiral animation study",
        aspect: "portrait",
      },
      {
        id: "sf-photo-02",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763161801/L1020086_dtndto.jpg",
        alt: "Farmer tending heirloom tomatoes inside the greenhouse",
        aspect: "landscape",
      },
      {
        id: "sf-video-harvest-processing",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161785/Harvesting_and_Processing_Lanai_Mix_ahgqkb.mp4",
        alt: "Harvesting and processing montage",
        aspect: "portrait",
      },
      {
        id: "sf-video-feta-bake",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161781/Tomato_Feta_Bake_wxqs3a.mov",
        alt: "Tomato feta bake test kitchen reel",
        aspect: "portrait",
      },
      {
        id: "sf-video-ride-along",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161776/RideAlong_lrlxb0.mp4",
        alt: "Ride along through greenhouse rows",
        aspect: "landscape",
      },
      {
        id: "sf-video-drone-reel",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161774/SenseiFarmsDroneREEL_hg7did.mov",
        alt: "Drone reel over Sensei Farms",
        aspect: "landscape",
      },
      {
        id: "sf-video-nest",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161767/NEST_1_cg3n3r.mp4",
        alt: "Nest concept motion study",
        aspect: "portrait",
      },
      {
        id: "sf-photo-03",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160278/DSCF4749_sjtk9t.jpg",
        alt: "Chef plating greenhouse salad",
        aspect: "portrait",
      },
      {
        id: "sf-photo-04",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160274/DSCF4732_r01dzv.jpg",
        alt: "Team portrait between rows",
        aspect: "portrait",
      },
      {
        id: "sf-video-zest",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160262/Zest_Tomato_Mozarella_Sandwich_VERS_3_eawo3f.mp4",
        alt: "Zest tomato mozzarella sandwich reel",
        aspect: "portrait",
      },
      {
        id: "sf-video-world-water",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160249/WorldWater_Day_f2pglm.mp4",
        alt: "World Water Day campaign vignette",
        aspect: "portrait",
      },
      {
        id: "sf-video-tuscan",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160247/tomato_tucsan_chicken_reel_draft1_sdqoaw.mp4",
        alt: "Tomato Tuscan chicken reel",
        aspect: "portrait",
      },
      {
        id: "sf-video-flower",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160247/tomatoe_flower_ez6tud.mp4",
        alt: "Tomato bloom timelapse",
        aspect: "portrait",
      },
      {
        id: "sf-video-sunrise",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160241/Sunrise4_wtm6kr.mp4",
        alt: "Sunrise greenhouse timelapse",
        aspect: "landscape",
      },
      {
        id: "sf-video-stop-motion",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160195/stop_motionversion1_vqzavf.mp4",
        alt: "Stop motion packing animation",
        aspect: "portrait",
      },
      {
        id: "sf-video-solstice",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160176/Summer_Solstice_jsvrtb.mp4",
        alt: "Summer solstice activation reel",
        aspect: "portrait",
      },
      {
        id: "sf-video-spooky",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160175/SPOOKY_SALAD_TRIM_vgke4q.mp4",
        alt: "Spooky salad motion cut",
        aspect: "portrait",
      },
      {
        id: "sf-video-facts",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160174/Sensei_Farm_Facts_odgp4n.mp4",
        alt: "Sensei farm facts motion pack",
        aspect: "portrait",
      },
      {
        id: "sf-video-seeding",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160169/Seeding_vers2_m3ykfx.mp4",
        alt: "Seedling cycle montage",
        aspect: "portrait",
      },
      {
        id: "sf-video-salad-asmr",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160157/Salad_ASMR_vers_1_fdthzh.mp4",
        alt: "Salad ASMR textures",
        aspect: "portrait",
      },
      {
        id: "sf-photo-05",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160156/Screenshot_20230120_053253_as5swe.jpg",
        alt: "Instagram grid planning screenshot",
        aspect: "portrait",
      },
      {
        id: "sf-video-reef",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160151/REEF_REEL_DRAFT_1_edas5h.mp4",
        alt: "Reef cleanup recap",
        aspect: "portrait",
      },
      {
        id: "sf-video-prince",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160145/prince_kuhio_fc8bqf.mp4",
        alt: "Prince Kūhiō Day cooking story",
        aspect: "portrait",
      },
      {
        id: "sf-video-late-night",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160143/Late_Night_Avocado_Vers_2_fjolel.mp4",
        alt: "Late night avocado snack reel",
        aspect: "portrait",
      },
    
      {
        id: "sf-photo-06",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160127/l1090585_landscape_vt7ljw.jpg",
        alt: "Lānaʻi coastline textures",
        aspect: "landscape",
      },
      {
        id: "sf-photo-07",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160120/L1090411_unhagw.jpg",
        alt: "Palm shadows over hydroponic beds",
        aspect: "landscape",
      },
      {
        id: "sf-photo-08",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160117/L1050993_w5qx4a.jpg",
        alt: "Chef portrait in test kitchen",
        aspect: "portrait",
      },

        {
        id: "sf-video-pistachio",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160142/PISTACHIO_STRAWBERRY_SALAD_scbroy.mp4",
        alt: "Pistachio strawberry salad build",
        aspect: "portrait",
      },
      {
        id: "sf-photo-09",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160113/L1040459_eotudn.jpg",
        alt: "Lānaʻi shoreline aerial",
        aspect: "landscape",
      },
      {
        id: "sf-photo-10",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160110/L1030731-edit_carmue.jpg",
        alt: "Leaf detail macro study",
        aspect: "portrait",
      },
      {
        id: "sf-video-holiday",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160107/Holiday_Pecan_Salad_Trim_zh6zme.mp4",
        alt: "Holiday pecan salad edit",
        aspect: "portrait",
      },
      {
        id: "sf-photo-11",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160107/L1020086_uj2oua.jpg",
        alt: "Hydroponic frame study",
        aspect: "landscape",
      },
      {
        id: "sf-video-greek",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160100/greeksaladDRAFT_augwtc.mp4",
        alt: "Greek salad hero loop",
        aspect: "portrait",
      },
      {
        id: "sf-video-george",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160098/George_Lettuce_2_dj3avz.mp4",
        alt: "George Lettuce field interview",
        aspect: "portrait",
      },
      {
        id: "sf-video-festivity",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160093/FESTIVITY_REEL_k7l154.mp4",
        alt: "Festivity greenhouse lighting",
        aspect: "portrait",
      },
      {
        id: "sf-video-earthday23",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160092/EARTHDAY_VERS2_mtce7s.mp4",
        alt: "Earth Day highlights",
        aspect: "portrait",
      },
      {
        id: "sf-photo-12",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160083/DSCF8332_azz9da.jpg",
        alt: "Chef hands arranging produce",
        aspect: "portrait",
      },
      {
        id: "sf-photo-13",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160080/DSCF8329_mxulfy.jpg",
        alt: "Color study of lettuce mix",
        aspect: "portrait",
      },
      {
        id: "sf-photo-14",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160076/DSCF8311_ul3jzg.jpg",
        alt: "Stacked produce crates",
        aspect: "landscape",
      },
      {
        id: "sf-photo-15",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160073/DSCF8206_-_Copy_q06w4d.jpg",
        alt: "Harvest team walking rows",
        aspect: "landscape",
      },
      {
        id: "sf-photo-16",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160070/DSCF8164_-_Copy_uen5bl.jpg",
        alt: "Editorial portrait with tomatoes",
        aspect: "portrait",
      },
      {
        id: "sf-video-drone-trails",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160069/Drone_footage_vers3_ja6kuq.mp4",
        alt: "Drone footage over glasshouses",
        aspect: "landscape",
      },
      {
        id: "sf-photo-17",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160066/DSCF8113_tcdybg.jpg",
        alt: "Chef plating close-up",
        aspect: "portrait",
      },
      {
        id: "sf-video-earthday24",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160063/DRAFT_EARTH_DAY_24_j1wxsp.mp4",
        alt: "Earth Day 24 title cut",
        aspect: "portrait",
      },
      {
        id: "sf-photo-18",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160062/DSCF8048_vdo95h.jpg",
        alt: "Macro lettuce textures",
        aspect: "portrait",
      },
      {
        id: "sf-video-broll3",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160058/DRAFT_broll3_MAY_rqszjh.mp4",
        alt: "May greenhouse b-roll set three",
        aspect: "landscape",
      },
      {
        id: "sf-video-december",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160055/Dec_farm_reel1_bqxmoj.mp4",
        alt: "December farm recap",
        aspect: "landscape",
      },
      {
        id: "sf-video-broll1",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160052/draft_broll1_MAY_rt8ipl.mp4",
        alt: "May greenhouse b-roll set one",
        aspect: "portrait",
      },
      {
        id: "sf-video-broll2",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160052/DRAFT_broll2_MAY_xjnkfr.mp4",
        alt: "May greenhouse b-roll set two",
        aspect: "portrait",
      },
      {
        id: "sf-video-chris",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160046/CHRIS_INTERVIEW_VERS1.2_ovhuuz.mp4",
        alt: "Chris interview pull quote",
        aspect: "landscape",
      },
      {
        id: "sf-video-burger",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160041/burgernight_clip2_phfepz.mp4",
        alt: "Burger night behind-the-scenes",
        aspect: "portrait",
      },
      {
        id: "sf-video-creation",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160041/creation_of_adam_version_3_gvfjw7.mp4",
        alt: "Creation of Adam salad styling",
        aspect: "portrait",
      },
      {
        id: "sf-video-brollmay1",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160034/broll_MAY_1_sgdyxh.mp4",
        alt: "Aerial sweep of rows",
        aspect: "landscape",
      },
      {
        id: "sf-video-blueberry",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160033/Blueberry_Chicken_FINAL_DRAFT_-_Trim_vyqdc1.mp4",
        alt: "Blueberry chicken hero cut",
        aspect: "portrait",
      },
      {
        id: "sf-video-beach-reel",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160025/beach_reel_trimmed_version_-_Trim_ploorr.mp4",
        alt: "Beach lifestyle reel",
        aspect: "landscape",
      },
      {
        id: "sf-video-beach-photoshoot",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160024/Beach_Photoshoot_jz0hdf.mp4",
        alt: "Beach photoshoot behind the scenes",
        aspect: "landscape",
      },
      {
        id: "sf-photo-19",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160017/AgJan22-1-2_uwlsyf.jpg",
        alt: "January agriculture journal spread",
        aspect: "landscape",
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
      "Led ocean safety briefings and personalized surf lessons based on skill level and conditions.",
      "Operated drone and DSLR systems to capture surf footage and create guest media packages.",
      "Provided in-water guidance to ensure safety, confidence, and overall guest experience.",
      "Supported shop operations, coordinating rentals, bookings, and instructor scheduling."
    ],
    services: ["Ocean Instruction", " Aerial Media Production", "Client Experience Management"],
    gallery: [
      {
        id: "plc-photo-01",
        type: "image",
        src: "/cinematic-landscape-photography-hawaii-ocean-sunse.jpg",
        alt: "Ocean horizon at dusk",
        caption: "ʻĀina stewardship residency portrait",
        aspect: "landscape",
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
        aspect: "portrait",
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
        aspect: "portrait",
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
        aspect: "portrait",
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

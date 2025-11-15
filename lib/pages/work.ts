export type WorkGalleryItem = {
  id: string
  type: "image" | "video"
  src: string
  alt: string
  caption?: string
  aspect?: "portrait" | "landscape"
  poster?: string
  provider?: "youtube"
  fullscreenSrc?: string
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
    cardImage: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763161805/L1090791_m5bo4e.jpg",
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
        id: "sf-video-seeding",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160169/Seeding_vers2_m3ykfx.mp4",  //switch
        alt: "Seedling cycle montage",
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
        id: "sf-video-feta-bake",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763161781/Tomato_Feta_Bake_wxqs3a.mov",
        alt: "Tomato feta bake test kitchen reel",
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
        id: "sf-video-beach-photoshoot",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160024/Beach_Photoshoot_jz0hdf.mp4", //ari
        alt: "Beach photoshoot behind the scenes",
        aspect: "landscape",
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
        id: "sf-photo-19",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763160017/AgJan22-1-2_uwlsyf.jpg",
        alt: "January agriculture journal spread",
        aspect: "landscape",
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
        id: "sf-video-brollmay1",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160034/broll_MAY_1_sgdyxh.mp4",
        alt: "Aerial sweep of rows",
        aspect: "landscape",
      },
      
      {
        id: "sf-video-creation",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160041/creation_of_adam_version_3_gvfjw7.mp4",
        alt: "Creation of Adam salad styling",
        aspect: "portrait",
      },
      {
        id: "sf-video-burger",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763160041/burgernight_clip2_phfepz.mp4", //switch
        alt: "Burger night behind-the-scenes",
        aspect: "portrait",
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
    cardImage: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763195294/IMG_0060_ul8oo4.jpg",
    contributions: [
      "Led ocean safety briefings and personalized surf lessons based on skill level and conditions.",
      "Operated drone and DSLR systems to capture surf footage and create guest media packages.",
      "Provided in-water guidance to ensure safety, confidence, and overall guest experience.",
      "Supported shop operations, coordinating rentals, bookings, and instructor scheduling."
    ],
    services: ["Ocean Instruction", " Aerial Media Production", "Client Experience Management"],
    gallery: [
      {
        id: "hhs-video-01",
        type: "video",
        src: "https://www.youtube.com/embed/niiKuU22jt4?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&playlist=niiKuU22jt4",
        fullscreenSrc: "https://www.youtube.com/embed/niiKuU22jt4?autoplay=1&controls=1&rel=0&mute=0",
        alt: "Drone flyover capturing Waikīkī surf lineup",
        caption: "Aerial drone pass over Publics lineup",
        provider: "youtube",
        aspect: "landscape",
      },
      
      {
        id: "hhs-video-02",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763195259/hanslandscgifs_lledlb.mp4",
        alt: "Looping aerial pan across Publics lineup",
        aspect: "landscape",
      },
      {
        id: "hhs-video-03",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763195259/porthanslongboarder_caexwb.mp4",
        alt: "Longboarder trimming across small Waikīkī wave",
        aspect: "portrait",
      },
      {
        id: "hhs-video-04",
        type: "video",
        src: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763195248/hansjetty_olpb0e.mp4",
        alt: "Jetty view of surf class paddle-out",
        aspect: "landscape",
      },
      {
        id: "hhs-photo-01",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763195298/IMG_1389_lqpwm3.jpg",
        alt: "Surf lesson students heading into rolling sets",
        aspect: "portrait",
      },
      {
        id: "hhs-photo-02",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763195294/IMG_0060_ul8oo4.jpg",
        alt: "Instructor lining up boards on Waikīkī sand",
        aspect: "portrait",
      },
      {
        id: "hhs-photo-03",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763195290/IMG_0015_kjvebl.jpg",
        alt: "Close-up of surf wax and fins pre-lesson",
        aspect: "portrait",
      },
    ],
    location: "Honolulu, HI",
  },
  {
    slug: "KUPU-agroforestry",
    company: "KUPU: Agroforestry",
    title: "Agroforester & Conservationist",
    tenure: "2025",
    intro:
      "",
    summary:
      "Through Kupu’s Conservation Leadership Development Program, I served with Grow Good Hawaiʻi, an organization advancing community food security and regenerative land practices on Oʻahu’s west side. Working in a team alongside the Indigenous Food Systems Manager, our project, “Trees for People,” seeks to plant 2,000 fruit and native trees across the Waiʻanae Coast and Waimānalo, cultivating urban food forests rooted in traditional Hawaiian agroforestry systems.",
    heroImage: "/homepage/IMG_0294.jpeg",
    cardImage: "/homepage/IMG_0294.jpeg",
    contributions: [
      "Maintain nursery workflows—propagating seedlings, managing irrigation, and tracking plant development across multiple garden sites.",
      "Support the installation of community food gardens, coordinating logistics, soil preparation, and post-planting care.",
      "Collaborate with the Indigenous Food Systems Manager to model agroforestry techniques for local residents",
      "Apply field data and observational notes to refine planting methods and survival rates across pilot gardens.",
      "Engage in hands-on stewardship that strengthens ʻāina-based education and community food resilience.",
    ],
    services: ["Agroforestry", "Food Systems", "Community Stewardship", "Plant Propogation"],
    gallery: [
      {
        id: "kupu-photo-01",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174569/fqs_2025-07-29_093356.542_q6cmb6.jpg",
        alt: "Kupu team planting trees along Waiʻanae coastline",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-02",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174566/fqs_2025-07-31_081724.459_yqguas.jpg",
        alt: "Seedlings ready for distribution at Grow Good Hawaiʻi nursery",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-03",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174561/fqs_2025-07-29_095623.299_pblsgf.jpg",
        alt: "Volunteers prepping soil beds for fruit trees",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-04",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174558/fqs_2025-07-29_094820.763_pvkd1s.jpg",
        alt: "Agroforestry rows beneath morning clouds",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-06",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174550/fqs_2025-08-05_095206.900_eueavj.jpg",
        alt: "Grow Good Hawaiʻi staff documenting saplings",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-07",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174546/fqs_2025-07-29_105722.917_k26sk8.jpg",
        alt: "Volunteers watering rows of young plants",
        aspect: "portrait",
      },
   
      {
        id: "kupu-photo-09",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174522/fqs_2025-08-07_074756.040_l9witm.jpg",
        alt: "Sunrise over nursery shade house",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-10",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174517/fqs_2025-08-19_094127.006_pwj5tn.jpg",
        alt: "Team carrying trees to planting site",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-11",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174513/fqs_2025-08-07_085451.296_h12cgu.jpg",
        alt: "Rows of potted fruit trees ready for delivery",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-12",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174509/fqs_2025-08-07_085501.858_qslj4q.jpg",
        alt: "Young trees labeled for neighborhood distribution",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-13",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174504/fqs_2025-08-21_104142.134_z2gssv.jpg",
        alt: "Community volunteers planting saplings",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-14",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174500/fqs_2025-08-21_103855.839_podfm4.jpg",
        alt: "Kupu crew assembling irrigation lines",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-15",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174496/fqs_2025-08-21_103921.533_zjmj5h.jpg",
        alt: "Volunteers mulching base of young tree",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-16",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174491/fqs_2025-08-30_072449.103_quzrvv.jpg",
        alt: "Community members posing with freshly planted trees",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-17",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174485/fqs_2025-09-16_084518.821_ctcnlv.jpg",
        alt: "New leaves emerging on agroforestry plot",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-05",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174555/fqs_2025-07-29_094636.634_haaw03.jpg",
        alt: "Close up of native seedlings on workbench",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-18",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174479/fqs_2025-08-30_092701.137_ll7ctw.jpg",
        alt: "Volunteer checking soil moisture",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-19",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174474/fqs_2025-09-16_084603.536_hw9uza.jpg",
        alt: "Tree canopy forming shade over new beds",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-20",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174468/fqs_2025-10-22_133158.707_gz9t2h.jpg",
        alt: "Hands tying support for sapling",
        aspect: "portrait",
      },
      {
        id: "kupu-photo-21",
        type: "image",
        src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763174465/fqs_2025-10-29_132525.096_e6mgim.jpg",
        alt: "Finished agroforestry rows framed by mountains",
        aspect: "portrait",
      },
    ],
    location: "Waiʻanae, HI",
  },
  
]

export const getWorkRole = (slug: string) => workRoles.find((role) => role.slug === slug)

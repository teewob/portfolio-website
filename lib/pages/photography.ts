export type PhotoStorySection = {
  id: string
  heading?: string
  body: string[]
  images: string[]
  layout?: "default" | "stacked" | "wide"
}

export type PhotoStory = {
  intro: string[]
  conclusion: string[]
  sections: PhotoStorySection[]
}

type PhotoCollection = {
  id: number
  slug: string
  title: string
  role: string
  category: string
  description: string
  cover: string
  gallery: {
    src: string
    caption: string
  }[]
  story?: PhotoStory
  galleryLayout?: "grid" | "masonry"
  showGalleryCaptions?: boolean
}

type LooseRollMedia = string | { src: string; type?: "image" | "video" }

type PhotoGallery = {
  id: string
  slug: string
  title: string
  subtitle: string
  cover: string
  description?: string
  preview: string[]
  photos: LooseRollMedia[]
}

const mediaPath = (folder: string, file: string) => `/${folder}/${encodeURIComponent(file)}`

const roll002Photos: LooseRollMedia[] = [
  mediaPath("roll002", "C3B905BE-8AE8-4D8F-96B8-50074A58F917.jpg"),
  mediaPath("roll002", "apart.jpg"),
  mediaPath("roll002", "apart1.jpg"),
  mediaPath("roll002", "fqs 2025-03-12 175900.632.JPEG"),
  mediaPath("roll002", "fqs 2025-02-03 082232.232.JPEG"),
  mediaPath("roll002", "fqs 2025-02-03 082218.456.JPEG"),
  mediaPath("roll002", "bar1.JPEG"),
  mediaPath("roll002", "bar2.JPEG"),
    { src: mediaPath("roll002", "grad.mp4"), type: "video" },
  mediaPath("roll002", "grad1.JPEG"),
  mediaPath("roll002", "grad2.JPEG"),
  mediaPath("roll002", "grad3.JPEG"),
  mediaPath("roll002", "fqs 2025-02-11 073944.000.JPEG"),
  mediaPath("roll002", "bdayg.JPEG"),
  mediaPath("roll002", "bdayg1.JPEG"),
  mediaPath("roll002", "bdayg2.JPEG"),
  mediaPath("roll002", "bdayg3.JPEG"),
  { src: mediaPath("roll002", "glassesparty.mp4"), type: "video" },
  mediaPath("roll002", "flowers.JPEG"),
  mediaPath("roll002", "flowers1.JPEG"),
  mediaPath("roll002", "beachet.JPEG"),
  mediaPath("roll002", "beachet1.JPEG"),
  mediaPath("roll002", "beachet2.JPEG"),
  mediaPath("roll002", "beachet3.JPEG"),
  mediaPath("roll002", "beachet4.JPEG"),
  mediaPath("roll002", "beachet5.JPEG"),
  mediaPath("roll002", "beachet6.JPEG"),
  mediaPath("roll002", "beachet7.JPEG"),
  mediaPath("roll002", "beachet8.JPEG"),
  mediaPath("roll002", "fqs 2025-03-13 140910.573.JPEG"),
  mediaPath("roll002", "fqs 2025-03-30 023218.453.jpg"),
  mediaPath("roll002", "bells.JPEG"),
   { src: mediaPath("roll002", "bellawardGIF.mp4"), type: "video" },
  mediaPath("roll002", "fqs 2025-04-06 132639.250.JPEG"),
  mediaPath("roll002", "bllaz.JPEG"),
  mediaPath("roll002", "bllaz1.JPEG"),
   { src: mediaPath("roll002", "tee.mp4"), type: "video" },
  mediaPath("roll002", "fqs 2025-04-18 184326.679.JPEG"),
  mediaPath("roll002", "brooke.JPEG"),
  mediaPath("roll002", "brooke1.JPEG"),
  { src: mediaPath("roll002", "ellaguitar.mp4"), type: "video" },
  mediaPath("roll002", "fqs 2025-05-03 235343.454.jpg"),
  mediaPath("roll002", "fqs 2025-05-03 235353.507.jpg"),
  mediaPath("roll002", "fqs 2025-05-03 235439.855.jpg"),
  mediaPath("roll002", "fqs 2025-05-04 093044.785.JPEG"),
  mediaPath("roll002", "fqs 2025-05-04 102239.763.JPEG"),
  { src: mediaPath("roll002", "larsell.mp4"), type: "video" },
  mediaPath("roll002", "elstee.JPEG"),
  { src: mediaPath("roll002", "nolasellatee.mp4"), type: "video" },
   mediaPath("roll002", "fqs 2025-06-15 141710.517.JPEG"),
  mediaPath("roll002", "fqs 2025-05-11 083444.343.JPEG"),
  mediaPath("roll002", "kai.JPEG"),
  mediaPath("roll002", "kai1.JPEG"),
  mediaPath("roll002", "kai2.JPEG"),
  mediaPath("roll002", "kai3.JPEG"),
  { src: mediaPath("roll002", "tiaraportraits.mp4"), type: "video" },
  mediaPath("roll002", "fqs 2025-05-25 153746.675.JPEG"),
  mediaPath("roll002", "fqs 2025-05-25 155146.387.JPEG"),
  mediaPath("roll002", "fqs 2025-05-25 161044.065.JPEG"),
  mediaPath("roll002", "fqs 2025-05-25 161052.445.JPEG"),
  mediaPath("roll002", "fqs 2025-05-26 184641.792.JPEG"),
  { src: mediaPath("roll002", "elladrury.mp4"), type: "video" },
  mediaPath("roll002", "kub.JPEG"),
  mediaPath("roll002", "kub1.JPEG"),
  { src: mediaPath("roll002", "avagiobridge.mp4"), type: "video" },
  mediaPath("roll002", "fqs 2025-06-05 054113.872.JPEG"),
  mediaPath("roll002", "fqs 2025-06-08 135817.057.JPEG"),
  mediaPath("roll002", "fqs 2025-06-08 141604.631.JPEG"),
  mediaPath("roll002", "fqs 2025-06-10 053407.036.JPEG"),
  mediaPath("roll002", "lytee.JPEG"),
  mediaPath("roll002", "lytee1.JPEG"),
  mediaPath("roll002", "fqs 2025-06-12 121144.132.JPEG"),
  mediaPath("roll002", "fqs 2025-06-13 144311.760.JPEG"),
  { src: mediaPath("roll002", "ellapool.mp4"), type: "video" },
  mediaPath("roll002", "taro.JPEG"),
  mediaPath("roll002", "fqs 2025-06-11 184112.093.jpg"),
  { src: mediaPath("roll002", "gioavatarot.mp4"), type: "video" },
  mediaPath("roll002", "fqs 2025-06-20 135112.773.JPEG"),
  mediaPath("roll002", "fqs 2025-06-20 135122.010.JPEG"),
  mediaPath("roll002", "fqs 2025-06-20 135155.121.JPEG"),
  mediaPath("roll002", "fqs 2025-06-20 135317.745.JPEG"),
  mediaPath("roll002", "teds.JPEG"),
  mediaPath("roll002", "teds2.JPEG"),
  mediaPath("roll002", "teds3.JPEG"),
  mediaPath("roll002", "teds4.JPEG"),
  mediaPath("roll002", "fqs 2025-06-27 192217.512.JPEG"),
  mediaPath("roll002", "fqs 2025-06-28 171104.045.JPEG"),
  mediaPath("roll002", "fqs 2025-06-28 171115.405.JPEG"),
  mediaPath("roll002", "unc.JPEG"),
  { src: mediaPath("roll002", "unc.mp4"), type: "video" },
  { src: mediaPath("roll002", "kewaloblues.mp4"), type: "video" },
  mediaPath("roll002", "peppas.JPEG"),
  mediaPath("roll002", "peppas1.JPEG"),
  mediaPath("roll002", "fqs 2025-07-18 210903.501.JPEG"),
  mediaPath("roll002", "pte1.jpg"),
  mediaPath("roll002", "pte2.jpg"),
  mediaPath("roll002", "pte3.jpg"),
  mediaPath("roll002", "pte4.jpg"),
  mediaPath("roll002", "fqs 2025-07-20 113545.924.JPEG"),
  mediaPath("roll002", "fqs 2025-07-22 140128.524.JPEG"),
  mediaPath("roll002", "fqs 2025-07-22 175056.535.JPEG"),
  mediaPath("roll002", "party3.jpg"),
  mediaPath("roll002", "party.jpg"),
  mediaPath("roll002", "party1.jpg"),
  mediaPath("roll002", "party2.jpg"),
  mediaPath("roll002", "party4.jpg"),
  { src: mediaPath("roll002", "larsmat.mp4"), type: "video" },
  mediaPath("roll002", "party5.jpg"),
  mediaPath("roll002", "party6.jpg"),
  mediaPath("roll002", "party7.jpg"),
  mediaPath("roll002", "party8.jpg"),
  mediaPath("roll002", "party9.jpg"),
  mediaPath("roll002", "bobs.jpg"),
  mediaPath("roll002", "bobs1.jpg"),
  mediaPath("roll002", "teemir.jpg"),
  mediaPath("roll002", "teemir1.jpg"),
  mediaPath("roll002", "fqs 2025-07-27 101201.684.JPEG"),
]

export const photoCollections: PhotoCollection[] = [
  {
    id: 1,
    slug: "filipinos-in-hawaii",
    title: "Filipinos in Hawai'i",
    role: "Series",
    category: "Photo Essay",
    description:
      "A portrait series documenting the everyday lives of Filipinos who shape Hawai‘i’s working landscape—from hotel staff and construction crews to lei makers and local shopkeepers. Shot across Waikīkī and Chinatown, the collection traces stories of migration, belonging, and identity within Hawai‘i’s layered multicultural history. ",
    cover: "/filipinos%20in%20hawaii/fih01.jpg",
    gallery: [
      {
        src: "/filipinos%20in%20hawaii/fih01.jpg",
        caption: "Filipinos in Hawai'i · Frame 01",
      },
      {
        src: "/filipinos%20in%20hawaii/fih02.jpg",
        caption: "Filipinos in Hawai'i · Frame 02",
      },
      {
        src: "/filipinos%20in%20hawaii/fih03.jpg",
        caption: "Filipinos in Hawai'i · Frame 03",
      },
      {
        src: "/filipinos%20in%20hawaii/fih034.jpg",
        caption: "Filipinos in Hawai'i · Frame 04",
      },
      {
        src: "/filipinos%20in%20hawaii/fih04.jpg",
        caption: "Filipinos in Hawai'i · Frame 05",
      },
      {
        src: "/filipinos%20in%20hawaii/fih05.jpg",
        caption: "Filipinos in Hawai'i · Frame 06",
      },
      {
        src: "/filipinos%20in%20hawaii/fih06.jpg",
        caption: "Filipinos in Hawai'i · Frame 07",
      },
      {
        src: "/filipinos%20in%20hawaii/fih07.jpg",
        caption: "Filipinos in Hawai'i · Frame 08",
      },
      {
        src: "/filipinos%20in%20hawaii/fih08.jpg",
        caption: "Filipinos in Hawai'i · Frame 09",
      },
    ],
    story: {
      intro: [
        "When I first began this project, I walked through Waikīkī and Chinatown—two of the busiest corners of Honolulu—hoping to find Filipinos to photograph. Truthfully, it wasn’t hard. You can see us everywhere: working the front desk, bussing tables, paving sidewalks, selling leis, cleaning rooms, teaching surf lessons. Filipinos are the invisible heartbeat of Hawai‘i’s service industry and infrastructure. And yet, we’re so often overlooked.",
        "I was nervous at first—walking up to strangers and asking, “Are you Filipino?” But once I told them I was too, everything shifted. Walls came down. We talked story. Some laughed. Some hesitated. Most of them shared more than I expected.",
        "What I came to love most were the stories: how people got here, what they carried with them, who they’re doing it all for. I met housekeepers, construction workers, front desk agents, lei sellers, and strangers of all walks of life. Some were born here, others migrated young. All of them had that same fire passed down from hardworking families—fueled by sacrifice, humor, and pride.",
        "These photographs aren’t just portraits or regular captures. They’re layered with the weight of history, migration, survival, and love. They speak to what it means to be Filipino in Hawai‘i—not as a stereotype, but as a presence. A contribution. A community.",
      ],
      conclusion: [
        "Walking around Honolulu with my camera, I started noticing details I’d never really paid attention to before—the quiet ways Filipinos move the city forward. The familiar scent of food from small storefronts. The steady hands behind the front desks, hotel rooms, and freshly poured sidewalks. We aren’t just here. We’re holding it down.",
        "This project became more than a photography assignment—it turned into a window into people’s lives, their dreams, and their histories. It reminded me that behind every smile is a story of resilience. And behind every uniform, a family being supported.",
        "I walked away from every conversation with a fuller heart and a deeper respect. I saw pieces of myself in the people I met. And I realized that being Filipino in Hawai‘i is complex—but also beautiful. It’s hard work, yes. But it’s also community. It’s laughter at the bus stop. It’s Sunday lunch at Max’s. It’s pride in your mother tongue—even if it’s a little butchered.",
        "What I hope these photos show is not just who Filipinos are, but what we make possible—every single day.",
      ],
      sections: [
        {
          id: "queen-kapiolani-valet",
          heading: "Bell Man",
          body: [
            "In front of the Queen Kapi‘olani Hotel stands a young Filipino man—grinning with ease, a ukulele in hand. He works as a bellman, one of many Filipinos who make up the unseen backbone of Hawai‘i’s bustling service industry. Born and raised on O‘ahu, his story reflects the complexity of identity formation in Hawai‘i: rooted in Filipino ancestry, but shaped by the rhythms and spirit of the islands.",
            "Filipinos in Hawai‘i do not simply replicate Philippine traditions; they also adopt and reshape local ones, finding belonging in a shared “local” ethos. The ukulele, once a symbol of Hawaiian cultural pride, becomes part of a working-class Filipino rhythm in Honolulu’s hotel economy.",
          ],
          images: [
            "/filipinos%20in%20hawaii/fih01.jpg",
            "/filipinos%20in%20hawaii/fih02.jpg",
            "/filipinos%20in%20hawaii/fih03.jpg",
          ],
        },
        {
          id: "kryz-agpoon",
          heading: "Born-Again Filipino",
          body: [
            "This is Kryz Agpoon. She works front desk at the Queen Kapi‘olani Hotel and is in her early 20s, like me. We got to talking, and I learned that although I wasn’t born in the Philippines, she was. She’s been living on O‘ahu since she was two years old. Kryz is Filipino, Japanese, and part European—her mom is Filipina from Balungao, and raised her as a single mother here in Hawai‘i. Her younger brother still lives in the Philippines, which says a lot about the kinds of sacrifices families make when they migrate.",
            "I asked her, “Can you speak Tagalog?” She said, “Welll. Mmm. kind of? I can. But it’s 50/50, you know. My Tagalog is a little butchered,” and laughed. When I asked her what it’s like being Filipino in Hawai‘i, she said, “Honestly. I love it. I think it’s such a wonderful place with so much mixed culture. And I feel safe and comfortable here because it’s all familiar with the mix of cultures and different ethnic groups. I think that the mixing pot is fascinating and rich. There’s so much diversity.”",
            "And finally, I asked about her goals. She said, “I want to be able to buy my mom a house.” I told her, “Me too!” and she laughed. “That’s such a common thing for us Filipinos—we just want to provide and give back to our family. I know.”",
            "Kryz is a reflection of what it means to be a Born-Again Filipino—someone who may not speak perfect Tagalog or have grown up in the Philippines, but still carries the culture deeply. Her pride, her intention, and her gratitude are what make her story so familiar—and so beautiful.",
          ],
          images: ["/filipinos%20in%20hawaii/fih034.jpg"],
          layout: "wide",
        },
        {
          id: "junior-lapuebla",
          heading: "Holding The Line",
          body: [
            "In the middle of a busy Waikīkī sidewalk project, I met Junior Lapuebla—a construction worker who paused just long enough for a quick conversation and photo. He was born and raised on Maui, but his parents are from Bacarra, Ilocos Norte in the Philippines. He told me he moved to O‘ahu when he was 12, and that his grandmother used to work as a housekeeper. That detail felt familiar—so many Filipino families in Hawai‘i carry stories like his, of migration, sacrifice, and finding work wherever it’s offered.",
            "When I explained I was photographing Filipinos for a school project, the group of workers laughed. One of them joked, “Be careful, she’s I.C.E!” It was hilarious in the moment, but it also said something about the Filipino experience here. Even born-and-raised locals carry the weight of migration—how easily our presence can still feel questioned, but also to the everyday humanity of it—how it shows up in the noise of jackhammers, in the quiet pride of a guy like Junior, and in the jokes we use to make light of a history that’s often heavy.",
          ],
          images: [
            "/filipinos%20in%20hawaii/fih04.jpg",
            "/filipinos%20in%20hawaii/fih05.jpg",
            "/filipinos%20in%20hawaii/fih06.jpg",
          ],
        },
        {
          id: "lei-shopkeepers",
          heading: "Altars Of Everyday",
          body: [
            "These two Filipino shopkeepers were hesitant when I asked to take their photo—shy, but kind. They let me linger as they worked, and I managed to quietly capture a shot of them inside their flower and lei shop.",
            "What stood out more than anything were the walls behind them: covered in photographs of family, old friends, and snapshots of the shop from years ago. It reminded me of so many Filipino and Asian homes I've seen—walls filled with memories, a bit of clutter, mismatched knickknacks, but all full of love.",
            "There’s something about that kind of visual clutter that feels like home. In a place as far from the Philippines as Honolulu, Filipino immigrants make their spaces their own. This photo connects to the idea of transnationalism—how identity, memory, and family stretch across oceans, showing up in the smallest personal details. These shopkeepers are running a business—continuing a quiet legacy of care, kinship, and cultural grounding in a place that may never fully feel like home, but becomes one anyway.",
          ],
          images: [
            "/filipinos%20in%20hawaii/fih08.jpg",
            "/filipinos%20in%20hawaii/fih09.jpg",
            "/filipinos%20in%20hawaii/fih10.jpg",
            "/filipinos%20in%20hawaii/fih11.jpg",
            "/filipinos%20in%20hawaii/fih07.jpg",
        ,
          ],
        },
        {
          id: "night-windows",
          heading: "Rizal Square",
          body: [
            "At Rizal Square, Filipinos gathering to play cards and talk story beneath the gaze of José Rizal—a quiet ritual of kinship and routine."
          ],
          images: [
            "/filipinos%20in%20hawaii/fih13.jpg",
            "/filipinos%20in%20hawaii/fih14.jpg",
            "/filipinos%20in%20hawaii/fih12.jpg"
            ,
          ],
          layout: "stacked",
        },
        {
          id: "zarra-surf",
          heading: "The Surf School Matriarch",
          body: [
            "This is Zarra, my boss at Hans Hedemann Surf School in Waikīkī. I’d snuck a photo in because she’d been too shy for a portrait and managed to capture her in the midst of her work. Zarra has been working here for over 20 years—longer than some of the surfboards on the walls have been around. She’s not technically the owner, but she pretty much runs the place. Originally hired as an accountant, Zarra somehow became Hans’ right hand. She handles the shop, knows the gear, gives safety briefings, manages scheduling—and does all of this without even surfing unless someone makes her.",
            "Zarra is from Manila. She’s a mom of four, and during our long shifts, she often brings her youngest, EJ, to the shop because there’s no one else to watch him after school. We spend the in-between hours talking about Filipino food and our moms—how growing up with a Filipina mother is both comedy and survival. She scolds me like mine would whenever I’m hurt or sick.",
            "Zarra represents Differential Inclusion. Filipinos like her are welcomed into Hawai‘i’s economy as necessary labor—especially in tourism—but they rarely get the recognition or ownership they deserve. Still, she does everything with grace, humor, and that strong, steady energy so many Filipina moms carry. She reminds me why so much of this state works in the first place—because of people like her.",
          ],
          images: [
            "/filipinos%20in%20hawaii/DSCF7759-2.jpg",
            "/filipinos%20in%20hawaii/DSCF8094.jpg",
            "/filipinos%20in%20hawaii/DSCF8095.jpg",
            "/filipinos%20in%20hawaii/DSCF8097.jpg",
          ],
        },
        {
          id: "giovanni-valdes",
          heading: "Identity As Performance",
          body: [
            "This is my best friend, Giovanni Valdes, playing basketball at the Kanawai courts by UH Mānoa. He moved from Guam to study business at his father’s alma mater, and we connected over something simple but important—being Filipino. He’s obsessed with basketball, especially the Philippine national team. But our friendship goes deeper than just shared hobbies. Growing up with Filipino family on Guam, we both experienced the same type of upbringing, with all its discipline, warmth, and layered expectations.",
            "We’ve also talked a lot about the kind of racism or discomfort we sometimes feel here—how being Filipino is treated differently, especially in groups where “haole” culture dominates. Giovanni once told me, “I love being Filipino, there’s nothing to hate about our people. I don’t understand it. Our food is delicious, we’re good looking, talented, and charming, we’re hardworkers.” He added, “I know who I am. And I don’t need to explain or be questioned. And I’ve realized I don’t want to associate with people who don’t pride themselves in being Filipino.”",
            "Every Sunday, we go to Max’s of Manila to eat, talk story, and reflect on how far we’ve come in learning to be proud. This is Identity as Performance—because being Filipino isn’t just what you inherit, it’s how you show up, stand by each other, and live it every day.",
          ],
          images: [
            "/filipinos%20in%20hawaii/DSCF8721.jpg",
            "/filipinos%20in%20hawaii/DSCF8718.jpg",
            "/filipinos%20in%20hawaii/DSCF8724.jpg",
            "/filipinos%20in%20hawaii/DSCF8689.jpg",
          ],
        },
        {
          id: "housekeeper-sisters",
          heading: "Contradictory Class Mobility",
          body: [
            "It was late afternoon when I met these two women sitting at a bus stop in Waikīkī, right by Denny’s on Queen’s. They had just gotten off their shift working as housekeepers at the Hyatt Regency down the block. Dressed fresh in their uniforms, they were resting their feet and waiting for their ride home. When I approached and asked if I could take their photo, they laughed and asked, “Is this for Facebook? You have Facebook?” They huddled together, fixing their hair and adjusting their clothes in excitement for the picture.",
            "After I took the photo, we talked story. I told them, “I’m half Filipina—my mother is.” One of them asked, “From where?” I said, “Cebu. She is Bisayan.” The lady to the right piped up, “Oh I am Bisayan! Oh do you know how to speak?” “No, I cannot speak Tagalog or Bisayan,” I sighed in embarrassment. But she smiled and replied, “I know you Filipina ‘cause you’re pretty!” That made my whole day.",
            "This photo speaks to Contradictory Class Mobility. These women are essential to the functioning of Waikīkī’s tourism economy, yet invisible to most of the people they serve. Their labor is undervalued, but their spirit? Undeniable. They reminded me that pride doesn’t always show up in loud declarations—it lives in the small, loving ways Filipinos recognize one another, even between strangers.",
          ],
          images: [
            "/filipinos%20in%20hawaii/DSCF8113.jpg",
            "/filipinos%20in%20hawaii/DSCF8107.jpg",
            "/filipinos%20in%20hawaii/DSCF8110.jpg",
            "/filipinos%20in%20hawaii/DSCF8109.jpg",
            "/filipinos%20in%20hawaii/DSCF8108.jpg",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    slug: "the-strays",
    title: "The Strays",
    role: "Series",
    category: "Photo Essay",
    description:
      "An exploration of cat gangs and rogues of Honolulu, revealing how these creatures have formed communities, navigate survial, and adapt to the city's edges. ",
    cover: "/the%20strays/Tenorio-1.jpg",
    gallery: [
      {
        src: "/the%20strays/Tenorio-1.jpg",
        caption: "The Strays · Frame 01",
      },
      {
        src: "/the%20strays/Tenorio-5.jpg",
        caption: "The Strays · Frame 05",
      },
      {
        src: "/the%20strays/Tenorio-12.jpg",
        caption: "The Strays · Frame 12",
      },
    ],
    story: {
      intro: [
        "",
      ],
      conclusion: [
      
      ],
      sections: [
        {
          id: "manoa-rogues",
          heading: "“Rogues” of Mānoa",
          body: [
            "The Mānoa Rogues are a loose-knit society of cats who band together when it suits them, then scatter across the valley’s maze of cul-de-sacs. They haunt carports, rooflines, and back decks, always close enough to the people who unknowingly supply their kingdoms.",
            "Though timid and wary, they are cunning and deeply resourceful—slipping between yards at dusk, sharing intel on which porches leave food out, and vanishing at the first sign of rain.",
          ],
          images: [
            "/the%20strays/Tenorio-1.jpg",
            "/the%20strays/Tenorio-2.jpg",
            "/the%20strays/Tenorio-3.jpg",
            "/the%20strays/Tenorio-4.jpg",
            "/the%20strays/Tenorio-5.jpg",
            "/the%20strays/Tenorio-6.jpg",
            "/the%20strays/Tenorio-7.jpg",
            "/the%20strays/Tenorio-8.jpg",
            "/the%20strays/Tenorio-9.jpg",
          ],
        },
        {
          id: "diamond-head-dust-bowlers",
          heading: "Diamond Head “Dust Bowlers”",
          body: [
            "The Dust Bowlers of Diamond Head are a hardy bunch living along the crater’s dry ridges. Dusty paws, sun-bleached coats, and a willingness to greet hikers have made them minor legends.",
            "They are friendlier than their Mānoa cousins, yet they operate with the same tactical awareness—carving out lookout points, sharing scraps, and always recruiting new drifters who can stomach the midday heat.",
          ],
          images: [
            "/the%20strays/Tenorio-10.jpg",
            "/the%20strays/Tenorio-11.jpg",
            "/the%20strays/Tenorio-12.jpg",
            "/the%20strays/Tenorio-13.jpg",
            "/the%20strays/Tenorio-14.jpg",
            "/the%20strays/Tenorio-15.jpg",
            "/the%20strays/Tenorio-16.jpg",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    slug: "honolulu-visuals",
    title: "Honolulu Grit",
    role: "Series",
    category: "Documentary Photography",
    description:
      "A street-level portrait of Honolulu’s pulse, the working class, wanderers, and the unseen the geometry of concrete and sun.  ",
    cover: "/honolulu%20grit/DSCF6469.JPG",
    gallery: [
      {
        src: "/honolulu%20grit/20220911-DSCF2021.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220911-DSCF2023.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220912-IMG_5704.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220912-IMG_5744.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220912-IMG_5763.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220920-DSCF2160.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220920-DSCF2215.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220920-DSCF2222.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220920-DSCF2233.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220920-DSCF2242.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/20220920-DSCF2243.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/AgJan22-48.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/AgJan22-52.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/AgJan22-88.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF0395.JPG",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF0828.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF0857.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF2381.JPG",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF6469.JPG",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF6503.JPG",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF7486.JPG",
        caption: "",
      },
      {
        src: "/honolulu%20grit/DSCF8914.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3275.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3276.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3277.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3278.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3281.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3282.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3283.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3285.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/IMG_3286.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-16.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-22.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-23.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-28.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-3.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-4.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-8.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-85.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio-9.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio11-22-30.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio11-22-8.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio11-22-84.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio11-25-22-40.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_1%203.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_2%203.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_3%203.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_4.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_5%203.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_5.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_6%203.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_6.jpg",
        caption: "",
      },
      {
        src: "/honolulu%20grit/Tenorio_7%203.jpg",
        caption: "",
      },
    ],
    galleryLayout: "masonry",
    showGalleryCaptions: false,
  },
]

export const getCollectionBySlug = (slug: string) => photoCollections.find((collection) => collection.slug === slug)

export const photoGalleries: PhotoGallery[] = [
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
    subtitle: "Summer 2025 · 33mm Film",
    description: "Roll002 · Summer 2025 · 33mm film.",
    cover: mediaPath("roll002", "fqs 2025-05-25 161044.065.JPEG"),
    preview: [
      mediaPath("roll002", "grad2.JPEG"),
      mediaPath("roll002", "kai2.JPEG"),
      mediaPath("roll002", "party4.jpg"),
    ],
    photos: roll002Photos,
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

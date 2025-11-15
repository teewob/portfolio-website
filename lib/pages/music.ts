export type SonicLandscapeTrack = {
  id: number
  title: string
  audioUrl: string
  order: number
  dateAdded?: string
  duration?: string
}

export type SonicLandscapeAlbum = {
  title: string
  releaseYear: number
  overview: string
  cover: string
  tracks: SonicLandscapeTrack[]
}

export const sonicLandscapes: SonicLandscapeAlbum = {
  title: "Alaska",
  releaseYear: 2022,
  overview:
    "The feeling of vastness. For I had experienced the quiet awe of discovery of my existence in this universe. It was the moment I saw the moon and stars in the sky beyond the two dimensions that I'd always seen it in.",
  cover: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763122896/alaskavers1_qfutuv.png",
  tracks: [
    {
      id: 1,
      order: 1,
      title: "last frontier",
      audioUrl: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763118810/last_frontier_nxilia.mp3",
      dateAdded: "2022",
      duration: "3:57",
    },
    {
      id: 2,
      order: 2,
      title: "enlightenment",
      audioUrl: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763118821/enlightenment_wa7zir.wav",
      dateAdded: "2022",
      duration: "3:01",
    },
    {
      id: 3,
      order: 3,
      title: "digital frank",
      audioUrl: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763118815/Digital_Frank_j7tqly.wav",
      dateAdded: "2022",
      duration: "2:03",
    },
    {
      id: 4,
      order: 4,
      title: "ringing in my ears",
      audioUrl: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763118808/ringing_in_my_ears_wl2es1.mp3",
      dateAdded: "2022",
      duration: "1:54",
    },
    {
      id: 5,
      order: 5,
      title: "seeing the solar system for the first time",
      audioUrl: "http://res.cloudinary.com/djgkz5rkx/video/upload/v1763118805/seeing_the_solar_system_for_the_very_first_time_ni2ol5.mp3",
      dateAdded: "2022",
      duration: "1:26",
    },
  ],
}

export default {
  sonicLandscapes,
}

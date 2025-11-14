export type IllustrationPiece = {
  id: number
  src: string
  type: "image" | "video"
  cols?: number
}

export const illustrationPieces: IllustrationPiece[] = [
  { id: 10, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763118769/IMG_2521_qfjmrb.jpg", type: "image", cols: 3 }, //fish eye
  { id: 3, src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1763118900/FINAL_ukbovl.mp4", type: "video", cols: 3 }, //every vow you take
  { id: 9, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763118772/IMG_2519_u1nhet.jpg", type: "image", cols: 2 }, //plant head
  { id: 7, src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1763122213/wave_logo_tao_tao_tasi_art_-_Trim_iakikl.mp4", type: "video", cols: 3 }, //taotao tasi
  { id: 1, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763118927/ECF7EBD2-E992-4652-BAD1-DC1F2072BDE7_jdn6qc.jpg", type: "image", cols: 2 }, //bluegirl
  { id: 13, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117243/87A02048-13E6-4137-B3AA-557A04DC11DE_fk96zo.jpg", type: "image", cols: 3 }, //ohmygod
  { id: 4, src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1763118891/FINAL_BAND_ANIMATION_ufzaln.mp4", type: "video", cols: 3 }, //the strokes art
  { id: 11, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763118767/IMG_2520_lomrvv.jpg", type: "image", cols: 2 }, //meet me at our spot
  { id: 16, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117236/RPTG7478_nxvvju.jpg", type: "image", cols: 2 }, //journal
  { id: 5, src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1763118884/Groovy_Sack_Man_ed5jtt.mp4", type: "video", cols: 2 }, //bag head loop
  { id: 2, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763118923/C42CB0BC-F72C-479A-9F7A-19B7916AE860_pn8hb7.jpg", type: "image", cols: 2 },
  { id: 8, src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1763118873/Untitled_Artwork_nnykdg.mp4", type: "video", cols: 2 }, //tenorio sig
  { id: 23, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117085/GRJZ4225_dia9wz.jpg", type: "image", cols: 2 }, //fisherman
  { id: 14, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117241/9A051DB8-0D7E-4325-8760-4991E512BB2C_x8aycc.jpg", type: "image", cols: 2 },
  { id: 6, src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1763118880/sensei_ihcxpw.mp4", type: "video", cols: 2 },
  { id: 18, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117229/NZUY7580_iwqqxm.jpg", type: "image", cols: 2 }, //fuckinstuckhere
  { id: 12, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117246/528BC81A-F481-4E31-8F6B-D21C1EAC742C_iak6eo.jpg", type: "image", cols: 2 },
  { id: 26, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117077/C7EC5381-3CED-48F3-96AF-5E3BFFA571A1_fsgixr.jpg", type: "image", cols: 2 }, //lyon head
  { id: 15, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117238/4DF73CCB-0873-458D-83B6-844BE182521A_gahi5i.jpg", type: "image", cols: 2 },
  { id: 21, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117090/IMG_5013_deiqlm.jpg", type: "image", cols: 2 },
  { id: 24, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117082/EQYZ1049_iqfpcu.jpg", type: "image", cols: 2 },
  { id: 27, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117076/B7EABF8D-B4DA-40E2-8460-D59A91C34EF1_tupjao.jpg", type: "image", cols: 2 },
  { id: 25, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117080/DC1B5764-4FD3-4E11-83C9-50318216162B_d7ddrf.jpg", type: "image", cols: 2 },
  { id: 19, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117226/MJBH9431_bvbujg.jpg", type: "image", cols: 2 },
  { id: 29, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117049/IMG_9338_fdambn.jpg", type: "image", cols: 2 }, //bluetee
  { id: 20, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117223/MDXH3875_wsyj6u.jpg", type: "image", cols: 2 },
  { id: 30, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117047/LTBZ6525_g5ivvb.jpg", type: "image", cols: 2 },
  { id: 17, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117233/QMRH6745_tj9bcf.jpg", type: "image", cols: 2 },
  { id: 22, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117087/HWMO6973_cajecs.jpg", type: "image", cols: 2 },
  { id: 28, src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1763117073/592EC5E9-C5AB-41BA-97A4-1CFD814568DC_xcfztr.jpg", type: "image", cols: 2 },
]

export default {
  illustrationPieces,
}

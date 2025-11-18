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

const roll001Photos: LooseRollMedia[] = [
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940918/teeoceangif_oaxoah.mp4", type: "video" },
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940783/teeedkewal_n7k1so.mp4", type: "video" }, //kewalos gif
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940641/teeedkewal1_ei8otl.jpg", //southshore bay from kewalos

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940654/waikikisunsets_xjr6pc.jpg", //P waikiki sunset
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941056/sunteeportraits_lrwsg5.mp4", type: "video" }, //P tiara sun gif
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940652/teesun1_ws2ygy.jpg", //P tee sun 1
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940644/teesun2_de3rd4.jpg", //P tee sun 2
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940963/teeinsun_k5dwoe.mp4", type: "video" },

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940660/dolepark_n9gvym.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940573/dolepark1_j1qzcq.jpg",


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940643/teeedsurf_qch7lm.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941074/teeedsurf_jinkr9.mp4", type: "video" },


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940567/crawford_abdly1.jpg",//crawford

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940647/tonggs_yid5bj.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940649/tonggs1_bn6txz.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940587/ellateetongs_jorl6l.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940596/ellateetongs1_bvytdo.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940657/ellateetongs2_nsb8k5.jpg",
 

  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940916/teenaps_agdcpi.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940585/ella1_c92r5n.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940594/ella2_ac0ofv.jpg",


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940623/kap_ysu4vq.jpg",//ella kap
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940627/kap2_djjmah.jpg",

  
  

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940581/edsonatkap_szaovh.jpg", //single



  
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940623/kewaled_alxxoo.jpg", //KEWALOS
  


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940557/poker1_nt72od.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940557/poker_yucerc.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940558/poker2_ruaiqo.jpg",


  
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940552/3greenkube_kyo36d.jpg", //green kube coconut
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940637/4greenkube_buzsvk.jpg",

 

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940621/ket_vzwxmu.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940622/ket1_ol9tap.jpg",



   "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940581/edtee3_tttruc.jpg", //ed tee in car
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940586/edtee4_lnpx5g.jpg",



"https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940630/queenkap_y5biip.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940626/knots1_hpqrwn.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940627/knots2_nkhagt.jpg",
   { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941037/peyjoy_c43mtm.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940629/peyjoy1_fzqltb.jpg",



  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940553/1greenkube_dfoprp.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940576/2greenkube_h2hftl.jpg",



  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941036/embermobilekub_oz3qde.mp4", type: "video" },
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941038/kuboforcoconuts_crdwbd.mp4", type: "video" },


  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941021/kubobeachport_xtvuyi.mp4", type: "video" }, //kubo beach sand

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940625/kewaled1_htek2f.jpg", //KEWALOS SUNSET
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940950/purplekewalowaves_uyaf97.mp4", type: "video" },


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940567/5kubobeach_e7pflh.jpg",
   "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940583/DSCN0207_rbnfvr.jpg", //ella tee night out
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940567/4kubobeach_w5c6s2.jpg", //koko head kahala
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940567/3kubobeach_o6t4c1.jpg", ///b
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940556/2kubobeach_wvpd37.jpg",

  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940801/ellaworm_dexzrj.mp4", type: "video" },
    


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940570/drivin_z9z1ho.jpg", //CAR SELFIES
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940581/drivin1_oelo8h.jpg",

 "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940577/DSCN0468_yyx1v1.jpg", //DJ TEE
    { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941050/peytee_yjo42o.mp4", type: "video" },


  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940567/bridgekinau_cadrxm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940644/strtkinau_oyizjf.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941030/salad_pyfru2.mp4", type: "video" },

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940638/stlouisdrive_s1gccc.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940639/stlouisdrive1_yaacup.jpg",

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940646/teesurfs_duevod.jpg", //tee smilesflower

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940561/avasflowers_anigph.jpg",

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940567/avasis_j777qe.jpg",  //AVA SIS
 
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940552/DSCN0131_w7nr1a.jpg", //GUITAR TEE
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940555/IMG_9814_ndx2bn.jpg",
 

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940554/DSCN0208_vbugjb.jpg", //ednightout
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940553/DSCN0200_djlk3n.jpg", //teenightout




  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940613/fqs_2025-01-25_175340.774_e4amsd.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940615/fqs_2025-06-21_191328.302_nlyiji.jpg", //bean

  

  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940971/shawngrad4_x2d3iw.mp4", type: "video" }, //SHAWN grad hulas
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940633/shawngrad_vbpngh.jpg", 
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940634/shawngrad1_qbrvdx.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940636/shawngrad2_qcwaot.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940636/shawngrad3_s225pe.jpg",
  
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762940928/edtee_giffy_etvcwc.mp4", type: "video" }, //ed tee in mobile gif

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940635/river_ds0ehe.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940631/rainybow_q9pyx1.jpg",


    { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762941036/kubshif_d5v6dj.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940617/geetar1_jhocih.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940616/geetar2_pan4qx.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940618/geetar3_duat1r.jpg",

  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940547/cat1_v1kfia.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940547/cat2_etcxcs.jpg",



  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940589/fqs_2025-01-06_151828.817_ljoawm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940596/fqs_2025-01-12_102219.978_ywcdjd.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940597/fqs_2025-01-14_143022.110_umpomi.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940595/fqs_2025-01-15_173838.761_e9nkd1.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940601/fqs_2025-01-15_175129.697_hmgvtt.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940598/fqs_2025-01-15_175138.590_ap0xlu.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940602/fqs_2025-01-15_175402.346_mdfemx.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940608/fqs_2025-01-20_172734.909_h93zj7.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940605/fqs_2025-01-20_172900.241_eusghm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940604/fqs_2025-01-22_090828.029_pcdjcs.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940610/fqs_2025-01-24_164439.786_nqgf5v.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940612/fqs_2025-01-24_181834.044_ljwgoo.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940612/fqs_2025-01-25_114459.376_x42b0r.jpg",
  
  
]

const roll002Photos: LooseRollMedia[] = [
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844820/C3B905BE-8AE8-4D8F-96B8-50074A58F917_ijexec.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844809/apart_n9ptyh.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844810/apart1_oc1az9.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844829/fqs_2025-03-12_175900.632_d0cfzg.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844826/fqs_2025-02-03_082232.232_imjmzj.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844826/fqs_2025-02-03_082218.456_oz7eep.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844810/bar1_fcr8cq.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844810/bar2_g5kss5.jpg",
    { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844985/grad_whcxr7.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844855/grad1_lcgo2h.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844856/grad2_qxp1iy.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844857/grad3_ggoblx.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844827/fqs_2025-02-11_073944.000_tgdakm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844811/bdayg_uuzg6k.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844811/bdayg1_b4lq01.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844811/bdayg2_elvlny.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844811/bdayg3_nydqwy.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844960/glassesparty_khl4vb.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844823/flowers_e06hfm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844825/flowers1_txdcyh.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844811/beachet_pu6r8b.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844811/beachet1_vkxib2.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844812/beachet2_g1jwf3.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844812/beachet3_yijmxh.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844812/beachet4_mjjgas.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844815/beachet5_beoowf.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844816/beachet6_d6l8z9.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844816/beachet7_xjhsgg.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844816/beachet8_elpkum.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844831/fqs_2025-03-13_140910.573_tu7gxe.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844832/fqs_2025-03-30_023218.453_sjgxra.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844833/fqs_2025-04-06_132639.250_hz0bbj.jpg", //trees landscape
   { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844973/bellawardGIF_iwt27b.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844817/bells_wbsxtr.jpg", //bellawalking landscape
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844817/bllaz_j2bzuo.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844817/bllaz1_hu55ix.jpg",
   { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844975/tee_ydoxgy.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844833/fqs_2025-04-18_184326.679_si1kwl.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844820/brooke_tdzjzj.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844820/brooke1_guuccv.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844984/ellaguitar_hlpkv9.mp4", type: "video" },
  //"https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844833/fqs_2025-05-03_235343.454_yf5kbm.jpg", //ella
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844834/fqs_2025-05-03_235353.507_zld4zz.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844834/fqs_2025-05-03_235439.855_sq4ize.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844834/fqs_2025-05-04_093044.785_xvlhmm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844836/fqs_2025-05-04_102239.763_j6klcx.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844975/larsell_hdnf0n.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844821/elstee_us59xe.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844996/nolasellatee_ah5lfu.mp4", type: "video" },
   "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844846/fqs_2025-06-15_141710.517_o3khwh.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844838/fqs_2025-05-11_083444.343_twza0t.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844858/kai_jzplk2.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844859/kai1_letslm.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844859/kai2_wwulpi.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844860/kai3_nqa12t.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844982/tiaraportraits_geoxky.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844838/fqs_2025-05-25_153746.675_xbln0x.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844838/fqs_2025-05-25_155146.387_qbulek.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844839/fqs_2025-05-25_161044.065_rtnyzi.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844839/fqs_2025-05-25_161052.445_p8zpfh.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844850/fqs_2025-06-28_171104.045_sghrhi.jpg", //yard
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844974/elladrury_mbuikc.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844839/fqs_2025-06-05_054113.872_khdb9u.jpg", //pink kapahulu
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844986/avagiobridge_i1znpc.mp4", type: "video" },
    "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844861/kub_bgtpvi.jpg", //kubo window 1
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844861/kub1_zjzhy0.jpg", //kubo window 2
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844840/fqs_2025-06-08_135817.057_rgaobz.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844843/fqs_2025-06-08_141604.631_aadbtj.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844843/fqs_2025-06-10_053407.036_t8ulzx.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844862/lytee_b5y3vg.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844864/lytee1_i5cld3.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844844/fqs_2025-06-12_121144.132_vgnlxl.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844845/fqs_2025-06-13_144311.760_d7of2r.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844985/ellapool_orjj5e.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844873/taro_ijxiag.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844843/fqs_2025-06-11_184112.093_bgao5e.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762845236/gioavatarot_xadqbc.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844847/fqs_2025-06-20_135112.773_sdszsj.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844847/fqs_2025-06-20_135122.010_zfa0kd.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844848/fqs_2025-06-20_135155.121_dmytdy.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844848/fqs_2025-06-20_135317.745_eirt0c.jpg",
    "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762936497/fqs_2025-05-25_144153.217_hktl07.jpg", //tee smiles at ted
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844877/teds3_duc5px.jpg", //ella smiles at teds
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844876/teds_sh52ue.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844877/teds2_noamqa.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844877/teds4_s8cqix.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844850/fqs_2025-06-27_192217.512_tvyqnt.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844839/fqs_2025-05-26_184641.792_xvfvd6.jpg", //avagio texasbraz
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844851/fqs_2025-06-28_171115.405_kmgt6j.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844878/unc_x84mv6.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844985/unc_ebnp7h.mp4", type: "video" },
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844965/kewaloblues_odjzcq.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844870/peppas_yw4jg0.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844872/peppas1_nrutih.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844851/fqs_2025-07-18_210903.501_fqst30.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844872/pte1_tkeg3i.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844873/pte2_cw8ydn.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844873/pte3_sjyak7.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844873/pte4_qlzik2.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844851/fqs_2025-07-20_113545.924_jr52df.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844853/fqs_2025-07-22_140128.524_hzvzx5.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844854/fqs_2025-07-22_175056.535_ajsr9h.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844865/party3_g7jd7g.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844865/party_lhy1zt.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844864/party1_dbuip8.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844865/party2_isnhzg.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844865/party4_yuv7jx.jpg",
  { src: "https://res.cloudinary.com/djgkz5rkx/video/upload/v1762844977/larsmat_iilrz8.mp4", type: "video" },
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844866/party5_qn707s.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844869/party6_hrnuin.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844869/party7_zti7gq.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844869/party8_uiba6y.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844869/party9_liqezf.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844817/bobs_wheuam.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844819/bobs1_cud8oi.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844877/teemir_dctnut.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844878/teemir1_gkypcb.jpg",
  "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844855/fqs_2025-07-27_101201.684_ghsivh.jpg",
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
    cover: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916096/fih01_nqgsrf.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916102/fih08_bfwi2k.jpg",
        caption: "Filipinos in Hawai'i · Frame 09",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916101/fih06_bfgyq5.jpg",
        caption: "Filipinos in Hawai'i · Frame 07",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916100/fih07_nrlo9p.jpg",
        caption: "Filipinos in Hawai'i · Frame 08",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916089/fih034_vhim8h.jpg",
        caption: "Filipinos in Hawai'i · Frame 04",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916096/fih01_nqgsrf.jpg",
        caption: "Filipinos in Hawai'i · Frame 01",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916109/fih05_jxw0r7.jpg",
        caption: "Filipinos in Hawai'i · Frame 06",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916094/fih03_w9dihk.jpg",
        caption: "Filipinos in Hawai'i · Frame 03",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916095/fih02_tidp3u.jpg",
        caption: "Filipinos in Hawai'i · Frame 02",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916108/fih04_jvwzco.jpg",
        caption: "Filipinos in Hawai'i · Frame 05",
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916096/fih01_nqgsrf.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916095/fih02_tidp3u.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916094/fih03_w9dihk.jpg",
          ],
        },
        {
          id: "kryz-agpoon",
          heading: "Born-Again Filipino",
          body: [
            "This is Kryz Agpoon. She works front desk at the Queen Kapi‘olani Hotel and is in her early 20s, like me. We got to talking, and I learned that although I wasn’t born in the Philippines, she was. She’s been living on O‘ahu since she was two years old. Kryz is Filipino, Japanese, and part European—her mom is Filipina from Balungao, and raised her as a single mother here in Hawai‘i. Her younger brother still lives in the Philippines, which says a lot about the kinds of sacrifices families make when they migrate.",
            "I asked her, “Can you speak Tagalog?” She said, “Welll. Mmm. kind of? I can. But it’s 50/50, you know. My Tagalog is a little butchered,” and laughed. When I asked her what it’s like being Filipino in Hawai‘i, she said, “Honestly. I love it. I think it’s such a wonderful place with so much mixed culture. And I feel safe and comfortable here because it’s all familiar with the mix of cultures and different ethnic groups. I think that the mixing pot is fascinating and rich. There’s so much diversity.”",
            "And finally, I asked about her goals. She said, “I want to be able to buy my mom a house.” I told her, “Me too!” and she laughed. “That’s such a common thing for us Filipinos—we just want to provide and give back to our family. I know.”",
            "Kryz is a reflection of what it means to be a Born-Again Filipino—someone who may not speak perfect Tagalog or have grown up in the Philippines, but still carries the culture deeply. Her pride, her intention, and her gratitude are what make her story so familiar and so beautiful.",
          ],
          images: ["https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916089/fih034_vhim8h.jpg"],
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916108/fih04_jvwzco.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916109/fih05_jxw0r7.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916101/fih06_bfgyq5.jpg",
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916102/fih08_bfwi2k.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916099/fih09_tm2qvj.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916098/fih10_v7aapm.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916098/fih11_rzejw6.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916100/fih07_nrlo9p.jpg",
          ],
        },
        {
          id: "night-windows",
          heading: "Rizal Square",
          body: [
            "At Rizal Square, Filipinos gathering to play cards and talk story beneath the gaze of José Rizal—a quiet ritual of kinship and routine."
          ],
          images: [
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916111/fih13_gvhon3.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916110/fih14_s24vtl.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916089/fih12_kzmvvz.jpg"
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916097/DSCF7759-2_kkei1t.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916090/DSCF8094_ltdkt7.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916089/DSCF8095_xxtx8n.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916092/DSCF8097_kdcxgn.jpg",
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916088/DSCF8721_w6ga8p.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916092/DSCF8718_pf03jq.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916093/DSCF8724_zbnuqw.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916091/DSCF8689_phaelc.jpg",
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916104/DSCF8113_ix0jjh.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916105/DSCF8107_xs74zk.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916103/DSCF8110_okusxo.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916107/DSCF8109_pnbxdf.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762916106/DSCF8108_ttht49.jpg",
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
    cover: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-1_qmxhba.jpg",
    gallery: [
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-1_qmxhba.jpg",
        caption: "The Strays · Frame 01",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-5_vemr88.jpg",
        caption: "The Strays · Frame 05",
      },
      {
        src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845320/Tenorio-12_zunnua.jpg",
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-1_qmxhba.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845321/Tenorio-2_arq1p9.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-3_zkiudg.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845324/Tenorio-4_wo0wza.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-5_vemr88.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845323/Tenorio-6_sqznp6.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845321/Tenorio-7_rnlo1r.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-8_hwcw0j.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845320/Tenorio-9_fqpfat.jpg",
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
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845323/Tenorio-10_jwkjgi.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845319/Tenorio-11_ocfkjf.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845320/Tenorio-12_zunnua.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845320/Tenorio-13_cw3c9i.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845322/Tenorio-14_dohc6h.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845320/Tenorio-15_x1ezk7.jpg",
            "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762845321/Tenorio-16_ocp2am.jpg",
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
    cover: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915975/hongriresiz4_v11k3i.jpg",
    gallery: [
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/IMG_3286_b4v4xz.jpg", caption: "" }, //SQU mcully shoes
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915971/hongriresiz10_cdtnlr.jpg", caption: "" }, //L manoa greens
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846067/IMG_3275_nzmqqe.jpg", caption: "" }, //P mcully powerlines
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846075/Tenorio_6_uakkte.jpg", caption: "" }, //red mahana
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846070/Tenorio_5_ay0ijv.jpg", caption: "" }, //blue mahana
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846072/Tenorio_4_gfcl9q.jpg", caption: "" }, //L newspaper
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846075/Tenorio-8_y0axwm.jpg", caption: "" }, //P camry greens
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846072/Tenorio_2_3_jkbzyo.jpg", caption: "" }, //P chinese restaurant folk
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915975/hongriresiz4_v11k3i.jpg", caption: "" }, //L pink s king st 
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/IMG_3285_rqt5pm.jpg", caption: "" }, //L pink blue hues skyline f mahana
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/AgJan22-48_fuwmi5.jpg", caption: "" }, //L ross
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915971/hongriresiz5_yiz9ss.jpg", caption: "" }, //P mcdonalds wheelchair
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846071/Tenorio-16_fzrjni.jpg", caption: "" }, //P dorms red exit
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846070/Tenorio-3_qcjsi2.jpg", caption: "" }, //P bunny man
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846071/DSCF7486_ctcsht.jpg", caption: "" }, //L ramen packet
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846075/Tenorio-9_g0rqk8.jpg", caption: "" }, //P telephone 
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846068/IMG_3277_yphexs.jpg", caption: "" }, //P moped makalei
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846075/Tenorio11-25-22-40_ayncj5.jpg", caption: "" }, //P blue beach makalei
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846081/DSCF2381_sk3hs0.jpg", caption: "" }, //P duck in stream
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915971/hongriresiz7_hzd8cd.jpg", caption: "" }, //L pink mcully 
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846068/AgJan22-52_o2kgw8.jpg", caption: "" }, //L annaobriens moped
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846076/Tenorio_6_3_idz2mo.jpg", caption: "" }, //P rainbow drive in
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846070/Tenorio-4_hhdk4y.jpg", caption: "" }, //P date st shaka
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846073/Tenorio_5_3_tcwg2s.jpg", caption: "" }, //P liquors store
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846068/IMG_3276_jkr9in.jpg", caption: "" }, //L waimea rock
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846071/DSCF0857_m6mmmf.jpg", caption: "" }, //P kinau market dates
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846081/Tenorio-23_lots7t.jpg", caption: "" }, //L elementary basketball
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915973/hongriresiz2_zphejn.jpg", caption: "" }, //P orange windows
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846080/DSCF0395_ii3v19.jpg", caption: "" }, //L 777
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846071/DSCF8914_aq0yoc.jpg", caption: "" }, //L basketball 
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915971/hongriresiz9_nrhvyo.jpg", caption: "" }, //P mcully oven
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846070/Tenorio11-22-84_g01hbe.jpg", caption: "" }, //L makalei apartment dark
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915968/hongriresiz11_s9tvdv.jpg", caption: "" }, //L grafiti walls
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915969/hongriresiz3_vdqbms.jpg", caption: "" }, //P powerlines alas     
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915973/hongriresiz1_cmeph1.jpg", caption: "" }, //P 104 door
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/Tenorio_liph01.jpg", caption: "" }, //L makalei sunset
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846075/Tenorio_7_3_bi98e3.jpg", caption: "" }, //P homeless man book
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915968/hongriresiz6_caihih.jpg", caption: "" }, //P ala wai man
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846079/Tenorio-85_inuou7.jpg", caption: "" }, //L makalei rainbow
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846081/20220920-DSCF2233_kdsf6e.jpg", caption: "" }, //SQU palletes
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846068/20220911-DSCF2023_nd7pqy.jpg", caption: "" }, //P ala wai 
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846079/Tenorio-28_ulmbba.jpg", caption: "" }, //P inside mom and pop
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846075/Tenorio11-22-8_rdyqlo.jpg", caption: "" }, //L longsdrugs sking n beret
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/IMG_3281_ihubhe.jpg", caption: "" }, //L shoes in pink mcully powerlines
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846071/Tenorio_1_3_vao9dm.jpg", caption: "" }, //P kona coffee homeless
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846076/Tenorio-22_ascyao.jpg", caption: "" }, //P datestreet stream junk
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762915971/hongriresiz8_eaoheh.jpg", caption: "" }, //P sky scraper by alas
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/IMG_3283_ea1rzb.jpg", caption: "" }, //P mom and pop telephone booth
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846069/IMG_3282_wapx1m.jpg", caption: "" }, //P kinau streetfreeways
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846072/Tenorio_3_3_a96c18.jpg", caption: "" }, //P diamondhead neighborhood
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846068/IMG_3278_tzyvid.jpg", caption: "" }, //L makalei horizon sails
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846070/Tenorio11-22-30_s7uzco.jpg", caption: "" }, //GARAGE
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846068/AgJan22-88_vimlga.jpg", caption: "" }, //l homeless tent
      { src: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762846071/DSCF0828_gydurj.jpg", caption: "" }, //P friends on kinau 
      
    ],
    galleryLayout: "masonry",
    showGalleryCaptions: false,
  },
]

const roll003Photos: LooseRollMedia[] = [
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434503/fqs_2025-10-14_091915.142_ssqwmq.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434498/fqs_2025-10-14_110454.985_bssnov.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434493/fqs_2025-10-06_181046.257_r5c03q.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434489/fqs_2025-10-06_180452.713_ujjlz6.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434485/fqs_2025-10-14_100556.079_dk1fvz.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434481/fqs_2025-10-06_180354.698_s7odsm.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434475/fqs_2025-10-06_180256.487_as6xrn.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434471/fqs_2025-10-06_090424.083_lqwgeo.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434467/fqs_2025-10-06_090508.389_rjkfqi.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434462/fqs_2025-10-05_180730.164_rld0wm.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434458/fqs_2025-10-14_100321.572_s1paxk.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434454/fqs_2025-10-05_144504.575_a510hv.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434449/fqs_2025-10-05_150234.740_bcowsn.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434445/fqs_2025-10-14_093904.008_tfvnnw.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434441/fqs_2025-10-14_100100.304_spuftf.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434436/fqs_2025-10-14_095853.593_khwcvw.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434432/fqs_2025-10-05_122801.435_neeodf.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434428/fqs_2025-10-14_095849.573_ubx8si.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434423/fqs_2025-10-04_180547.497_eux0ic.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434419/fqs_2025-10-04_180522.240_dtynul.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434415/fqs_2025-10-14_095841.008_xwse1u.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434410/fqs_2025-10-11_135508.286_ebo16a.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434406/fqs_2025-10-04_180405.063_s4bauz.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434401/fqs_2025-10-04_180237.088_zpksin.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434397/fqs_2025-10-04_180207.721_p3kdwe.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434393/fqs_2025-10-04_091137.812_kmktcx.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434388/fqs_2025-10-04_091047.090_cfgniu.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434384/fqs_2025-10-14_092626.642_x3mfwz.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434379/fqs_2025-10-09_192325.752_lbju91.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434375/fqs_2025-10-09_115510.221_uz1fdp.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434371/fqs_2025-10-11_134821.943_twbxks.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434367/fqs_2025-10-14_090055.874_mmgmhw.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434363/fqs_2025-10-14_092305.444_ily1dj.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434359/fqs_2025-10-11_145848.849_yaahu9.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434355/fqs_2025-10-11_135909.184_erk6rj.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434350/fqs_2025-10-09_202336.176_fnfe4q.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434346/fqs_2025-10-14_092202.608_rc7f3f.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434342/fqs_2025-10-11_134845.778_twuxlj.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434338/fqs_2025-10-09_120357.740_wzjs9l.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434334/fqs_2025-10-11_150359.324_jr4tk3.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434330/fqs_2025-10-09_181758.550_apxds2.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434325/fqs_2025-10-11_145916.863_ebx9pd.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434321/fqs_2025-10-14_090257.148_kvgc2c.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434317/fqs_2025-10-09_202348.940_gkt2m6.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434313/fqs_2025-10-09_121440.281_cn8ek0.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434309/fqs_2025-10-14_093922.629_nkeu1v.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434304/fqs_2025-10-09_181716.922_rg55xg.jpg" },
  { src: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434302/fqs_2025-10-09_181642.822_looeoe.jpg" },
]

export const getCollectionBySlug = (slug: string) => photoCollections.find((collection) => collection.slug === slug)

export const photoGalleries: PhotoGallery[] = [
  {
    id: "roll001",
    slug: "roll-001",
    title: "Roll001",
    subtitle: "Spring 2025 · 33mm Film",
    cover: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940654/waikikisunsets_xjr6pc.jpg",
    preview: [
      "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940654/waikikisunsets_xjr6pc.jpg",
      "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940647/tonggs_yid5bj.jpg",
      "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762940623/kewaled_alxxoo.jpg",
    ],
    photos: roll001Photos,
  },
  {
    id: "roll002",
    slug: "roll-002",
    title: "Roll002",
    subtitle: "Summer 2025 · 33mm Film",
    description: "The summer I turned 22 and graduated with my cool film degree.",
    cover: "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844839/fqs_2025-05-25_161044.065_rtnyzi.jpg",
    preview: [
      "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844856/grad2_qxp1iy.jpg",
      "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844859/kai2_wwulpi.jpg",
      "https://res.cloudinary.com/djgkz5rkx/image/upload/v1762844865/party4_yuv7jx.jpg",
    ],
    photos: roll002Photos,
  },
  {
    id: "roll003",
    slug: "roll-003",
    title: "Roll003",
    subtitle: "October 2025 · 33mm Film",
    description: "Visit back home to Guam.",
    cover: "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434503/fqs_2025-10-14_091915.142_ssqwmq.jpg",
    preview: [
      "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434503/fqs_2025-10-14_091915.142_ssqwmq.jpg",
      "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434498/fqs_2025-10-14_110454.985_bssnov.jpg",
      "http://res.cloudinary.com/djgkz5rkx/image/upload/v1763434493/fqs_2025-10-06_181046.257_r5c03q.jpg",
    ],
    photos: roll003Photos,
  },
]

export const getGalleryBySlug = (slug: string) => photoGalleries.find((gallery) => gallery.slug === slug)

export default {
  photoCollections,
  photoGalleries,
  getCollectionBySlug,
  getGalleryBySlug,
}

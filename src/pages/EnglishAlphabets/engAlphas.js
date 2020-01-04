const alphabets = [
  {
    title: 'A a',
    background: '#ff0000',
    text: `Apple ( अँपल - सफरचंद )`,
    path: require('./images/1_A.jpg'),
    pathImg: require('./images/objects/1_a.jpeg'),
    vidSrc: require('./videos/1_a.mp4')
  },
  {
    title: 'B b',
    background: '#FFA500',
    text: `Boll ( बॉल - चेंडू )`,
    path: require('./images/2_B.jpg'),
    pathImg: require('./images/objects/2_b.jpg'),
    vidSrc: require('./videos/2_b.mp4')
  },
  {
    title: 'C c',
    background: '#ffff00',
    text: `Cat ( कॅट - मांजर )`,
    path: require('./images/3_C.jpg'),
    pathImg: require('./images/objects/3_c.jpg'),
    vidSrc: require('./videos/3_c.mp4')
  },
  {
    title: 'D d',
    background: '#00ff00',
    text: `Dog ( डॉग - कुत्रा )`,
    path: require('./images/4_D.jpg'),
    pathImg: require('./images/objects/4_d.jpg'),
    vidSrc: require('./videos/4_d.mp4')
  },
  {
    title: 'E e',
    background: '#6a0dad',
    text: 'Elephant ( एलेफंट - हत्ती )',
    path: require('./images/5_E.jpg'),
    pathImg: require('./images/objects/5_e.jpg'),
    vidSrc: require('./videos/5_e.mp4')
  },
  {
    title: 'F f',
    background: '#FF3383',
    text: 'Fox ( फॉक्स - कोल्हा )',
    path: require('./images/6_F.jpg'),
    pathImg: require('./images/objects/6_f.jpg'),
    vidSrc: require('./videos/6_f.mp4')
  },
  {
    title: 'G g',
    background: '#ffc0cb',
    text: 'Got ( गोट - शेळी )',
    path: require('./images/7_G.jpg'),
    pathImg: require('./images/objects/7_g.jpg'),
    vidSrc: require('./videos/7_g.mp4')
  },
  {
    title: 'H h',
    background: '#ff0000',
    text: 'Hen ( हेन - कोंबडी )',
    path: require('./images/9_H.jpg'),
    pathImg: require('./images/objects/8_h.jpg'),
    vidSrc: require('./videos/8_h.mp4')
  },
  {
    title: 'I i',
    background: '#FFA500',
    text: 'Ink ( इंक - शाई )',
    path: require('./images/10_I.jpg'),
    pathImg: require('./images/objects/9_i.jpg'),
    vidSrc: require('./videos/9_i.mp4')
  },
  {
    title: 'J j',
    background: '#ffff00',
    text: 'Jeep ( जीप - जीपगाडी )',
    path: require('./images/11_J.jpg'),
    pathImg: require('./images/objects/10_j.jpg'),
    vidSrc: require('./videos/10_j.mp4')
  }, //rep
  {
    title: 'K k',
    background: '#ff0000',
    text: `Kite ( काइट - पतंग )`,
    path: require('./images/12_K.jpg'),
    pathImg: require('./images/objects/11_k.png'),
    vidSrc: require('./videos/11_k.mp4')
  },
  {
    title: 'L l',
    background: '#FFA500',
    text: `Lemon ( लेमन - लिंबू )`,
    path: require('./images/13_L.jpg'),
    pathImg: require('./images/objects/12_l.jpg'),
    vidSrc: require('./videos/12_l.mp4')
  },
  {
    title: 'M m',
    background: '#ffff00',
    text: `Monkey ( मंकी - माकड )`,
    path: require('./images/14_M.jpg'),
    pathImg: require('./images/objects/13_m.jpg'),
    vidSrc: require('./videos/13_m.mp4')
  },
  {
    title: 'N n',
    background: '#00ff00',
    text: `Nest ( नेस्ट - घरटं )`,
    path: require('./images/15_N.jpg'),
    pathImg: require('./images/objects/14_n.jpg'),
    vidSrc: require('./videos/14_n.mp4')
  },
  {
    title: 'O o',
    background: '#6a0dad',
    text: 'Owl ( औल - घुबड )',
    path: require('./images/16_O.jpg'),
    pathImg: require('./images/objects/15_o.jpg'),
    vidSrc: require('./videos/15_o.mp4')
  },
  {
    title: 'P p',
    background: '#FF3383',
    text: 'Parrot ( पॅरोट - पोपट )',
    path: require('./images/17_P.jpg'),
    pathImg: require('./images/objects/16_p.jpg'),
    vidSrc: require('./videos/16_p.mp4')
  },
  {
    title: 'Q q',
    background: '#ffc0cb',
    text: 'Queen ( क्वीन - राणी )',
    path: require('./images/18_Q.jpg'),
    pathImg: require('./images/objects/17_q.png'),
    vidSrc: require('./videos/17_q.mp4')
  },
  {
    title: 'R r',
    background: '#ff0000',
    text: 'Rat ( रॅट - उंदीर )',
    path: require('./images/19_R.jpg'),
    pathImg: require('./images/objects/18_r.jpg'),
    vidSrc: require('./videos/18_r.mp4')
  },
  {
    title: 'S s',
    background: '#FFA500',
    text: 'Sun ( सन - सूर्य )',
    path: require('./images/20_S.jpg'),
    pathImg: require('./images/objects/19_s.jpg'),
    vidSrc: require('./videos/19_s.mp4')
  },
  {
    title: 'T t',
    background: '#ffff00',
    text: 'Tiger ( टायगर - वाघ )',
    path: require('./images/21_T.jpg'),
    pathImg: require('./images/objects/20_t.jpg'),
    vidSrc: require('./videos/20_t.mp4')
  }, //Rep
  {
    title: 'U u',
    background: '#ff0000',
    text: `Umbrella ( अम्ब्रेला - छत्री )`,
    path: require('./images/22_U.jpg'),
    pathImg: require('./images/objects/21_u.jpg'),
    vidSrc: require('./videos/21_u.mp4')
  },
  {
    title: 'V v',
    background: '#FFA500',
    text: `Van ( व्हॅन - एक वाहन )`,
    path: require('./images/21_V.jpg'),
    pathImg: require('./images/objects/22_v.jpg'),
    vidSrc: require('./videos/22_v.mp4')
  },
  {
    title: 'W w',
    background: '#ffff00',
    text: `Watch ( वाच - घड्याळ )`,
    path: require('./images/22_W.jpg'),
    pathImg: require('./images/objects/23_w.gif'),
    vidSrc: require('./videos/23_w.mp4')
  },
  {
    title: 'X x',
    background: '#00ff00',
    text: `X-mas ( ख्रिसमस - नाताळ )`,
    path: require('./images/23_X.jpg'),
    pathImg: require('./images/objects/24_x.jpg'),
    vidSrc: require('./videos/24_x.mp4')
  },
  {
    title: 'Y y',
    background: '#6a0dad',
    text: 'Yak ( याक - वनगाय )',
    path: require('./images/24_Y.jpg'),
    pathImg: require('./images/objects/25_y.jpg'),
    vidSrc: require('./videos/25_y.mp4')
  },
  {
    title: 'Z z',
    background: '#FF3383',
    text: 'Zebra ( झेब्रा - झेब्रा )',
    path: require('./images/25_Z.jpg'),
    pathImg: require('./images/objects/26_z.jpg'),
    vidSrc: require('./videos/26_z.mp4')
  }
]

export default alphabets
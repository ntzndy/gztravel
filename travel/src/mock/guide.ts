// 导游服务模拟数据
export interface Guide {
  id: number;
  name: { zh: string; en: string; ja: string };
  avatar: string;
  title: { zh: string; en: string; ja: string };
  rating: number;
  reviewCount: number;
  yearsOfExperience: number;
  languages: string[];
  specialties: { zh: string[]; en: string[]; ja: string[] };
  coverImage: string;
  price: string;
  availability: string;
  bio: { zh: string; en: string; ja: string };
  gallery: string[];
  serviceArea: string;
  contact: string;
  honors: { zh: string[]; en: string[]; ja: string[] };
  tags: { zh: string[]; en: string[]; ja: string[] };
  reviews: GuideReview[];
}

export interface GuideReview {
  user: string;
  content: string;
  date: string;
}

export const guides: Guide[] = [
  {
    id: 1,
    name: { zh: '小红', en: 'Xiaohong', ja: 'シャオホン' },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: { zh: '资深导游 | 民族文化专家', en: 'Senior Guide | Ethnic Culture Expert', ja: 'ベテランガイド | 民族文化専門家' },
    rating: 4.9,
    reviewCount: 328,
    yearsOfExperience: 8,
    languages: ['中文', '英语', '苗语'],
    specialties: {
      zh: ['民族文化', '深度游', '摄影路线'],
      en: ['Ethnic Culture', 'In-depth Tours', 'Photography Routes'],
      ja: ['民族文化', 'ディープツアー', '写真ルート']
    },
    coverImage: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥800/天起',
    availability: '最快明天可约',
    bio: {
      zh: '热爱民族文化，擅长深度游路线策划，8年带团经验，带您深入体验本地风情。曾多次获得优秀导游称号，服务过上千名游客，广受好评。',
      en: 'Passionate about ethnic culture, skilled in planning in-depth tours, with 8 years of experience leading groups to deeply experience local customs. Multiple award-winning guide, served thousands of tourists with high praise.',
      ja: '民族文化が大好きで、ディープツアーの企画が得意です。8年のガイド経験があり、地元の風習を深く体験できます。優秀なガイドとして表彰され、数千人の観光客に好評です。'
    },
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵州全境、黔东南苗族侗族自治州',
    contact: '188-8888-8888',
    honors: {
      zh: ['2022年度优秀导游', '民族文化推广大使'],
      en: ['2022 Outstanding Guide', 'Ethnic Culture Ambassador'],
      ja: ['2022年優秀ガイド', '民族文化大使']
    },
    tags: {
      zh: ['耐心细致', '路线丰富', '摄影达人'],
      en: ['Patient and Detailed', 'Rich Routes', 'Photography Expert'],
      ja: ['忍耐強く細かい', '豊富なルート', '写真の達人']
    },
    reviews: [
      { user: '游客A', content: '小红非常专业，讲解很细致，体验感满分！', date: '2024-05-12' },
      { user: '游客B', content: '带我们深入苗寨，感受了不一样的民族风情。', date: '2024-04-28' }
    ]
  },
  {
    id: 2,
    name: { zh: '阿强', en: 'Aqiang', ja: 'アーチャン' },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: { zh: '户外探险专家 | 登山向导', en: 'Outdoor Adventure Expert | Mountain Guide', ja: 'アウトドアアドベンチャー専門家 | 登山ガイド' },
    rating: 4.8,
    reviewCount: 256,
    yearsOfExperience: 6,
    languages: ['中文', '英语'],
    specialties: {
      zh: ['户外探险', '登山', '野营'],
      en: ['Outdoor Adventure', 'Mountain Climbing', 'Camping'],
      ja: ['アウトドアアドベンチャー', '登山', 'キャンプ']
    },
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥1200/天起',
    availability: '本周末可约',
    bio: {
      zh: '热爱户外，擅长登山与野营，6年带队经验，安全可靠。熟悉贵州各大山脉，拥有国家认证户外领队证书。',
      en: 'Passionate about outdoor activities, skilled in mountain climbing and camping, with 6 years of experience leading groups safely. Familiar with major mountain ranges in Guizhou, holds national certification as an outdoor leader.',
      ja: 'アウトドア活動が大好きで、登山とキャンプが得意です。6年のガイド経験があり、安全にグループを引率します。貴州の主要な山脈に詳しく、国家認定のアウトドアリーダー資格を持っています。'
    },
    gallery: [
      'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵州山地、黔西南',
    contact: '139-9999-9999',
    honors: {
      zh: ['国家认证户外领队', '2023年度安全带队奖'],
      en: ['National Certified Outdoor Leader', '2023 Safety Leadership Award'],
      ja: ['国家認定アウトドアリーダー', '2023年安全リーダーシップ賞']
    },
    tags: {
      zh: ['安全第一', '体能强', '野外生存'],
      en: ['Safety First', 'Strong Physical Fitness', 'Wilderness Survival'],
      ja: ['安全第一', '体力が強い', '野外生存']
    },
    reviews: [
      { user: '户外爱好者C', content: '阿强带队很有经验，整个行程非常安全顺利。', date: '2024-06-01' },
      { user: '登山小组D', content: '路线安排合理，风景很美，下次还会再约！', date: '2024-05-20' }
    ]
  },
  {
    id: 3,
    name: { zh: '美玲', en: 'Meiling', ja: 'メイリン' },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: { zh: '美食文化达人 | 城市探索家', en: 'Food Culture Expert | Urban Explorer', ja: '美食文化の達人 | 都市探検家' },
    rating: 4.95,
    reviewCount: 412,
    yearsOfExperience: 5,
    languages: ['中文', '粤语', '英语'],
    specialties: {
      zh: ['美食探索', '城市文化', '历史建筑'],
      en: ['Food Exploration', 'Urban Culture', 'Historical Architecture'],
      ja: ['美食探索', '都市文化', '歴史的建築']
    },
    coverImage: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥600/天起',
    availability: '接受预约中',
    bio: {
      zh: '城市美食与文化深度体验，5年带队经验，带你发现不一样的城市。熟悉本地所有网红美食和历史文化景点。',
      en: 'Deep experience in urban food and culture, with 5 years of experience leading groups to discover a different city. Familiar with all local网红美食 and historical cultural attractions.',
      ja: '都市の美食と文化を深く体験し、5年のガイド経験があります。地元のすべての网红美食と歴史文化スポットに詳しいです。'
    },
    gallery: [
      'https://images.unsplash.com/photo-1494790108755-2616b612c03c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵阳市区、周边城市',
    contact: '137-7777-7777',
    honors: {
      zh: ['2021年度美食推荐官'],
      en: ['2021 Food Recommendation Officer'],
      ja: ['2021年美食推薦官']
    },
    tags: {
      zh: ['吃货首选', '文化讲解', '路线灵活'],
      en: ['Foodie\'s Choice', 'Cultural Explanation', 'Flexible Routes'],
      ja: ['食通の選択', '文化解説', '柔軟なルート']
    },
    reviews: [
      { user: '吃货E', content: '美玲带我们吃遍了贵阳，太满足了！', date: '2024-05-18' },
      { user: '历史迷F', content: '讲解很专业，收获很多冷知识。', date: '2024-04-30' }
    ]
  },
  {
    id: 4,
    name: { zh: '老王', en: 'Lao Wang', ja: 'ラオワン' },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: { zh: '摄影导师 | 自然风光专家', en: 'Photography Mentor | Natural Scenery Expert', ja: '写真メンター | 自然風景専門家' },
    rating: 4.85,
    reviewCount: 189,
    yearsOfExperience: 10,
    languages: ['中文', '英语'],
    specialties: {
      zh: ['风光摄影', '后期指导', '器材建议'],
      en: ['Landscape Photography', 'Post-processing Guidance', 'Equipment Advice'],
      ja: ['風景写真', '後処理指導', '機材アドバイス']
    },
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥1500/天起',
    availability: '下周可约',
    bio: {
      zh: '10年摄影经验，擅长自然风光拍摄与后期指导。多次举办摄影展，作品获奖无数。',
      en: '10 years of photography experience, skilled in natural scenery shooting and post-processing guidance. Multiple photography exhibitions, numerous award-winning works.',
      ja: '10年の写真経験があり、自然風景の撮影と後処理指導が得意です。複数の写真展を開催し、数々の受賞作品があります。'
    },
    gallery: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵州自然景区',
    contact: '136-6666-6666',
    honors: {
      zh: ['省级摄影大赛金奖', '2023年度优秀摄影导师'],
      en: ['Provincial Photography Competition Gold Medal', '2023 Outstanding Photography Mentor'],
      ja: ['省級写真コンテスト金賞', '2023年優秀写真メンター']
    },
    tags: {
      zh: ['摄影高手', '后期指导', '风光控'],
      en: ['Photography Expert', 'Post-processing Guidance', 'Landscape Enthusiast'],
      ja: ['写真の達人', '後処理指導', '風景マニア']
    },
    reviews: [
      { user: '摄影爱好者G', content: '老王的摄影课很实用，收获满满。', date: '2024-05-25' },
      { user: '自然控H', content: '带我们拍到了绝美的风景照，非常感谢！', date: '2024-05-10' }
    ]
  }
];
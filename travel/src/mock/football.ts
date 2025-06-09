// 足球场地模拟数据
export interface Facilities {
  fieldSize: string;
  grassType: string;
  lighting: string;
  changeRooms: number;
  showers: number;
  parking: number;
}

export interface Price {
  type: string;
  price: string;
}

export interface OpeningHours {
  weekdays: string;
  weekends: string;
  holidays: string;
}

export interface Image {
  url: string;
  description: string;
}

export interface FootballReview {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export interface NearbyFacility {
  name: string;
  distance: string;
  type: string;
}

export interface FootballField {
  id: number;
  name: string;
  coverImage: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  features: string[];
  facilities: Facilities;
  prices: Price[];
  openingHours: OpeningHours;
  bookingRules: string[];
  images: Image[];
  reviews: FootballReview[];
  nearbyFacilities: NearbyFacility[];
}

export const footballFields: Record<string, FootballField> = {
  "1": {
    id: 1,
    name: '星光足球场',
    coverImage: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '星光足球场是一个专业级的足球场地，配备完善的设施和专业的草坪。无论是业余爱好者还是专业球队，都能在这里享受到高质量的足球运动体验。',
    location: '广州市天河区体育中心西路123号',
    rating: 4.8,
    reviewCount: 328,
    features: [
      '标准11人制球场',
      'FIFA认证草坪',
      '夜间照明',
      '更衣室',
      '停车场',
      '观众席'
    ],
    facilities: {
      fieldSize: '105m × 68m',
      grassType: '混合草皮',
      lighting: '1200勒克斯LED照明',
      changeRooms: 4,
      showers: 8,
      parking: 100
    },
    prices: [
      {
        type: '白天（8:00-17:00）',
        price: '￥800/小时'
      },
      {
        type: '晚上（18:00-22:00）',
        price: '￥1200/小时'
      },
      {
        type: '全天包场',
        price: '￥12000/天'
      }
    ],
    openingHours: {
      weekdays: '08:00-22:00',
      weekends: '08:00-23:00',
      holidays: '09:00-22:00'
    },
    bookingRules: [
      '至少提前24小时预约',
      '取消预约需提前12小时',
      '雨天自动取消并退款',
      '禁止穿钉鞋'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '球场全景'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '更衣室'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '夜景'
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: '张先生',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 5,
        comment: '场地维护得很好，草坪很舒服，设施也很完善。',
        date: '2024-03-15'
      },
      {
        id: 2,
        user: {
          name: '李教练',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 4,
        comment: '经常带队来这里训练，场地质量稳定，就是高峰期比较难预约。',
        date: '2024-03-10'
      }
    ],
    nearbyFacilities: [
      {
        name: '体育中心地铁站',
        distance: '500米',
        type: '交通'
      },
      {
        name: '运动主题餐厅',
        distance: '800米',
        type: '餐饮'
      },
      {
        name: '体育用品商店',
        distance: '300米',
        type: '购物'
      }
    ]
  },
  "2": {
    id: 2,
    name: '丹寨村超球场',
    coverImage: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '丹寨村超球场是一个充满民族特色的足球场地，融合了现代设施和苗族文化元素。',
    location: '贵州省黔东南州丹寨县',
    rating: 4.7,
    reviewCount: 256,
    features: [
      '标准7人制球场',
      '民族特色装饰',
      '夜间照明',
      '更衣室'
    ],
    facilities: {
      fieldSize: '50m × 30m',
      grassType: '人造草皮',
      lighting: '800勒克斯LED照明',
      changeRooms: 2,
      showers: 4,
      parking: 30
    },
    prices: [
      {
        type: '白天（8:00-17:00）',
        price: '￥300/小时'
      },
      {
        type: '晚上（18:00-22:00）',
        price: '￥400/小时'
      },
      {
        type: '全天包场',
        price: '￥3000/天'
      }
    ],
    openingHours: {
      weekdays: '08:00-22:00',
      weekends: '08:00-22:00',
      holidays: '09:00-21:00'
    },
    bookingRules: [
      '至少提前12小时预约',
      '取消预约需提前6小时',
      '雨天可正常使用',
      '禁止穿钉鞋'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '球场全景'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '民族特色装饰'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '夜景'
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: '王教练',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 5,
        comment: '场地虽小但设施齐全，很适合业余比赛。',
        date: '2024-03-20'
      },
      {
        id: 2,
        user: {
          name: '小李',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 4,
        comment: '民族特色很有趣，价格也很实惠。',
        date: '2024-03-18'
      }
    ],
    nearbyFacilities: [
      {
        name: '丹寨古镇',
        distance: '1公里',
        type: '景点'
      },
      {
        name: '农家乐',
        distance: '500米',
        type: '餐饮'
      },
      {
        name: '便利店',
        distance: '200米',
        type: '购物'
      }
    ]
  }
};

// 足球赛事数据
export interface MatchTeam {
  name: string;
  logo: string;
  score?: number;
}

export interface MatchSchedule {
  id: number;
  round: string;
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
  date: string;
  time: string;
  venue: string;
  ticketInfo?: string;
  broadcastChannel?: string;
}

export interface MatchHighlight {
  id: number;
  title: string;
  type: 'interview' | 'highlight' | 'report';
  matchInfo: {
    homeTeam: string;
    awayTeam: string;
    score?: string;
    date: string;
  };
  coverImage: string;
  content: string;
  videoUrl?: string;
  images?: string[];
  tags: string[];
  publishDate: string;
}

export interface FootballData {
  schedules: MatchSchedule[];
  highlights: MatchHighlight[];
}

export const footballData: FootballData = {
  schedules: [
    {
      id: 1,
      round: "2024贵州村超联赛第四轮",
      homeTeam: {
        name: "丹寨万达小镇队",
        logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop"
      },
      awayTeam: {
        name: "雷山苗寨联队",
        logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop"
      },
      date: "2024-03-27",
      time: "19:30",
      venue: "丹寨县民族文化体育场",
      ticketInfo: "门票：30元/人",
      broadcastChannel: "贵州文体频道"
    },
    {
      id: 2,
      round: "2024贵州村超联赛第四轮",
      homeTeam: {
        name: "从江加榜梯田队",
        logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop"
      },
      awayTeam: {
        name: "黄平飞云队",
        logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop"
      },
      date: "2024-03-28",
      time: "15:00",
      venue: "从江县民族体育场",
      ticketInfo: "门票：20元/人",
      broadcastChannel: "贵州文体频道"
    },
    {
      id: 3,
      round: "2024贵州村超联赛第四轮",
      homeTeam: {
        name: "台江银龙队",
        logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop"
      },
      awayTeam: {
        name: "榕江三宝侗寨队",
        logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=100&h=100&fit=crop"
      },
      date: "2024-03-29",
      time: "20:00",
      venue: "台江县民族体育场",
      ticketInfo: "门票：25元/人",
      broadcastChannel: "贵州文体频道"
    }
  ],
  highlights: [
    {
      id: 1,
      title: "\"村超\"巨星杨小明：从放牛娃到球场英雄",
      type: "interview",
      matchInfo: {
        homeTeam: "榕江三宝侗寨队",
        awayTeam: "从江加榜梯田队",
        score: "2-1",
        date: "2024-03-25"
      },
      coverImage: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1200&h=600&fit=crop",
      content: "在上周日的比赛中，杨小明梅开二度带领榕江三宝侗寨队取得胜利。赛后，这位来自大山深处的\"村超\"巨星接受了我们的专访...",
      images: [
        "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=600&h=400&fit=crop"
      ],
      tags: ["村超", "榕江三宝侗寨队", "杨小明", "赛后采访"],
      publishDate: "2024-03-26"
    },
    {
      id: 2,
      title: "精彩回放：丹寨万达小镇队vs雷山苗寨联队",
      type: "highlight",
      matchInfo: {
        homeTeam: "丹寨万达小镇队",
        awayTeam: "雷山苗寨联队",
        score: "3-3",
        date: "2024-03-20"
      },
      coverImage: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1200&h=600&fit=crop",
      content: "上周三的比赛堪称本赛季最精彩的对决之一，双方六粒进球，精彩纷呈...",
      videoUrl: "https://example.com/highlights/match123",
      tags: ["村超", "精彩回放", "丹寨万达小镇队", "雷山苗寨联队"],
      publishDate: "2024-03-21"
    },
    {
      id: 3,
      title: "特别报道：村超带动乡村振兴",
      type: "report",
      matchInfo: {
        homeTeam: "台江银龙队",
        awayTeam: "黄平飞云队",
        date: "2024-03-22"
      },
      coverImage: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1200&h=600&fit=crop",
      content: "随着村超联赛的持续升温，越来越多的乡村通过足球运动推动当地旅游发展...",
      images: [
        "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=600&h=400&fit=crop"
      ],
      tags: ["村超", "特别报道", "乡村振兴"],
      publishDate: "2024-03-23"
    }
  ]
}; 
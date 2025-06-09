// 景点模拟数据
export interface NearbyAttraction {
  id: number;
  name: string;
  distance: string;
  image: string;
}

export interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Attraction {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: string;
  openingHours: string;
  bestTimeToVisit: string;
  features: string[];
  highlights: Highlight[];
  tips: string[];
  nearbyAttractions: NearbyAttraction[];
}

export const attractions: Record<string, Attraction> = {
  "1": {
    id: 1,
    name: '黄果树瀑布',
    description: '黄果树瀑布是中国最大的瀑布，也是世界著名的大瀑布之一。瀑布高77.8米，宽101米，气势磅礴，景色壮观。',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: '贵州省安顺市镇宁布依族苗族自治县',
    rating: 4.8,
    reviewCount: 1250,
    price: '￥120',
    openingHours: '08:00-18:00',
    bestTimeToVisit: '4-10月',
    features: [
      '世界著名瀑布',
      '自然景观',
      '摄影胜地',
      '避暑胜地'
    ],
    highlights: [
      {
        id: 1,
        title: '瀑布观景台',
        description: '最佳观赏瀑布的位置，可以近距离感受瀑布的震撼。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        title: '水帘洞',
        description: '瀑布后面的天然洞穴，可以体验穿瀑而过的刺激。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        title: '天星桥',
        description: '横跨瀑布的观景桥，可以欣赏到瀑布的全景。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    tips: [
      '建议早上前往，避开人流高峰',
      '准备雨具，瀑布水汽较大',
      '穿防滑鞋，地面湿滑',
      '注意保护相机等电子设备'
    ],
    nearbyAttractions: [
      {
        id: 1,
        name: '龙宫',
        distance: '5公里',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        name: '天星桥',
        distance: '2公里',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        name: '陡坡塘',
        distance: '3公里',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  },
  "2": {
    id: 2,
    name: '荔波小七孔',
    description: '世界自然遗产地，被誉为"地球上的绿宝石"，拥有原始的自然风光。',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: '贵州省荔波县',
    rating: 4.7,
    reviewCount: 800,
    price: '￥100',
    openingHours: '08:00-18:00',
    bestTimeToVisit: '4-10月',
    features: [
      '世界自然遗产',
      '原始自然风光',
      '摄影胜地',
      '避暑胜地'
    ],
    highlights: [
      {
        id: 1,
        title: '小七孔桥',
        description: '小七孔桥是荔波小七孔景区的标志性建筑，桥身由青石砌成，桥孔由青石板铺就。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        title: '水上森林',
        description: '水上森林是荔波小七孔景区的一大特色，森林与水完美结合，形成独特的自然景观。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        title: '翠谷瀑布',
        description: '翠谷瀑布是荔波小七孔景区的一大亮点，瀑布从高耸的山崖上倾泻而下，水花四溅，气势磅礴。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    tips: [
      '建议早上前往，避开人流高峰',
      '准备雨具，景区内多雨',
      '穿防滑鞋，部分路段湿滑',
      '注意保护相机等电子设备'
    ],
    nearbyAttractions: [
      {
        id: 1,
        name: '荔波古镇',
        distance: '5公里',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        name: '茂兰自然保护区',
        distance: '2公里',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        name: '小七孔景区',
        distance: '3公里',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  }
}; 
import { Guide } from './guide';

export interface Order {
  id: number;
  orderNumber: string;
  type: '导游服务' | '景点门票' | '文化体验' | '足球场预订';
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  status: '待使用' | '已完成' | '已取消';
  date: string;
  usageDate: string;
  location: string;
  description: string;
  guide?: Guide;
  itinerary?: {
    time: string;
    activity: string;
    location: string;
  }[];
  validUntil?: string;
  included: string[];
  excluded: string[];
  notes: string;
}

export const mockOrders: Record<number, Order> = {
  1: {
    id: 1,
    orderNumber: 'GZ20241201001',
    type: '导游服务',
    title: '小红 - 苗族文化深度游',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    price: '¥800',
    originalPrice: '¥1000',
    status: '已完成',
    date: '2024-11-28',
    usageDate: '2024-12-05',
    location: '贵州雷山',
    description: '深度体验苗族文化，包含传统服饰试穿、银饰制作体验、苗族歌舞欣赏等项目。专业导游全程陪同，让您深入了解苗族的历史文化和民俗风情。',
    guide: {
      id: 1,
      name: { zh: '小红', en: 'Xiaohong', ja: 'シャオホン' },
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face',
      title: { zh: '资深导游 | 民族文化专家', en: 'Senior Guide | Ethnic Culture Expert', ja: 'ベテランガイド | 民族文化専門家' },
      rating: 4.9,
      reviewCount: 328,
      yearsOfExperience: 8,
      languages: ['中文', '英语', '苗语'],
      specialties: {
        zh: ['民族文化', '摄影指导', '美食推荐'],
        en: ['Ethnic Culture', 'Photography Guidance', 'Food Recommendations'],
        ja: ['民族文化', '写真指導', '美食推薦']
      },
      coverImage: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      price: '¥800/天起',
      availability: '最快明天可约',
      bio: {
        zh: '专注于苗族文化体验导游服务',
        en: 'Focused on Miao ethnic culture experience guide services',
        ja: '苗族文化体験ガイドサービスに特化'
      },
      gallery: [
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      serviceArea: '贵州全境、黔东南苗族侗族自治州',
      contact: '138****8888',
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
    itinerary: [
      { time: '09:00', activity: '集合出发', location: '雷山县游客中心' },
      { time: '10:00', activity: '参观西江千户苗寨', location: '西江千户苗寨景区' },
      { time: '12:00', activity: '品尝苗族特色午餐', location: '苗家餐厅' },
      { time: '14:00', activity: '苗族银饰制作体验', location: '银饰工坊' },
      { time: '16:00', activity: '观看苗族歌舞表演', location: '表演广场' },
      { time: '18:00', activity: '返程', location: '雷山县游客中心' }
    ],
    included: ['专业导游服务', '景区门票', '特色午餐', '银饰制作体验', '保险'],
    excluded: ['个人消费', '交通费用', '住宿费用'],
    notes: '请穿着舒适的服装和鞋子，带好防晒用品。如有特殊饮食要求请提前告知。'
  },
  2: {
    id: 2,
    orderNumber: 'GZ20241130002',
    type: '景点门票',
    title: '黄果树瀑布门票',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    price: '¥180',
    originalPrice: '¥220',
    status: '待使用',
    date: '2024-11-30',
    usageDate: '2024-12-08',
    location: '贵州安顺',
    description: '黄果树瀑布是中国最大的瀑布，也是世界著名大瀑布之一。门票包含黄果树大瀑布、天星桥景区、陡坡塘瀑布三个核心景区。',
    validUntil: '2024-12-31',
    included: ['黄果树大瀑布门票', '天星桥景区门票', '陡坡塘瀑布门票', '景区观光车'],
    excluded: ['餐饮费用', '个人消费', '停车费'],
    notes: '门票当日有效，请在有效期内使用。景区开放时间：8:00-18:00。'
  },
  3: {
    id: 3,
    orderNumber: 'GZ20241202003',
    type: '文化体验',
    title: '侗族大歌体验课程',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
    price: '¥299',
    originalPrice: '¥399',
    status: '待使用',
    date: '2024-12-02',
    usageDate: '2024-12-10',
    location: '贵州黎平',
    description: '跟随侗族非遗传承人学习侗族大歌，体验独特的多声部合唱艺术。课程包含基础发声训练、经典曲目学习和实地演唱体验。',
    included: ['专业教师指导', '传统服饰体验', '茶歇', '课程证书'],
    excluded: ['交通费用', '住宿费用', '其他个人消费'],
    notes: '建议提前15分钟到达，穿着舒适服装。课程时长约3小时。'
  },
  4: {
    id: 4,
    orderNumber: 'GZ20241203004',
    type: '足球场预订',
    title: '星光足球场-全场',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7f6?w=400&h=400&fit=crop',
    price: '¥600',
    originalPrice: '¥800',
    status: '待使用',
    date: '2024-12-03',
    usageDate: '2024-12-15',
    location: '贵州贵阳',
    description: '专业11人制标准足球场，配备LED照明系统，可满足夜间比赛需求。场地配备更衣室、淋浴设施和休息区。',
    validUntil: '2024-12-15',
    included: ['场地使用2小时', '更衣室使用', '饮用水', '足球装备租借'],
    excluded: ['教练服务', '停车费', '额外时间费用'],
    notes: '请提前15分钟到场，超时将收取额外费用。雨天自动取消并退款。'
  }
};
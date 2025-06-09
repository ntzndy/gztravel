// 文化模拟数据
export interface CraftProcess {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface Inheritor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  description: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface ExperienceActivity {
  id: number;
  title: string;
  duration: string;
  price: string;
  image: string;
}

export interface Culture {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  history: string;
  features: string[];
  craftProcess: CraftProcess[];
  inheritors: Inheritor[];
  relatedProducts: RelatedProduct[];
  experienceActivities: ExperienceActivity[];
}

export const cultures: Record<string, Culture> = {
  "1": {
    id: 1,
    title: '苗族蜡染',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '蜡染是中国非物质文化遗产，是苗族传统的印染工艺。通过在白布上用熔化的蜡绘制图案，然后将布料浸入染料中，最后去除蜡层形成独特的图案。',
    history: '蜡染起源于汉代，在唐宋时期得到广泛发展。苗族蜡染技艺经过千百年的传承和发展，形成了独特的艺术风格和工艺特色。',
    features: [
      '传统手工艺',
      '非遗文化',
      '民族特色',
      '艺术价值'
    ],
    craftProcess: [
      {
        step: 1,
        title: '准备材料',
        description: '选用优质白布，准备蜡料和染料',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 2,
        title: '绘制图案',
        description: '用熔化的蜡在白布上绘制传统图案',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 3,
        title: '染色',
        description: '将绘制好的布料浸入染料中',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 4,
        title: '去蜡',
        description: '将染好的布料煮沸去除蜡层',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }
    ],
    inheritors: [
      {
        id: 1,
        name: '王大姐',
        title: '省级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '从事蜡染艺术创作30余年，作品多次获得国家级奖项。'
      },
      {
        id: 2,
        name: '李阿姨',
        title: '市级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '专注于传统图案的创新设计，致力于推广蜡染文化。'
      }
    ],
    relatedProducts: [
      {
        id: 1,
        name: '蜡染桌布',
        price: '￥188',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        name: '蜡染披肩',
        price: '￥268',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 3,
        name: '蜡染包包',
        price: '￥158',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ],
    experienceActivities: [
      {
        id: 1,
        title: '蜡染体验课程',
        duration: '2小时',
        price: '￥128/人',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        title: '蜡染工艺展示',
        duration: '1小时',
        price: '免费',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ]
  },
  "2": {
    id: 2,
    title: '侗族大歌',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '侗族大歌是侗族特有的多声部民歌，被誉为"东方合唱明珠"，是中国非物质文化遗产。',
    history: '侗族大歌有着悠久的历史，是侗族人民在长期的生产劳动和社会生活中创造的艺术瑰宝。',
    features: [
      '非遗文化',
      '民族音乐',
      '多声部合唱',
      '文化传承'
    ],
    craftProcess: [
      {
        step: 1,
        title: '选择曲目',
        description: '根据场合选择适合的歌曲',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 2,
        title: '分配声部',
        description: '根据演唱者的声音特点分配不同声部',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 3,
        title: '排练',
        description: '反复练习，确保声部协调',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 4,
        title: '演出',
        description: '正式演出展示',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }
    ],
    inheritors: [
      {
        id: 1,
        name: '张婆婆',
        title: '国家级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '从事侗族大歌教学40余年，培养了数百名传承人。'
      },
      {
        id: 2,
        name: '刘奶奶',
        title: '省级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '致力于侗族大歌的创新发展和推广传播。'
      }
    ],
    relatedProducts: [
      {
        id: 1,
        name: '侗族大歌CD',
        price: '￥68',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        name: '侗族服饰',
        price: '￥388',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 3,
        name: '侗族文化书籍',
        price: '￥58',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ],
    experienceActivities: [
      {
        id: 1,
        title: '侗族大歌体验课',
        duration: '3小时',
        price: '￥198/人',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        title: '侗族文化展示',
        duration: '1小时',
        price: '免费',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ]
  }
}; 
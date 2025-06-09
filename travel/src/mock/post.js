import { mockUser } from './user.js';

export const mockUserPosts = [
  {
    id: 1,
    user: mockUser,
    content: {
      zh: '今天的下午茶时光 ☕️ 在这家咖啡店发现了超好喝的手冲咖啡！',
      en: 'Afternoon tea time today ☕️ Found amazing hand-dripped coffee at this cafe!',
      ja: '今日のティータイム ☕️ このカフェで美味しいハンドドリップコーヒーを見つけました！'
    },
    images: ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop'],
    tags: {
      zh: ['咖啡', '下午茶'],
      en: ['Coffee', 'Afternoon Tea'],
      ja: ['コーヒー', 'ティータイム']
    },
    likes: 128,
    comments: 23,
    timeAgo: {
      zh: '2小时前',
      en: '2 hours ago',
      ja: '2時間前'
    }
  },
  {
    id: 2,
    user: mockUser,
    content: {
      zh: '周末自制的芝士蛋糕 🍰 第一次做居然成功了！',
      en: 'Homemade cheesecake on weekend 🍰 First try and it turned out great!',
      ja: '週末に作ったチーズケーキ 🍰 初めてなのに大成功！'
    },
    images: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop'],
    tags: {
      zh: ['烘焙', '甜品'],
      en: ['Baking', 'Dessert'],
      ja: ['ベーキング', 'デザート']
    },
    likes: 256,
    comments: 45,
    timeAgo: {
      zh: '1天前',
      en: '1 day ago',
      ja: '1日前'
    }
  }
]; 
// 社区页面模拟数据
export interface User {
  id: number;
  name: string;
  avatar: string;
  intro: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  user: User;
  createTime: string;
}

export const users: User[] = [
  {
    id: 1,
    name: '不吃香菜',
    avatar: '/avatars/user1.jpg',
    intro: '热爱旅行与美食，喜欢民族文化体验。'
  },
  {
    id: 2,
    name: '猫猫头',
    avatar: '/avatars/user2.jpg',
    intro: '文艺青年，咖啡控，喜欢探索城市角落。'
  },
  {
    id: 3,
    name: '小王同学',
    avatar: '/avatars/user3.jpg',
    intro: '摄影爱好者，热衷自然风光和人文故事。'
  },
  {
    id: 4,
    name: '奶茶三分甜',
    avatar: '/avatars/user4.jpg',
    intro: '古镇民宿体验师，甜品和夜景爱好者。'
  }
];

export const posts: Post[] = [
  {
    id: 1,
    title: '陈家祠探访记',
    content: '今天去了广州著名的陈家祠，建筑之精美令人叹为观止。砖雕、木雕、石雕处处体现着岭南文化的精髓...',
    images: ['/posts/chenjiaci1.jpg', '/posts/chenjiaci2.jpg'],
    likes: 128,
    comments: 32,
    user: users[0],
    createTime: '2024-03-15 14:30'
  },
  {
    id: 2,
    title: '沙面老街漫步',
    content: '漫步在沙面的街道上，欧式建筑让人仿佛置身异国。这里的每一处细节都在诉说着广州的历史...',
    images: ['/posts/shamian1.jpg', '/posts/shamian2.jpg'],
    likes: 256,
    comments: 45,
    user: users[1],
    createTime: '2024-03-14 16:20'
  },
  {
    id: 3,
    title: '夜游珠江有感',
    content: '广州的夜景太美了！坐在游船上，看着两岸的霓虹倒映在江面上，真是美不胜收...',
    images: ['/posts/zhujiang1.jpg', '/posts/zhujiang2.jpg'],
    likes: 198,
    comments: 28,
    user: users[2],
    createTime: '2024-03-13 20:15'
  }
];

export interface CommunityUser {
  id: number;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
}

export interface CommunityPost {
  id: number;
  user: CommunityUser;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  createdAt: string;
  location?: string;
  tags: string[];
}

export const communityUsers: CommunityUser[] = [
  {
    id: 1,
    username: "旅行达人",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face",
    bio: "探索世界的每个角落",
    followers: 1200,
    following: 300,
    posts: 56
  },
  {
    id: 2,
    username: "美食家",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    bio: "寻找最地道的美食",
    followers: 800,
    following: 200,
    posts: 42
  }
];

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    user: communityUsers[0],
    content: "发现了一个超美的小众景点！🏞️",
    images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop"],
    likes: 156,
    comments: 23,
    createdAt: "2024-03-15T10:30:00Z",
    location: "贵州省黔东南苗族侗族自治州",
    tags: ["旅行", "风景", "小众景点"]
  },
  {
    id: 2,
    user: communityUsers[1],
    content: "今天尝试了当地特色小吃，太美味了！😋",
    images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"],
    likes: 89,
    comments: 12,
    createdAt: "2024-03-14T15:20:00Z",
    location: "贵州省贵阳市",
    tags: ["美食", "本地特色", "推荐"]
  }
]; 
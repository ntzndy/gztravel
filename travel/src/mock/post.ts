import { ProfileUser, mockUser } from './user';

export interface ProfilePost {
  id: number;
  user: ProfileUser;
  content: string;
  images: string[];
  tags: string[];
  likes: number;
  comments: number;
  timeAgo: string;
}

export const mockUserPosts: ProfilePost[] = [
  {
    id: 1,
    user: mockUser,
    content: '今天的下午茶时光 ☕️ 在这家咖啡店发现了超好喝的手冲咖啡！',
    images: ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop'],
    tags: ['咖啡', '下午茶'],
    likes: 128,
    comments: 23,
    timeAgo: '2小时前'
  },
  {
    id: 2,
    user: mockUser,
    content: '周末自制的芝士蛋糕 🍰 第一次做居然成功了！',
    images: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop'],
    tags: ['烘焙', '甜品'],
    likes: 256,
    comments: 45,
    timeAgo: '1天前'
  }
]; 
export interface ProfileUser {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  location: string;
  joinDate: string;
  followers: number;
  following: number;
  posts: number;
  likes: number;
}

export const mockUser: ProfileUser = {
  id: 1,
  name: '小红薯用户',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face',
  bio: '热爱生活 | 美食探索者 | 旅行达人 ✨',
  location: '上海，中国',
  joinDate: '2023年5月',
  followers: 1234,
  following: 567,
  posts: 2,
  likes: 5678
}; 
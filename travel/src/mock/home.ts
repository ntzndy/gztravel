// 首页模拟数据
export interface Banner {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
}

export interface RecommendedTour {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  location: string;
  duration: string;
}

export const banners: Banner[] = [
  {
    id: 1,
    imageUrl: '/images/banner1.jpg',
    title: '广州特色文化之旅',
    link: '/tour/1'
  },
  {
    id: 2,
    imageUrl: '/images/banner2.jpg',
    title: '粤式美食探索',
    link: '/tour/2'
  }
];

export const recommendedTours: RecommendedTour[] = [
  {
    id: 1,
    title: '广州一日游 - 陈家祠+沙面+珠江夜游',
    imageUrl: '/images/tour1.jpg',
    price: 299,
    rating: 4.8,
    location: '广州',
    duration: '1天'
  },
  {
    id: 2,
    title: '长隆欢乐世界主题游',
    imageUrl: '/images/tour2.jpg',
    price: 399,
    rating: 4.9,
    location: '广州',
    duration: '1天'
  }
]; 
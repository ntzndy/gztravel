import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import { motion } from 'framer-motion';
import './Home.css';

// 模拟数据
const mockPosts = [
  {
    id: 1,
    user: {
      name: '小红薯用户',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face'
    },
    content: '今天的下午茶时光 ☕️ 在这家咖啡店发现了超好喝的手冲咖啡，环境也很棒！推荐给大家～',
    images: ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop'],
    tags: ['咖啡', '下午茶', '生活方式'],
    likes: 128,
    comments: 23,
    timeAgo: '2小时前'
  },
  {
    id: 2,
    user: {
      name: '美食探索家',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    content: '周末自制的芝士蛋糕 🍰 第一次做居然成功了！口感超级绵密，奶香浓郁，家人都说好吃～',
    images: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop'],
    tags: ['烘焙', '甜品', 'DIY'],
    likes: 256,
    comments: 45,
    timeAgo: '4小时前'
  },
  {
    id: 3,
    user: {
      name: '旅行达人',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    content: '海边日落真的太美了 🌅 这次旅行收获满满，心情都变得特别好！',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'],
    tags: ['旅行', '日落', '海边'],
    likes: 342,
    comments: 67,
    timeAgo: '6小时前'
  },
  {
    id: 4,
    user: {
      name: '时尚博主',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
    },
    content: '今日穿搭分享 ✨ 简约风格也可以很有质感，关键在于颜色搭配和剪裁！',
    images: ['https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop'],
    tags: ['穿搭', '时尚', '简约风'],
    likes: 189,
    comments: 34,
    timeAgo: '8小时前'
  },
  {
    id: 5,
    user: {
      name: '健身教练',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '早晨瑜伽练习 🧘‍♀️ 每天给自己一点时间静心，身体和心灵都会感谢你！',
    images: ['https://images.unsplash.com/photo-1506629905607-ce9fd2c2702d?w=400&h=400&fit=crop'],
    tags: ['瑜伽', '健身', '早晨'],
    likes: 98,
    comments: 18,
    timeAgo: '10小时前'
  },
  {
    id: 6,
    user: {
      name: '摄影爱好者',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    content: '夜晚城市灯火 🌃 用相机记录下这个城市最美的瞬间，每一个光点都有故事～',
    images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop'],
    tags: ['摄影', '夜景', '城市'],
    likes: 203,
    comments: 41,
    timeAgo: '12小时前'
  }
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="home-container">
        <div className="container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>正在加载精彩内容...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="container">
        {/* 顶部标签导航 */}
        <div className="category-tabs">
          <button className="category-tab active">推荐</button>
          <button className="category-tab">关注</button>
          <button className="category-tab">附近</button>
          <button className="category-tab">热门</button>
        </div>

        {/* 瀑布流布局 */}
        <div className="posts-grid">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* 加载更多 */}
        <div className="load-more">
          <button className="btn btn-secondary">加载更多</button>
        </div>
      </div>
    </div>
  );
};

export default Home; 
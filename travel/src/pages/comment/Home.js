import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import { motion } from 'framer-motion';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import mockPosts from './mockPosts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
              onClick={() => navigate(`/community/${post.id}`)}
              style={{ cursor: 'pointer' }}
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
import React, { useState } from 'react';
import { Settings, Grid, Heart, Bookmark, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import PostCard from '../../components/PostCard';
import './Profile.css';

// 模拟用户数据
const mockUser = {
  id: 1,
  name: '小红薯用户',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face',
  bio: '热爱生活 | 美食探索者 | 旅行达人 ✨',
  location: '上海，中国',
  joinDate: '2023年5月',
  followers: 1234,
  following: 567,
  posts: 89,
  likes: 5678
};

// 模拟用户的帖子
const mockUserPosts = [
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

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', label: '帖子', icon: Grid, count: mockUser.posts },
    { id: 'likes', label: '赞过', icon: Heart, count: mockUser.likes },
    { id: 'saved', label: '收藏', icon: Bookmark, count: 45 }
  ];

  return (
    <motion.div 
      className="profile-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* 个人资料头部 */}
        <div className="profile-header">
          <div className="profile-info">
            <div className="avatar-section">
              <img 
                src={mockUser.avatar} 
                alt={mockUser.name}
                className="profile-avatar"
              />
              <button className="edit-avatar-btn">
                <Settings size={16} />
              </button>
            </div>
            
            <div className="user-details">
              <h1 className="user-name">{mockUser.name}</h1>
              <p className="user-bio">{mockUser.bio}</p>
              
              <div className="user-meta">
                <div className="meta-item">
                  <MapPin size={14} />
                  <span>{mockUser.location}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>加入于 {mockUser.joinDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 统计数据 */}
          <div className="stats-section">
            <div className="stat-item">
              <span className="stat-number">{mockUser.posts}</span>
              <span className="stat-label">帖子</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{mockUser.followers}</span>
              <span className="stat-label">粉丝</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{mockUser.following}</span>
              <span className="stat-label">关注</span>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="profile-actions">
            <button className="btn btn-primary">编辑资料</button>
            <button className="btn btn-secondary">设置</button>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="profile-tabs">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent size={20} />
                <span>{tab.label}</span>
                <span className="tab-count">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* 内容区域 */}
        <div className="profile-content">
          {activeTab === 'posts' && (
            <div className="posts-grid">
              {mockUserPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'likes' && (
            <div className="empty-state">
              <Heart size={64} className="empty-icon" />
              <h3>还没有赞过的内容</h3>
              <p>去发现一些精彩的内容吧！</p>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="empty-state">
              <Bookmark size={64} className="empty-icon" />
              <h3>还没有收藏的内容</h3>
              <p>收藏你喜欢的帖子，随时回来查看！</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile; 
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './GuideService.css';

// 模拟主理人数据
const mockGuides = [
  {
    id: 1,
    name: '小红',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '资深导游 | 民族文化专家',
    rating: 4.9,
    reviewCount: 328,
    yearsOfExperience: 8,
    languages: ['中文', '英语', '苗语'],
    specialties: ['民族文化', '深度游', '摄影路线'],
    coverImage: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥800/天起',
    availability: '最快明天可约'
  },
  {
    id: 2,
    name: '阿强',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '户外探险专家 | 登山向导',
    rating: 4.8,
    reviewCount: 256,
    yearsOfExperience: 6,
    languages: ['中文', '英语'],
    specialties: ['户外探险', '登山', '野营'],
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥1200/天起',
    availability: '本周末可约'
  },
  {
    id: 3,
    name: '美玲',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '美食文化达人 | 城市探索家',
    rating: 4.95,
    reviewCount: 412,
    yearsOfExperience: 5,
    languages: ['中文', '粤语', '英语'],
    specialties: ['美食探索', '城市文化', '历史建筑'],
    coverImage: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥600/天起',
    availability: '接受预约中'
  },
  {
    id: 4,
    name: '老王',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '摄影导师 | 自然风光专家',
    rating: 4.85,
    reviewCount: 189,
    yearsOfExperience: 10,
    languages: ['中文', '英语'],
    specialties: ['风光摄影', '后期指导', '器材建议'],
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥1500/天起',
    availability: '下周可约'
  }
];

const GuideService = () => {
  const navigate = useNavigate();
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setGuides(mockGuides);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>加载中...</p>
      </div>
    );
  }

  return (
    <div className="guide-service">
      {/* 英雄区域 */}
      <div className="guide-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">探索世界，遇见精彩</h1>
          <p className="hero-subtitle">专业的在地向导，带您发现不一样的风景</p>
        </div>
      </div>

      {/* 主理人列表区域 */}
      <div className="container">
        <section className="guides-section">
          <div className="section-header">
            <h2>精选主理人</h2>
            <p>每一位主理人都经过严格筛选，确保为您提供专业、贴心的服务</p>
          </div>

          <div className="guides-grid">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                className="guide-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="guide-cover">
                  <img src={guide.coverImage} alt={`${guide.name}的封面`} />
                  <span className="guide-badge">推荐主理人</span>
                </div>
                
                <div className="guide-info">
                  <div className="guide-profile">
                    <img src={guide.avatar} alt={guide.name} className="guide-avatar" />
                    <div className="guide-details">
                      <h3>{guide.name}</h3>
                      <div className="guide-rating">
                        <span>★</span>
                        <span>{guide.rating}</span>
                        <span className="review-count">({guide.reviewCount}条评价)</span>
                      </div>
                    </div>
                  </div>

                  <div className="guide-basic-info">
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span>{guide.yearsOfExperience}年经验</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-language"></i>
                      <span>{guide.languages.join(', ')}</span>
                    </div>
                  </div>

                  <div className="guide-specialties">
                    {guide.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>

                  <div className="guide-footer">
                    <div className="guide-price">{guide.price}</div>
                    <div className="guide-availability">{guide.availability}</div>
                  </div>

                  <button 
                    className="book-btn"
                    onClick={() => navigate(`/guide/${guide.id}`)}
                  >
                    查看详情
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuideService; 
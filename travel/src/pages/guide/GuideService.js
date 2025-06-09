import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { guides } from '../../mock';
import './GuideService.css';

const GuideService = () => {
  const navigate = useNavigate();
  const [displayGuides, setDisplayGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 使用新的模拟数据源
    setTimeout(() => {
      setDisplayGuides(guides);
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
            {displayGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                className="guide-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/guide/${guide.id}`)}
              >
                <div className="guide-info">
                  <div className="guide-header">
                    <div className="guide-profile">
                      <img src={guide.avatar} alt={guide.name} className="guide-avatar" />
                      <div className="guide-details">
                        <h3>{guide.name}</h3>
                        <span className="guide-title">{guide.title}</span>
                        <div className="guide-rating">
                          <span>★</span>
                          <span>{guide.rating}</span>
                          <span className="review-count">({guide.reviewCount}条评价)</span>
                        </div>
                      </div>
                    </div>
                    <span className="guide-badge">推荐主理人</span>
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

                  <div className="guide-bio">
                    {guide.bio}
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
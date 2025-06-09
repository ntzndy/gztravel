import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { attractions } from '../../mock';
import './AttractionDetail.css';

const AttractionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attraction, setAttraction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 使用新的模拟数据源
    const fetchAttractionData = async () => {
      try {
        // 模拟API延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const attractionData = attractions[id];
        if (!attractionData) {
          throw new Error('景点不存在');
        }
        
        setAttraction(attractionData);
        setLoading(false);
      } catch (err) {
        setError(err.message || '获取景点信息失败，请稍后重试');
        setLoading(false);
      }
    };

    fetchAttractionData();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>加载中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>重试</button>
      </div>
    );
  }

  return (
    <div className="attraction-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i>
        返回
      </button>

      <div className="attraction-hero">
        <div className="hero-background">
          <img src={attraction.image} alt={attraction.name} />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {attraction.name}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {attraction.description}
          </motion.p>
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="attraction-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="info-grid">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{attraction.location}</span>
            </div>
            <div className="info-item">
              <i className="fas fa-star"></i>
              <span>{attraction.rating} ({attraction.reviewCount}条评价)</span>
            </div>
            <div className="info-item">
              <i className="fas fa-ticket-alt"></i>
              <span>{attraction.price}</span>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <span>{attraction.openingHours}</span>
            </div>
            <div className="info-item">
              <i className="fas fa-calendar-alt"></i>
              <span>最佳游览时间：{attraction.bestTimeToVisit}</span>
            </div>
          </div>

          <div className="features">
            <h3>特色亮点</h3>
            <div className="feature-tags">
              {attraction.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="attraction-highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>景点亮点</h2>
          <div className="highlights-grid">
            {attraction.highlights.map(highlight => (
              <div key={highlight.id} className="highlight-card">
                <div className="highlight-image">
                  <img src={highlight.image} alt={highlight.title} />
                </div>
                <div className="highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="travel-tips"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2>旅行贴士</h2>
          <ul className="tips-list">
            {attraction.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="nearby-attractions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2>周边景点</h2>
          <div className="attractions-grid">
            {attraction.nearbyAttractions.map(attraction => (
              <div key={attraction.id} className="attraction-card">
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.name} />
                </div>
                <div className="attraction-content">
                  <h3>{attraction.name}</h3>
                  <p>距离：{attraction.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AttractionDetail; 
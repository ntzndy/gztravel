import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AttractionDetail.css';

// 模拟数据集合
const mockAttractions = {
  1: {
    id: 1,
    name: '黄果树瀑布',
    description: '黄果树瀑布是中国最大的瀑布，也是世界著名的大瀑布之一。瀑布高77.8米，宽101米，气势磅礴，景色壮观。',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: '贵州省安顺市镇宁布依族苗族自治县',
    rating: 4.8,
    reviewCount: 1250,
    price: '￥120',
    openingHours: '08:00-18:00',
    bestTimeToVisit: '4-10月',
    features: [
      '世界著名瀑布',
      '自然景观',
      '摄影胜地',
      '避暑胜地'
    ],
    highlights: [
      {
        id: 1,
        title: '瀑布观景台',
        description: '最佳观赏瀑布的位置，可以近距离感受瀑布的震撼。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        title: '水帘洞',
        description: '瀑布后面的天然洞穴，可以体验穿瀑而过的刺激。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        title: '天星桥',
        description: '横跨瀑布的观景桥，可以欣赏到瀑布的全景。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    tips: [
      '建议早上前往，避开人流高峰',
      '准备雨具，瀑布水汽较大',
      '穿防滑鞋，地面湿滑',
      '注意保护相机等电子设备'
    ],
    nearbyAttractions: [
      {
        id: 1,
        name: '龙宫',
        distance: '5公里',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        name: '天星桥',
        distance: '2公里',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        name: '陡坡塘',
        distance: '3公里',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  },
  2: {
    id: 2,
    name: '荔波小七孔',
    description: '世界自然遗产地，被誉为"地球上的绿宝石"，拥有原始的自然风光。',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: '贵州省荔波县',
    rating: 4.7,
    reviewCount: 800,
    price: '￥100',
    openingHours: '08:00-18:00',
    bestTimeToVisit: '4-10月',
    features: [
      '世界自然遗产',
      '原始自然风光',
      '摄影胜地',
      '避暑胜地'
    ],
    highlights: [
      {
        id: 1,
        title: '小七孔桥',
        description: '小七孔桥是荔波小七孔景区的标志性建筑，桥身由青石砌成，桥孔由青石板铺就。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        title: '水上森林',
        description: '水上森林是荔波小七孔景区的一大特色，森林与水完美结合，形成独特的自然景观。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        title: '翠谷瀑布',
        description: '翠谷瀑布是荔波小七孔景区的一大亮点，瀑布从高耸的山崖上倾泻而下，水花四溅，气势磅礴。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    tips: [
      '建议早上前往，避开人流高峰',
      '准备雨具，景区内多雨',
      '穿防滑鞋，部分路段湿滑',
      '注意保护相机等电子设备'
    ],
    nearbyAttractions: [
      {
        id: 1,
        name: '荔波古镇',
        distance: '5公里',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        name: '茂兰自然保护区',
        distance: '2公里',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        name: '小七孔景区',
        distance: '3公里',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ]
  },
  // 可以添加更多景点数据
};

const AttractionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attraction, setAttraction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟API调用
    const fetchAttractionData = async () => {
      try {
        // 模拟API延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const attractionData = mockAttractions[id];
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
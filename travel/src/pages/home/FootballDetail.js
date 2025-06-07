import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FootballDetail.css';

// 模拟数据集合
const mockFootballFields = {
  1: {
    id: 1,
    name: '星光足球场',
    coverImage: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '星光足球场是一个专业级的足球场地，配备完善的设施和专业的草坪。无论是业余爱好者还是专业球队，都能在这里享受到高质量的足球运动体验。',
    location: '广州市天河区体育中心西路123号',
    rating: 4.8,
    reviewCount: 328,
    features: [
      '标准11人制球场',
      'FIFA认证草坪',
      '夜间照明',
      '更衣室',
      '停车场',
      '观众席'
    ],
    facilities: {
      fieldSize: '105m × 68m',
      grassType: '混合草皮',
      lighting: '1200勒克斯LED照明',
      changeRooms: 4,
      showers: 8,
      parking: 100
    },
    prices: [
      {
        type: '白天（8:00-17:00）',
        price: '￥800/小时'
      },
      {
        type: '晚上（18:00-22:00）',
        price: '￥1200/小时'
      },
      {
        type: '全天包场',
        price: '￥12000/天'
      }
    ],
    openingHours: {
      weekdays: '08:00-22:00',
      weekends: '08:00-23:00',
      holidays: '09:00-22:00'
    },
    bookingRules: [
      '至少提前24小时预约',
      '取消预约需提前12小时',
      '雨天自动取消并退款',
      '禁止穿钉鞋'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '球场全景'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '更衣室'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '夜景'
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: '张先生',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 5,
        comment: '场地维护得很好，草坪很舒服，设施也很完善。',
        date: '2024-03-15'
      },
      {
        id: 2,
        user: {
          name: '李教练',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 4,
        comment: '经常带队来这里训练，场地质量稳定，就是高峰期比较难预约。',
        date: '2024-03-10'
      }
    ],
    nearbyFacilities: [
      {
        name: '体育中心地铁站',
        distance: '500米',
        type: '交通'
      },
      {
        name: '运动主题餐厅',
        distance: '800米',
        type: '餐饮'
      },
      {
        name: '体育用品商店',
        distance: '300米',
        type: '购物'
      }
    ]
  },
  2: {
    id: 2,
    name: '丹寨村超球场',
    coverImage: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '丹寨村超球场是一个充满民族特色的足球场地，融合了现代设施和苗族文化元素。',
    location: '贵州省黔东南州丹寨县',
    rating: 4.7,
    reviewCount: 256,
    features: [
      '标准7人制球场',
      '民族特色装饰',
      '夜间照明',
      '更衣室'
    ],
    facilities: {
      fieldSize: '105m × 68m',
      grassType: '混合草皮',
      lighting: '1200勒克斯LED照明',
      changeRooms: 4,
      showers: 8,
      parking: 100
    },
    prices: [
      {
        type: '白天（8:00-17:00）',
        price: '￥800/小时'
      },
      {
        type: '晚上（18:00-22:00）',
        price: '￥1200/小时'
      },
      {
        type: '全天包场',
        price: '￥12000/天'
      }
    ],
    openingHours: {
      weekdays: '08:00-22:00',
      weekends: '08:00-23:00',
      holidays: '09:00-22:00'
    },
    bookingRules: [
      '至少提前24小时预约',
      '取消预约需提前12小时',
      '雨天自动取消并退款',
      '禁止穿钉鞋'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '球场全景'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '更衣室'
      },
      {
        url: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: '夜景'
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: '张先生',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 5,
        comment: '场地维护得很好，草坪很舒服，设施也很完善。',
        date: '2024-03-15'
      },
      {
        id: 2,
        user: {
          name: '李教练',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        rating: 4,
        comment: '经常带队来这里训练，场地质量稳定，就是高峰期比较难预约。',
        date: '2024-03-10'
      }
    ],
    nearbyFacilities: [
      {
        name: '体育中心地铁站',
        distance: '500米',
        type: '交通'
      },
      {
        name: '运动主题餐厅',
        distance: '800米',
        type: '餐饮'
      },
      {
        name: '体育用品商店',
        distance: '300米',
        type: '购物'
      }
    ]
  }
};

const FootballDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [football, setFootball] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟API调用
    const fetchFootballData = async () => {
      try {
        // 模拟API延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const footballData = mockFootballFields[id];
        if (!footballData) {
          throw new Error('足球场地不存在');
        }
        
        setFootball(footballData);
        setLoading(false);
      } catch (err) {
        setError(err.message || '获取场地信息失败，请稍后重试');
        setLoading(false);
      }
    };

    fetchFootballData();
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
    <div className="football-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i>
        返回
      </button>

      <div className="football-hero">
        <div className="hero-background">
          <img src={football.coverImage} alt={football.name} />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {football.name}
          </motion.h1>
          <motion.div 
            className="hero-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rating">
              <i className="fas fa-star"></i>
              <span>{football.rating}</span>
              <span className="review-count">({football.reviewCount}条评价)</span>
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>{football.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.section 
          className="football-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>场地介绍</h2>
          <p>{football.description}</p>
          <div className="feature-tags">
            {football.features.map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="football-facilities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>场地设施</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <h3>场地尺寸</h3>
              <p>{football.facilities.fieldSize}</p>
            </div>
            <div className="facility-item">
              <h3>草坪类型</h3>
              <p>{football.facilities.grassType}</p>
            </div>
            <div className="facility-item">
              <h3>照明系统</h3>
              <p>{football.facilities.lighting}</p>
            </div>
            <div className="facility-item">
              <h3>更衣室</h3>
              <p>{football.facilities.changeRooms}间</p>
            </div>
            <div className="facility-item">
              <h3>淋浴设施</h3>
              <p>{football.facilities.showers}个</p>
            </div>
            <div className="facility-item">
              <h3>停车位</h3>
              <p>{football.facilities.parking}个</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="football-prices"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2>价格信息</h2>
          <div className="price-cards">
            {football.prices.map((price, index) => (
              <div key={index} className="price-card">
                <h3>{price.type}</h3>
                <span className="price">{price.price}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="football-hours"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2>营业时间</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <h3>工作日</h3>
              <p>{football.openingHours.weekdays}</p>
            </div>
            <div className="hours-item">
              <h3>周末</h3>
              <p>{football.openingHours.weekends}</p>
            </div>
            <div className="hours-item">
              <h3>节假日</h3>
              <p>{football.openingHours.holidays}</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="booking-rules"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2>预订规则</h2>
          <ul className="rules-list">
            {football.bookingRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className="football-gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2>场地图片</h2>
          <div className="gallery-grid">
            {football.images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url} alt={image.description} />
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="football-reviews"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <h2>用户评价</h2>
          <div className="reviews-list">
            {football.reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img src={review.user.avatar} alt={review.user.name} className="user-avatar" />
                  <div className="review-info">
                    <h3>{review.user.name}</h3>
                    <div className="review-rating">
                      <span className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</span>
                      <span className="date">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="nearby-facilities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <h2>周边设施</h2>
          <div className="facilities-list">
            {football.nearbyFacilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">
                  <i className={`fas fa-${facility.type === '交通' ? 'subway' : facility.type === '餐饮' ? 'utensils' : 'shopping-bag'}`}></i>
                </div>
                <div className="facility-info">
                  <h3>{facility.name}</h3>
                  <p>距离：{facility.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FootballDetail; 
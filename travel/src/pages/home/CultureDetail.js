import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CultureDetail.css';

// 模拟数据集合
const mockCultures = {
  1: {
    id: 1,
    title: '苗族蜡染',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '蜡染是中国非物质文化遗产，是苗族传统的印染工艺。通过在白布上用熔化的蜡绘制图案，然后将布料浸入染料中，最后去除蜡层形成独特的图案。',
    history: '蜡染起源于汉代，在唐宋时期得到广泛发展。苗族蜡染技艺经过千百年的传承和发展，形成了独特的艺术风格和工艺特色。',
    features: [
      '传统手工艺',
      '非遗文化',
      '民族特色',
      '艺术价值'
    ],
    craftProcess: [
      {
        step: 1,
        title: '准备材料',
        description: '选用优质白布，准备蜡料和染料',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 2,
        title: '绘制图案',
        description: '用熔化的蜡在白布上绘制传统图案',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 3,
        title: '染色',
        description: '将绘制好的布料浸入染料中',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 4,
        title: '去蜡',
        description: '将染好的布料煮沸去除蜡层',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }
    ],
    inheritors: [
      {
        id: 1,
        name: '王大姐',
        title: '省级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '从事蜡染艺术创作30余年，作品多次获得国家级奖项。'
      },
      {
        id: 2,
        name: '李阿姨',
        title: '市级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '专注于传统图案的创新设计，致力于推广蜡染文化。'
      }
    ],
    relatedProducts: [
      {
        id: 1,
        name: '蜡染桌布',
        price: '￥188',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        name: '蜡染披肩',
        price: '￥268',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 3,
        name: '蜡染包包',
        price: '￥158',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ],
    experienceActivities: [
      {
        id: 1,
        title: '蜡染体验课程',
        duration: '2小时',
        price: '￥128/人',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        title: '蜡染工艺展示',
        duration: '1小时',
        price: '免费',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ]
  },
  2: {
    id: 2,
    title: '侗族大歌',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: '侗族大歌是侗族特有的多声部民歌，被誉为"东方合唱明珠"，是中国非物质文化遗产。',
    history: '侗族大歌有着悠久的历史，是侗族人民在长期的生产劳动和社会生活中创造的艺术瑰宝。',
    features: [
      '非遗文化',
      '民族音乐',
      '多声部合唱',
      '文化传承'
    ],
    craftProcess: [
      {
        step: 1,
        title: '准备材料',
        description: '选用优质白布，准备蜡料和染料',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 2,
        title: '绘制图案',
        description: '用熔化的蜡在白布上绘制传统图案',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 3,
        title: '染色',
        description: '将绘制好的布料浸入染料中',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        step: 4,
        title: '去蜡',
        description: '将染好的布料煮沸去除蜡层',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }
    ],
    inheritors: [
      {
        id: 1,
        name: '王大姐',
        title: '省级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '从事蜡染艺术创作30余年，作品多次获得国家级奖项。'
      },
      {
        id: 2,
        name: '李阿姨',
        title: '市级非遗传承人',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        description: '专注于传统图案的创新设计，致力于推广蜡染文化。'
      }
    ],
    relatedProducts: [
      {
        id: 1,
        name: '蜡染桌布',
        price: '￥188',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        name: '蜡染披肩',
        price: '￥268',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 3,
        name: '蜡染包包',
        price: '￥158',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ],
    experienceActivities: [
      {
        id: 1,
        title: '蜡染体验课程',
        duration: '2小时',
        price: '￥128/人',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      },
      {
        id: 2,
        title: '蜡染工艺展示',
        duration: '1小时',
        price: '免费',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
      }
    ]
  }
};

const CultureDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [culture, setCulture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟API调用
    const fetchCultureData = async () => {
      try {
        // 模拟API延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const cultureData = mockCultures[id];
        if (!cultureData) {
          throw new Error('文化项目不存在');
        }
        
        setCulture(cultureData);
        setLoading(false);
      } catch (err) {
        setError(err.message || '获取文化信息失败，请稍后重试');
        setLoading(false);
      }
    };

    fetchCultureData();
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
    <div className="culture-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i>
        返回
      </button>

      <div className="culture-hero">
        <div className="hero-background">
          <img src={culture.coverImage} alt={culture.title} />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {culture.title}
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {culture.description}
          </motion.p>
        </div>
      </div>

      <div className="container">
        <motion.section 
          className="culture-history"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>历史渊源</h2>
          <p>{culture.history}</p>
          <div className="feature-tags">
            {culture.features.map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="craft-process"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>工艺流程</h2>
          <div className="process-grid">
            {culture.craftProcess.map(process => (
              <div key={process.step} className="process-card">
                <div className="process-image">
                  <img src={process.image} alt={process.title} />
                  <div className="step-number">步骤 {process.step}</div>
                </div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="inheritors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2>传承人</h2>
          <div className="inheritors-grid">
            {culture.inheritors.map(inheritor => (
              <div key={inheritor.id} className="inheritor-card">
                <img src={inheritor.avatar} alt={inheritor.name} className="inheritor-avatar" />
                <div className="inheritor-info">
                  <h3>{inheritor.name}</h3>
                  <span className="inheritor-title">{inheritor.title}</span>
                  <p>{inheritor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="related-products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2>相关产品</h2>
          <div className="products-grid">
            {culture.relatedProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <span className="price">{product.price}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="experience-activities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2>体验活动</h2>
          <div className="activities-grid">
            {culture.experienceActivities.map(activity => (
              <div key={activity.id} className="activity-card">
                <img src={activity.image} alt={activity.title} />
                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <p>时长：{activity.duration}</p>
                  <p>价格：{activity.price}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CultureDetail; 
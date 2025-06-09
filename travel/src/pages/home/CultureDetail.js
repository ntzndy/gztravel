import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CultureDetail.css';

const CultureDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [culture, setCulture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCultureData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 模拟数据，实际项目中应该从API获取
        const cultureData = {
          id: '1',
          name: '蜀绣',
          description: '蜀绣是四川地区特有的传统刺绣工艺，历史悠久，工艺精湛',
          image: '/images/culture/shuixiu.jpg',
          category: '传统工艺',
          region: '四川省',
          history: '距今已有2000多年历史',
          features: ['精细刺绣', '色彩艳丽', '针法独特', '题材广泛'],
          characteristics: [
            {
              title: '独特针法',
              description: '蜀绣以其独特的针法著称，包括滚针、戗针等数十种针法，能够精确地表现出各种细腻的图案。',
              image: '/images/culture/needle.jpg'
            },
            {
              title: '色彩运用',
              description: '蜀绣在色彩的运用上十分讲究，常用色彩鲜艳、对比强烈的搭配，使作品更具视觉冲击力。',
              image: '/images/culture/color.jpg'
            },
            {
              title: '题材选择',
              description: '蜀绣的题材十分丰富，包括山水、花鸟、人物等，每一种题材都有其独特的表现技法。',
              image: '/images/culture/theme.jpg'
            }
          ],
          guides: [
            {
              name: '张小萱',
              title: '蜀绣体验官',
              image: '/images/culture/guide1.jpg',
              description: '专注蜀绣体验课程设计5年，擅长让初学者快速掌握基础针法',
              tags: ['针法教学', '初学者友好', '趣味课程']
            },
            {
              name: '李明',
              title: '文化体验策划师',
              image: '/images/culture/guide2.jpg',
              description: '致力于设计创新蜀绣体验活动，让传统文化焕发新活力',
              tags: ['创意策划', '互动体验', '团建活动']
            }
          ],
          relatedCultures: [
            {
              id: '2',
              name: '川茶文化',
              image: '/images/culture/tea.jpg',
              description: '与蜀绣同为四川重要文化遗产'
            },
            {
              id: '3',
              name: '川菜',
              image: '/images/culture/food.jpg',
              description: '四川饮食文化的代表'
            }
          ],
          tips: [
            '蜀绣作品需要避免阳光直射',
            '定期进行专业清洁保养',
            '储存时需要保持干燥通风',
            '观赏时可以近距离欣赏针法细节'
          ]
        };
        
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
      <div className="culture-hero">
        <div className="hero-background">
          <img src={culture.image} alt={culture.name} />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {culture.name}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {culture.description}
          </motion.p>
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="culture-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="info-grid">
            <div className="info-item">
              <i className="fas fa-tag"></i>
              <span>{culture.category}</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{culture.region}</span>
            </div>
            <div className="info-item">
              <i className="fas fa-history"></i>
              <span>{culture.history}</span>
            </div>
          </div>

          <div className="features">
            <h3>特色亮点</h3>
            <div className="feature-tags">
              {culture.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="culture-characteristics"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>文化特点</h2>
          <div className="characteristics-grid">
            {culture.characteristics.map((characteristic, index) => (
              <div key={index} className="characteristic-card">
                <div className="characteristic-image">
                  <img src={characteristic.image} alt={characteristic.title} />
                </div>
                <div className="characteristic-content">
                  <h3>{characteristic.title}</h3>
                  <p>{characteristic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="culture-guides"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2>体验推荐官</h2>
          <div className="guides-grid">
            {culture.guides.map((guide, index) => (
              <div key={index} className="guide-card">
                <div className="guide-avatar">
                  <img src={guide.image} alt={guide.name} />
                </div>
                <div className="guide-info">
                  <h3>{guide.name}</h3>
                  <div className="guide-title">{guide.title}</div>
                  <p>{guide.description}</p>
                  <div className="guide-tags">
                    {guide.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="culture-tips"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2>文化贴士</h2>
          <ul className="tips-list">
            {culture.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="related-cultures"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2>相关文化</h2>
          <div className="cultures-grid">
            {culture.relatedCultures.map(culture => (
              <div key={culture.id} className="culture-card">
                <div className="culture-image">
                  <img src={culture.image} alt={culture.name} />
                </div>
                <div className="culture-content">
                  <h3>{culture.name}</h3>
                  <p>{culture.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CultureDetail; 
import React, { useState, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiAward, FiUsers, FiCamera, FiStar, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './CultureHome.css';
import { useLanguage } from '../../context/LanguageContext';

// 模拟文化数据
const cultureData = {
  ethnicCultures: [
    {
      id: 1,
      name: '苗族',
      description: '苗族是一个历史悠久的民族，以其精美的银饰、绚丽的服装和独特的歌舞文化而闻名。',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      highlights: ['银饰工艺', '苗族歌舞', '传统服饰', '芦笙节'],
      region: '贵州、湖南、云南'
    },
    {
      id: 2,
      name: '侗族',
      description: '侗族以其独特的建筑艺术——风雨桥和鼓楼，以及美妙的侗族大歌而著称于世。',
      image: 'https://images.unsplash.com/photo-1585068529053-1d4e24a6e2b6?w=600&h=400&fit=crop',
      highlights: ['侗族大歌', '风雨桥', '鼓楼建筑', '织锦技艺'],
      region: '贵州、广西、湖南'
    },
    {
      id: 3,
      name: '布依族',
      description: '布依族有着丰富的民间文学和音乐传统，其蜡染技艺和民族服饰独具特色。',
      image: 'https://images.unsplash.com/photo-1578662994442-48f60103fc96?w=600&h=400&fit=crop',
      highlights: ['蜡染工艺', '山歌对唱', '传统节庆', '民族服饰'],
      region: '贵州、云南'
    }
  ],
  
  villageFootball: [
    {
      id: 1,
      title: '榕江（三宝侗寨）和美乡村足球超级联赛',
      description: '贵州"村超"火遍全网，展现了乡村足球的魅力和少数民族地区的文化活力。',
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop',
      date: '2024年夏季',
      location: '贵州榕江',
      participants: '20支村队',
      features: ['民族歌舞表演', '特色美食展示', '传统服饰秀', '全民参与']
    },
    {
      id: 2,
      title: '丹寨万达小镇村超友谊赛',
      description: '在美丽的丹寨万达小镇举办的村级足球比赛，融合了苗族文化元素。',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
      date: '2024年春季',
      location: '贵州丹寨',
      participants: '12支村队',
      features: ['苗族文化展示', '手工艺品展销', '民族美食节', '文化交流']
    }
  ],
  
  touristSpots: [
    {
      id: 1,
      name: '黄果树瀑布',
      description: '中国最大的瀑布，也是世界著名大瀑布之一，被誉为"中华第一瀑"。',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      location: '贵州安顺',
      rating: 4.8,
      type: '自然景观',
      highlights: ['壮观瀑布', '彩虹奇观', '喀斯特地貌', '民族风情']
    },
    {
      id: 2,
      name: '荔波小七孔',
      description: '世界自然遗产地，被誉为"地球上的绿宝石"，拥有原始的自然风光。',
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop',
      location: '贵州荔波',
      rating: 4.7,
      type: '自然景观',
      highlights: ['喀斯特森林', '湖光山色', '古桥文化', '生态旅游']
    },
    {
      id: 3,
      name: '西江千户苗寨',
      description: '世界最大的苗族聚居村寨，保存最完整的苗族"原始生态"文化。',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      location: '贵州雷山',
      rating: 4.6,
      type: '文化景观',
      highlights: ['苗族文化', '吊脚楼建筑', '民族歌舞', '银饰工艺']
    },
    {
      id: 4,
      name: '肇兴侗寨',
      description: '全国最大的侗族村寨之一，被誉为"侗乡第一寨"。',
      image: 'https://images.unsplash.com/photo-1585068529053-1d4e24a6e2b6?w=600&h=400&fit=crop',
      location: '贵州黎平',
      rating: 4.5,
      type: '文化景观',
      highlights: ['侗族大歌', '鼓楼建筑', '风雨桥', '传统村落']
    }
  ]
};

const CultureHome = () => {
  const [activeSection, setActiveSection] = useState('culture');
  const navigate = useNavigate();
  const { t } = useLanguage();  // 添加这行

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cultureNameToKey = {
    '苗族': 'miao',
    '侗族': 'dong',
    '布依族': 'bouyei'
    // 如果有其他民族，可以继续添加
  };

  return (
    <div className="culture-home">
      {/* 英雄区域 */}
      <motion.section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop" 
            alt={t('explore_colorful_guizhou')}
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <motion.h1 className="hero-title">
            {t('explore_colorful_guizhou')}
          </motion.h1>
          <motion.p className="hero-subtitle">
            {t('culture_slogan')}
          </motion.p>
          <motion.div className="hero-stats">
            <div className="stat-item">
              <FiUsers size={24} />
              <span>{t('ethnic_groups')}</span>
            </div>
            <div className="stat-item">
              <FiAward size={24} />
              <span>{t('village_football')}</span>
            </div>
            <div className="stat-item">
              <FiCamera size={24} />
              <span>{t('world_heritage')}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
  
      {/* 导航标签 */}
      <div className="section-nav">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeSection === 'culture' ? 'active' : ''}`}
              onClick={() => setActiveSection('culture')}
            >
              <FiUsers size={20} />
              {t('ethnic_culture')}
            </button>
            <button 
              className={`nav-tab ${activeSection === 'football' ? 'active' : ''}`}
              onClick={() => setActiveSection('football')}
            >
              <FiAward size={20} />
              {t('village_super')}
            </button>
            <button 
              className={`nav-tab ${activeSection === 'spots' ? 'active' : ''}`}
              onClick={() => setActiveSection('spots')}
            >
              <FiMapPin size={20} />
              {t('scenic_spots')}
            </button>
          </div>
        </div>
      </div>
  
      <div className="container">
        {/* 民族文化区域 */}
        {activeSection === 'culture' && (
          <motion.section 
            className="culture-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="section-header">
              <h2>{t('diverse_ethnic_culture')}</h2>
              <p>{t('explore_ethnic_traditions')}</p>
            </div>
            
            <div className="culture-grid">
              {cultureData.ethnicCultures.map((culture) => (
                <motion.div 
                  key={culture.id} 
                  className="culture-card"
                  variants={itemVariants}
                  onClick={() => navigate(`/culture/${culture.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="culture-image">
                    <img src={culture.image} alt={t(`${culture.name.toLowerCase()}_culture`)} />
                    <div className="culture-overlay">
                      <FiMapPin size={16} />
                      <span>{culture.region}</span>
                    </div>
                  </div>
                  <div className="culture-content">
                    <h3>{t(`${cultureNameToKey[culture.name]}_culture`)}</h3>
                    <p>{t(`${cultureNameToKey[culture.name]}_description`)}</p>
                    <Link to="/" className="explore-btn">
                      {t('learn_more')} <FiChevronRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
  
        {/* 村超比赛区域 */}
        {activeSection === 'football' && (
          <motion.section 
            className="football-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="section-header">
              <h2>{t('village_super_style')}</h2>
              <p>{t('village_football_culture')}</p>
            </div>
            
            <div className="football-grid">
              {cultureData.villageFootball.map((match, index) => (
                <motion.div 
                  key={match.id} 
                  className="football-card"
                  variants={itemVariants}
                  onClick={() => navigate(`/football/${match.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="football-image">
                    <img src={match.image} alt={t(index === 0 ? 'rongjiang_tournament' : 'danzhai_tournament')} />
                    <div className="football-badge">
                      <FiAward size={20} />
                    </div>
                  </div>
                  <div className="football-content">
                    <h3>{t(index === 0 ? 'rongjiang_tournament' : 'danzhai_tournament')}</h3>
                    <p>{t(index === 0 ? 'rongjiang_description' : 'danzhai_description')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
  
        {/* 景点区域 */}
        {activeSection === 'spots' && (
          <motion.section 
            className="spots-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="section-header">
              <h2>{t('beautiful_attractions')}</h2>
              <p>{t('discover_natural_wonders')}</p>
            </div>
            
            <div className="spots-grid">
              {cultureData.touristSpots.map((spot, index) => (
                <motion.div 
                  key={spot.id} 
                  className="spot-card"
                  variants={itemVariants}
                  onClick={() => navigate(`/attraction/${spot.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="spot-image">
                    <img src={spot.image} alt={t(index === 0 ? 'huangguoshu_waterfall' : 
                      index === 1 ? 'libo_description' : 
                      index === 2 ? 'xijiang_description' : 'zhaoxing_description')} />
                  </div>
                  <div className="spot-content">
                    <h3>{t(index === 0 ? 'huangguoshu_waterfall' : 
                      index === 1 ? 'libo_description' : 
                      index === 2 ? 'xijiang_description' : 'zhaoxing_description')}</h3>
                    <p>{t(index === 0 ? 'huangguoshu_description' : 
                      index === 1 ? 'libo_description' : 
                      index === 2 ? 'xijiang_description' : 'zhaoxing_description')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
  
        {/* 行动召唤区域 */}
        <motion.section 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2>{t('join_community')}</h2>
            <p>{t('share_travel_memories')}</p>
            <div className="cta-buttons">
              <Link to="/guides" className="btn btn-primary">
                {t('find_guide')}
              </Link>
              <Link to="/community" className="btn btn-secondary">
                {t('explore_community')}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CultureHome; 
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiMapPin, FiAward, FiShare2, FiHeart, FiImage, FiTag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import heritageData from '../../mock/heritage';
import './CultureDetail.css';

const langMap = {
  zh: 'zh-CN',
  en: 'en-US',
  ja: 'ja-JP',
};

const langSuffixMap = {
  'zh-CN': '',
  'en-US': '-en',
  'ja-JP': '-ja',
};

const sectionTitles = {
  zh: {
    intro: '简介',
    images: '相关图片',
    guides: '推荐主理人',
    guidesList: [
      { name: '张师傅', role: '非遗传承人', btn: '联系主理人' },
      { name: '李师傅', role: '工艺大师', btn: '联系主理人' },
    ],
  },
  en: {
    intro: 'Introduction',
    images: 'Related Images',
    guides: 'Recommended Hosts',
    guidesList: [
      { name: 'Master Zhang', role: 'ICH Inheritor', btn: 'Contact Host' },
      { name: 'Master Li', role: 'Craftsman', btn: 'Contact Host' },
    ],
  },
  ja: {
    intro: '紹介',
    images: '関連画像',
    guides: 'おすすめ主理人',
    guidesList: [
      { name: 'チャン師匠', role: '無形文化遺産伝承者', btn: '主理人に連絡' },
      { name: 'リー師匠', role: '工芸マスター', btn: '主理人に連絡' },
    ],
  },
};

const CultureDetail = () => {
  const { id } = useParams(); // 只传主id，如 n1
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const [heritage, setHeritage] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const lang = langMap[currentLanguage] || 'zh-CN';
    const suffix = langSuffixMap[lang] || '';
    const realId = id + suffix;
    const data = heritageData.national
      .slice(0, 6)
      .find(item => item._id === realId && item.language === lang);
    setHeritage(data);
  }, [id, currentLanguage]);

  const t = sectionTitles[currentLanguage] || sectionTitles.zh;

  if (!heritage) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="culture-detail modern-layout">
      {/* 头图区域 */}
      <div className="hero-image-area">
        <img className="hero-bg-img" src={heritage.coverImage} alt={heritage.title} />
        <div className="hero-overlay" />
        <div className="hero-info">
          <motion.h1 
            className="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {heritage.title}
          </motion.h1>
          <div className="hero-meta">
            <span className="badge level-badge">{heritage.level}</span>
            <span className="badge category-badge"><FiTag /> {heritage.category}</span>
            <span className="badge year-badge">{heritage.year}</span>
            <span className="badge region-badge"><FiMapPin /> {heritage.region}</span>
          </div>
          <div className="hero-actions">
            <button 
              className={`like-button ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <FiHeart />
            </button>
            <button className="share-button">
              <FiShare2 />
            </button>
          </div>
        </div>
      </div>

      <div className="main-cards-area">
        {/* 简介卡片 */}
        <motion.div className="card info-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2>{t.intro}</h2>
          <p>{heritage.description}</p>
        </motion.div>

        {/* 图片组卡片 */}
        {heritage.images && heritage.images.length > 1 && (
          <motion.div className="card images-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h2><FiImage /> {t.images}</h2>
            <div className="images-list two-per-row">
              {heritage.images.map((img, idx) => (
                <img key={idx} src={img} alt={heritage.title + '-' + idx} />
              ))}
            </div>
          </motion.div>
        )}

        {/* 推荐主理人卡片 */}
        <motion.div className="card guides-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2>{t.guides}</h2>
          <div className="guides-grid">
            {t.guidesList.map((guide, idx) => (
              <div className="guide-card" key={idx}>
                <img src={idx === 0
                  ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
                  : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'} alt={guide.name} />
                <h3>{guide.name}</h3>
                <p>{guide.role}</p>
                <button className="contact-button">{guide.btn}</button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CultureDetail; 
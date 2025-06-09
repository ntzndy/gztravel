import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { guides } from '../../mock';
import { useLanguage } from '../../context/LanguageContext';
import './GuideService.css';

const langMap = {
  zh: 'zh',
  en: 'en',
  ja: 'ja',
};

const pageTexts = {
  zh: {
    heroTitle: '探索世界，遇见精彩',
    heroSubtitle: '专业的在地向导，带您发现不一样的风景',
    sectionTitle: '精选主理人',
    sectionDesc: '每一位主理人都经过严格筛选，确保为您提供专业、贴心的服务',
    badge: '推荐主理人',
    experience: '年经验',
    languages: '服务语言',
    reviews: '条评价',
    price: '价格',
    availability: '可约时间',
    specialties: '擅长',
    contact: '联系主理人',
  },
  en: {
    heroTitle: 'Explore the World, Meet the Wonderful',
    heroSubtitle: 'Professional local guides, discover a different landscape with you',
    sectionTitle: 'Featured Hosts',
    sectionDesc: 'Every host is strictly selected to ensure professional and attentive service for you',
    badge: 'Recommended Host',
    experience: 'years experience',
    languages: 'Languages',
    reviews: 'reviews',
    price: 'Price',
    availability: 'Availability',
    specialties: 'Specialties',
    contact: 'Contact Host',
  },
  ja: {
    heroTitle: '世界を探検し、素晴らしさに出会う',
    heroSubtitle: 'プロの現地ガイドが新しい景色を案内します',
    sectionTitle: 'おすすめ主理人',
    sectionDesc: 'すべての主理人は厳選され、プロで丁寧なサービスを提供します',
    badge: 'おすすめ主理人',
    experience: '年の経験',
    languages: '対応言語',
    reviews: '件の評価',
    price: '料金',
    availability: '予約可能日',
    specialties: '得意分野',
    contact: '主理人に連絡',
  },
};

const GuideService = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const [displayGuides, setDisplayGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const t = pageTexts[langMap[currentLanguage]] || pageTexts.zh;

  useEffect(() => {
    setTimeout(() => {
      setDisplayGuides(guides);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>{currentLanguage === 'en' ? 'Loading...' : currentLanguage === 'ja' ? '読み込み中...' : '加载中...'}</p>
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
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
        </div>
      </div>

      {/* 主理人列表区域 */}
      <div className="container">
        <section className="guides-section">
          <div className="section-header">
            <h2>{t.sectionTitle}</h2>
            <p>{t.sectionDesc}</p>
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
                      <img src={guide.avatar} alt={guide.name[currentLanguage]} className="guide-avatar" />
                      <div className="guide-details">
                        <h3>{guide.name[currentLanguage]}</h3>
                        <span className="guide-title">{guide.title[currentLanguage]}</span>
                        <div className="guide-rating">
                          <span>★</span>
                          <span>{guide.rating}</span>
                          <span className="review-count">({guide.reviewCount}{t.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="guide-basic-info">
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span>{guide.yearsOfExperience}{t.experience}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-language"></i>
                      <span>{guide.languages.join(', ')}</span>
                    </div>
                  </div>

                  <div className="guide-bio">
                    {guide.bio[currentLanguage]}
                  </div>

                  <div className="guide-specialties">
                    {guide.specialties[currentLanguage].map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>

                  <div className="guide-footer">
                    <div className="guide-price">{t.price}：{guide.price}</div>
                    <div className="guide-availability">{t.availability}：{guide.availability}</div>
                  </div>
                  <div className="guide-contact-btn">
                    <button>{t.contact}</button>
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
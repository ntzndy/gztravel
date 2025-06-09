import React, { useState, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiAward, FiUsers, FiCamera, FiStar, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { culturePage } from '../../locales/culturePage';
import { cultureData } from '../../mock/cultureData';
import './CultureHome.css';

const CultureHome = () => {
  const [activeSection, setActiveSection] = useState('culture');
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = culturePage[currentLanguage];
  const data = cultureData[currentLanguage];

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

  return (
    <div className="culture-home">
      {/* 英雄区域 */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop" 
            alt={t.hero.title}
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            className="hero-stats"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <FiUsers size={24} />
              <span>{t.hero.stats.ethnicGroups}</span>
            </div>
            <div className="stat-item">
              <FiAward size={24} />
              <span>{t.hero.stats.villageSoccer}</span>
            </div>
            <div className="stat-item">
              <FiCamera size={24} />
              <span>{t.hero.stats.worldHeritage}</span>
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
              {t.nav.culture}
            </button>
            <button 
              className={`nav-tab ${activeSection === 'football' ? 'active' : ''}`}
              onClick={() => setActiveSection('football')}
            >
              <FiAward size={20} />
              {t.nav.football}
            </button>
            <button 
              className={`nav-tab ${activeSection === 'spots' ? 'active' : ''}`}
              onClick={() => setActiveSection('spots')}
            >
              <FiMapPin size={20} />
              {t.nav.spots}
            </button>
          </div>
        </div>
      </div>

      <div className="container main-content">
        {/* 民族文化区域 */}
        {activeSection === 'culture' && (
          <motion.section 
            className="culture-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="section-header">
              <h2>{t.sections.culture.title}</h2>
              <p>{t.sections.culture.subtitle}</p>
            </div>
            
            <div className="culture-grid">
              {data.ethnicCultures.map((culture, index) => (
                <motion.div 
                  key={culture.id} 
                  className="culture-card"
                  variants={itemVariants}
                  onClick={() => navigate(`/culture/${culture.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="culture-image">
                    <img src={culture.image} alt={culture.name} />
                    <div className="culture-overlay">
                      <FiMapPin size={16} />
                      <span>{culture.region}</span>
                    </div>
                  </div>
                  <div className="culture-content">
                    <h3>{culture.name}</h3>
                    <p>{culture.description}</p>
                    <div className="culture-highlights">
                      {culture.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                    <Link to={`/culture/${culture.id}`} className="explore-btn">
                      {t.common.learnMore} <FiChevronRight size={16} />
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
              <h2>{t.sections.football.title}</h2>
              <p>{t.sections.football.subtitle}</p>
            </div>
            
            <div className="football-grid">
              {data.villageFootball.map((match, index) => (
                <motion.div 
                  key={match.id} 
                  className="football-card"
                  variants={itemVariants}
                  onClick={() => navigate(`/football/${match.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="football-image">
                    <img src={match.image} alt={match.title} />
                    <div className="football-badge">
                      <FiAward size={20} />
                    </div>
                  </div>
                  <div className="football-content">
                    <h3>{match.title}</h3>
                    <p>{match.description}</p>
                    
                    <div className="football-info">
                      <div className="info-item">
                        <FiCalendar size={16} />
                        <span>{match.date}</span>
                      </div>
                      <div className="info-item">
                        <FiMapPin size={16} />
                        <span>{match.location}</span>
                      </div>
                      <div className="info-item">
                        <FiUsers size={16} />
                        <span>{match.participants}</span>
                      </div>
                    </div>
                    
                    <div className="football-features">
                      {match.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
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
              <h2>{t.sections.spots.title}</h2>
              <p>{t.sections.spots.subtitle}</p>
            </div>
            
            <div className="spots-grid">
              {data.touristSpots.map((spot, index) => (
                <motion.div 
                  key={spot.id} 
                  className="spot-card"
                  variants={itemVariants}
                  onClick={() => navigate(`/attraction/${spot.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="spot-image">
                    <img src={spot.image} alt={spot.name} />
                    <div className="spot-type">{spot.type}</div>
                    <div className="spot-rating">
                      <FiStar size={14} fill="currentColor" />
                      <span>{spot.rating}</span>
                    </div>
                  </div>
                  <div className="spot-content">
                    <h3>{spot.name}</h3>
                    <div className="spot-location">
                      <FiMapPin size={14} />
                      <span>{spot.location}</span>
                    </div>
                    <p>{spot.description}</p>
                    <div className="spot-highlights">
                      {spot.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
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
            <h2>{t.cta.title}</h2>
            <p>{t.cta.subtitle}</p>
            <div className="cta-buttons">
              <Link to="/guides" className="btn btn-primary">
                {t.cta.buttons.findGuide}
              </Link>
              <Link to="/community" className="btn btn-secondary">
                {t.cta.buttons.exploreCommunity}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CultureHome; 
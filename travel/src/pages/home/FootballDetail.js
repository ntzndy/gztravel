import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footballData } from '../../mock/football';
import { useLanguage } from '../../context/LanguageContext';
import { footballPage } from '../../locales/footballPage';
import './FootballDetail.css';

const FootballDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('schedule'); // 'schedule' or 'highlights'
  const [isMobile, setIsMobile] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = footballPage[currentLanguage];
  const data = footballData[currentLanguage];

  // 检测是否为移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLanguage, { 
      month: 'long', 
      day: 'numeric', 
      weekday: isMobile ? 'short' : 'long' 
    });
  };

  const getHighlightIcon = (type) => {
    switch (type) {
      case 'interview':
        return '🎤';
      case 'highlight':
        return '🎥';
      case 'report':
        return '📰';
      default:
        return '📢';
    }
  };

  return (
    <div className="football-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i>
        {!isMobile && t.nav.back}
      </button>

      <div className="football-hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1920&h=600&fit=crop" alt={t.hero.title} />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className="tab-buttons">
          <button 
            className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            <i className="fas fa-calendar"></i>
            {isMobile ? t.nav.schedule.short : t.nav.schedule.full}
          </button>
          <button 
            className={`tab-button ${activeTab === 'highlights' ? 'active' : ''}`}
            onClick={() => setActiveTab('highlights')}
          >
            <i className="fas fa-star"></i>
            {isMobile ? t.nav.highlights.short : t.nav.highlights.full}
          </button>
        </div>

        {activeTab === 'schedule' && (
          <motion.section 
            className="schedule-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="schedule-list">
              {data.schedules.map((match) => (
                <div key={match.id} className="schedule-card">
                  <div className="schedule-date">
                    <div className="date">{formatDate(match.date)}</div>
                    <div className="time">{match.time}</div>
                  </div>
                  <div className="schedule-teams">
                    <div className="team home">
                      <h3>{match.homeTeam.name}</h3>
                      {isMobile && match.homeTeam.score !== undefined && (
                        <div className="score">{match.homeTeam.score}</div>
                      )}
                    </div>
                    <div className="vs">
                      {!isMobile ? t.match.vs : 
                        (match.homeTeam.score !== undefined ? 
                          `${match.homeTeam.score} - ${match.awayTeam.score}` : t.match.vs)}
                    </div>
                    <div className="team away">
                      <h3>{match.awayTeam.name}</h3>
                      {isMobile && match.awayTeam.score !== undefined && (
                        <div className="score">{match.awayTeam.score}</div>
                      )}
                    </div>
                  </div>
                  <div className="schedule-info">
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      {match.venue}
                    </div>
                    {!isMobile && match.ticketInfo && (
                      <div className="info-item">
                        <i className="fas fa-ticket-alt"></i>
                        {match.ticketInfo}
                      </div>
                    )}
                    {match.broadcastChannel && (
                      <div className="info-item">
                        <i className="fas fa-tv"></i>
                        {isMobile ? t.match.live : match.broadcastChannel}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {activeTab === 'highlights' && (
          <motion.section 
            className="highlights-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="highlights-grid">
              {data.highlights.map((highlight) => (
                <div key={highlight.id} className="highlight-card">
                  <div className="highlight-image">
                    <img src={highlight.coverImage} alt={highlight.title} />
                    <div className="highlight-type">
                      {getHighlightIcon(highlight.type)}
                      {!isMobile && t.highlight.types[highlight.type]}
                    </div>
                  </div>
                  <div className="highlight-content">
                    <h3>{highlight.title}</h3>
                    <div className="highlight-match-info">
                      <span>{highlight.matchInfo.homeTeam} {highlight.matchInfo.score ? `${highlight.matchInfo.score}` : t.match.vs} {highlight.matchInfo.awayTeam}</span>
                      <span>{formatDate(highlight.matchInfo.date)}</span>
                    </div>
                    <p>{isMobile ? highlight.content.slice(0, 100) + '...' : highlight.content}</p>
                    <div className="highlight-tags">
                      {highlight.tags.slice(0, isMobile ? 2 : highlight.tags.length).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                      {isMobile && highlight.tags.length > 2 && (
                        <span className="tag">+{highlight.tags.length - 2}</span>
                      )}
                    </div>
                    {highlight.type === 'highlight' && highlight.videoUrl && (
                      <button className="watch-video-btn">
                        <i className="fas fa-play"></i>
                        {isMobile ? t.match.watchVideo.short : t.match.watchVideo.full}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default FootballDetail; 
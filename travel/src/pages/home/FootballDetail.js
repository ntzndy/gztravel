import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footballData } from '../../mock/football';
import './FootballDetail.css';

const FootballDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('schedule'); // 'schedule' or 'highlights'

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });
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
        返回
      </button>

      <div className="football-hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1920&h=600&fit=crop" alt="村超联赛" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            2024贵州村超联赛
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            足球点亮乡村 运动助力振兴
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
            赛程安排
          </button>
          <button 
            className={`tab-button ${activeTab === 'highlights' ? 'active' : ''}`}
            onClick={() => setActiveTab('highlights')}
          >
            <i className="fas fa-star"></i>
            赛事亮点
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
              {footballData.schedules.map((match) => (
                <div key={match.id} className="schedule-card">
                  <div className="schedule-date">
                    <div className="date">{formatDate(match.date)}</div>
                    <div className="time">{match.time}</div>
                  </div>
                  <div className="schedule-teams">
                    <div className="team home">
                      <img src={match.homeTeam.logo} alt={match.homeTeam.name} />
                      <h3>{match.homeTeam.name}</h3>
                    </div>
                    <div className="vs">VS</div>
                    <div className="team away">
                      <img src={match.awayTeam.logo} alt={match.awayTeam.name} />
                      <h3>{match.awayTeam.name}</h3>
                    </div>
                  </div>
                  <div className="schedule-info">
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      {match.venue}
                    </div>
                    {match.ticketInfo && (
                      <div className="info-item">
                        <i className="fas fa-ticket-alt"></i>
                        {match.ticketInfo}
                      </div>
                    )}
                    {match.broadcastChannel && (
                      <div className="info-item">
                        <i className="fas fa-tv"></i>
                        {match.broadcastChannel}
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
              {footballData.highlights.map((highlight) => (
                <div key={highlight.id} className="highlight-card">
                  <div className="highlight-image">
                    <img src={highlight.coverImage} alt={highlight.title} />
                    <div className="highlight-type">
                      {getHighlightIcon(highlight.type)}
                      {highlight.type === 'interview' ? '赛后采访' : 
                       highlight.type === 'highlight' ? '精彩回放' : '特别报道'}
                    </div>
                  </div>
                  <div className="highlight-content">
                    <h3>{highlight.title}</h3>
                    <div className="highlight-match-info">
                      <span>{highlight.matchInfo.homeTeam} {highlight.matchInfo.score ? `${highlight.matchInfo.score}` : 'vs'} {highlight.matchInfo.awayTeam}</span>
                      <span>{formatDate(highlight.matchInfo.date)}</span>
                    </div>
                    <p>{highlight.content}</p>
                    <div className="highlight-tags">
                      {highlight.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    {highlight.type === 'highlight' && highlight.videoUrl && (
                      <button className="watch-video-btn">
                        <i className="fas fa-play"></i>
                        观看回放
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
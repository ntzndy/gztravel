import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiPlus, FiUser, FiHeart, FiMessageCircle, FiUsers } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">贵州travel</span>
          </Link>

          {/* 搜索框 */}
          <div className="search-box">
            <FiSearch className="search-icon" size={20} />
            <input
              type="text"
              placeholder={t('search_placeholder')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
          </div>

          {/* 导航菜单 */}
          <nav className="nav-menu">
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
            >
              <FiHeart size={20} />
              <span>{t('home')}</span>
            </Link>
            
            <Link 
              to="/community" 
              className={`nav-item ${isActive('/community') ? 'active' : ''}`}
            >
              <FiMessageCircle size={20} />
              <span>{t('community')}</span>
            </Link>

            <Link 
              to="/guides" 
              className={`nav-item ${isActive('/guides') ? 'active' : ''}`}
            >
              <FiUsers size={20} />
              <span>{t('guides')}</span>
            </Link>
            
            <Link 
              to="/publish" 
              className={`nav-item ${isActive('/publish') ? 'active' : ''}`}
            >
              <FiPlus size={20} />
              <span>{t('publish')}</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
            >
              <FiUser size={20} />
              <span>{t('profile')}</span>
            </Link>
          </nav>

          {/* 语言切换器 */}
          <div className="header-actions">
            <LanguageSwitcher />
          </div>

          {/* 移动端菜单按钮 */}
          <div className="mobile-menu">
            <FiMessageCircle size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiPlus, FiUser, FiHeart, FiMessageCircle, FiUsers, FiMenu } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">LCK Travel</span>
          </Link>

          {/* 搜索框 */}
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder={t('search_placeholder')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
          </div>

          {/* 导航菜单 */}
          <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiHeart />
              <span>{t('nav.home')}</span>
            </Link>
            
            <Link 
              to="/community" 
              className={`nav-item ${isActive('/community') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiMessageCircle />
              <span>{t('nav.community')}</span>
            </Link>

            <Link 
              to="/guides" 
              className={`nav-item ${isActive('/guides') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiUsers />
              <span>{t('nav.guides')}</span>
            </Link>
            
            <Link 
              to="/publish" 
              className={`nav-item ${isActive('/publish') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiPlus />
              <span>{t('nav.publish')}</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiUser />
              <span>{t('nav.profile')}</span>
            </Link>
          </nav>

          {/* 语言切换器 */}
          <div className="header-actions">
            <LanguageSwitcher />
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="mobile-menu"
            onClick={toggleMobileMenu}
            aria-label={t('nav.toggle_menu')}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
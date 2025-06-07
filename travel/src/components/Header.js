import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, User, Heart, MessageCircle, Users } from 'lucide-react';
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
            <Search className="search-icon" size={20} />
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
              <Heart size={20} />
              <span>{t('home')}</span>
            </Link>
            
            <Link 
              to="/community" 
              className={`nav-item ${isActive('/community') ? 'active' : ''}`}
            >
              <MessageCircle size={20} />
              <span>{t('community')}</span>
            </Link>

            <Link 
              to="/guides" 
              className={`nav-item ${isActive('/guides') ? 'active' : ''}`}
            >
              <Users size={20} />
              <span>{t('guides')}</span>
            </Link>
            
            <Link 
              to="/publish" 
              className={`nav-item ${isActive('/publish') ? 'active' : ''}`}
            >
              <Plus size={20} />
              <span>{t('publish')}</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
            >
              <User size={20} />
              <span>{t('profile')}</span>
            </Link>
          </nav>

          {/* 语言切换器 */}
          <div className="header-actions">
            <LanguageSwitcher />
          </div>

          {/* 移动端菜单按钮 */}
          <div className="mobile-menu">
            <MessageCircle size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
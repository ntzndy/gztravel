import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FiSettings, FiGrid, FiBookmark, FiMapPin, FiCalendar, FiShoppingBag,
  FiUser, FiLogIn, FiUserPlus, FiX, FiEdit3, FiLogOut, FiUpload, FiCamera
} from 'react-icons/fi';
import PostCard from '../../components/PostCard';
import { mockUser } from '../../mock/user';
import { mockUserPosts } from '../../mock/post';
import { mockOrders } from '../../mock/order';
import { useLanguage } from '../../context/LanguageContext';
import './Profile.css';

const langMap = { zh: 'zh', en: 'en', ja: 'ja' };
const pageTexts = {
  zh: {
    welcome: '欢迎来到贵州 Travel',
    tip: '登录后解锁更多功能',
    login: '登录',
    register: '注册',
    posts: '帖子',
    orders: '订单',
    saved: '收藏',
    followers: '粉丝',
    following: '关注',
    likes: '获赞',
    joined: '加入于',
    noSaved: '暂无收藏',
    edit: '编辑资料',
    account: '账号设置',
    logout: '退出登录'
  },
  en: {
    welcome: 'Welcome to Guizhou Travel',
    tip: 'Log in to unlock more features',
    login: 'Login',
    register: 'Register',
    posts: 'Posts',
    orders: 'Orders',
    saved: 'Saved',
    followers: 'Followers',
    following: 'Following',
    likes: 'Likes',
    joined: 'Joined in',
    noSaved: 'No saved items yet',
    edit: 'Edit Profile',
    account: 'Account Settings',
    logout: 'Logout'
  },
  ja: {
    welcome: '貴州トラベルへようこそ',
    tip: 'ログインしてより多くの機能を利用',
    login: 'ログイン',
    register: '登録',
    posts: '投稿',
    orders: '注文',
    saved: '保存',
    followers: 'フォロワー',
    following: 'フォロー',
    likes: 'いいね',
    joined: '参加日',
    noSaved: '保存された内容がありません',
    edit: 'プロフィール編集',
    account: 'アカウント設定',
    logout: 'ログアウト'
  }
};

const Profile = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = pageTexts[langMap[currentLanguage]] || pageTexts.zh;
  const dropdownRef = useRef(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [userData, setUserData] = useState(mockUser);
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '', email: '' });
  const [editFormData, setEditFormData] = useState({ ...mockUser });

  /* ---------------- life cycle ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSettingsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showAuthModal || showEditModal ? 'hidden' : 'unset';
  }, [showAuthModal, showEditModal]);

  /* ---------------- handlers ---------------- */
  const tabs = [
    { id: 'posts', label: t.posts, icon: FiGrid, count: mockUserPosts.length },
    { id: 'orders', label: t.orders, icon: FiShoppingBag, count: Object.keys(mockOrders).length },
    { id: 'saved', label: t.saved, icon: FiBookmark, count: 45 }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('posts');
    setShowSettingsDropdown(false);
  };

  const handleEditProfile = () => {
    setShowSettingsDropdown(false);
    setEditFormData({ ...userData });
    setShowEditModal(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return alert('请选择图片文件！');
    if (file.size > 2 * 1024 * 1024) return alert('图片大小不能超过2MB！');
    const reader = new FileReader();
    reader.onload = (ev) => setEditFormData({ ...editFormData, avatar: ev.target.result });
    reader.readAsDataURL(file);
  };

  /* ---------------- render part ---------------- */
  if (!isLoggedIn) {
    return (
      <motion.div className="profile-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="profile-guest-card">
          <FiUser size={72} />
          <h2>{t.welcome}</h2>
          <p>{t.tip}</p>
          <div className="guest-actions">
            <button className="btn btn-primary" onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}><FiLogIn /> {t.login}</button>
            <button className="btn btn-secondary" onClick={() => { setAuthMode('register'); setShowAuthModal(true); }}><FiUserPlus /> {t.register}</button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="profile-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="profile-cover" />
      <div className="profile-card container">
        {/* avatar & basic */}
        <div className="pc-basic">
          <div className="pc-avatar-wrapper">
            <img className="pc-avatar" src={userData.avatar} alt={userData.name[currentLanguage]} />
            <button className="pc-avatar-edit" onClick={handleEditProfile}><FiEdit3 size={16} /></button>
          </div>
          <div className="pc-info">
            <h1 className="pc-name">{userData.name[currentLanguage]}</h1>
            <p className="pc-bio">{userData.bio[currentLanguage]}</p>
            <div className="pc-meta">
              <span><FiMapPin /> {userData.location[currentLanguage]}</span>
              <span><FiCalendar /> {t.joined} {userData.joinDate[currentLanguage]}</span>
            </div>
          </div>
          <div className="pc-gear" ref={dropdownRef}>
            <button className="gear-btn" onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}><FiSettings size={20} /></button>
            {showSettingsDropdown && (
              <div className="gear-menu">
                <button onClick={handleEditProfile}><FiEdit3 /> {t.edit}</button>
                <button onClick={() => alert('设置开发中')}><FiSettings /> {t.account}</button>
                <button className="logout" onClick={handleLogout}><FiLogOut /> {t.logout}</button>
              </div>
            )}
          </div>
        </div>
        {/* stats */}
        <div className="pc-stats">
          <div className="stat" onClick={() => setActiveTab('posts')}><span>{userData.posts}</span>{t.posts}</div>
          <div className="stat"><span>{userData.followers}</span>{t.followers}</div>
          <div className="stat"><span>{userData.following}</span>{t.following}</div>
          <div className="stat"><span>{userData.likes}</span>{t.likes}</div>
        </div>
        {/* tabs */}
        <div className="pc-tabs">
          {tabs.map(t => {
            const Icon = t.icon;
            return <button key={t.id} className={activeTab===t.id? 'active' : ''} onClick={()=>setActiveTab(t.id)}><Icon size={18}/> {t.label} ({t.count})</button>;
          })}
        </div>
        {/* content */}
        <div className="pc-content">
          {activeTab==='posts' && (
            <div className="posts-grid">
              {mockUserPosts.map(p => <PostCard key={p.id} post={p}/>) }
            </div>
          )}
          {activeTab==='orders' && (
            <div className="orders-grid">
              {Object.values(mockOrders).map(o => (
                <div key={o.id} className="order-card" onClick={()=>navigate(`/order/${o.id}`)}>
                  <img src={o.image} alt={o.title[currentLanguage]}/>
                  <div className="order-info">
                    <h4>{o.title[currentLanguage]}</h4>
                    <span>{o.location[currentLanguage]}</span>
                    <span>{o.date}</span>
                  </div>
                  <span className="order-price">{o.price}</span>
                </div>
              ))}
            </div>
          )}
          {activeTab==='saved' && (
            <div className="empty-display"><FiBookmark size={48}/> {t.noSaved}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile; 
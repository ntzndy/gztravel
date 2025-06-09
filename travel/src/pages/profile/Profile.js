import React, { useState, useEffect, useRef } from 'react';
import { FiSettings, FiGrid, FiBookmark, FiMapPin, FiCalendar, FiShoppingBag, FiUser, FiLogIn, FiUserPlus, FiX, FiEdit3, FiLogOut, FiChevronDown, FiUpload, FiCamera } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import { mockUser } from '../../mock/user';
import { mockUserPosts } from '../../mock/post';
import { mockOrders } from '../../mock/order';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState({
    id: 1,
    name: '小红薯用户',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face',
    bio: '热爱生活 | 美食探索者 | 旅行达人 ✨',
    location: '上海，中国',
    joinDate: '2023年5月',
    followers: 1234,
    following: 567,
    posts: 2,
    likes: 5678
  });
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [editFormData, setEditFormData] = useState({
    name: userData.name,
    bio: userData.bio,
    location: userData.location,
    avatar: userData.avatar
  });
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    // 确保用户数据被正确加载
    setUserData(mockUser);
    setEditFormData({
      name: mockUser.name,
      bio: mockUser.bio,
      location: mockUser.location,
      avatar: mockUser.avatar
    });
  }, []);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSettingsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 防止模态框打开时页面滚动
  useEffect(() => {
    if (showAuthModal || showEditModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 清理函数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAuthModal, showEditModal]);

  const tabs = [
    { id: 'posts', label: '帖子', icon: FiGrid, count: isLoggedIn ? mockUserPosts.length : 0 },
    { id: 'orders', label: '订单', icon: FiShoppingBag, count: isLoggedIn ? Object.keys(mockOrders).length : 0 },
    { id: 'saved', label: '收藏', icon: FiBookmark, count: isLoggedIn ? 45 : 0 }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'register' && formData.password !== formData.confirmPassword) {
      alert('两次输入的密码不一致！');
      return;
    }
    
    // 模拟登录/注册成功
    setIsLoggedIn(true);
    setShowAuthModal(false);
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    });
    alert(authMode === 'login' ? '登录成功！' : '注册成功！');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('posts');
    setShowSettingsDropdown(false);
  };

  const handleEditProfile = () => {
    setShowSettingsDropdown(false);
    setEditFormData({
      name: userData.name,
      bio: userData.bio,
      location: userData.location,
      avatar: userData.avatar
    });
    setShowEditModal(true);
  };

  const handleSettings = () => {
    setShowSettingsDropdown(false);
    alert('设置功能开发中...');
  };

  const handleEditInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 检查文件类型
      if (!file.type.startsWith('image/')) {
        alert('请选择图片文件！');
        return;
      }
      
      // 检查文件大小 (限制为2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('图片大小不能超过2MB！');
        return;
      }

      // 使用FileReader读取文件
      const reader = new FileReader();
      reader.onload = (event) => {
        setEditFormData({
          ...editFormData,
          avatar: event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // 更新用户数据，确保所有字段都被保存
    setUserData({
      ...userData,
      name: editFormData.name || userData.name,
      bio: editFormData.bio || userData.bio,
      location: editFormData.location || userData.location,
      avatar: editFormData.avatar || userData.avatar,
      joinDate: userData.joinDate,
      followers: userData.followers,
      following: userData.following,
      posts: userData.posts,
      likes: userData.likes
    });
    setShowEditModal(false);
    alert('资料更新成功！');
  };

  // 处理订单点击事件
  const handleOrderClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  // 处理订单使用事件
  const handleUseOrder = (e, orderId) => {
    e.stopPropagation(); // 阻止事件冒泡
    navigate(`/order/${orderId}`);
  };

  // 调试输出userData
  console.log('userData', userData);

  // 未登录状态的渲染
  if (!isLoggedIn) {
    return (
      <motion.div 
        className="profile-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="login-prompt">
            <div className="login-card">
              <FiUser size={64} className="login-icon" />
              <h2>欢迎来到贵州Travel</h2>
              <p>登录后可以查看个人信息、发布内容、管理订单等更多功能</p>
              
              <div className="auth-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setAuthMode('login');
                    setShowAuthModal(true);
                  }}
                >
                  <FiLogIn size={20} />
                  登录
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setAuthMode('register');
                    setShowAuthModal(true);
                  }}
                >
                  <FiUserPlus size={20} />
                  注册
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 登录注册模态框 */}
        <AnimatePresence>
          {showAuthModal && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
            >
              <motion.div 
                className="auth-modal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="auth-modal-header">
                  <h3>{authMode === 'login' ? '登录' : '注册'}</h3>
                  <button 
                    className="close-btn"
                    onClick={() => setShowAuthModal(false)}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="form-group">
                    <label>用户名</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入用户名"
                    />
                  </div>
                  
                  {authMode === 'register' && (
                    <div className="form-group">
                      <label>邮箱</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="请输入邮箱"
                      />
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label>密码</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入密码"
                    />
                  </div>
                  
                  {authMode === 'register' && (
                    <div className="form-group">
                      <label>确认密码</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        placeholder="请再次输入密码"
                      />
                    </div>
                  )}
                  
                  <button type="submit" className="btn btn-primary btn-full">
                    {authMode === 'login' ? '登录' : '注册'}
                  </button>
                </form>
                
                <div className="auth-switch">
                  {authMode === 'login' ? (
                    <p>
                      还没有账号？
                      <button 
                        type="button"
                        className="text-btn"
                        onClick={() => setAuthMode('register')}
                      >
                        立即注册
                      </button>
                    </p>
                  ) : (
                    <p>
                      已有账号？
                      <button 
                        type="button"
                        className="text-btn"
                        onClick={() => setAuthMode('login')}
                      >
                        立即登录
                      </button>
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // 已登录状态的渲染
  return (
    <motion.div 
      className="profile-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* 个人资料头部 */}
        <div className="profile-header">
          <div className="profile-info">
            <div className="avatar-section">
              <img 
                src={userData.avatar} 
                alt={userData.name}
                className="profile-avatar"
              />
              <button 
                className="edit-avatar-btn" 
                onClick={handleEditProfile}
                title="编辑资料"
              >
                <FiEdit3 size={16} />
              </button>
            </div>
            
            <div className="user-details">
              <div className="user-header">
                <div className="user-title">
                  <h1 className="user-name">{userData.name}</h1>
                  <p className="user-bio">{userData.bio}</p>
                  <div className="user-meta">
                    <div className="meta-item" title="所在地">
                      <FiMapPin size={16} />
                      <span>{userData.location}</span>
                    </div>
                    <div className="meta-item" title="加入时间">
                      <FiCalendar size={16} />
                      <span>加入于 {userData.joinDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="user-nav">
                  <div className="settings-dropdown" ref={dropdownRef}>
                    <button 
                      className="settings-btn gear-only"
                      onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                      aria-label="用户设置菜单"
                      title="设置"
                    >
                      <FiSettings size={22} />
                    </button>
                    
                    {showSettingsDropdown && (
                      <div className="dropdown-menu">
                        <button 
                          className="dropdown-item"
                          onClick={handleEditProfile}
                        >
                          <FiEdit3 size={18} />
                          编辑资料
                        </button>
                        <button 
                          className="dropdown-item"
                          onClick={handleSettings}
                        >
                          <FiSettings size={18} />
                          账号设置
                        </button>
                        <div className="dropdown-divider" />
                        <button 
                          className="dropdown-item logout"
                          onClick={handleLogout}
                        >
                          <FiLogOut size={18} />
                          退出登录
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item" onClick={() => setActiveTab('posts')}>
              <span className="stat-number">{userData.posts}</span>
              <span className="stat-label">帖子</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{userData.followers}</span>
              <span className="stat-label">粉丝</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{userData.following}</span>
              <span className="stat-label">关注</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{userData.likes}</span>
              <span className="stat-label">获赞</span>
            </div>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="profile-tabs">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent size={20} />
                <span>{tab.label}</span>
                <span className="tab-count">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* 内容区域 */}
        <div className="profile-content">
          {activeTab === 'posts' && (
            <div className="posts-grid">
              {mockUserPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="orders-grid">
              {Object.values(mockOrders).map((order, index) => (
                <motion.div
                  key={order.id}
                  className="order-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleOrderClick(order.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="order-header">
                    <div className="order-number">订单号：{order.orderNumber}</div>
                    <div className={`order-status ${order.status === '已完成' ? 'completed' : 'pending'}`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="order-content">
                    <img src={order.image} alt={order.title} className="order-image" />
                    <div className="order-details">
                      <div className="order-type">{order.type}</div>
                      <h4 className="order-title">{order.title}</h4>
                      <div className="order-location">
                        <FiMapPin size={14} />
                        <span>{order.location}</span>
                      </div>
                      <div className="order-date">使用日期：{order.date}</div>
                    </div>
                    <div className="order-price">{order.price}</div>
                  </div>
                  
                  <div className="order-actions">
                    <button 
                      className="btn btn-small btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrderClick(order.id);
                      }}
                    >
                      查看详情
                    </button>
                    {order.status === '待使用' && (
                      <button 
                        className="btn btn-small btn-primary"
                        onClick={(e) => handleUseOrder(e, order.id)}
                      >
                        立即使用
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="empty-state">
              <FiBookmark size={64} className="empty-icon" />
              <h3>还没有收藏的内容</h3>
              <p>收藏你喜欢的帖子，随时回来查看！</p>
            </div>
          )}
        </div>

        {/* 编辑资料模态框 */}
        <AnimatePresence>
          {showEditModal && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEditModal(false)}
            >
              <motion.div 
                className="edit-modal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="auth-modal-header">
                  <h3>编辑个人资料</h3>
                  <button 
                    className="close-btn"
                    onClick={() => setShowEditModal(false)}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <form onSubmit={handleEditSubmit} className="edit-form">
                  <div className="form-group">
                    <label>头像</label>
                    <div className="avatar-upload-container">
                      <label htmlFor="avatar-upload" className="avatar-upload-preview">
                        <img 
                          src={editFormData.avatar} 
                          alt="当前头像"
                          className="upload-preview-image"
                          onError={(e) => {
                            e.target.src = userData.avatar;
                          }}
                        />
                        <div className="avatar-upload-overlay">
                          <FiCamera size={24} />
                          <span>点击更换</span>
                        </div>
                      </label>
                      <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="avatar-upload-input"
                      />
                      <label htmlFor="avatar-upload" className="avatar-upload-btn">
                        <FiUpload size={16} />
                        <span>选择文件</span>
                      </label>
                    </div>
                    <div className="upload-hint">
                      <p>支持 JPG、PNG、GIF 格式，文件大小不超过2MB</p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>用户名</label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditInputChange}
                      required
                      placeholder="请输入用户名"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>个人简介</label>
                    <textarea
                      name="bio"
                      value={editFormData.bio}
                      onChange={handleEditInputChange}
                      placeholder="写点什么介绍自己吧..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>所在地</label>
                    <input
                      type="text"
                      name="location"
                      value={editFormData.location}
                      onChange={handleEditInputChange}
                      placeholder="请输入所在地"
                    />
                  </div>
                  
                  <div className="edit-preview">
                    <h4>预览</h4>
                    <div className="preview-card">
                      <img 
                        src={editFormData.avatar} 
                        alt="预览头像"
                        className="preview-avatar"
                        onError={(e) => {
                          e.target.src = userData.avatar;
                        }}
                      />
                      <div className="preview-info">
                        <h5>{editFormData.name || '用户名'}</h5>
                        <p>{editFormData.bio || '暂无简介'}</p>
                        <div className="preview-location">
                          <FiMapPin size={12} />
                          <span>{editFormData.location || '未知地区'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="edit-actions">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowEditModal(false)}
                    >
                      取消
                    </button>
                    <button type="submit" className="btn btn-primary">
                      保存修改
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Profile; 
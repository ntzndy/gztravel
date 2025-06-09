import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { communityUsers, communityPosts } from '../../mock';
import './UserProfile.css';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const [followed, setFollowed] = useState(false);
  
  // 查找用户信息
  const user = communityUsers.find(u => u.name === userName);
  const userPosts = communityPosts.filter(p => p.user.name === userName);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [userName]);

  if (!user) {
    return <div className="user-profile-container">用户不存在</div>;
  }

  return (
    <div className="user-profile-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>
      <div className="user-profile-header">
        <img className="user-profile-avatar" src={user.avatar} alt={user.name} />
        <div style={{flex: 1}}>
          <div className="user-profile-name">{user.name}</div>
          <div className="user-profile-intro">{user.intro}</div>
        </div>
        <motion.button 
          className={`follow-btn${followed ? ' followed' : ''}`} 
          onClick={() => setFollowed(f => !f)} 
          whileTap={{ scale: 0.92 }}
        >
          {followed ? '已关注' : '+ 关注'}
        </motion.button>
        <motion.button 
          className="msg-btn" 
          onClick={() => alert('暂未开通私信功能')} 
          whileTap={{ scale: 0.92 }}
        >
          私信
        </motion.button>
      </div>
      <div className="user-profile-section-title">TA的帖子</div>
      <div className="user-profile-posts">
        {userPosts.length === 0 ? (
          <div className="no-post">暂无发布内容</div>
        ) : userPosts.map(post => (
          <div key={post.id} className="user-profile-post-card" onClick={() => navigate(`/community/${post.id}`)}>
            <img className="user-profile-post-img" src={post.images[0]} alt={post.title} />
            <div className="user-profile-post-info">
              <div className="user-profile-post-title">{post.title}</div>
              <div className="user-profile-post-abstract">
                {post.content.slice(0, 40)}{post.content.length > 40 ? '...' : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile; 
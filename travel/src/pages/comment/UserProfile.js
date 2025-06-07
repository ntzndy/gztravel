import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockPosts from './mockPosts';
import './UserProfile.css';
import { motion } from 'framer-motion';

// 简单的用户简介mock
const userIntroMap = {
  '不吃香菜': '热爱旅行与美食，喜欢民族文化体验。',
  '猫猫头': '文艺青年，咖啡控，喜欢探索城市角落。',
  '小王同学': '摄影爱好者，热衷自然风光和人文故事。',
  '奶茶三分甜': '古镇民宿体验师，甜品和夜景爱好者。',
  '健身小熊': '健身达人，喜欢尝试各地特色小吃。',
  '摄影路人甲': '非遗文化传播者，喜欢用镜头记录生活。'
};

const UserProfile = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const [followed, setFollowed] = useState(false);
  // 查找用户头像
  const userPost = mockPosts.find(p => p.user.name === userName);
  const avatar = userPost ? userPost.user.avatar : '';
  const intro = userIntroMap[userName] || '这个用户很神秘，还没有填写简介。';
  // 该用户的所有帖子
  const userPosts = mockPosts.filter(p => p.user.name === userName);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [userName]);

  return (
    <div className="user-profile-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>
      <div className="user-profile-header">
        <img className="user-profile-avatar" src={avatar} alt={userName} />
        <div style={{flex: 1}}>
          <div className="user-profile-name">{userName}</div>
          <div className="user-profile-intro">{intro}</div>
        </div>
        <motion.button className={`follow-btn${followed ? ' followed' : ''}`} onClick={() => setFollowed(f => !f)} whileTap={{ scale: 0.92 }}>
          {followed ? '已关注' : '+ 关注'}
        </motion.button>
        <motion.button className="msg-btn" onClick={() => alert('暂未开通私信功能')} whileTap={{ scale: 0.92 }}>私信</motion.button>
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
              <div className="user-profile-post-abstract">{post.content.slice(0, 40)}{post.content.length > 40 ? '...' : ''}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile; 
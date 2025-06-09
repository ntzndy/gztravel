import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetail.css';
import { mockPosts } from './mockPosts';
import { motion } from 'framer-motion';

const POSTS_PER_PAGE = 6;

// 模拟数据（与 Home.js 保持一致）
const mockComments = [
  { id: 1, user: '热心网友', content: '看起来好棒！', time: '1小时前' },
  { id: 2, user: '美食家', content: '下次也要去试试！', time: '30分钟前' }
];

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState(null);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 根据 ID 查找对应的帖子
    const post = mockPosts.find(p => p.id === parseInt(id));
    if (post) {
      setCurrentPost(post);
    } else {
      // 如果找不到帖子，返回首页
      navigate('/');
    }
  }, [id, navigate]);

  if (!currentPost) {
    return (
      <div className="post-detail-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>正在加载内容...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>
      <div className="post-card-detail">
        <div className="user-info-detail">
          <motion.img 
            className="avatar-detail" 
            src={currentPost.user.avatar} 
            alt={currentPost.user.name} 
            onClick={() => navigate(`/user/${encodeURIComponent(currentPost.user.name)}`)} 
            style={{cursor: 'pointer'}} 
            whileTap={{ scale: 0.92 }} 
          />
          <div style={{flex: 1}}>
            <div className="username-detail">{currentPost.user.name}</div>
            <div className="time-detail">{currentPost.timeAgo}</div>
          </div>
          <button 
            className={`follow-btn${followed ? ' followed' : ''}`} 
            onClick={() => setFollowed(f => !f)}
          >
            {followed ? '已关注' : '+ 关注'}
          </button>
        </div>
        <div className="content">{currentPost.title}</div>
        <div className="content-detail">{currentPost.content}</div>
        {currentPost.images && currentPost.images.length > 0 && (
          <div className="images">
            {currentPost.images.map((img, i) => (
              <img key={i} src={img} alt={currentPost.title} className="post-image" />
            ))}
          </div>
        )}
        <div className="tags">
          {currentPost.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
        <div className="actions">
          <button className="like-btn">👍 {currentPost.likes}</button>
          <button className="comment-btn">💬 {currentPost.comments}</button>
        </div>
        <div className="comments-section">
          {currentPost.commentList && currentPost.commentList.length > 0 ? (
            currentPost.commentList.map(comment => (
              <div key={comment.id} className="comment">
                <img 
                  className="comment-avatar" 
                  src={comment.user.avatar} 
                  alt={comment.user.name} 
                />
                <span className="comment-user">{comment.user.name}：</span>
                <span>{comment.content}</span>
                <span className="comment-time">{comment.time}</span>
              </div>
            ))
          ) : (
            <div className="no-comment">暂无评论</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail; 
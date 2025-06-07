import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handlePostClick = (e) => {
    // 如果点击的是交互按钮，不触发导航
    if (e.target.closest('.post-actions') || e.target.closest('.action-btn')) {
      return;
    }
    navigate(`/post/${post.id}`);
  };

  return (
    <motion.div 
      className="post-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handlePostClick}
      style={{ cursor: 'pointer' }}
    >
      {/* 用户信息 */}
      <div className="post-header">
        <div className="user-info">
          <img 
            src={post.user.avatar || '/api/placeholder/40/40'} 
            alt={post.user.name}
            className="user-avatar"
          />
          <div className="user-details">
            <h4 className="user-name">{post.user.name}</h4>
            <span className="post-time">{post.timeAgo}</span>
          </div>
        </div>
      </div>

      {/* 图片 */}
      {post.images && post.images.length > 0 && (
        <div className="post-images">
          <img 
            src={post.images[0]} 
            alt="Post content"
            className="post-image"
          />
          {post.images.length > 1 && (
            <div className="image-count">
              <span>1/{post.images.length}</span>
            </div>
          )}
        </div>
      )}

      {/* 内容 */}
      <div className="post-content">
        <p className="post-text">{post.content}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="post-tag">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* 交互按钮 */}
      <div className="post-actions">
        <motion.button 
          className={`action-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
          whileTap={{ scale: 0.9 }}
        >
          <Heart 
            size={20} 
            fill={isLiked ? '#ff6b6b' : 'none'}
            color={isLiked ? '#ff6b6b' : '#666'}
          />
          <span>{likeCount}</span>
        </motion.button>

        <button className="action-btn">
          <MessageCircle size={20} />
          <span>{post.comments || 0}</span>
        </button>

        <button className="action-btn">
          <Share size={20} />
        </button>

        <motion.button 
          className={`action-btn bookmark ${isBookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmark}
          whileTap={{ scale: 0.9 }}
        >
          <Bookmark 
            size={20} 
            fill={isBookmarked ? '#4ecdc4' : 'none'}
            color={isBookmarked ? '#4ecdc4' : '#666'}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PostCard; 
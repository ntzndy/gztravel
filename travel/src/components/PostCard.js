import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import './PostCard.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PostCard = ({ post }) => {
  const { currentLanguage } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const navigate = useNavigate();

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // 处理可能是多语言对象或直接字符串的情况
  const getLocalizedContent = (content) => {
    if (content && typeof content === 'object' && content[currentLanguage]) {
      return content[currentLanguage];
    }
    return content;
  };

  // 处理可能是多语言数组或直接数组的情况
  const getLocalizedArray = (arr) => {
    if (arr && typeof arr === 'object' && arr[currentLanguage]) {
      return arr[currentLanguage];
    }
    return arr;
  };

  // 获取本地化的内容
  const title = post.title ? getLocalizedContent(post.title) : '';
  const content = getLocalizedContent(post.content);
  const tags = getLocalizedArray(post.tags) || [];
  const userName = post.user && post.user.name ? getLocalizedContent(post.user.name) : '';
  const timeAgo = getLocalizedContent(post.timeAgo);

  return (
    <motion.div 
      className="post-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* 图片 */}
      {post.images && post.images.length > 0 && (
        <div className="post-images">
          <img 
            src={post.images[0]} 
            alt={title || content}
            className="post-image"
          />
          {post.images.length > 1 && (
            <div className="image-count">
              <span>1/{post.images.length}</span>
            </div>
          )}
        </div>
      )}

      {/* 内容区域 */}
      <div className="post-content">
        {title && <h2 className="post-title">{title}</h2>}
        <p className="post-text">{content}</p>
        {tags && tags.length > 0 && (
          <div className="post-tags">
            {tags.map((tag, index) => (
              <span key={index} className="post-tag">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* 用户信息弱化显示 */}
      <div className="post-user-weak">
        <img 
          className="user-avatar-weak" 
          src={post.user.avatar} 
          alt={userName} 
          onClick={e => {
            e.stopPropagation();
            navigate(`/user/${post.user.id}`);
          }}
          style={{cursor: 'pointer'}}
          onMouseDown={e => e.stopPropagation()}
          onTouchStart={e => e.stopPropagation()}
        />
        <span className="user-name-weak">{userName}</span>
        <span className="post-time-weak"> · {timeAgo}</span>
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
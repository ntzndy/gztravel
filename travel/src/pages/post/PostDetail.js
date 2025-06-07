import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiHeart, FiMessageCircle, FiShare, FiBookmark, FiArrowLeft, FiSend, FiMoreHorizontal } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './PostDetail.css';

// 模拟帖子详细数据
const mockPostDetail = {
  id: 1,
  user: {
    id: 1,
    name: '小红薯用户',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face',
    isFollowing: false
  },
  content: '今天的下午茶时光 ☕️ 在这家咖啡店发现了超好喝的手冲咖啡！店里的装修很温馨，服务也特别好，推荐给大家。咖啡的香味很浓郁，口感丝滑，价格也很合理。下次还会再来的！',
  images: [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop'
  ],
  tags: ['咖啡', '下午茶', '推荐'],
  likes: 128,
  comments: 23,
  shares: 5,
  timeAgo: '2小时前',
  location: '上海·静安区'
};

// 模拟评论数据
const mockComments = [
  {
    id: 1,
    user: {
      name: '咖啡爱好者',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '这家店我也去过，确实很不错！环境特别好',
    timeAgo: '1小时前',
    likes: 5
  },
  {
    id: 2,
    user: {
      name: '美食达人',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    content: '看起来就很香呢～请问具体地址在哪里呀？',
    timeAgo: '30分钟前',
    likes: 3
  },
  {
    id: 3,
    user: {
      name: '旅行记录者',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    content: '收藏了！下次路过一定要试试',
    timeAgo: '15分钟前',
    likes: 2
  }
];

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // 模拟加载帖子数据
    setTimeout(() => {
      setPost(mockPostDetail);
      setComments(mockComments);
      setLikeCount(mockPostDetail.likes);
      setIsFollowing(mockPostDetail.user.isFollowing);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleShare = () => {
    // 模拟分享功能
    navigator.clipboard.writeText(window.location.href);
    alert('链接已复制到剪贴板');
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      user: {
        name: '当前用户',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face'
      },
      content: newComment,
      timeAgo: '刚刚',
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  if (loading) {
    return (
      <div className="post-detail-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-detail-container">
        <div className="error-state">
          <p>帖子不存在或已被删除</p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      {/* 顶部导航 */}
      <div className="post-detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} />
        </button>
        <h2>帖子详情</h2>
        <button className="more-btn">
          <FiMoreHorizontal size={24} />
        </button>
      </div>

      <div className="post-detail-content">
        {/* 用户信息 */}
        <div className="post-user-section">
          <div className="user-info">
            <img src={post.user.avatar} alt={post.user.name} className="user-avatar" />
            <div className="user-details">
              <h3 className="user-name">{post.user.name}</h3>
              <div className="post-meta">
                <span className="post-time">{post.timeAgo}</span>
                {post.location && (
                  <>
                    <span className="separator">·</span>
                    <span className="post-location">{post.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <button 
            className={`follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={handleFollow}
          >
            {isFollowing ? '已关注' : '关注'}
          </button>
        </div>

        {/* 图片轮播 */}
        {post.images && post.images.length > 0 && (
          <div className="post-images-section">
            <div className="image-carousel">
              <img 
                src={post.images[currentImageIndex]} 
                alt="Post content"
                className="carousel-image"
              />
              {post.images.length > 1 && (
                <div className="image-indicators">
                  {post.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
              {post.images.length > 1 && (
                <div className="image-counter">
                  {currentImageIndex + 1}/{post.images.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 帖子内容 */}
        <div className="post-content-section">
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
        <div className="post-actions-section">
          <div className="action-buttons">
            <motion.button 
              className={`action-btn ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
              whileTap={{ scale: 0.9 }}
            >
              <FiHeart 
                size={24} 
                fill={isLiked ? '#ff6b6b' : 'none'}
                color={isLiked ? '#ff6b6b' : '#666'}
              />
              <span>{likeCount}</span>
            </motion.button>

            <button className="action-btn">
              <FiMessageCircle size={24} />
              <span>{comments.length}</span>
            </button>

            <button className="action-btn" onClick={handleShare}>
              <FiShare size={24} />
              <span>{post.shares}</span>
            </button>

            <motion.button 
              className={`action-btn bookmark ${isBookmarked ? 'bookmarked' : ''}`}
              onClick={handleBookmark}
              whileTap={{ scale: 0.9 }}
            >
              <FiBookmark 
                size={24} 
                fill={isBookmarked ? '#4ecdc4' : 'none'}
                color={isBookmarked ? '#4ecdc4' : '#666'}
              />
            </motion.button>
          </div>
        </div>

        {/* 评论区 */}
        <div className="comments-section">
          <h3 className="comments-title">评论 ({comments.length})</h3>
          
          {/* 评论输入 */}
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="写下你的评论..."
              className="comment-input"
            />
            <button type="submit" className="send-btn" disabled={!newComment.trim()}>
              <FiSend size={20} />
            </button>
          </form>

          {/* 评论列表 */}
          <div className="comments-list">
            {comments.map((comment) => (
              <motion.div 
                key={comment.id} 
                className="comment-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src={comment.user.avatar} alt={comment.user.name} className="comment-avatar" />
                <div className="comment-content">
                  <div className="comment-header">
                    <h4 className="comment-user-name">{comment.user.name}</h4>
                    <span className="comment-time">{comment.timeAgo}</span>
                  </div>
                  <p className="comment-text">{comment.content}</p>
                  <div className="comment-actions">
                    <button className="comment-like-btn">
                      <FiHeart size={14} />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="comment-reply-btn">回复</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail; 
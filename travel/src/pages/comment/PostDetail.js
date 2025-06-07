import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetail.css';
import mockPosts from './mockPosts';
import { motion } from 'framer-motion';

// 模拟数据（与 Home.js 保持一致）
const mockComments = [
  { id: 1, user: '热心网友', content: '看起来好棒！', time: '1小时前' },
  { id: 2, user: '美食家', content: '下次也要去试试！', time: '30分钟前' }
];

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = mockPosts.find(p => p.id === Number(postId));
  const [followed, setFollowed] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postId]);

  if (!post) return <div className="post-detail-container">未找到该帖子</div>;

  return (
    <div className="post-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>
      <div className="post-card-detail">
        <div className="user-info-detail">
          <motion.img className="avatar-detail" src={post.user.avatar} alt="avatar" onClick={() => navigate(`/user/${encodeURIComponent(post.user.name)}`)} style={{cursor: 'pointer'}} whileTap={{ scale: 0.92 }} />
          <div style={{flex: 1}}>
            <div className="username-detail">{post.user.name}</div>
            <div className="time-detail">{post.timeAgo}</div>
          </div>
          <button className={`follow-btn${followed ? ' followed' : ''}`} onClick={() => setFollowed(f => !f)}>
            {followed ? '已关注' : '+ 关注'}
          </button>
        </div>
        <div className="content">{post.title}</div>
        <div className="content-detail">{post.content}</div>
        {post.images && post.images.length > 0 && (
          <div className="images">
            {post.images.map((img, i) => (
              <img key={i} src={img} alt="post" className="post-image" />
            ))}
          </div>
        )}
        <div className="tags">
          {post.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
        </div>
        <div className="actions">
          <button className="like-btn">👍 {post.likes}</button>
          <button className="comment-btn">💬 {post.comments}</button>
        </div>
      </div>
      <div className="comments-section">
        <h4>评论区</h4>
        {post.commentList && post.commentList.length > 0 ? post.commentList.map(c => (
          <div key={c.id} className="comment">
            <img className="comment-avatar" src={c.user.avatar} alt={c.user.name} />
            <span className="comment-user">{c.user.name}：</span>
            <span>{c.content}</span>
            <span className="comment-time">{c.time}</span>
          </div>
        )) : <div className="no-comment">暂无评论</div>}
        <div className="add-comment">
          <input type="text" placeholder="写下你的评论...（暂不支持提交）" />
          <button disabled>发送</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail; 
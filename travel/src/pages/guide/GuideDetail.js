import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { guides } from '../../mock';
import './GuideDetail.css';

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    // 使用新的模拟数据源
    const found = guides.find(g => String(g.id) === String(id));
    setGuide(found);
  }, [id]);

  if (!guide) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>加载中...</p>
      </div>
    );
  }
  console.log('GuideDetail 渲染', guide);
  return (
    <div className="guide-detail-page">
      {/* 顶部大图 */}
      <div className="guide-detail-hero" style={{ backgroundImage: `url(${guide.coverImage})` }}>
        <div className="guide-detail-hero-overlay"></div>
        <div className="guide-detail-hero-content">
          <img src={guide.avatar} alt={guide.name} className="guide-detail-avatar" />
          <h2 className="guide-detail-name">{guide.name}</h2>
          <div className="guide-detail-title">{guide.title}</div>
          <div className="guide-detail-rating">
            <span>★</span>
            <span>{guide.rating}</span>
            <span className="review-count">({guide.reviewCount}条评价)</span>
          </div>
        </div>
      </div>

      {/* 详细信息 */}
      <div className="guide-detail-container">
        <section className="guide-detail-section">
          <h3>个人简介</h3>
          <p>{guide.bio}</p>
        </section>

        <section className="guide-detail-section">
          <h3>服务区域</h3>
          <p>{guide.serviceArea}</p>
        </section>

        <section className="guide-detail-section">
          <h3>联系方式</h3>
          <p>{guide.contact}</p>
        </section>

        <section className="guide-detail-section">
          <h3>荣誉奖项</h3>
          <ul>
            {guide.honors && guide.honors.map((honor, idx) => (
              <li key={idx}>{honor}</li>
            ))}
          </ul>
        </section>

        <section className="guide-detail-section">
          <h3>服务标签</h3>
          <div className="guide-detail-tags">
            {guide.tags && guide.tags.map((tag, idx) => (
              <span className="guide-detail-tag" key={idx}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="guide-detail-section">
          <h3>领队经验</h3>
          <div className="guide-detail-basic">
            <div className="guide-detail-info-item">
              <i className="fas fa-clock"></i>
              <span>{guide.yearsOfExperience}年经验</span>
            </div>
            <div className="guide-detail-info-item">
              <i className="fas fa-language"></i>
              <span>{guide.languages.join(' / ')}</span>
            </div>
            <div className="guide-detail-info-item">
              <i className="fas fa-certificate"></i>
              <span>专长：{guide.specialties.join('、')}</span>
            </div>
          </div>
        </section>

        <section className="guide-detail-section">
          <h3>个人风采</h3>
          <div className="guide-detail-gallery">
            {guide.gallery && guide.gallery.map((img, idx) => (
              <img key={idx} src={img} alt={`风采${idx + 1}`} className="guide-detail-gallery-img" />
            ))}
          </div>
        </section>

        <section className="guide-detail-section">
          <h3>真实评价</h3>
          <ul className="guide-detail-reviews">
            {guide.reviews && guide.reviews.map((review, idx) => (
              <li key={idx}>
                <strong>{review.user}</strong>（{review.date}）：{review.content}
              </li>
            ))}
          </ul>
        </section>

        <section className="guide-detail-section guide-detail-footer">
          <div className="guide-detail-price">{guide.price}</div>
          <div className="guide-detail-availability">{guide.availability}</div>
          <button className="book-btn" onClick={() => alert('请在实际项目中实现预约功能')}>
            立即预约
          </button>
          <button className="back-btn" onClick={() => navigate(-1)}>
            返回列表
          </button>
        </section>
      </div>
    </div>
  );
};

export default GuideDetail;
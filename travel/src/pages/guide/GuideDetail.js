import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { guides } from '../../mock';
import { useLanguage } from '../../context/LanguageContext';
import './GuideDetail.css';

const langMap = {
  zh: 'zh',
  en: 'en',
  ja: 'ja',
};

const pageTexts = {
  zh: {
    loading: '加载中...',
    personalIntro: '个人简介',
    serviceArea: '服务区域',
    contact: '联系方式',
    honors: '荣誉奖项',
    serviceTags: '服务标签',
    experience: '领队经验',
    years: '年经验',
    specialties: '专长',
    gallery: '个人风采',
    reviews: '真实评价',
    bookNow: '立即预约',
    backToList: '返回列表',
  },
  en: {
    loading: 'Loading...',
    personalIntro: 'Personal Introduction',
    serviceArea: 'Service Area',
    contact: 'Contact',
    honors: 'Honors',
    serviceTags: 'Service Tags',
    experience: 'Experience',
    years: 'years experience',
    specialties: 'Specialties',
    gallery: 'Gallery',
    reviews: 'Reviews',
    bookNow: 'Book Now',
    backToList: 'Back to List',
  },
  ja: {
    loading: '読み込み中...',
    personalIntro: '自己紹介',
    serviceArea: 'サービスエリア',
    contact: '連絡先',
    honors: '受賞歴',
    serviceTags: 'サービスタグ',
    experience: '経験',
    years: '年の経験',
    specialties: '得意分野',
    gallery: 'ギャラリー',
    reviews: 'レビュー',
    bookNow: '予約する',
    backToList: 'リストに戻る',
  },
};

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const [guide, setGuide] = useState(null);
  const t = pageTexts[langMap[currentLanguage]] || pageTexts.zh;

  useEffect(() => {
    const found = guides.find(g => String(g.id) === String(id));
    setGuide(found);
  }, [id]);

  if (!guide) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="guide-detail-page">
      {/* 顶部大图 */}
      <div className="guide-detail-hero" style={{ backgroundImage: `url(${guide.coverImage})` }}>
        <div className="guide-detail-hero-overlay"></div>
        <div className="guide-detail-hero-content">
          <img src={guide.avatar} alt={guide.name[currentLanguage]} className="guide-detail-avatar" />
          <h2 className="guide-detail-name">{guide.name[currentLanguage]}</h2>
          <div className="guide-detail-title">{guide.title[currentLanguage]}</div>
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
          <h3>{t.personalIntro}</h3>
          <p>{guide.bio[currentLanguage]}</p>
        </section>

        <section className="guide-detail-section">
          <h3>{t.serviceArea}</h3>
          <p>{guide.serviceArea}</p>
        </section>

        <section className="guide-detail-section">
          <h3>{t.contact}</h3>
          <p>{guide.contact}</p>
        </section>

        <section className="guide-detail-section">
          <h3>{t.honors}</h3>
          <ul>
            {guide.honors && guide.honors[currentLanguage].map((honor, idx) => (
              <li key={idx}>{honor}</li>
            ))}
          </ul>
        </section>

        <section className="guide-detail-section">
          <h3>{t.serviceTags}</h3>
          <div className="guide-detail-tags">
            {guide.tags && guide.tags[currentLanguage].map((tag, idx) => (
              <span className="guide-detail-tag" key={idx}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="guide-detail-section">
          <h3>{t.experience}</h3>
          <div className="guide-detail-basic">
            <div className="guide-detail-info-item">
              <i className="fas fa-clock"></i>
              <span>{guide.yearsOfExperience}{t.years}</span>
            </div>
            <div className="guide-detail-info-item">
              <i className="fas fa-language"></i>
              <span>{guide.languages.join(' / ')}</span>
            </div>
            <div className="guide-detail-info-item">
              <i className="fas fa-certificate"></i>
              <span>{t.specialties}：{guide.specialties[currentLanguage].join('、')}</span>
            </div>
          </div>
        </section>

        <section className="guide-detail-section">
          <h3>{t.gallery}</h3>
          <div className="guide-detail-gallery">
            {guide.gallery && guide.gallery.map((img, idx) => (
              <img key={idx} src={img} alt={`风采${idx + 1}`} className="guide-detail-gallery-img" />
            ))}
          </div>
        </section>

        <section className="guide-detail-section">
          <h3>{t.reviews}</h3>
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
            {t.bookNow}
          </button>
          <button className="back-btn" onClick={() => navigate(-1)}>
            {t.backToList}
          </button>
        </section>
      </div>
    </div>
  );
};

export default GuideDetail;
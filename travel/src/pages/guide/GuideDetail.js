import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GuideDetail.css';

const mockGuides = [
  {
    id: 1,
    name: '小红',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '资深导游 | 民族文化专家',
    rating: 4.9,
    reviewCount: 328,
    yearsOfExperience: 8,
    languages: ['中文', '英语', '苗语'],
    specialties: ['民族文化', '深度游', '摄影路线'],
    coverImage: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥800/天起',
    availability: '最快明天可约',
    bio: '热爱民族文化，擅长深度游路线策划，8年带团经验，带您深入体验本地风情。曾多次获得优秀导游称号，服务过上千名游客，广受好评。',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵州全境、黔东南苗族侗族自治州',
    contact: '188-8888-8888',
    honors: ['2022年度优秀导游', '民族文化推广大使'],
    tags: ['耐心细致', '路线丰富', '摄影达人'],
    reviews: [
      { user: '游客A', content: '小红非常专业，讲解很细致，体验感满分！', date: '2024-05-12' },
      { user: '游客B', content: '带我们深入苗寨，感受了不一样的民族风情。', date: '2024-04-28' }
    ]
  },
  {
    id: 2,
    name: '阿强',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '户外探险专家 | 登山向导',
    rating: 4.8,
    reviewCount: 256,
    yearsOfExperience: 6,
    languages: ['中文', '英语'],
    specialties: ['户外探险', '登山', '野营'],
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥1200/天起',
    availability: '本周末可约',
    bio: '热爱户外，擅长登山与野营，6年带队经验，安全可靠。熟悉贵州各大山脉，拥有国家认证户外领队证书。',
    gallery: [
      'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵州山地、黔西南',
    contact: '139-9999-9999',
    honors: ['国家认证户外领队', '2023年度安全带队奖'],
    tags: ['安全第一', '体能强', '野外生存'],
    reviews: [
      { user: '户外爱好者C', content: '阿强带队很有经验，整个行程非常安全顺利。', date: '2024-06-01' },
      { user: '登山小组D', content: '路线安排合理，风景很美，下次还会再约！', date: '2024-05-20' }
    ]
  },
  {
    id: 3,
    name: '美玲',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '美食文化达人 | 城市探索家',
    rating: 4.95,
    reviewCount: 412,
    yearsOfExperience: 5,
    languages: ['中文', '粤语', '英语'],
    specialties: ['美食探索', '城市文化', '历史建筑'],
    coverImage: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥600/天起',
    availability: '接受预约中',
    bio: '城市美食与文化深度体验，5年带队经验，带你发现不一样的城市。熟悉本地所有网红美食和历史文化景点。',
    gallery: [
      'https://images.unsplash.com/photo-1494790108755-2616b612c03c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵阳市区、周边城市',
    contact: '137-7777-7777',
    honors: ['2021年度美食推荐官'],
    tags: ['吃货首选', '文化讲解', '路线灵活'],
    reviews: [
      { user: '吃货E', content: '美玲带我们吃遍了贵阳，太满足了！', date: '2024-05-18' },
      { user: '历史迷F', content: '讲解很专业，收获很多冷知识。', date: '2024-04-30' }
    ]
  },
  {
    id: 4,
    name: '老王',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&fit=crop&crop=face',
    title: '摄影导师 | 自然风光专家',
    rating: 4.85,
    reviewCount: 189,
    yearsOfExperience: 10,
    languages: ['中文', '英语'],
    specialties: ['风光摄影', '后期指导', '器材建议'],
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: '¥1500/天起',
    availability: '下周可约',
    bio: '10年摄影经验，擅长自然风光拍摄与后期指导。多次举办摄影展，作品获奖无数。',
    gallery: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    serviceArea: '贵州自然景区',
    contact: '136-6666-6666',
    honors: ['省级摄影大赛金奖', '2023年度优秀摄影导师'],
    tags: ['摄影高手', '后期指导', '风光控'],
    reviews: [
      { user: '摄影爱好者G', content: '老王的摄影课很实用，收获满满。', date: '2024-05-25' },
      { user: '自然控H', content: '带我们拍到了绝美的风景照，非常感谢！', date: '2024-05-10' }
    ]
  }
];

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    // 模拟数据获取
    const found = mockGuides.find(g => String(g.id) === String(id));
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
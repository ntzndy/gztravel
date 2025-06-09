import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiCalendar, FiClock, FiPhone, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'qrcode';
import { mockOrders } from '../../mock';
import './OrderDetail.css';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    // 模拟加载订单数据
    setTimeout(() => {
      const orderData = mockOrders[id];
      setOrder(orderData);
      setLoading(false);
    }, 800);
  }, [id]);

  const generateQRCodeData = () => {
    if (!order) return '';
    
    const qrData = {
      orderNumber: order.orderNumber,
      type: order.type,
      title: order.title,
      usageDate: order.usageDate,
      location: order.location,
      timestamp: new Date().toISOString()
    };
    
    // 在实际项目中，这里会是一个验证URL或者JSON字符串
    return JSON.stringify(qrData);
  };

  const handleUseOrder = async () => {
    if (order) {
      try {
        const qrData = generateQRCodeData();
        const qrDataURL = await QRCode.toDataURL(qrData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrDataURL);
        setShowQRCode(true);
      } catch (error) {
        console.error('生成二维码失败:', error);
        alert('生成二维码失败，请重试');
      }
    }
  };

  if (loading) {
    return (
      <div className="order-detail-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-detail-container">
        <div className="error-state">
          <p>订单不存在或已被删除</p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="order-detail-container">
      {/* 顶部导航 */}
      <div className="order-detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} />
        </button>
        <h2>订单详情</h2>
        <div></div>
      </div>

      <div className="order-detail-content">
        {/* 订单状态 */}
        <div className="order-status-section">
          <div className={`status-badge ${order.status === '已完成' ? 'completed' : 'pending'}`}>
            {order.status}
          </div>
          <div className="order-number">订单号：{order.orderNumber}</div>
        </div>

        {/* 订单信息 */}
        <div className="order-info-section">
          <div className="order-image">
            <img src={order.image} alt={order.title} />
          </div>
          <div className="order-details">
            <div className="order-type">{order.type}</div>
            <h3 className="order-title">{order.title}</h3>
            <div className="order-location">
              <FiMapPin size={16} />
              <span>{order.location}</span>
            </div>
            <div className="order-price">
              <span className="current-price">{order.price}</span>
              {order.originalPrice && (
                <span className="original-price">{order.originalPrice}</span>
              )}
            </div>
          </div>
        </div>

        {/* 使用信息 */}
        <div className="usage-info-section">
          <h4>使用信息</h4>
          <div className="usage-details">
            <div className="usage-item">
              <FiCalendar size={16} />
              <span>使用日期：{order.usageDate}</span>
            </div>
            {order.validUntil && (
              <div className="usage-item">
                <FiClock size={16} />
                <span>有效期至：{order.validUntil}</span>
              </div>
            )}
          </div>
        </div>

        {/* 服务描述 */}
        <div className="description-section">
          <h4>服务描述</h4>
          <p>{order.description}</p>
        </div>

        {/* 导游信息（如果是导游服务） */}
        {order.guide && (
          <div className="guide-section">
            <h4>导游信息</h4>
            <div className="guide-info">
              <img src={order.guide.avatar} alt={order.guide.name} className="guide-avatar" />
              <div className="guide-details">
                <h5>{order.guide.name}</h5>
                <div className="guide-meta">
                  <span>{order.guide.yearsOfExperience}年经验</span>
                  <span>★ {order.guide.rating}</span>
                </div>
                <div className="guide-contact">
                  <FiPhone size={14} />
                  <span>{order.guide.contact}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 行程安排（如果有） */}
        {order.itinerary && (
          <div className="itinerary-section">
            <h4>行程安排</h4>
            <div className="itinerary-list">
              {order.itinerary.map((item, index) => (
                <div key={index} className="itinerary-item">
                  <div className="itinerary-time">{item.time}</div>
                  <div className="itinerary-content">
                    <h6>{item.activity}</h6>
                    <p>{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 包含项目 */}
        <div className="included-section">
          <h4>包含项目</h4>
          <ul>
            {order.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 不包含项目 */}
        <div className="excluded-section">
          <h4>不包含项目</h4>
          <ul>
            {order.excluded.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 注意事项 */}
        <div className="notes-section">
          <h4>注意事项</h4>
          <p>{order.notes}</p>
        </div>

        {/* 操作按钮 */}
        <div className="order-actions">
          {order.status === '待使用' && (
            <button className="btn btn-primary btn-full" onClick={handleUseOrder}>
              <span style={{fontSize: '20px', marginRight: '8px'}}>📱</span>
              立即使用
            </button>
          )}
          <button className="btn btn-outline btn-full">联系客服</button>
        </div>
      </div>

      {/* 二维码模态框 */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div 
            className="qr-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRCode(false)}
          >
            <motion.div 
              className="qr-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="qr-modal-header">
                <h3>使用二维码</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowQRCode(false)}
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="qr-modal-content">
                <div className="qr-code-container">
                  {qrCodeUrl ? (
                    <img 
                      src={qrCodeUrl} 
                      alt="二维码" 
                      className="qr-code-image"
                    />
                  ) : (
                    <div className="qr-loading">生成二维码中...</div>
                  )}
                </div>
                
                <div className="qr-info">
                  <h4>{order.title}</h4>
                  <p>订单号：{order.orderNumber}</p>
                  <p>请在景区/服务点出示此二维码</p>
                </div>
                
                <div className="qr-actions">
                  <button className="btn btn-outline" onClick={() => setShowQRCode(false)}>
                    关闭
                  </button>
                  <button className="btn btn-primary">
                    保存到相册
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderDetail; 
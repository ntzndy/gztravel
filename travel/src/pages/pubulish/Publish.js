import React, { useState } from 'react';
import { Camera, X, MapPin, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import './Publish.css';

const Publish = () => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [location, setLocation] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          url: event.target.result,
          file: file
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (imageId) => {
    setImages(prev => prev.filter(img => img.id !== imageId));
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags(prev => [...prev, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handlePublish = () => {
    if (!content.trim() && images.length === 0) {
      alert('请添加一些内容或图片！');
      return;
    }
    
    // 这里可以处理发布逻辑
    alert('发布成功！');
    
    // 重置表单
    setContent('');
    setImages([]);
    setTags([]);
    setLocation('');
  };

  return (
    <motion.div 
      className="publish-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="publish-form">
          <div className="publish-header">
            <h2>分享生活的美好时刻</h2>
            <p>记录你的精彩瞬间，与大家分享快乐</p>
          </div>

          {/* 图片上传区域 */}
          <div className="image-upload-section">
            <div className="images-grid">
              {images.map((image) => (
                <div key={image.id} className="image-item">
                  <img src={image.url} alt="上传的图片" />
                  <button 
                    className="remove-image"
                    onClick={() => removeImage(image.id)}
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
              
              {images.length < 9 && (
                <label className="image-upload-btn">
                  <Camera size={32} />
                  <span>添加图片</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
            </div>
            <p className="upload-tip">最多可上传9张图片</p>
          </div>

          {/* 内容输入 */}
          <div className="content-section">
            <textarea
              className="content-input"
              placeholder="分享你的想法和感受..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
            />
            <div className="content-info">
              <span className="char-count">{content.length}/500</span>
            </div>
          </div>

          {/* 标签输入 */}
          <div className="tags-section">
            <div className="section-header">
              <Hash size={20} />
              <span>添加标签</span>
            </div>
            <div className="tags-input-container">
              <input
                type="text"
                className="tag-input"
                placeholder="输入标签，按回车添加"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
              />
              <button className="add-tag-btn" onClick={addTag}>
                添加
              </button>
            </div>
            {tags.length > 0 && (
              <div className="tags-list">
                {tags.map((tag, index) => (
                  <span key={index} className="tag-item">
                    #{tag}
                    <button onClick={() => removeTag(tag)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 位置信息 */}
          <div className="location-section">
            <div className="section-header">
              <MapPin size={20} />
              <span>添加位置</span>
            </div>
            <input
              type="text"
              className="location-input"
              placeholder="你在哪里？"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* 发布按钮 */}
          <div className="publish-actions">
            <button className="btn btn-secondary">保存草稿</button>
            <button className="btn btn-primary" onClick={handlePublish}>
              发布
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Publish; 
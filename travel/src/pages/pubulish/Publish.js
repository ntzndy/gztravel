import React, { useState } from 'react';
import { FiCamera, FiX, FiMapPin, FiHash } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { mockUser } from '../../mock';
import { useLanguage } from '../../context/LanguageContext';
import './Publish.css';

const langMap = { zh: 'zh', en: 'en', ja: 'ja' };
const pageTexts = {
  zh: {
    header: '分享生活的美好时刻',
    subHeader: '记录你的精彩瞬间，与大家分享快乐',
    addImage: '添加图片',
    uploadTip: '最多可上传9张图片',
    contentPlaceholder: '分享你的想法和感受...',
    charCount: (len) => `${len}/500`,
    addTag: '添加标签',
    tagPlaceholder: '输入标签，按回车添加',
    add: '添加',
    location: '添加位置',
    locationPlaceholder: '你在哪里？',
    saveDraft: '保存草稿',
    publish: '发布',
    publishing: '发布中...',
    publishSuccess: '发布成功！',
    publishFail: '发布失败，请稍后重试',
    emptyAlert: '请添加一些内容或图片！',
    imageTooLarge: '图片大小不能超过5MB',
  },
  en: {
    header: 'Share the Beautiful Moments of Life',
    subHeader: 'Record your wonderful moments and share happiness with everyone',
    addImage: 'Add Image',
    uploadTip: 'You can upload up to 9 images',
    contentPlaceholder: 'Share your thoughts and feelings...',
    charCount: (len) => `${len}/500`,
    addTag: 'Add Tag',
    tagPlaceholder: 'Enter tag and press Enter',
    add: 'Add',
    location: 'Add Location',
    locationPlaceholder: 'Where are you?',
    saveDraft: 'Save Draft',
    publish: 'Publish',
    publishing: 'Publishing...',
    publishSuccess: 'Published successfully!',
    publishFail: 'Failed to publish, please try again later',
    emptyAlert: 'Please add some content or images!',
    imageTooLarge: 'Image size cannot exceed 5MB',
  },
  ja: {
    header: '人生の素敵な瞬間をシェア',
    subHeader: '素晴らしい瞬間を記録し、みんなと幸せを分かち合おう',
    addImage: '画像を追加',
    uploadTip: '最大9枚の画像をアップロードできます',
    contentPlaceholder: 'あなたの考えや気持ちをシェアしましょう...',
    charCount: (len) => `${len}/500`,
    addTag: 'タグを追加',
    tagPlaceholder: 'タグを入力し、Enterで追加',
    add: '追加',
    location: '位置情報を追加',
    locationPlaceholder: 'どこにいますか？',
    saveDraft: '下書きを保存',
    publish: '投稿',
    publishing: '投稿中...',
    publishSuccess: '投稿が成功しました！',
    publishFail: '投稿に失敗しました。後でもう一度お試しください',
    emptyAlert: '内容または画像を追加してください！',
    imageTooLarge: '画像サイズは5MB以下にしてください',
  },
};

const Publish = () => {
  const { currentLanguage } = useLanguage();
  const t = pageTexts[langMap[currentLanguage]] || pageTexts.zh;
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert(t.imageTooLarge);
        return;
      }
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

  const handlePublish = async () => {
    if (!content.trim() && images.length === 0) {
      alert(t.emptyAlert);
      return;
    }
    try {
      setIsSubmitting(true);
      const postData = {
        userId: mockUser.id,
        content: content.trim(),
        images: images.map(img => img.url),
        tags,
        location: location.trim(),
        createdAt: new Date().toISOString(),
        likes: 0,
        comments: []
      };
      // TODO: 这里应该调用实际的API
      console.log('发布数据:', postData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      mockUser.posts += 1;
      setContent('');
      setImages([]);
      setTags([]);
      setLocation('');
      alert(t.publishSuccess);
    } catch (error) {
      console.error('发布失败:', error);
      alert(t.publishFail);
    } finally {
      setIsSubmitting(false);
    }
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
            <h2>{t.header}</h2>
            <p>{t.subHeader}</p>
          </div>

          {/* 图片上传区域 */}
          <div className="image-upload-section">
            <div className="images-grid">
              {images.map((image) => (
                <div key={image.id} className="image-item">
                  <img src={image.url} alt="upload" />
                  <button 
                    className="remove-image"
                    onClick={() => removeImage(image.id)}
                  >
                    <FiX size={20} />
                  </button>
                </div>
              ))}
              {images.length < 9 && (
                <label className="image-upload-btn">
                  <FiCamera size={32} />
                  <span>{t.addImage}</span>
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
            <p className="upload-tip">{t.uploadTip}</p>
          </div>

          {/* 内容输入 */}
          <div className="content-section">
            <textarea
              className="content-input"
              placeholder={t.contentPlaceholder}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
            />
            <div className="content-info">
              <span className="char-count">{t.charCount(content.length)}</span>
            </div>
          </div>

          {/* 标签输入 */}
          <div className="tags-section">
            <div className="section-header">
              <FiHash size={20} />
              <span>{t.addTag}</span>
            </div>
            <div className="tags-input-container">
              <input
                type="text"
                className="tag-input"
                placeholder={t.tagPlaceholder}
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
              />
              <button className="add-tag-btn" onClick={addTag}>
                {t.add}
              </button>
            </div>
            {tags.length > 0 && (
              <div className="tags-list">
                {tags.map((tag, index) => (
                  <span key={index} className="tag-item">
                    #{tag}
                    <button onClick={() => removeTag(tag)}>
                      <FiX size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 位置信息 */}
          <div className="location-section">
            <div className="section-header">
              <FiMapPin size={20} />
              <span>{t.location}</span>
            </div>
            <input
              type="text"
              className="location-input"
              placeholder={t.locationPlaceholder}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* 发布按钮 */}
          <div className="publish-actions">
            <button 
              className="btn btn-secondary" 
              disabled={isSubmitting}
            >
              {t.saveDraft}
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handlePublish}
              disabled={isSubmitting}
            >
              {isSubmitting ? t.publishing : t.publish}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Publish; 
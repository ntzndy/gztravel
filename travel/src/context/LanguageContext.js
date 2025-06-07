import React, { createContext, useContext, useState } from 'react';
import { getTranslation } from '../utils/translations';

// 创建语言上下文
const LanguageContext = createContext();

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('zh');

  // 切换语言函数
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  // 获取翻译的便捷函数
  const t = (key) => getTranslation(key, currentLanguage);

  // 获取支持的语言列表
  const getSupportedLanguages = () => [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getSupportedLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 使用语言上下文的Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 
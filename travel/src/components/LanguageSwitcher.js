import React, { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, getSupportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="language-switcher">
      <button 
        className="language-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiGlobe size={16} className="language-globe-icon" />
        <span className="language-label">语言</span>
        <span className="language-flag">{currentLang?.flag}</span>
        <span className="language-name">{currentLang?.name}</span>
        <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(language => (
            <button
              key={language.code}
              className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="language-flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 
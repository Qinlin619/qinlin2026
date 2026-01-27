import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // 默认语言为英文，切换顺序：en -> zh -> zh-TW -> en
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'en') return 'zh';
      if (prev === 'zh') return 'zh-TW';
      return 'en';
    });
  };

  const getLanguageLabel = () => {
    if (language === 'en') return 'EN';
    if (language === 'zh') return '简';
    return '繁';
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getLanguageLabel }}>
      {children}
    </LanguageContext.Provider>
  );
};

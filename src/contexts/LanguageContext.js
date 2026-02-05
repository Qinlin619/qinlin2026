import React, { createContext, useState, useContext, useMemo } from 'react';

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
      return 'en';
    });
  };

  const getLanguageLabel = useMemo(() => {
    return () => {
      if (language === 'en') return 'EN';
      return '简';
    };
  }, [language]);

  const value = useMemo(() => ({
    language,
    toggleLanguage,
    getLanguageLabel
  }), [language, getLanguageLabel]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const navText = {
  en: {
    work: 'WORK',
    side: 'SIDE',
    about: 'ABOUT',
    cv: 'CV'
  },
  zh: {
    work: '作品',
    side: '副业',
    about: '关于',
    cv: '简历'
  },
  'zh-TW': {
    work: '作品',
    side: '副業',
    about: '關於',
    cv: '履歷'
  }
};

function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage, getLanguageLabel } = useLanguage();
  const texts = navText[language] || navText.en;

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <span className="logo-text">UMBRELLA</span>
          <span className="logo-icon">☂</span>
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            {texts.about}
          </Link>
          <Link to="/" className={isActive('/') && location.pathname === '/' ? 'active' : ''}>
            {texts.work}
          </Link>
          <Link to="/side" className={isActive('/side') ? 'active' : ''}>
            {texts.side}
          </Link>
          <Link to="/cv" className={isActive('/cv') ? 'active' : ''}>
            {texts.cv}
          </Link>
        </div>
        <button className="language-toggle" onClick={toggleLanguage}>
          {getLanguageLabel()}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

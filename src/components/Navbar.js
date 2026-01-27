import React, { memo, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const navText = {
  en: {
    work: 'WORK',
    side: 'LIFE',
    about: 'ABOUT',
    cv: 'CV'
  },
  zh: {
    work: '作品',
    side: '生活',
    about: '关于',
    cv: '简历'
  },
  'zh-TW': {
    work: '作品',
    side: '生活',
    about: '關於',
    cv: '履歷'
  }
};

function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage, getLanguageLabel } = useLanguage();
  const texts = useMemo(() => navText[language] || navText.en, [language]);

  const isActive = useCallback((path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  const activeStates = useMemo(() => ({
    about: isActive('/about'),
    work: isActive('/') && location.pathname === '/',
    side: isActive('/side'),
    cv: isActive('/cv')
  }), [location.pathname, isActive]);

  const languageLabel = useMemo(() => getLanguageLabel(), [getLanguageLabel]);

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
          <Link to="/about" className={activeStates.about ? 'active' : ''}>
            {texts.about}
          </Link>
          <Link to="/" className={activeStates.work ? 'active' : ''}>
            {texts.work}
          </Link>
          <Link to="/side" className={activeStates.side ? 'active' : ''}>
            {texts.side}
          </Link>
          <Link to="/cv" className={activeStates.cv ? 'active' : ''}>
            {texts.cv}
          </Link>
        </div>
        <button className="language-toggle" onClick={toggleLanguage}>
          {languageLabel}
        </button>
      </div>
    </nav>
  );
}

export default memo(Navbar);

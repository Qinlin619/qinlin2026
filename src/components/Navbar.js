import React, { memo, useCallback, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getYears, getYearLabel } from './WorkGrid';

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
  const navigate = useNavigate();
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [yearPopupOpen, setYearPopupOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  const years = useMemo(() => getYears(language), [language]);

  const scrollToYear = useCallback((year) => {
    navigate({ pathname: '/', hash: `work-year-${year}`, state: { fromYearNav: true } });
    closeMenu();
    setYearPopupOpen(false);
    setTimeout(() => {
      const el = document.getElementById(`work-year-${year}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }, [navigate, closeMenu]);

  const linkProps = [
    { to: '/about', active: activeStates.about, label: texts.about },
    { to: '/', active: activeStates.work, label: texts.work, isWork: true },
    { to: '/side', active: activeStates.side, label: texts.side },
    { to: '/cv', active: activeStates.cv, label: texts.cv }
  ];

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'navbar-mobile-open' : ''}`}>
        <div className="nav-logo">
          <Link to="/about" onClick={closeMenu}>
            <span className="logo-text">UMBRELLA</span>
            <span className="logo-icon">☂</span>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            {linkProps.map(({ to, active, label, isWork }) =>
              isWork ? (
                <div
                  key={to}
                  className="nav-work-year-wrap"
                  onMouseEnter={() => setYearPopupOpen(true)}
                  onMouseLeave={() => setYearPopupOpen(false)}
                >
                  <Link to="/" className={active ? 'active' : ''} onClick={() => { closeMenu(); setYearPopupOpen(false); }}>
                    {label}
                  </Link>
                  {yearPopupOpen && (
                    <div className="nav-year-popup" role="menu">
                      {years.map((y) => (
                        <button
                          key={y}
                          type="button"
                          className="nav-year-option"
                          onClick={() => scrollToYear(y)}
                          role="menuitem"
                        >
                          {getYearLabel(y)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={to} to={to} className={active ? 'active' : ''}>
                  {label}
                </Link>
              )
            )}
          </div>
          <button
            type="button"
            className="nav-hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
          <button className="language-toggle" onClick={toggleLanguage}>
            {languageLabel}
          </button>
        </div>
      </nav>
      <div className={`nav-mobile-menu ${menuOpen ? 'nav-mobile-menu-open' : ''}`}>
        {linkProps.map(({ to, active, label }) => (
          <Link
            key={to}
            to={to}
            className={active ? 'active' : ''}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default memo(Navbar);

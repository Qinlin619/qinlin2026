import React, { memo, useCallback, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getYears, getYearLabel } from './WorkGrid';
import { useTheme } from '../contexts/ThemeContext';

const navText = {
  en: {
    work: 'PROJECT',
    side: 'DESIGN',
    about: 'ABOUT',
    cv: 'CV',
    contact: 'CONTACT'
  },
  zh: {
    work: '作品',
    side: '设计',
    about: '关于',
    cv: '简历',
    contact: '联系'
  },

};

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage, getLanguageLabel } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
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
    { to: '/', active: activeStates.work, label: texts.work, isWork: true },
    { to: '/about', active: activeStates.about, label: texts.about },
    { to: 'https://www.linkedin.com/in/qinlin-liu-a88635209', label: texts.contact, isExternal: true }
  ];

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'navbar-mobile-open' : ''}`}>
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <span className="logo-icon">☂</span>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            {linkProps.map(({ to, active, label, isWork, isExternal }) =>
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
              ) : isExternal ? (
                <a key={to} href={to} target="_blank" rel="noopener noreferrer" className={active ? 'active' : ''}>
                  {label}
                </a>
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
          {/* <button 
            type="button" 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button> */}
          <button className="language-toggle" onClick={toggleLanguage}>
            {languageLabel}
          </button>
        </div>
      </nav>
      <div className={`nav-mobile-menu ${menuOpen ? 'nav-mobile-menu-open' : ''}`}>
        {linkProps.map(({ to, active, label, isExternal }) => (
          isExternal ? (
            <a
              key={to}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className={active ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ) : (
            <Link
              key={to}
              to={to}
              className={active ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </Link>
          )
        ))}
      </div>
    </>
  );
}

export default memo(Navbar);

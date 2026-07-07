import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import WorkDetail from './pages/WorkDetail';
import About from './pages/About';
// import CV from './pages/CV';
import PageRain, { dotColors } from './components/PageRain';
import RippleEffect from './components/RippleEffect';
import HeroShowcase from './components/HeroShowcase';
import AestheticBackground from './components/AestheticBackground';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function HomePage() {
  return (
    <div className="homepage-hero-flow">
      <PageRain top="70vh" />
      <div className="hero-sticky-container">
        <div className="hero-sticky-wrapper">
          <AestheticBackground />
          <Hero />
          <HeroShowcase />
        </div>
      </div>
      <div className="work-container">
        <WorkGrid />
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const { pathname, hash, state } = location;
    if (state?.fromYearNav) return;
    if (pathname === '/' && hash && hash.startsWith('#work-year-')) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      const t = setTimeout(() => {
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(t);
    }
    if (pathname === '/') {
      const saved = sessionStorage.getItem('workListScrollY');
      if (saved !== null) {
        try {
          sessionStorage.removeItem('workListScrollY');
          const y = parseInt(saved, 10);
          if (!Number.isNaN(y)) {
            const t = setTimeout(() => window.scrollTo(0, y), 100);
            return () => clearTimeout(t);
          }
        } catch (_) {}
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  // Random color cursor effect
  useEffect(() => {
    const updateCursorColor = (e) => {
      const target = e.target;
      const isHoverable = target.closest('a, button, [role="button"], .work-card, .nav-year-option, .work-year-trigger, .work-year-trigger--open');
      if (isHoverable) {
        const color = dotColors[Math.floor(Math.random() * dotColors.length)];
        const strokeColor = isDark ? 'white' : 'black';
        const svg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Cg transform='rotate(-18 16 16)'%3E%3Cpath d='M16 2 C11 10 7 18 7 22 c0 4 5 8 9 8 c4 0 8 -3 9 -8 c0-4-4-12-9-20 z' fill='${encodeURIComponent(color)}' stroke='${strokeColor}' stroke-width='2' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E") 16 2`;
        document.documentElement.style.setProperty('--cursor-rain-filled', svg);
      }
    };

    window.addEventListener('mouseover', updateCursorColor);
    return () => window.removeEventListener('mouseover', updateCursorColor);
  }, [isDark]);

  return (
    <div className="App">
      <RippleEffect />
      <Navbar />
      <main className="page-transition-wrapper">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route index element={<HomePage />} />
            <Route path="/work/:id" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/cv" element={<CV />} /> */}
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import WorkDetail from './pages/WorkDetail';
import Side from './pages/Side';
import About from './pages/About';
import CV from './pages/CV';
import RippleEffect from './components/RippleEffect';

function HomePage() {
  return (
    <>
      <Hero />
      <div className="work-container">
        <WorkGrid />
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();

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
            const t = setTimeout(() => window.scrollTo(0, y), 0);
            return () => clearTimeout(t);
          }
        } catch (_) {}
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash, location.state]);

  return (
    <div className="App">
      <RippleEffect />
      <Navbar />
      <main className="page-transition-wrapper">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route index element={<HomePage />} />
            <Route path="/work/:id" element={<WorkDetail />} />
            <Route path="/side" element={<Side />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

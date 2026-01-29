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
    // 每次路由变化时滚动到顶部
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

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

import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { worksData } from '../data/worksData';
import { useLanguage } from '../contexts/LanguageContext';
import './HeroShowcase.css';

const HeroShowcase = () => {
  const { language } = useLanguage();
  const works = worksData[language] || worksData.en;
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get all top-rated works for the years 2022 to 2026 (excluding side/mini-game projects)
  const selectedWorks = works
    .filter(w => w.year >= 2022 && w.year <= 2026 && w.id !== 261 && w.id !== 262 && w.id !== 263 && w.id !== 267)
    .sort((a, b) => {
      // Primary sort by year (descending)
      if (b.year !== a.year) return b.year - a.year;
      // Secondary sort by rating (descending)
      return (b.rating || 0) - (a.rating || 0);
    })
    .slice(0, 12); // Take up to 12 top works

  useEffect(() => {
    const handleWheel = (e) => {
      // If we are already scrolled down (not at the very top), don't hijack anything
      const isAtTop = window.scrollY <= 0;
      if (!isAtTop) return;

      const track = trackRef.current;
      if (!track) return;

      // We only hijack if we haven't finished horizontal scroll, OR if we are scrolling UP
      if (scrollProgress >= 1 && e.deltaY > 0) return;
      if (scrollProgress <= 0 && e.deltaY < 0) return;

      // LOCK Vertical Scroll while in intro sequence
      e.preventDefault(); 
      
      // Sensitivity scale (higher is faster posters)
      const sensitivity = 0.0012; 
      let newProgress = scrollProgress + e.deltaY * sensitivity;
      
      newProgress = Math.max(0, Math.min(1.02, newProgress));

      setScrollProgress(newProgress);
      
      if (containerRef.current) {
        containerRef.current.style.setProperty('--scroll-p', Math.min(1, newProgress));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollProgress]);

  const scrollToProject = (id) => {
    const element = document.getElementById(`project-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="hero-showcase-content-only">
      <div 
        ref={trackRef} 
        className="showcase-track"
          style={{ 
            // Calculate pixel movement based on track width and scroll progress
            transform: trackRef.current 
              ? `translateX(-${scrollProgress * (trackRef.current.scrollWidth - window.innerWidth)}px)` 
              : 'none'
          }}
        >
          {selectedWorks.map((work, index) => (
            <div 
              key={`${work.id}-${index}`} 
              onClick={() => scrollToProject(work.id)}
              className="showcase-poster"
              style={{ cursor: 'pointer' }}
            >
              <div className="poster-inner">
                <img src={work.image} alt={work.title} loading="lazy" />
                <div className="poster-overlay">
                  <span className="poster-year">{work.year}</span>
                  <h3 className="poster-title">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroShowcase;

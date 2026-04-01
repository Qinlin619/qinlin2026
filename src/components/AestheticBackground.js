import React, { useEffect, useRef } from 'react';
import './AestheticBackground.css';

const AestheticBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse positions (-0.5 to 0.5)
      const x = (clientX / innerWidth - 0.5);
      const y = (clientY / innerHeight - 0.5);
      
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="aesthetic-bg-container" ref={containerRef}>
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>
      <div className="gradient-sphere sphere-4"></div>
      <div className="gradient-sphere sphere-interactive"></div>
      <div className="glass-overlay"></div>
    </div>
  );
};

export default AestheticBackground;


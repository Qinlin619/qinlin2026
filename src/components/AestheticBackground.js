import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './AestheticBackground.css';

const AestheticBackground = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse positions (-0.5 to 0.5)
      const x = (clientX / innerWidth - 0.5);
      const y = (clientY / innerHeight - 0.5);
      
      mouseRef.current = { x, y };

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', x);
        containerRef.current.style.setProperty('--mouse-y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle network canvas animation loop (Dark Mode background)
  useEffect(() => {
    if (!isDark) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.6; // 0.6px to 2.6px
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8 opacity
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around canvas edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(242, 242, 242, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize 66 particles
    const particleCount = 66;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connections between nearby particles
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Semi-transparent white lines that fade out as distance increases
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouseX = (mouseRef.current.x + 0.5) * canvas.width;
      const mouseY = (mouseRef.current.y + 0.5) * canvas.height;
      const mouseRadius = 120;

      // Draw subtle cursor glow spotlight
      const glowGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250);
      glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
      glowGrad.addColorStop(0.5, 'rgba(179, 162, 255, 0.02)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 250, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Update and draw particles
      particles.forEach(particle => {
        // Mouse repulsion physics
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          // Push particles away gently
          particle.x -= Math.cos(angle) * force * 1.5;
          particle.y -= Math.sin(angle) * force * 1.5;
        }

        particle.update();
        particle.draw();
      });

      drawLines();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <div className={`aesthetic-bg-container ${isDark ? 'is-dark' : ''}`} ref={containerRef}>
      {!isDark ? (
        <>
          <div className="gradient-sphere sphere-1"></div>
          <div className="gradient-sphere sphere-2"></div>
          <div className="gradient-sphere sphere-3"></div>
          <div className="gradient-sphere sphere-4"></div>
          <div className="gradient-sphere sphere-interactive"></div>
          <div className="glass-overlay"></div>
        </>
      ) : (
        <>
          <canvas ref={canvasRef} className="aesthetic-bg-canvas" />
          <div className="glass-overlay"></div>
        </>
      )}
    </div>
  );
};

export default AestheticBackground;

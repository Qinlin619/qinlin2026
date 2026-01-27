import React, { useEffect, useRef } from 'react';

function ParticleEdge({ imageRef }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageRef?.current) return;

    const ctx = canvas.getContext('2d');
    const image = imageRef.current;
    let particles = particlesRef.current;

    const resizeCanvas = () => {
      if (image) {
        const rect = image.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };

    const createParticle = (x, y, direction) => {
      // direction: 'top', 'bottom', 'left', 'right'
      let angle;
      if (direction === 'top') {
        angle = Math.PI / 2 + (Math.random() - 0.5) * 0.6; // 向上散开
      } else if (direction === 'bottom') {
        angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.6; // 向下散开
      } else if (direction === 'left') {
        angle = Math.PI + (Math.random() - 0.5) * 0.6; // 向左散开
      } else {
        angle = 0 + (Math.random() - 0.5) * 0.6; // 向右散开
      }
      
      const speed = 0.3 + Math.random() * 0.7; // 更慢的速度
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: 0.008 + Math.random() * 0.01, // 更慢的消失
        size: 0.5 + Math.random() * 1, // 更小的粒子
        color: `rgba(0, 0, 0, ${0.15 + Math.random() * 0.15})` // 更淡的颜色
      };
    };

    const generateEdgeParticles = () => {
      if (!image) return;
      const rect = image.getBoundingClientRect();
      const edgePoints = 12; // 减少粒子数量

      // 上边缘
      for (let i = 0; i < edgePoints; i++) {
        const x = (rect.width / (edgePoints + 1)) * (i + 1);
        particles.push(createParticle(x, 0, 'top'));
      }

      // 下边缘
      for (let i = 0; i < edgePoints; i++) {
        const x = (rect.width / (edgePoints + 1)) * (i + 1);
        particles.push(createParticle(x, rect.height, 'bottom'));
      }

      // 左边缘
      for (let i = 0; i < edgePoints; i++) {
        const y = (rect.height / (edgePoints + 1)) * (i + 1);
        particles.push(createParticle(0, y, 'left'));
      }

      // 右边缘
      for (let i = 0; i < edgePoints; i++) {
        const y = (rect.height / (edgePoints + 1)) * (i + 1);
        particles.push(createParticle(rect.width, y, 'right'));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= particle.decay;
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        if (particle.life > 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace(/[\d\.]+\)$/g, `${particle.life})`);
          ctx.fill();
          return true;
        }
        return false;
      });

      particlesRef.current = particles;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 只在鼠标进入时生成一次粒子，移除鼠标移动跟随
    let hasGenerated = false;
    const handleMouseEnter = () => {
      if (!hasGenerated) {
        generateEdgeParticles();
        hasGenerated = true;
      }
    };
    
    image.addEventListener('mouseenter', handleMouseEnter);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      image.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [imageRef]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-edge-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 2
      }}
    />
  );
}

export default ParticleEdge;

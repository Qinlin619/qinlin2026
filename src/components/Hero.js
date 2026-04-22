import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AestheticBackground from './AestheticBackground';

const heroText = {
  en: {
    title: 'Qinlin Liu',
    subtitle: 'End-to-end Product Designer',
    motto: 'Bridging the gap between <span class="highlight">user research</span> and <span class="highlight">final polish</span>, crafting <span class="highlight">scalable design systems</span> and <span class="highlight">intuitive interfaces</span> with a <span class="highlight">playful touch</span>.'
  },
  zh: {
    title: 'Qinlin Liu',
    subtitle: '全栈产品设计师',
    motto: '连接 <span class="highlight">用户研究</span> 与 <span class="highlight">最终打磨</span>，致力于打造 <span class="highlight">可扩展设计系统</span> 与 <span class="highlight">直观界面</span>，并注入 <span class="highlight">灵动趣味</span>。'
  },
};

const dotColors = [
  '#ff99cc', // Pink
  '#33ccff', // Blue
  '#ffcc33', // Yellow
  '#b3a2ff', // Soft Purple
  '#70e1ff', // Soft Cyan
  '#ffb347', // Soft Orange
  '#4df0cf'  // Soft Teal
];

function Hero() {
  const { language } = useLanguage();
  const texts = heroText[language] || heroText.en;
  
  // Track click levels (0 to 3) for each of the 3 dots
  const [dotLevels, setDotLevels] = useState([0, 0, 0]);

  const handleDotClick = (i) => {
    const newLevels = [...dotLevels];
    newLevels[i] = (newLevels[i] + 1) % 4; // Cycles 0, 1, 2, 3 then back to 0
    setDotLevels(newLevels);
  };

  const renderTitleWithDots = (title) => {
    let dotCounter = 0;
    return title.split('').map((char, index) => {
      if (char === 'i') {
        const i = dotCounter;
        const color = dotColors[i % dotColors.length];
        const level = dotLevels[i];
        dotCounter++;
        
        return (
          <span key={index} className="custom-i-container">
            <span className="custom-i-letter">i</span>
            <span 
              className="dot-scale-wrapper"
              onClick={() => handleDotClick(i)}
              style={{ '--dot-level': level }}
            >
              <span 
                className="i-interactive-dot" 
                style={{ 
                  backgroundColor: color,
                  '--dot-delay': `${i * 0.2}s`
                }}
              ></span>
            </span>
          </span>
        );
      }
      return char;
    });
  };

  return (
    <section 
      className="hero" 
      style={{
        '--level-1': dotLevels[0],
        '--level-2': dotLevels[1],
        '--level-3': dotLevels[2]
      }}
    >
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title-main">
            {renderTitleWithDots(texts.title)}
          </h1>
          <p className="hero-subtitle-caps">{texts.subtitle}</p>
          <p 
            className="hero-motto"
            dangerouslySetInnerHTML={{ __html: texts.motto }}
          ></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;



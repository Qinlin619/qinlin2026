import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AestheticBackground from './AestheticBackground';

const heroText = {
  en: {
    title: 'Qinlin Liu',
    subtitle: 'Interaction Designer',
    motto: 'Designing <span class="highlight">intuitive interfaces</span> and <span class="highlight">delightful interactions</span> with a professional yet <span class="highlight">playful touch</span>.'
  },
  zh: {
    title: 'Qinlin Liu',
    subtitle: '交互设计师',
    motto: '致力于打造 <span class="highlight">直观的界面</span> 与 <span class="highlight">有趣的交互</span>，在专业实用的基础上注入 <span class="highlight">灵动趣味</span>。'
  },
};

function Hero() {
  const { language } = useLanguage();
  const texts = heroText[language] || heroText.en;

  return (
    <section className="hero">
      <AestheticBackground />
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title-main">{texts.title}</h1>
          <p className="hero-subtitle-caps">{texts.subtitle}</p>
          <p 
            className="hero-motto-cursive"
            dangerouslySetInnerHTML={{ __html: texts.motto }}
          ></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

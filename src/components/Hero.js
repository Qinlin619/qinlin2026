import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from './Particles';

const heroText = {
  en: {
    title: 'Qinlin Liu',
    subtitle: 'Interaction Designer',
    motto: 'The interaction of X and X'
  },
  zh: {
    title: 'Qinlin Liu',
    subtitle: '交互设计师',
    motto: 'X与X的交互'
  },
  'zh-TW': {
    title: 'Qinlin Liu',
    subtitle: '互動設計師',
    motto: 'X與X的互動'
  }
};

function Hero() {
  const { language } = useLanguage();
  const texts = heroText[language] || heroText.en;

  return (
    <section className="hero">
      <Particles />
      <div className="hero-content">
        <h1 className="title">{texts.title}</h1>
        <p className="subtitle">{texts.subtitle}</p>
        <p className="hero-motto">{texts.motto}</p>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from './Particles';

const heroText = {
  en: {
    title: 'Qinlin Liu',
    subtitle: 'UX Designer / Product Designer'
  },
  zh: {
    title: 'Qinlin Liu',
    subtitle: 'UX设计师 / 产品设计师'
  },
  'zh-TW': {
    title: 'Qinlin Liu',
    subtitle: 'UX設計師 / 產品設計師'
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
      </div>
    </section>
  );
}

export default Hero;

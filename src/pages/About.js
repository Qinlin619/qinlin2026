import React, { memo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import PageRain from '../components/PageRain';

const aboutData = {
  en: {
    title: 'About',
    bio: 'As a designer, I am passionate about gaming and love incorporating gamification into my work, aiming to make every project both fun and meaningful. I strive to create engaging experiences that enhance user interaction or capture attention, whether through physical products, web platforms, or a combination of both. I believe I have the ability to make any project enjoyable and constantly push myself to take on new challenges. I thrive in fast-paced environments and enjoy producing results quickly, while also aiming to make a positive impact on others. At the same time, I know how to enjoy life, and my near-term goal is to adopt two dogs and two cats.',
    planTitle: 'Plan',
    plan: 'Coming soon...'
  },
  zh: {
    title: '关于',
    bio: '作为一名设计师，我热爱游戏，并喜欢将游戏化融入工作中，力求让每个项目既有趣又有意义。我致力于创造能够提升用户互动或吸引注意力的体验，无论是通过实体产品、网络平台还是两者的结合。我相信我有能力让任何项目变得有趣，并不断挑战自己接受新的挑战。我在快节奏环境中茁壮成长，喜欢快速产出成果，同时也致力于对他人产生积极影响。与此同时，我懂得享受生活，近期目标是领养两只狗和两只猫。',
    planTitle: '计划',
    plan: '敬请期待...'
  },

};

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { language } = useLanguage();
  const t = aboutData[language] || aboutData.en;

  return (
    <div className="page-content about-page" style={{ minHeight: '100vh', padding: '120px 5%' }}>
      <h1>{t.title}</h1>
      <p>{language === 'en' ? 'Coming soon...' : '敬请期待...'}</p>
    </div>
  );
}

export default memo(About);

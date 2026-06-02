import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';
import { worksData as works } from '../data/worksData';

export const getYearLabel = (year) => String(year);


// 按年份分组
const groupByYear = (list) => {
  const grouped = list.reduce((acc, work) => {
    const year = work.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(work);
    return acc;
  }, {});

  // Sort works within each year by rating (most stars first)
  Object.keys(grouped).forEach(year => {
    grouped[year].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  });

  return grouped;
};

export const getYears = (lang) => {
  const list = works[lang] || works.en;
  return Object.keys(groupByYear(list)).sort((a, b) => Number(b) - Number(a));
};

/** All works for current language, sorted by year descending (newest first). */
export const getWorksListByYear = (lang) => {
  const list = works[lang] || works.en;
  return [...list].sort((a, b) => {
    if (Number(b.year) !== Number(a.year)) {
      return Number(b.year) - Number(a.year);
    }
    return (b.rating || 0) - (a.rating || 0);
  });
};

function WorkGrid() {
  const { language } = useLanguage();
  const [selectedGame, setSelectedGame] = useState(null);

  const worksList = works[language] || works.en;
  
  const tags = ['All', 'UI/UX', 'Game Dev', 'AI'];
  const [selectedTag, setSelectedTag] = useState('All');

  const matchesTag = (work, tag) => {
    if (tag === 'All') return true;
    
    const categoryLower = (work.category || '').toLowerCase();
    
    if (tag === 'UI/UX') {
      return categoryLower.includes('ui') || 
             categoryLower.includes('ux') || 
             categoryLower.includes('hci') || 
             categoryLower.includes('redesign') ||
             [8, 9, 10, 11, 1, 7, 6].includes(work.id);
    }
    
    if (tag === 'Game Dev') {
      return categoryLower.includes('game') || 
             categoryLower.includes('play') || 
             categoryLower.includes('blender') || 
             categoryLower.includes('modelling') ||
             [261, 262, 263, 14, 3, 5, 22].includes(work.id);
    }
    
    if (tag === 'AI') {
      return categoryLower.includes('artificial') || 
             categoryLower.includes('ai') || 
             categoryLower.includes('robot') || 
             [2, 11].includes(work.id);
    }
    
    return false;
  };

  // Filter works based on selected tag
  const filteredWorksList = worksList.filter(work => matchesTag(work, selectedTag));

  const worksByYear = groupByYear(filteredWorksList);
  const years = Object.keys(worksByYear).sort((a, b) => Number(b) - Number(a));
  const allWorks = years.flatMap(year => worksByYear[year]);

  const gameModalsData = {
    261: {
      en: {
        title: 'Flavorblocks',
        description: 'A small game designed for my parents to pass the time.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/FlavorBlocks/' },
        images: [
          { type: 'image', url: '/side/GameDesign-Flavorblocks/1.png', title: 'Screenshot 1' },
          ...[2, 3, 4, 5].map(n => ({ type: 'image', url: `/side/GameDesign-Flavorblocks/${n}.png`, title: `Screenshot ${n}` }))
        ]
      },
      zh: {
        title: 'Flavorblocks',
        description: '想为爸爸妈妈设计一些打磨时间的小游戏。',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/FlavorBlocks/' },
        images: [
          { type: 'image', url: '/side/GameDesign-Flavorblocks/1.png', title: '截图 1' },
          ...[2, 3, 4, 5].map(n => ({ type: 'image', url: `/side/GameDesign-Flavorblocks/${n}.png`, title: `截图 ${n}` }))
        ]
      }
    },
    262: {
      en: {
        title: 'Color&Color',
        description: 'A simple "match" game featuring socks, planned to evolve into various derivative matching games.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/Color-Color/' },
        images: [1, 2, 3, 4].map(n => ({ type: 'image', url: `/side/GameDesign-Color&Color/${n}.png`, title: `Screenshot ${n}` }))
      },
      zh: {
        title: 'Color&Color',
        description: '想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match。',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/Color-Color/' },
        images: [1, 2, 3, 4].map(n => ({ type: 'image', url: `/side/GameDesign-Color&Color/${n}.png`, title: `截图 ${n}` }))
      }
    },
    263: {
      en: {
        title: 'Blender',
        description: 'A collection of 3D modeling experiments in Blender.',
        images: [
          { type: 'image', url: '/side/blender/1.png', title: 'Modelling Practice 1' },
          { type: 'image', url: '/side/blender/2.png', title: 'Modelling Practice 2' },
          { type: 'image', url: '/side/blender/3.jpg', title: 'Modelling Practice 3' },
          { type: 'image', url: '/side/blender/4.png', title: 'Modelling Practice 4' },
          { type: 'image', url: '/side/blender/5.png', title: 'Modelling Practice 5' },
          { type: 'image', url: '/side/blender/6.png', title: 'Modelling Practice 6' },
          { type: 'image', url: '/side/blender/7.jpg', title: 'Modelling Practice 7' }
        ]
      },
      zh: {
        title: 'Blender',
        description: '在 Blender 中进行的一系列 3D 建模实验。',
        images: [
          { type: 'image', url: '/side/blender/1.png', title: '建模练习 1' },
          { type: 'image', url: '/side/blender/2.png', title: '建模练习 2' },
          { type: 'image', url: '/side/blender/3.jpg', title: '建模练习 3' },
          { type: 'image', url: '/side/blender/4.png', title: '建模练习 4' },
          { type: 'image', url: '/side/blender/5.png', title: '建模练习 5' },
          { type: 'image', url: '/side/blender/6.png', title: '建模练习 6' },
          { type: 'image', url: '/side/blender/7.jpg', title: '建模练习 7' }
        ]
      }
    }
  };

  const openGameModal = (work) => {
    const data = gameModalsData[work.id]?.[language] || gameModalsData[work.id]?.en;
    if (data) {
      setSelectedGame(data);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeGameModal = () => {
    setSelectedGame(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="work-section" style={{ position: 'relative' }}>
      <div className="work-filter-container">
        <div className="work-tags-row">
          {tags.map(tag => (
            <button
              key={tag}
              className={`work-tag-btn ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag === 'All' ? (language === 'zh' ? '全部项目' : 'All Projects') : tag}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid flat-grid">
        {allWorks.map((work, index) => {
          const isFirstOfYear = index === 0 || allWorks[index - 1].year !== work.year;
          const isGame = work.id === 261 || work.id === 262 || work.id === 263;

          return (
            <div
              key={work.id}
              id={isFirstOfYear ? `work-year-${work.year}` : undefined}
              className="work-card-wrapper"
              style={{ position: 'relative', scrollMarginTop: isFirstOfYear ? '8rem' : undefined }}
            >
              <div className="work-year-indicator">
                {work.year}
              </div>
              <WorkCard 
                work={work} 
                onCardClick={isGame ? openGameModal : undefined}
              />
            </div>
          );
        })}
      </div>

      {selectedGame && (
        <div className="side-modal-overlay" onClick={closeGameModal}>
          <div className="side-modal-content" onClick={e => e.stopPropagation()}>
            <button className="side-modal-close" onClick={closeGameModal}>&times;</button>
            <div className="side-modal-header">
              <h2>{selectedGame.title}</h2>
              <p>{selectedGame.description}</p>
              {selectedGame.link && (
                <p style={{ marginTop: '1rem' }}>
                  <a
                    href={selectedGame.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#000', 
                      textDecoration: 'underline',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>{selectedGame.link.text}{selectedGame.link.url}</span>
                    <span style={{ fontSize: '0.85em', display: 'inline-block', textDecoration: 'none' }}>➔</span>
                  </a>
                </p>
              )}
            </div>
            <div className="side-modal-gallery">
              {selectedGame.images.map((item, index) => (
                <div key={index} className="side-modal-item">
                  {item.type === 'image' ? (
                    <img src={`${process.env.PUBLIC_URL}${item.url}`} alt={item.title} />
                  ) : (
                    <video src={`${process.env.PUBLIC_URL}${item.url}`} controls />
                  )}
                  <p className="side-modal-item-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkGrid;

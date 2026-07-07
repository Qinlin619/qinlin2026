import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';
import { worksData as works } from '../data/worksData';
import { designModalsData } from '../data/designModalsData';

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

export default function WorkGrid() {
  const { language } = useLanguage();
  const [selectedGame, setSelectedGame] = useState(null);
  const [masonryCols, setMasonryCols] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setMasonryCols(1);
      else if (window.innerWidth <= 1024) setMasonryCols(2);
      else setMasonryCols(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const worksList = works[language] || works.en;
  
  const tags = ['All', 'Selected', 'Game Design', '3D/2D Design'];
  const [selectedTag, setSelectedTag] = useState('All');

  const matchesTag = (work, tag) => {
    if (tag === 'All') return true;
    if (tag === 'Selected') {
      const selectedTitles = ['tripup', 'eurostay', 'atag', 'cobrush', 'e.c.h.o.', 'lambanana', 'lemur', 'doozi', 'happy little pill', '快乐小药盒'];
      const titleLower = (work.title || '').toLowerCase();
      if (titleLower.includes('eurostay') && titleLower.includes('ip')) return false;
      return selectedTitles.some(t => titleLower.includes(t));
    }
    
    if (tag === 'Game Design') {
      const gameTitles = ['flavorblocks', 'color&color', '像素大冒险', 'pixelated adventures'];
      const titleLower = (work.title || '').toLowerCase();
      return gameTitles.some(t => titleLower.includes(t));
    }

    if (tag === '3D/2D Design') {
      // Matches any project that is not categorized into 'Selected' or 'Game Design'
      const isSelected = matchesTag(work, 'Selected');
      const isGameDesign = matchesTag(work, 'Game Design');
      return !isSelected && !isGameDesign;
    }

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
    
    if (tag === 'Frontend') {
      return categoryLower.includes('frontend') || 
             categoryLower.includes('前端');
    }

    if (tag === '2D Design') {
      return categoryLower.includes('2d') || 
             categoryLower.includes('illustration') || 
             categoryLower.includes('graphic');
    }
    
    if (tag === '3D Design') {
      return categoryLower.includes('3d') || 
             categoryLower.includes('blender') ||
             categoryLower.includes('modelling');
    }
    
    return false;
  };

  // Filter works based on selected tag
  const filteredWorksList = worksList.filter(work => matchesTag(work, selectedTag));

  const worksByYear = groupByYear(filteredWorksList);
  const years = Object.keys(worksByYear).sort((a, b) => Number(b) - Number(a));
  let allWorks = years.flatMap(year => worksByYear[year]);

  if (selectedTag === '3D/2D Design') {
    const index3d = allWorks.findIndex(w => w.id === 263);
    if (index3d > -1) {
      const [item3d] = allWorks.splice(index3d, 1);
      allWorks.unshift(item3d);
    }
  }

  const gameModalsData = {
    261: {
      en: {
        title: 'Flavorblocks',
        description: 'A small game designed for my parents to pass the time.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/FlavorBlocks/' },
        images: [
          { type: 'video', url: '/side/GameDesign-Flavorblocks/demo.mov', title: 'Gameplay Demo' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/1.png', title: 'Screenshot 1' },
          ...[2, 3, 4, 5].map(n => ({ type: 'image', url: `/side/GameDesign-Flavorblocks/${n}.png`, title: `Screenshot ${n}` }))
        ]
      },
      zh: {
        title: 'Flavorblocks',
        description: '想为爸爸妈妈设计一些打磨时间的小游戏。',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/FlavorBlocks/' },
        images: [
          { type: 'video', url: '/side/GameDesign-Flavorblocks/demo.mov', title: '游戏演示' },
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
        images: [
          { type: 'video', url: '/side/GameDesign-Color%26Color/demo.mp4', title: 'Gameplay Demo' },
          ...[1, 2, 3, 4].map(n => ({ type: 'image', url: `/side/GameDesign-Color%26Color/${n}.png`, title: `Screenshot ${n}` }))
        ]
      },
      zh: {
        title: 'Color&Color',
        description: '想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match。',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/Color-Color/' },
        images: [
          { type: 'video', url: '/side/GameDesign-Color%26Color/demo.mp4', title: '游戏演示' },
          ...[1, 2, 3, 4].map(n => ({ type: 'image', url: `/side/GameDesign-Color%26Color/${n}.png`, title: `截图 ${n}` }))
        ]
      }
    },
    263: {
      en: {
        title: '3D Design',
        description: 'A collection of 3D modeling experiments in Blender.',
        images: [
          { type: 'image', url: '/side/3d design/1.png', title: 'Modelling Practice 1' },
          { type: 'image', url: '/side/3d design/2.png', title: 'Modelling Practice 2' },
          { type: 'image', url: '/side/3d design/3.jpg', title: 'Modelling Practice 3' },
          { type: 'image', url: '/side/3d design/4.png', title: 'Modelling Practice 4' },
          { type: 'image', url: '/side/3d design/5.png', title: 'Modelling Practice 5' },
          { type: 'image', url: '/side/3d design/6.png', title: 'Modelling Practice 6' },
          { type: 'image', url: '/side/3d design/7.jpg', title: 'Modelling Practice 7' },
          { type: 'image', url: '/side/3d design/8.png', title: 'Modelling Practice 8' },
          { type: 'image', url: '/side/3d design/9.png', title: 'Modelling Practice 9' },
          { type: 'image', url: '/side/3d design/avatar/a1.png', title: 'Avatar Render 1', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a2.png', title: 'Avatar Render 2', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a3.png', title: 'Avatar Render 3', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a4.png', title: 'Avatar Render 4', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a5.png', title: 'Avatar Render 5', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a6.png', title: 'Avatar Render 6', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b1.png', title: 'Rigging 1', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b2.png', title: 'Rigging 2', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b3.png', title: 'Rigging 3', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b4.png', title: 'Rigging 4', isAvatar: true },
          { isEmpty: true, isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b5.png', title: 'Rigging 5', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260629231346.png', title: 'Character Render 7', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260630051820.png', title: 'Character Render 8', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260630052011.png', title: 'Character Render 9', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260630052047.png', title: 'Character Render 10', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705025648.png', title: 'Character Render 11', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705025701.png', title: 'Character Render 12', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705025803.png', title: 'Character Render 13', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705035226.png', title: 'Character Render 14', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705035321.png', title: 'Character Render 15', isAvatar: true }
        ]
      },
      zh: {
        title: '3D Design',
        description: '在 Blender 中进行的一系列 3D 建模实验。',
        images: [
          { type: 'image', url: '/side/3d design/1.png', title: '建模练习 1' },
          { type: 'image', url: '/side/3d design/2.png', title: '建模练习 2' },
          { type: 'image', url: '/side/3d design/3.jpg', title: '建模练习 3' },
          { type: 'image', url: '/side/3d design/4.png', title: '建模练习 4' },
          { type: 'image', url: '/side/3d design/5.png', title: '建模练习 5' },
          { type: 'image', url: '/side/3d design/6.png', title: '建模练习 6' },
          { type: 'image', url: '/side/3d design/7.jpg', title: '建模练习 7' },
          { type: 'image', url: '/side/3d design/8.png', title: '建模练习 8' },
          { type: 'image', url: '/side/3d design/9.png', title: '建模练习 9' },
          { type: 'image', url: '/side/3d design/avatar/a1.png', title: '角色渲染 1', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a2.png', title: '角色渲染 2', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a3.png', title: '角色渲染 3', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a4.png', title: '角色渲染 4', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a5.png', title: '角色渲染 5', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/a6.png', title: '角色渲染 6', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b1.png', title: '视图/绑定 1', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b2.png', title: '视图/绑定 2', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b3.png', title: '视图/绑定 3', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b4.png', title: '视图/绑定 4', isAvatar: true },
          { isEmpty: true, isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/b5.png', title: '视图/绑定 5', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260629231346.png', title: '角色渲染 7', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260630051820.png', title: '角色渲染 8', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260630052011.png', title: '角色渲染 9', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260630052047.png', title: '角色渲染 10', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705025648.png', title: '角色渲染 11', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705025701.png', title: '角色渲染 12', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705025803.png', title: '角色渲染 13', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705035226.png', title: '角色渲染 14', isAvatar: true },
          { type: 'image', url: '/side/3d design/avatar/图片_20260705035321.png', title: '角色渲染 15', isAvatar: true }
        ]
      }
    }
  };

  const openGameModal = (work) => {
    const allModals = { ...gameModalsData, ...designModalsData };
    const data = allModals[work.id]?.[language] || allModals[work.id]?.en;
    if (data) {
      setSelectedGame({ ...data, id: work.id });
      document.body.style.overflow = 'hidden';
    }
  };

  const closeGameModal = () => {
    setSelectedGame(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="work-section" style={{ position: 'relative', zIndex: selectedGame ? 99999 : 1 }}>
      <div className="work-filter-container">
        <div className="work-tags-row">
          {tags.map(tag => (
            <button
              key={tag}
              className={`work-tag-btn ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag === 'All' ? (language === 'zh' ? '全部项目' : 'All Projects') : 
               tag === 'Selected' ? (language === 'zh' ? '精选项目' : 'Selected') :
               tag === 'Game Design' ? (language === 'zh' ? '游戏设计' : 'GAME DESIGN') :
               tag === '2D Design' ? (language === 'zh' ? '2D设计' : '2D DESIGN') :
               tag === '3D Design' ? (language === 'zh' ? '3D设计' : '3D DESIGN') : 
               tag.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid flat-grid">
        {allWorks.map((work, index) => {
          const isFirstOfYear = index === 0 || allWorks[index - 1].year !== work.year;
          const isGame = [261, 262, 263, 264, 265, 266, 267].includes(work.id);

          return (
            <div
              key={work.id}
              id={`project-${work.id}`}
              className="work-card-wrapper"
              style={{ position: 'relative', scrollMarginTop: '8rem' }}
            >
              <div 
                id={isFirstOfYear ? `work-year-${work.year}` : undefined}
                className="work-year-indicator"
              >
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
            {selectedGame.id === 266 ? (
              <div className="side-modal-gallery gallery-illustrations">
                {Array.from({ length: masonryCols }).map((_, colIndex) => (
                  <div key={colIndex} className="masonry-column">
                    {selectedGame.images
                      .filter(img => !img.url.includes('头像.png'))
                      .filter((_, idx) => idx % masonryCols === colIndex)
                      .map((item, index) => (
                        <div key={index} className="ins-frame">
                          <div className="ins-header">
                            <img className="ins-avatar" src={`${process.env.PUBLIC_URL}/side/2d design/画画排版/头像.png`} alt="Avatar" />
                          </div>
                          <div className="ins-image-container">
                            {item.type === 'image' ? (
                              <img src={`${process.env.PUBLIC_URL}${item.url}`} alt={item.title} />
                            ) : (
                              <video src={`${process.env.PUBLIC_URL}${item.url}`} controls />
                            )}
                          </div>
                          <div className="ins-actions">
                            <svg className="ins-icon ins-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            <svg className="ins-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            <svg className="ins-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : selectedGame.id === 263 ? (
              <div className="gallery-3d-container">
                <div className="gallery-3d-section">
                  <h3 className="gallery-section-title">{language === 'zh' ? '日常建模练习' : 'Daily Modeling Practice'}</h3>
                  <div className="side-modal-gallery gallery-3d-design">
                    {Array.from({ length: masonryCols }).map((_, colIndex) => (
                      <div key={colIndex} className="masonry-column">
                        {selectedGame.images
                          .filter(item => !item.isAvatar)
                          .filter((_, idx) => idx % masonryCols === colIndex)
                          .map((item, index) => (
                            <div key={`practice-${index}`} className="side-modal-item">
                              {item.type === 'image' ? (
                                <img src={`${process.env.PUBLIC_URL}${item.url}`} alt={item.title} />
                              ) : (
                                <video src={`${process.env.PUBLIC_URL}${item.url}`} controls />
                              )}
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="gallery-3d-section" style={{ marginTop: '3rem' }}>
                  <h3 className="gallery-section-title">{language === 'zh' ? '角色建模与绑定' : 'Character Modeling & Rigging'}</h3>
                  <div className="side-modal-gallery gallery-3d-design">
                    {Array.from({ length: masonryCols }).map((_, colIndex) => (
                      <div key={colIndex} className="masonry-column">
                        {selectedGame.images
                          .filter(item => item.isAvatar)
                          .filter((_, idx) => idx % masonryCols === colIndex)
                          .map((item, index) => (
                            item.isEmpty ? null : (
                              <div key={`avatar-${index}`} className="side-modal-item">
                                {item.type === 'image' ? (
                                  <img src={`${process.env.PUBLIC_URL}${item.url}`} alt={item.title} />
                                ) : (
                                  <video src={`${process.env.PUBLIC_URL}${item.url}`} controls />
                                )}
                              </div>
                            )
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div 
                className={`side-modal-gallery ${selectedGame.id === 267 ? 'gallery-brand-derivatives' : ''}`}
                style={(selectedGame.id === 261 || selectedGame.id === 262) ? { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' } : {}}
              >
                {(() => {
                  let items = [...selectedGame.images];
                  if (selectedGame.id === 267) {
                    items.sort((a, b) => {
                      const aIsSmall = /\/(?:0[1-6])\.png$/i.test(a.url);
                      const bIsSmall = /\/(?:0[1-6])\.png$/i.test(b.url);
                      if (aIsSmall && !bIsSmall) return 1;
                      if (!aIsSmall && bIsSmall) return -1;
                      return 0;
                    });
                  }
                  return items.map((item, index) => {
                    const isLargeBrandItem = selectedGame.id === 267 && /\/(?:10|[1-9])\.jpg$/i.test(item.url);
                    const isSmallBrandItem = selectedGame.id === 267 && /\/(?:0[1-6])\.png$/i.test(item.url);
                    
                    return (
                      <div 
                        key={index} 
                        className={`side-modal-item ${isLargeBrandItem ? 'brand-item-large' : ''} ${isSmallBrandItem ? 'brand-item-small' : ''}`}
                        style={(selectedGame.id === 261 || selectedGame.id === 262) ? { width: '100%', maxWidth: '640px' } : {}}
                      >
                        {item.type === 'image' ? (
                          <img 
                            src={`${process.env.PUBLIC_URL}${item.url}`} 
                            alt={item.title} 
                            style={(selectedGame.id === 261 || selectedGame.id === 262) ? { width: '100%', height: 'auto', objectFit: 'contain' } : {}}
                          />
                        ) : (
                          (selectedGame.id === 261 || selectedGame.id === 262) ? (
                            <div className="video-browser-mockup" style={{ width: '100%', maxWidth: '640px' }}>
                              <div className="browser-header-bar">
                                <div className="browser-dots">
                                  <span className="browser-dot red" />
                                  <span className="browser-dot yellow" />
                                  <span className="browser-dot green" />
                                </div>
                                <div className="browser-url-bar">
                                  {selectedGame.id === 261
                                    ? 'https://qinlin619.github.io/FlavorBlocks/'
                                    : 'https://qinlin619.github.io/Color-Color/'}
                                </div>
                              </div>
                              <div className="work-detail-video" style={{ aspectRatio: 'auto', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <video 
                                  src={`${process.env.PUBLIC_URL}${item.url}`} 
                                  controls 
                                  style={{ width: '100%', display: 'block', maxHeight: '75vh' }}
                                />
                              </div>
                            </div>
                          ) : (
                            <video src={`${process.env.PUBLIC_URL}${item.url}`} controls />
                          )
                        )}
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

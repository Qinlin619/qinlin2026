import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const sideData = {
  en: {
    title: 'Design',
    intro: 'Collecting some weird little things I usually make',
    categories: {
      all: 'All',
      design: 'Design',
      tech: 'Tech'
    },
    footer: 'More projects coming soon...',
    projects: [
      {
        id: 'blender',
        title: 'Blender',
        category: 'design',
        coverImage: '/side/blender/5.png',
        images: [
          { type: 'image', url: '/side/blender/1.png', title: 'Modelling Practice 1' },
          { type: 'image', url: '/side/blender/2.png', title: 'Modelling Practice 2' },
          { type: 'image', url: '/side/blender/3.jpg', title: 'Modelling Practice 3' },
          { type: 'image', url: '/side/blender/4.png', title: 'Modelling Practice 4' },
          { type: 'image', url: '/side/blender/5.png', title: 'Modelling Practice 5' },
          { type: 'image', url: '/side/blender/6.png', title: 'Modelling Practice 6' },
          { type: 'image', url: '/side/blender/7.jpg', title: 'Modelling Practice 7' }
        ],
        description: 'A collection of 3D modeling experiments in Blender.'
      },
      {
        id: 'flavorblocks',
        title: 'Flavorblocks',
        category: 'design',
        coverImage: '/side/GameDesign-Flavorblocks/1.png',
        images: [
          { type: 'image', url: '/side/GameDesign-Flavorblocks/1.png', title: 'Screenshot 1' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/2.png', title: 'Screenshot 2' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/3.png', title: 'Screenshot 3' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/4.png', title: 'Screenshot 4' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/5.png', title: 'Screenshot 5' }
        ],
        description: 'A small game designed for my parents to pass the time.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/FlavorBlocks/' }
      },
      {
        id: 'color-color',
        title: 'Color&Color',
        category: 'design',
        coverImage: '/side/GameDesign-Color&Color/1.png',
        images: [
          { type: 'image', url: '/side/GameDesign-Color&Color/1.png', title: 'Screenshot 1' },
          { type: 'image', url: '/side/GameDesign-Color&Color/2.png', title: 'Screenshot 2' },
          { type: 'image', url: '/side/GameDesign-Color&Color/3.png', title: 'Screenshot 3' },
          { type: 'image', url: '/side/GameDesign-Color&Color/4.png', title: 'Screenshot 4' }
        ],
        description: 'A simple "match" game featuring socks, planned to evolve into various derivative matching games.',
        link: { text: 'Play Game: ', url: 'https://qinlin619.github.io/Color-Color/' }
      }
    ]
  },
  zh: {
    title: '设计',
    intro: '收集一些自己平时做的奇奇怪怪的小东西',
    categories: {
      all: '全部',
      design: '设计',
      tech: '技术'
    },
    footer: '持续探索中，更多项目即将到来...',
    projects: [
      {
        id: 'blender',
        title: 'Blender',
        category: 'design',
        coverImage: '/side/blender/5.png',
        images: [
          { type: 'image', url: '/side/blender/1.png', title: '建模练习 1' },
          { type: 'image', url: '/side/blender/2.png', title: '建模练习 2' },
          { type: 'image', url: '/side/blender/3.jpg', title: '建模练习 3' },
          { type: 'image', url: '/side/blender/4.png', title: '建模练习 4' },
          { type: 'image', url: '/side/blender/5.png', title: '建模练习 5' },
          { type: 'image', url: '/side/blender/6.png', title: '建模练习 6' },
          { type: 'image', url: '/side/blender/7.jpg', title: '建模练习 7' }
        ],
        description: '在 Blender 中进行的一系列 3D 建模实验。'
      },
      {
        id: 'flavorblocks',
        title: 'Flavorblocks',
        category: 'design',
        coverImage: '/side/GameDesign-Flavorblocks/1.png',
        images: [
          { type: 'image', url: '/side/GameDesign-Flavorblocks/1.png', title: '截图 1' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/2.png', title: '截图 2' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/3.png', title: '截图 3' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/4.png', title: '截图 4' },
          { type: 'image', url: '/side/GameDesign-Flavorblocks/5.png', title: '截图 5' }
        ],
        description: '想为爸爸妈妈设计一些打磨时间的小游戏',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/FlavorBlocks/' }
      },
      {
        id: 'color-color',
        title: 'Color&Color',
        category: 'design',
        coverImage: '/side/GameDesign-Color&Color/1.png',
        images: [
          { type: 'image', url: '/side/GameDesign-Color&Color/1.png', title: '截图 1' },
          { type: 'image', url: '/side/GameDesign-Color&Color/2.png', title: '截图 2' },
          { type: 'image', url: '/side/GameDesign-Color&Color/3.png', title: '截图 3' },
          { type: 'image', url: '/side/GameDesign-Color&Color/4.png', title: '截图 4' }
        ],
        description: '想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match',
        link: { text: '游玩链接：', url: 'https://qinlin619.github.io/Color-Color/' }
      }
    ]
  }
};

function Side() {
  const { language } = useLanguage();

  const [selectedProject, setSelectedProject] = useState(null);

  const data = sideData[language] || sideData.en;

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="page-content side-page">


      <div className="side-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '300', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{data.title}</h1>
        <p className="intro-text" style={{ margin: '0 auto', fontSize: '1.2rem', color: '#666', maxWidth: '800px', fontWeight: '300' }}>
          {data.intro}
        </p>
      </div>

      <div className="side-projects-grid">
        {data.projects.map((project) => (
          <div
            key={project.id}
            className="side-project-card"
            onClick={() => openModal(project)}
            style={{ cursor: 'pointer' }}
          >
              <div className="side-project-image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}${project.coverImage}`}
                  alt={project.title}
                  className="side-project-image"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: project.id === 'blender' ? 'top' : 'center'
                  }}
                />
              <div className="side-project-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="side-project-content" style={{ padding: '2rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h2 className="side-project-title" style={{ fontSize: '2.2rem', fontWeight: '300', textAlign: 'center', margin: 0, padding: 0, color: '#fff' }}>{project.title}</h2>
                  <p className="side-project-desc" style={{ marginTop: '0.8rem', textAlign: 'center', margin: '0.8rem 0 0 0', padding: 0, fontWeight: '300', opacity: 0.9, color: 'rgba(255,255,255,0.8)' }}>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="side-modal-overlay" onClick={closeModal}>
          <div className="side-modal-content" onClick={e => e.stopPropagation()}>
            <button className="side-modal-close" onClick={closeModal}>&times;</button>
            <div className="side-modal-header">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              {selectedProject.link && (
                <p style={{ marginTop: '1rem' }}>
                  <a
                    href={selectedProject.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000', textDecoration: 'underline' }}
                  >
                    {selectedProject.link.text}{selectedProject.link.url}
                  </a>
                </p>
              )}
            </div>
            <div className="side-modal-gallery">
              {selectedProject.images.map((item, index) => (
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

      <div className="side-footer">
        <p>{data.footer}</p>
      </div>

      <style jsx>{`
        .side-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          z-index: 99999;
          display: flex;
          justify-content: center;
          padding: 8rem 2rem 4rem;
          overflow-y: auto;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .side-modal-content {
          width: 100%;
          max-width: 1000px;
          position: relative;
        }
        .side-modal-close {
          position: fixed;
          top: 6rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          font-size: 2.5rem;
          cursor: pointer;
          color: #000;
          z-index: 200001;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .side-modal-close {
            top: 5rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            font-size: 2rem;
          }
        }
        .side-modal-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .side-modal-header h2 {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 1rem;
        }
        .side-modal-header p {
          color: #666;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .side-modal-gallery {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .side-modal-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .side-modal-item img, .side-modal-item video {
          max-width: 100%;
          max-height: 85vh;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .side-modal-item-title {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #999;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

export default Side;

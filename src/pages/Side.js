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
    projects: []
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
    projects: []
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
    </div>
  );
}

export default Side;

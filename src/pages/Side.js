import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const sideData = {
  en: {
    title: 'Life',
    intro: 'loading',
    categories: {
      all: 'All',
      design: 'Design',
      tech: 'Tech'
    },
    viewDetails: 'View Details →',
    footer: 'More projects coming soon...',
    projects: [
      {
        id: 1,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2024'
      },
      {
        id: 2,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2024'
      },
      {
        id: 3,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 4,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2023'
      },
      {
        id: 5,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 6,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2022'
      }
    ]
  },
  zh: {
    title: '生活',
    intro: 'loading',
    categories: {
      all: '全部',
      design: '设计',
      tech: '技术'
    },
    viewDetails: '查看详情 →',
    footer: '持续探索中，更多项目即将到来...',
    projects: [
      {
        id: 1,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2024'
      },
      {
        id: 2,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2024'
      },
      {
        id: 3,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 4,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2023'
      },
      {
        id: 5,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 6,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2022'
      }
    ]
  },
  en: {
    title: 'Life',
    intro: 'loading',
    categories: {
      all: 'All',
      design: 'Design',
      tech: 'Tech'
    },
    viewDetails: 'View Details →',
    footer: 'More projects coming soon...',
    projects: [
      {
        id: 1,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2024'
      },
      {
        id: 2,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2024'
      },
      {
        id: 3,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 4,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2023'
      },
      {
        id: 5,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 6,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2022'
      }
    ]
  },
  'zh-TW': {
    title: '生活',
    intro: 'loading',
    categories: {
      all: '全部',
      design: '設計',
      tech: '技術'
    },
    viewDetails: '查看詳情 →',
    footer: '持續探索中，更多專案即將到來...',
    projects: [
      {
        id: 1,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2024'
      },
      {
        id: 2,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2024'
      },
      {
        id: 3,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 4,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2023'
      },
      {
        id: 5,
        title: 'loading',
        category: 'design',
        description: 'loading',
        year: '2023'
      },
      {
        id: 6,
        title: 'loading',
        category: 'tech',
        description: 'loading',
        year: '2022'
      }
    ]
  }
};

const projectImages = [
  'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
  'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
  'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
  'https://via.placeholder.com/800x600/e0e0e0/e0e0e0',
  'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
  'https://via.placeholder.com/800x600/f5f5f5/f5f5f5'
];

function Side() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [imageLoaded, setImageLoaded] = useState(false);
  const data = sideData[language] || sideData.en;
  const categories = ['all', 'design', 'tech'];
  
  const projects = data.projects.map((project, index) => ({
    ...project,
    image: projectImages[index],
    link: '#'
  }));

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="page-content side-page">
      <div className="side-cover">
        <img 
          src={`${process.env.PUBLIC_URL}/about/2.jpg`} 
          alt="Side Projects" 
          className={`side-cover-image ${imageLoaded ? 'loaded' : ''}`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
            setImageLoaded(true);
          }}
        />
      </div>
      <h1>{data.title}</h1>
      <p className="intro-text">{data.intro}</p>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {data.categories[category]}
          </button>
        ))}
      </div>

      <div className="side-projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="side-project-card">
            <div className="side-project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="side-project-image"
              />
            </div>
            <div className="side-project-content">
              <div className="side-project-category">{data.categories[project.category]}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="side-project-link">
                {data.viewDetails}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="side-footer">
        <p>{data.footer}</p>
      </div>
    </div>
  );
}

export default Side;

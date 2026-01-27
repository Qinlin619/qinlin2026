import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const sideData = {
  en: {
    title: 'Side Projects',
    intro: 'Personal experimental projects and creative explorations. Sharing design experiments, technical attempts and interesting side projects here.',
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
        title: 'Interactive Data Visualization',
        category: 'design',
        description: 'Dynamic data visualization tool created with D3.js and React, exploring the beauty of data',
        year: '2024'
      },
      {
        id: 2,
        title: 'AI Art Generator',
        category: 'tech',
        description: 'Experimental project combining machine learning with creative design, exploring AI possibilities in art creation',
        year: '2024'
      },
      {
        id: 3,
        title: 'Music Visualization Experience',
        category: 'design',
        description: 'Real-time audio analysis and visual presentation, creating immersive music listening experience',
        year: '2023'
      },
      {
        id: 4,
        title: 'Open Source UI Component Library',
        category: 'tech',
        description: 'A carefully designed React component library focusing on accessibility and user experience',
        year: '2023'
      },
      {
        id: 5,
        title: '3D Interactive Scene',
        category: 'design',
        description: '3D virtual environment built with Three.js, exploring spatial interaction design',
        year: '2023'
      },
      {
        id: 6,
        title: 'Mobile Game Prototype',
        category: 'tech',
        description: 'Lightweight mobile game development, focusing on simple interactions and smooth experience',
        year: '2022'
      }
    ]
  },
  zh: {
    title: 'Side Projects',
    intro: '个人实验项目与创意探索，在这里分享设计实验、技术尝试和有趣的side projects。',
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
        title: '交互式数据可视化',
        category: 'design',
        description: '使用D3.js和React创建的动态数据可视化工具，探索数据之美',
        year: '2024'
      },
      {
        id: 2,
        title: 'AI艺术生成器',
        category: 'tech',
        description: '结合机器学习与创意设计的实验性项目，探索AI在艺术创作中的可能性',
        year: '2024'
      },
      {
        id: 3,
        title: '音乐可视化体验',
        category: 'design',
        description: '实时音频分析与视觉呈现，创造沉浸式的音乐聆听体验',
        year: '2023'
      },
      {
        id: 4,
        title: '开源UI组件库',
        category: 'tech',
        description: '一套精心设计的React组件库，注重可访问性和用户体验',
        year: '2023'
      },
      {
        id: 5,
        title: '3D交互式场景',
        category: 'design',
        description: '使用Three.js构建的3D虚拟环境，探索空间交互设计',
        year: '2023'
      },
      {
        id: 6,
        title: '移动端游戏原型',
        category: 'tech',
        description: '轻量级移动游戏开发，专注于简洁的交互和流畅的体验',
        year: '2022'
      }
    ]
  },
  en: {
    title: 'Side Projects',
    intro: 'Personal experimental projects and creative explorations. Sharing design experiments, technical attempts and interesting side projects here.',
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
        title: 'Interactive Data Visualization',
        category: 'design',
        description: 'Dynamic data visualization tool created with D3.js and React, exploring the beauty of data',
        year: '2024'
      },
      {
        id: 2,
        title: 'AI Art Generator',
        category: 'tech',
        description: 'Experimental project combining machine learning with creative design, exploring AI possibilities in art creation',
        year: '2024'
      },
      {
        id: 3,
        title: 'Music Visualization Experience',
        category: 'design',
        description: 'Real-time audio analysis and visual presentation, creating immersive music listening experience',
        year: '2023'
      },
      {
        id: 4,
        title: 'Open Source UI Component Library',
        category: 'tech',
        description: 'A carefully designed React component library focusing on accessibility and user experience',
        year: '2023'
      },
      {
        id: 5,
        title: '3D Interactive Scene',
        category: 'design',
        description: '3D virtual environment built with Three.js, exploring spatial interaction design',
        year: '2023'
      },
      {
        id: 6,
        title: 'Mobile Game Prototype',
        category: 'tech',
        description: 'Lightweight mobile game development, focusing on simple interactions and smooth experience',
        year: '2022'
      }
    ]
  },
  'zh-TW': {
    title: 'Side Projects',
    intro: '個人實驗專案與創意探索，在這裡分享設計實驗、技術嘗試和有趣的side projects。',
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
        title: '互動式數據可視化',
        category: 'design',
        description: '使用D3.js和React創建的動態數據可視化工具，探索數據之美',
        year: '2024'
      },
      {
        id: 2,
        title: 'AI藝術生成器',
        category: 'tech',
        description: '結合機器學習與創意設計的實驗性專案，探索AI在藝術創作中的可能性',
        year: '2024'
      },
      {
        id: 3,
        title: '音樂可視化體驗',
        category: 'design',
        description: '即時音頻分析與視覺呈現，創造沉浸式的音樂聆聽體驗',
        year: '2023'
      },
      {
        id: 4,
        title: '開源UI組件庫',
        category: 'tech',
        description: '一套精心設計的React組件庫，注重可訪問性和用戶體驗',
        year: '2023'
      },
      {
        id: 5,
        title: '3D互動式場景',
        category: 'design',
        description: '使用Three.js構建的3D虛擬環境，探索空間互動設計',
        year: '2023'
      },
      {
        id: 6,
        title: '行動端遊戲原型',
        category: 'tech',
        description: '輕量級行動遊戲開發，專注於簡潔的互動和流暢的體驗',
        year: '2022'
      }
    ]
  }
};

const projectImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511379938547-1e0d9d0e5c1a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop'
];

function Side() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
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
          src={`${process.env.PUBLIC_URL}/about/1.jpg`} 
          alt="Side Projects" 
          className="side-cover-image"
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
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
              <div className="side-project-year">{project.year}</div>
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

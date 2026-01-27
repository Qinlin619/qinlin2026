import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';

const works = {
  en: [
    {
      id: 8,
      title: 'Next-Gen AI Platform',
      description: 'Revolutionary AI platform with advanced machine learning capabilities and seamless integration',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'AI Platform'
    },
    {
      id: 9,
      title: 'Sustainable Tech Initiative',
      description: 'Green technology solutions focused on reducing carbon footprint and promoting sustainability',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      category: 'Sustainability'
    },
    {
      id: 10,
      title: 'Future of Work Platform',
      description: 'Innovative workspace platform redefining remote collaboration and productivity',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: 'Productivity'
    },
    {
      id: 11,
      title: 'Advanced Cloud Infrastructure',
      description: 'Next-generation cloud platform with enhanced security and scalability',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      category: 'Cloud'
    },
    {
      id: 12,
      title: 'Smart City Solutions',
      description: 'IoT-based smart city platform connecting urban infrastructure and services',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
      category: 'IoT'
    },
    {
      id: 13,
      title: 'Healthcare Innovation Platform',
      description: 'Digital health platform revolutionizing patient care and medical workflows',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      category: 'Healthcare'
    },
    {
      id: 1,
      title: 'Enterprise SaaS Platform',
      description: 'Full-stack enterprise solution providing comprehensive business management tools and data analytics',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Mobile E-commerce App',
      description: 'High-performance mobile shopping experience with integrated payment, recommendation system and real-time inventory management',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'Mobile App'
    },
    {
      id: 7,
      title: 'AI-Powered Design System',
      description: 'Intelligent design system with automated component generation and style consistency tools',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      category: 'Design System'
    },
    {
      id: 3,
      title: 'Smart Data Analytics Dashboard',
      description: 'Real-time data visualization platform supporting multi-dimensional analysis and custom reports',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'Data Visualization'
    },
    {
      id: 4,
      title: 'Collaboration Tool',
      description: 'Team collaboration platform integrating project management, document editing and real-time communication',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: 'Collaboration'
    },
    {
      id: 5,
      title: 'Content Management System',
      description: 'Flexible content management solution supporting multi-site management and custom workflows',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'CMS'
    },
    {
      id: 6,
      title: 'Online Education Platform',
      description: 'Interactive learning platform with course management, video streaming and assignment evaluation',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      category: 'EdTech'
    },
  ],
  zh: [
    {
      id: 8,
      title: '下一代AI平台',
      description: '革命性的AI平台，具有先进的机器学习能力和无缝集成',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'AI平台'
    },
    {
      id: 9,
      title: '可持续科技项目',
      description: '绿色技术解决方案，专注于减少碳足迹和促进可持续发展',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      category: '可持续发展'
    },
    {
      id: 10,
      title: '未来工作平台',
      description: '创新的工作空间平台，重新定义远程协作和生产力',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: '生产力工具'
    },
    {
      id: 11,
      title: '先进云基础设施',
      description: '下一代云平台，具有增强的安全性和可扩展性',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      category: '云计算'
    },
    {
      id: 12,
      title: '智慧城市解决方案',
      description: '基于IoT的智慧城市平台，连接城市基础设施和服务',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
      category: '物联网'
    },
    {
      id: 13,
      title: '医疗创新平台',
      description: '数字健康平台，革新患者护理和医疗工作流程',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      category: '医疗科技'
    },
    {
      id: 1,
      title: '企业级SaaS平台',
      description: '全栈企业解决方案，提供完整的业务管理工具和数据分析功能',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Web应用'
    },
    {
      id: 2,
      title: '移动端电商应用',
      description: '高性能移动购物体验，集成支付、推荐系统和实时库存管理',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: '移动应用'
    },
    {
      id: 7,
      title: 'AI驱动设计系统',
      description: '智能设计系统，提供自动化组件生成和样式一致性工具',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      category: '设计系统'
    },
    {
      id: 3,
      title: '智能数据分析仪表板',
      description: '实时数据可视化平台，支持多维度数据分析和自定义报表',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: '数据可视化'
    },
    {
      id: 4,
      title: '协作办公工具',
      description: '团队协作平台，集成项目管理、文档编辑和实时通信功能',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: '协作工具'
    },
    {
      id: 5,
      title: '内容管理系统',
      description: '灵活的内容管理解决方案，支持多站点管理和自定义工作流',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'CMS'
    },
    {
      id: 6,
      title: '在线教育平台',
      description: '互动式学习平台，提供课程管理、视频直播和作业评估功能',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      category: '教育科技'
    },
  ],
  'zh-TW': [
    {
      id: 8,
      title: '下一代AI平台',
      description: '革命性的AI平台，具有先進的機器學習能力和無縫整合',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'AI平台'
    },
    {
      id: 9,
      title: '永續科技專案',
      description: '綠色技術解決方案，專注於減少碳足跡和促進永續發展',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      category: '永續發展'
    },
    {
      id: 10,
      title: '未來工作平台',
      description: '創新的工作空間平台，重新定義遠程協作和生產力',
      year: 2026,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: '生產力工具'
    },
    {
      id: 11,
      title: '先進雲基礎設施',
      description: '下一代雲平台，具有增強的安全性和可擴展性',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      category: '雲計算'
    },
    {
      id: 12,
      title: '智慧城市解決方案',
      description: '基於IoT的智慧城市平台，連接城市基礎設施和服務',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
      category: '物聯網'
    },
    {
      id: 13,
      title: '醫療創新平台',
      description: '數位健康平台，革新患者護理和醫療工作流程',
      year: 2025,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      category: '醫療科技'
    },
    {
      id: 1,
      title: '企業級SaaS平台',
      description: '全棧企業解決方案，提供完整的業務管理工具和數據分析功能',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Web應用'
    },
    {
      id: 2,
      title: '行動端電商應用',
      description: '高效能行動購物體驗，整合支付、推薦系統和即時庫存管理',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: '行動應用'
    },
    {
      id: 7,
      title: 'AI驅動設計系統',
      description: '智能設計系統，提供自動化組件生成和樣式一致性工具',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      category: '設計系統'
    },
    {
      id: 3,
      title: '智能數據分析儀表板',
      description: '即時數據可視化平台，支援多維度數據分析和自訂報表',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: '數據可視化'
    },
    {
      id: 4,
      title: '協作辦公工具',
      description: '團隊協作平台，整合專案管理、文件編輯和即時通訊功能',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: '協作工具'
    },
    {
      id: 5,
      title: '內容管理系統',
      description: '靈活的內容管理解決方案，支援多站點管理和自訂工作流程',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'CMS'
    },
    {
      id: 6,
      title: '線上教育平台',
      description: '互動式學習平台，提供課程管理、影片直播和作業評估功能',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      category: '教育科技'
    },
  ]
};

// 按年份分组
const groupByYear = (works) => {
  return works.reduce((acc, work) => {
    const year = work.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(work);
    return acc;
  }, {});
};

function WorkGrid() {
  const { language } = useLanguage();
  const worksList = works[language] || works.en;
  const worksByYear = groupByYear(worksList);
  const years = Object.keys(worksByYear).sort((a, b) => b - a);

  const getYearLabel = (year) => {
    const yearNum = parseInt(year, 10);
    if (yearNum === 2026) {
      if (language === 'zh') return '2026 进行中';
      if (language === 'zh-TW') return '2026 進行中';
      return '2026 and ongoing';
    }
    return year;
  };

  return (
    <section className="work-section">
      {years.map(year => (
        <div key={year} className="work-year-group">
          <h2 className="work-year-title">{getYearLabel(year)}</h2>
          <div className="work-grid">
            {worksByYear[year].map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default WorkGrid;

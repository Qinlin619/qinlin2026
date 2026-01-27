import React from 'react';

// Individual 图标 - 人形图标
export const IndividualIcon = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M4 14c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

// User Experience 图标 - 交互/点击图标
export const UserExperienceIcon = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Product 图标 - 盒子/立方体图标
export const ProductIcon = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M2 5l6-2.5L14 5v6l-6 2.5L2 11V5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M2 5l6 2.5 6-2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M8 2.5v11" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
);

// Programming 图标 - 代码/编程图标
export const ProgrammingIcon = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M5 4l-2 4 2 4M11 4l2 4-2 4M10 6H6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Artificial Intelligence 图标 - AI/大脑图标
export const ArtificialIntelligenceIcon = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 3c-2.5 0-4.5 2-4.5 4.5 0 1.5.8 2.8 2 3.5M8 3c2.5 0 4.5 2 4.5 4.5 0 1.5-.8 2.8-2 3.5M8 3v10" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <circle cx="6" cy="7" r="0.8" fill="currentColor"/>
    <circle cx="10" cy="7" r="0.8" fill="currentColor"/>
  </svg>
);

// Group 图标 - 多人/团队图标
export const GroupIcon = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="5" cy="5" r="1.8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M2 13c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <circle cx="11" cy="5" r="1.8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M14 13c0-1.5-1.3-2.5-3-2.5s-3 1-3 2.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

// 分类缩写映射
const getCategoryAbbr = (category) => {
  const abbrMap = {
    'User Experience': 'UX',
    'User Interface': 'UI',
    'Programming': 'Dev',
    'Programming Modelling': 'Dev',
    'Artificial Intelligence': 'AI',
    'Digital Artwork': 'Digital Art',
    'Child Play': 'Child Play',
    'Museum': 'Museum',
    'Well-being': 'Well-being',
    'Zoo': 'Zoo',
    'Installation': 'Installation',
    'Redesign': 'Redesign',
    '用户体验': 'UX',
    '用户界面': 'UI',
    '编程': 'Dev',
    '编程建模': 'Dev',
    '人工智能': 'AI',
    '数字艺术': 'Digital Art',
    '儿童游戏': 'Child Play',
    '博物馆': 'Museum',
    '健康福祉': 'Well-being',
    '动物园': 'Zoo',
    '装置': 'Installation',
    '重新设计': 'Redesign',
    '用戶體驗': 'UX',
    '用戶界面': 'UI',
    '程式設計': 'Dev',
    '程式設計建模': 'Dev',
    '人工智慧': 'AI',
    '數位藝術': 'Digital Art',
    '兒童遊戲': 'Child Play',
    '博物館': 'Museum',
    '健康福祉': 'Well-being',
    '動物園': 'Zoo',
    '裝置': 'Installation',
    '重新設計': 'Redesign',
  };
  return abbrMap[category] || category;
};

// 分类图标组件 - 根据分类字符串显示对应图标或缩写
export function CategoryIcons({ category, className = '' }) {
  if (!category) return null;

  const categories = category.split('. ').map(c => c.trim());
  const iconMap = {
    'Individual': IndividualIcon,
    'Group': GroupIcon,
    'Group(3)': GroupIcon,
    '个人项目': IndividualIcon,
    '团队': GroupIcon,
    '個人專案': IndividualIcon,
    '團隊': GroupIcon,
  };

  return (
    <div className={`category-icons ${className}`}>
      {categories.map((cat, index) => {
        const IconComponent = iconMap[cat];
        
        if (IconComponent) {
          // 显示图标
          return (
            <span key={index} className="category-icon-wrapper">
              <IconComponent className="category-icon" />
            </span>
          );
        } else {
          // 显示缩写文字
          const abbr = getCategoryAbbr(cat);
          return (
            <span key={index} className="category-abbr">
              {abbr}
            </span>
          );
        }
      })}
    </div>
  );
}

export default CategoryIcons;

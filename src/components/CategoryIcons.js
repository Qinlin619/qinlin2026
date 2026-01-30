import React from 'react';

const IndividualIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const GroupIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

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
    'Events': 'Events',
    '活动': '活动',
    'Industrial Design': 'ID',
    '工业设计': 'ID',
    '工業設計': 'ID',
    'Modelling': 'Mod',
    '建模': 'Mod',
    'Web Design': 'Web',
    '网页设计': 'Web',
    '網頁設計': 'Web',
    'Product Design': 'PD',
    '产品设计': 'PD',
    '產品設計': 'PD',
    'Product Packaging Design': 'Pack',
    '产品包装设计': '包装',
    '產品包裝設計': '包裝',
    'Human-Computer Interaction': 'HCI',
    '人机交互': '人机交互',
    '人機互動': '人機互動',
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
    '動物園': 'Zoo',
    '產品': '产品',
  };
  return abbrMap[category] || category;
};

export function CategoryIcons({ category, className = '' }) {
  if (!category) return null;

  const categories = category.split('. ').map((c) => c.trim());
  const iconMap = {
    Individual: IndividualIcon,
    Group: GroupIcon,
    'Group(3)': GroupIcon,
    个人项目: IndividualIcon,
    单人项目: IndividualIcon,
    团队: GroupIcon,
    個人專案: IndividualIcon,
    團隊: GroupIcon,
  };

  return (
    <div className={`category-icons ${className}`}>
      {categories.map((cat, index) => {
        const IconComponent = iconMap[cat];
        if (IconComponent) {
          return (
            <span key={index} className="category-icon-wrapper">
              <IconComponent className="category-icon" />
            </span>
          );
        }
        const abbr = getCategoryAbbr(cat);
        return (
          <span key={index} className="category-abbr">
            {abbr}
          </span>
        );
      })}
    </div>
  );
}

export default CategoryIcons;

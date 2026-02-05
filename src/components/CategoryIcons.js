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
        return (
          <span key={index} className="category-abbr">
            {cat}
          </span>
        );
      })}
    </div>
  );
}

export default CategoryIcons;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorkCard from './WorkCard';

const works = {
  en: [
    {
      id: 8,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 9,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 10,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 11,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 12,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 13,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 1,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 2,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 7,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/e0e0e0/e0e0e0',
      category: 'loading'
    },
    {
      id: 3,
      title: 'loading',
      description: 'loading',
      year: 2023,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 4,
      title: 'loading',
      description: 'loading',
      year: 2023,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 5,
      title: 'loading',
      description: 'loading',
      year: 2022,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 6,
      title: 'loading',
      description: 'loading',
      year: 2022,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
  ],
  zh: [
    {
      id: 8,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 9,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 10,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 11,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 12,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 13,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 1,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 2,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 7,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/e0e0e0/e0e0e0',
      category: 'loading'
    },
    {
      id: 3,
      title: 'loading',
      description: 'loading',
      year: 2023,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 4,
      title: 'loading',
      description: 'loading',
      year: 2023,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 5,
      title: 'loading',
      description: 'loading',
      year: 2022,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 6,
      title: 'loading',
      description: 'loading',
      year: 2022,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
  ],
  'zh-TW': [
    {
      id: 8,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 9,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 10,
      title: 'loading',
      description: 'loading',
      year: 2026,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 11,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 12,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 13,
      title: 'loading',
      description: 'loading',
      year: 2025,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 1,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
    },
    {
      id: 2,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/f0f0f0/f0f0f0',
      category: 'loading'
    },
    {
      id: 7,
      title: 'loading',
      description: 'loading',
      year: 2024,
      image: 'https://via.placeholder.com/800x600/e0e0e0/e0e0e0',
      category: 'loading'
    },
    {
      id: 3,
      title: 'loading',
      description: 'loading',
      year: 2023,
      image: 'https://via.placeholder.com/800x600/d8d8d8/d8d8d8',
      category: 'loading'
    },
    {
      id: 4,
      title: 'loading',
      description: 'loading',
      year: 2023,
      image: 'https://via.placeholder.com/800x600/f5f5f5/f5f5f5',
      category: 'loading'
    },
    {
      id: 5,
      title: 'loading',
      description: 'loading',
      year: 2022,
      image: 'https://via.placeholder.com/800x600/e5e5e5/e5e5e5',
      category: 'loading'
    },
    {
      id: 6,
      title: 'loading',
      description: 'loading',
      year: 2022,
      image: 'https://via.placeholder.com/800x600/e8e8e8/e8e8e8',
      category: 'loading'
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

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CategoryIcons from './CategoryIcons';

function WorkCard({ work }) {
  const location = useLocation();
  const isActive = location.pathname === `/work/${work.id}`;

  return (
    <Link 
      to={`/work/${work.id}`} 
      className={`work-card ${isActive ? 'work-card-active' : ''}`}
    >
      <div className="work-card-image-wrapper">
        <img 
          src={work.image} 
          alt={work.title}
          className={`work-card-image ${work.id === 11 ? 'work-card-image-cobrush' : ''}`}
        />
      </div>
      <div className="work-card-content">
        {work.category && (
          <CategoryIcons category={work.category} className="work-card-category" />
        )}
        <h2 className="card-title">{work.title}</h2>
        <p className="card-desc">{work.description}</p>
      </div>
    </Link>
  );
}

export default WorkCard;

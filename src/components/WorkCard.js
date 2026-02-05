import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CategoryIcons from './CategoryIcons';

function WorkCard({ work }) {
  const location = useLocation();
  const isActive = location.pathname === `/work/${work.id}`;

  const saveScrollAndNavigate = () => {
    try {
      sessionStorage.setItem('workListScrollY', String(window.scrollY));
    } catch (_) { }
  };

  return (
    <Link
      to={`/work/${work.id}`}
      className={`work-card ${isActive ? 'work-card-active' : ''}`}
      onClick={saveScrollAndNavigate}
    >
      <div className="work-card-image-wrapper">
        <img
          src={work.image}
          alt={work.title}
          className="work-card-image"
        />
        {work.evaluation && (
          <div className="work-card-overlay">
            <div className="work-card-overlay-text">
              <div className="work-card-stars">
                {[...Array(6)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill={i < (work.rating || 3) ? "white" : "none"}
                    stroke="white"
                    strokeWidth="1.5"
                    className="star-icon"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p>{work.evaluation}</p>
            </div>
          </div>
        )}
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

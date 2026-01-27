import React from 'react';
import { Link } from 'react-router-dom';

function WorkCard({ work }) {
  return (
    <Link 
      to={`/work/${work.id}`} 
      className="work-card"
    >
      <div className="work-card-image-wrapper">
        <img 
          src={work.image} 
          alt={work.title}
          className="work-card-image"
        />
      </div>
      <div className="work-card-content">
        <h2 className="card-title">{work.title}</h2>
        <p className="card-desc">{work.description}</p>
      </div>
    </Link>
  );
}

export default WorkCard;

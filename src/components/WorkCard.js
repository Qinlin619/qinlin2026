import React from 'react';
import { Link } from 'react-router-dom';

function WorkCard({ work }) {
  return (
    <Link to={`/work/${work.id}`} className="work-card">
      <h2 className="card-title">{work.title}</h2>
      <p className="card-desc">{work.description}</p>
    </Link>
  );
}

export default WorkCard;

import React from 'react';
import WorkCard from './WorkCard';

const works = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the first project. This is placeholder text that can be replaced with actual project details.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of the second project. This is placeholder text that can be replaced with actual project details.',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of the third project. This is placeholder text that can be replaced with actual project details.',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of the fourth project. This is placeholder text that can be replaced with actual project details.',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A brief description of the fifth project. This is placeholder text that can be replaced with actual project details.',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'A brief description of the sixth project. This is placeholder text that can be replaced with actual project details.',
  },
];

function WorkGrid() {
  return (
    <section className="work-section">
      <div className="work-grid">
        {works.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}

export default WorkGrid;

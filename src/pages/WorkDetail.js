import React from 'react';
import { useParams, Link } from 'react-router-dom';

const workData = {
  1: {
    title: 'Project One',
    description: 'This is a detailed description of Project One.',
    content: `
      <p>This is placeholder content for Project One. You can replace this with your actual project details, including background, objectives, process, and outcomes.</p>
      <p>Add more paragraphs, images, and sections as needed to showcase your work comprehensively.</p>
      <p>Consider including sections such as:</p>
      <ul>
        <li>Project Overview</li>
        <li>My Role</li>
        <li>Process & Methodology</li>
        <li>Key Insights</li>
        <li>Results & Impact</li>
      </ul>
    `,
  },
  2: {
    title: 'Project Two',
    description: 'This is a detailed description of Project Two.',
    content: `
      <p>This is placeholder content for Project Two. You can replace this with your actual project details.</p>
      <p>Add more paragraphs, images, and sections as needed to showcase your work comprehensively.</p>
    `,
  },
  3: {
    title: 'Project Three',
    description: 'This is a detailed description of Project Three.',
    content: `
      <p>This is placeholder content for Project Three. You can replace this with your actual project details.</p>
      <p>Add more paragraphs, images, and sections as needed to showcase your work comprehensively.</p>
    `,
  },
  4: {
    title: 'Project Four',
    description: 'This is a detailed description of Project Four.',
    content: `
      <p>This is placeholder content for Project Four. You can replace this with your actual project details.</p>
      <p>Add more paragraphs, images, and sections as needed to showcase your work comprehensively.</p>
    `,
  },
  5: {
    title: 'Project Five',
    description: 'This is a detailed description of Project Five.',
    content: `
      <p>This is placeholder content for Project Five. You can replace this with your actual project details.</p>
      <p>Add more paragraphs, images, and sections as needed to showcase your work comprehensively.</p>
    `,
  },
  6: {
    title: 'Project Six',
    description: 'This is a detailed description of Project Six.',
    content: `
      <p>This is placeholder content for Project Six. You can replace this with your actual project details.</p>
      <p>Add more paragraphs, images, and sections as needed to showcase your work comprehensively.</p>
    `,
  },
};

function WorkDetail() {
  const { id } = useParams();
  const work = workData[parseInt(id, 10)];

  if (!work) {
    return (
      <div className="page-content">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/">← Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Link to="/" style={{ marginBottom: '2rem', display: 'inline-block', color: '#666', textDecoration: 'none' }}>
        ← Back to Work
      </Link>
      <h1>{work.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: work.content }} />
    </div>
  );
}

export default WorkDetail;

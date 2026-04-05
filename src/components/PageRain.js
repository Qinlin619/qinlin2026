import React, { useEffect, useRef } from 'react';
import './PageRain.css';

const dotColors = [
  '#ff99cc', // Pink
  '#33ccff', // Blue
  '#f9ff86ff', // Yellow
  '#b3a2ff', // Soft Purple
  '#70e1ff', // Soft Cyan
  '#ffc067ff', // Soft Orange
  '#32ffd6ff'  // Soft Teal
];

const PageRain = ({ top, count = 500 }) => {
  return (
    <div className="page-rain-container" style={{ '--rain-top': top }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="rain-drop"
          style={{
            '--drop-color': dotColors[i % dotColors.length],
            '--drop-delay': `${(Math.random() * 15) - 10}s`,
            '--drop-left': `${Math.random() * 100}%`,
            '--drop-top': `${Math.random() * 100}%`,
            '--drop-size': `${4 + Math.random() * 5}px`, // Random size between 4px and 9px
            '--drop-duration': `${3 + Math.random() * 4}s`,
            '--drop-opacity': 0.4 + Math.random() * 0.5
          }}
        >
          <div className="rain-splash"></div>
        </div>
      ))}
    </div>
  );
};

export default PageRain;

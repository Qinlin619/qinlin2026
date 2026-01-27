import React, { memo, useState } from 'react';

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="page-content about-page">
      <div className="about-cover">
        <img 
          src={`${process.env.PUBLIC_URL}/about/1.jpg`} 
          alt="Qinlin Liu" 
          className={`about-cover-image ${imageLoaded ? 'loaded' : ''}`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
            setImageLoaded(true);
          }}
        />
      </div>
      <h1>About</h1>
      <p>
        As a designer, I'm passionate about gaming and love incorporating gamification into my work, aiming to make every project both fun and meaningful. I strive to create engaging experiences that enhance user interaction or capture attention, whether through physical products, web platforms, or a combination of both. I believe I have the ability to make any project enjoyable and constantly push myself to take on new challenges. I thrive in fast-paced environments and enjoy producing results quickly, while also aiming to make a positive impact on others. At the same time, I know how to enjoy life, and my near-term goal is to adopt two dogs and two cats.
      </p>
      <h2>Plan</h2>
      <p>
        loading
      </p>
    </div>
  );
}

export default memo(About);

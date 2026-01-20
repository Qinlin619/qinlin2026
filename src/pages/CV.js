import React from 'react';

function CV() {
  return (
    <div className="page-content">
      <h1>CV</h1>
      <p>
        This is a placeholder page for your CV. You can either embed a PDF, link to an external 
        document, or format your CV directly on this page.
      </p>
      <h2>Education</h2>
      <p>
        <strong>Degree Name</strong><br />
        Institution Name, Year<br />
        Additional details or achievements
      </p>
      <h2>Experience</h2>
      <p>
        <strong>Position Title</strong><br />
        Company/Organization Name, Date Range<br />
        Description of your role and key achievements
      </p>
      <h2>Skills</h2>
      <p>
        List your relevant skills, tools, and technologies. For example: User Research, 
        Prototyping, Design Systems, etc.
      </p>
      <h2>Awards & Recognition</h2>
      <p>
        List any awards, honors, or recognition you've received in your career.
      </p>
      <p style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
        <a href="/cv.pdf" style={{ textDecoration: 'none', color: '#000' }}>
          Download PDF Version →
        </a>
      </p>
    </div>
  );
}

export default CV;

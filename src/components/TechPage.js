import React from 'react';


export const TechPage = () => (
  <div className="main-wrapper">
    <div className="title">Technologies</div>
    <div className="tech-card">
      <div className="tech-related-menu">
        <div className="tech-column">
          <h1 className="tech-subtitle-header">Languages</h1>
        </div>
        <div className="tech-column">
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>C++</li>
            <li>Swift</li>
            <li>HTML5/CSS3</li>
          </ul>
        </div>
      </div>
      <div className="tech-related-menu">
        <div className="tech-column">
          <h1 className="tech-subtitle-header">Frameworks & Libraries</h1>
        </div>
        <div className="tech-column">
          <ul>
          <li>React.js with Redux</li>
          <li>Angular.js</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Django</li>
          <li>Flask</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      <div className="tech-related-menu">
        <div className="tech-column">
          <h1 className="tech-subtitle-header">Databases & Storage</h1>
        </div>
        <div className="tech-column">
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
            <li>Firebase Realtime Database</li>
            <li>Firebase Storage</li>
            <li>Amazon S3</li>
          </ul>
        </div>
      </div>
      <div className="tech-related-menu">
        <div className="tech-column">
          <h1 className="tech-subtitle-header">Related Technical Skills</h1>
        </div>
        <div className="tech-column">
          <ul>
            <li>Git/Github Version Control</li>
            <li>Command Line Interface</li>
            <li>AWS Deployment</li>
            <li>Heroku Deployment</li>
            <li>Sassy CSS</li>
            <li>JSX Syntax</li>
            <li>Responsive Web Design</li>
            <li>Test Driven Development with Jest & Enzyme</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TechPage;

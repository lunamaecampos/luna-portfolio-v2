import React from 'react';


export const TechPage = () => (
  <div className="main-wrapper">
    <div className="title">Technologies</div>
    <div className="tech-card">
      <div className="tech-menu">
        <h2 className="single-line-h2">Languages</h2>
        <h4>Javascript</h4>
        <h4>Python</h4>
        <h4>C++</h4>
        <h4>Swift</h4>
        <h4>HTML5/CSS3</h4>
      </div>
      <div className="tech-menu">
        <h2>Framework & Libraries</h2>
        <h4>React.js</h4>
        <h4>Redux</h4>
        <h4>AngularJS</h4>
        <h4>Express</h4>
        <h4>Node.js</h4>
        <h4>Django</h4>
        <h4>Flask</h4>
        <h4>jQuery</h4>
        <h4>Bootstrap</h4>
      </div>
      <div className="tech-menu">
        <h2>Database & Storage</h2>
        <h4>MySQL</h4>
        <h4>SQLite</h4>
        <h4>MongoDB</h4>
        <h4>Firebase Realtime Database</h4>
        <h4>Firebase Storage</h4>
        <h4>Amazon S3</h4>
      </div>
      <div className="tech-asset-row">
        <img className="tech-asset" src="images/assets/js.png" />
        <img className="tech-asset" src="images/assets/python.png" />
        <img className="tech-asset" src="images/assets/cpp.png" />
        <img className="tech-asset" src="images/assets/swift.png" />
        <img className="tech-asset" src="images/assets/html5.png" />
        <img className="tech-asset" src="images/assets/css3.png" />
        <img className="tech-asset" src="images/assets/react.png" />
        <img className="tech-asset" src="images/assets/node.png" />
        <img className="tech-asset" src="images/assets/django.png" />
        <img className="tech-asset" src="images/assets/jquery.png" />
        <img className="tech-asset" src="images/assets/bootstrap.png" />
        <img className="tech-asset" src="images/assets/github.png" />
        <img className="tech-asset" src="images/assets/aws.png" />
        <img className="tech-asset" src="images/assets/firebase.png" />
      </div>
      <div className="tech-related-menu">
        <h2>Related Technical Skills</h2>
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
);

export default TechPage;

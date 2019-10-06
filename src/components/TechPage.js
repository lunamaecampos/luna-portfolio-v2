import React from 'react';
import LoadingPage from './LoadingPage';

export default class TechPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      doneLoading : undefined
    }
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({doneLoading : true});
    }, 200);
  }
  render(){
    return (
      <div>
        {!this.state.doneLoading ?
          (<LoadingPage />) :
          (<div className="main-wrapper">
            <div className="title">Technologies & Skills</div>
            <div className="tech-card">
              <div className="tech-related-menu">
                <div className="tech-column">
                  <h1 className="tech-subtitle-header-1">Programming Languages</h1>
                </div>
                <div className="tech-column">
                  <ul className="ul-1">
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
                  <h1 className="tech-subtitle-header-2">Frameworks & Libraries</h1>
                </div>
                <div className="tech-column">
                  <ul className="ul-2">
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
                  <h1 className="tech-subtitle-header-3">Databases & Storage</h1>
                </div>
                <div className="tech-column">
                  <ul className="ul-3">
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
                  <h1 className="tech-subtitle-header-4">Related Technical Skills</h1>
                </div>
                <div className="tech-column">
                  <ul className="ul-4">
                    <li>Git/Github Version Control</li>
                    <li>Command Line Interface</li>
                    <li>AWS Deployment</li>
                    <li>Heroku Deployment</li>
                    <li>Firebase Deployment</li>
                    <li>Sassy CSS</li>
                    <li>JSX Syntax</li>
                    <li>Responsive Web Design</li>
                    <li>Test Driven Development with Jest & Enzyme</li>
                  </ul>
                </div>
              </div>
              <div className="tech-related-menu">
                <div className="tech-column">
                  <h1 className="tech-subtitle-header-5">Soft Skills</h1>
                </div>
                <div className="tech-column">
                  <ul className="ul-5">
                    <li>Leadership</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Problem-Solving</li>
                    <li>Strong Work Ethic</li>
                    <li>Interpersonal Skills</li>
                    <li>Flexibility/Adaptability</li>
                  </ul>
                </div>
              </div>
              <div className="tech-footer"></div>
            </div>
          </div>
      )}
      </div>
    )
  }
}
// export const TechPage = () => (
//   <div className="main-wrapper">
//     <div className="title">Technologies</div>
//     <div className="tech-card">
//       <div className="tech-related-menu">
//         <div className="tech-column">
//           <h1 className="tech-subtitle-header">Languages</h1>
//         </div>
//         <div className="tech-column">
//           <ul>
//             <li>Javascript</li>
//             <li>Python</li>
//             <li>C++</li>
//             <li>Swift</li>
//             <li>HTML5/CSS3</li>
//           </ul>
//         </div>
//       </div>
//       <div className="tech-related-menu">
//         <div className="tech-column">
//           <h1 className="tech-subtitle-header">Frameworks & Libraries</h1>
//         </div>
//         <div className="tech-column">
//           <ul>
//           <li>React.js with Redux</li>
//           <li>Angular.js</li>
//           <li>Express.js</li>
//           <li>Node.js</li>
//           <li>Django</li>
//           <li>Flask</li>
//           <li>jQuery</li>
//           <li>Bootstrap</li>
//           </ul>
//         </div>
//       </div>
//       <div className="tech-related-menu">
//         <div className="tech-column">
//           <h1 className="tech-subtitle-header">Databases & Storage</h1>
//         </div>
//         <div className="tech-column">
//           <ul>
//             <li>MySQL</li>
//             <li>SQLite</li>
//             <li>MongoDB</li>
//             <li>Firebase Realtime Database</li>
//             <li>Firebase Storage</li>
//             <li>Amazon S3</li>
//           </ul>
//         </div>
//       </div>
//       <div className="tech-related-menu">
//         <div className="tech-column">
//           <h1 className="tech-subtitle-header">Related Technical Skills</h1>
//         </div>
//         <div className="tech-column">
//           <ul>
//             <li>Git/Github Version Control</li>
//             <li>Command Line Interface</li>
//             <li>AWS Deployment</li>
//             <li>Heroku Deployment</li>
//             <li>Sassy CSS</li>
//             <li>JSX Syntax</li>
//             <li>Responsive Web Design</li>
//             <li>Test Driven Development with Jest & Enzyme</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default TechPage;

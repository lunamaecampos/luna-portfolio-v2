import React from 'react';
import { connect } from 'react-redux';
import { TypeWriter } from './TypeWriter';
import LoadingPage from './LoadingPage';

export default class LandingPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      doneLoading: undefined
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ doneLoading: true });
    }, 200);
  }
  render(){
    return(
      <div>
      {!this.state.doneLoading ? (
        <LoadingPage / >
      ) : (
        <div className="landing-wrapper">
          <div className="backdrop-filter">
            <div></div>
              <div className="title-card">
              <div className="landing-title">My Name Is <span>Luna Campos</span></div>
              <TypeWriter
                dataText={[
                  'Full-Stack Web Developer',
                  'Engineer',
                  'Critical Thinker',
                  'Team Player',
                  'Quick Learner'
                ]}
              />
              <div className="landing-icon-row">
                <a target="_blank"
                  href="https://github.com/lunamaecampos"><img
                  className="landing-icon"
                  src="../../images/github2.png" /></a>
                <a target="_blank"
                  href="https://www.linkedin.com/in/luna-campos-a8721213b/"><img
                  className="landing-icon"
                  src="../../images/linkedin2.png" /></a>
                <a target="_blank"
                  href="mailto:lunamaecampos@gmail.com?subject=I was checking out your Portfolio site"><img
                  className="landing-icon"
                  src="../../images/mail2.png" /></a>
                <a target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/portfolio-v2-69ad3.appspot.com/o/resume%2FCamposLunaResumeOctober2019.pdf?alt=media&token=3bc51114-f2c2-401f-af8b-267a84153a07"><img
                  className="landing-icon"
                  src="../../images/resume2.png" /></a>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
        </div>
      )}
      </div>
    )
  }
}


// export const LandingPage = () => (
//     <div className="landing-wrapper">
//       <div className="backdrop-filter">
//         <div></div>
//           <div className="title-card">
//           <div className="landing-title">My name is Luna Campos</div>
//           <TypeWriter
//             dataText={[
//               'Full-Stack Web Developer',
//               'Problem-Solver',
//               'Engineer'
//             ]}
//           />
//           <div className="landing-icon-row">
//             <a href="/"><img
//               className="landing-icon"
//               src="../../images/github2.png" /></a>
//             <a href="/"><img
//               className="landing-icon"
//               src="../../images/linkedin2.png" /></a>
//             <a href="/"><img
//               className="landing-icon"
//               src="../../images/mail2.png" /></a>
//             <a href="/"><img
//               className="landing-icon"
//               src="../../images/resume2.png" /></a>
//             </div>
//           </div>
//           <div></div>
//           <div></div>
//         </div>
//     </div>
// );

// export default LandingPage;

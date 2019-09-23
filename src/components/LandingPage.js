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
              <div className="landing-title">My name is Luna Campos</div>
              <TypeWriter
                dataText={[
                  'Full-Stack Web Developer',
                  'Problem-Solver',
                  'Engineer'
                ]}
              />
              <div className="landing-icon-row">
                <a href="/"><img
                  className="landing-icon"
                  src="../../images/github2.png" /></a>
                <a href="/"><img
                  className="landing-icon"
                  src="../../images/linkedin2.png" /></a>
                <a href="/"><img
                  className="landing-icon"
                  src="../../images/mail2.png" /></a>
                <a href="/"><img
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

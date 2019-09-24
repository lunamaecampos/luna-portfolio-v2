import React from 'react';
import NavBar from './NavBar';
import LoadingPage from './LoadingPage';

export default class AboutPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      doneLoading: undefined
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({ doneLoading : true});
    }, 200)
  }
  render(){
    return (
      <div>
      {!this.state.doneLoading ?
        (<LoadingPage/>) : (
          <div className="main-wrapper">
              <div className="title">About Me</div>
              <div className="info-card">
                <div className="column">
                  <div className="photo-box">
                    <img
                    className="portrait"
                    src="../../images/selfie2.jpg" />
                  </div>
                </div>
                <div className="text-column">
                  <div className="header1">Hi, my name is <span>Luna Campos</span>.</div>
                  <p>I'm a hard-working person who likes to call herself a Full-Stack Software Engineer.</p>
                  <p>I've been actively coding for 3+ years. I enrolled in
                    Computer Science classes to learn the fundamentals and data structures.
                    I recieved Dean's List and President's List recognition while taking those classes.
                    I also attended Coding Dojo's full-stack web developer bootcamp and
                    recieved their their certificate of completion.
                  </p>
                  <p> Over the last 2 years, i've been honing my skills with freelance and pet projects.
                  I'm always ready to work and learn the latest technologies!
                  </p>
                  <p>I worked at Lucille's BBQ for 5+ years and have worked other gigs to support myself,
                  but im ready to make the leap to the tech industry.</p>
                </div>
              </div>
            </div>
        )}
      </div>
    )
  }
}

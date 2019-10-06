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
                    <div className="photo-box-two">
                      <img
                      className="portrait"
                      src="../../images/selfie3.jpg" />
                    </div>
                  </div>
                </div>
                <div className="text-column">
                  <div className="header1">Hi, my name is <span>Luna Campos</span>.</div>
                  <p>I'm a freelance <b>Software Developer</b> and have been building and designing
                  web applications during my free time for the past two years.</p>
                  <p>I've been actively coding for 3+ years. I enrolled in
                    Computer Science classes at Citrus College to learn the fundamentals and data structures.
                    I recieved Dean's List and President's List recognition while enrolled in those courses.
                    I also attended Coding Dojo's Full-Stack Web Developer Immersive Bootcamp and
                    recieved their certificate of completion.
                  </p>
                  <p>The longest job I've held is 5+ years and while working there I became familiar with and practiced the 7 soft skills.</p>
                  <p>I'm looking to <b>grow</b> and <b>adapt</b> as a software developer and follow the best practices.
                  I <b>love</b> learning and I'm always ready to work and learn the latest tech.</p>
                  <p>Some of my hobbies include running 6-10 miles per day, songwriting, music production, recording and repairing vintage analog equipment.</p>
                  <p className="aboutme-footer"></p>
                </div>
              </div>
            </div>
        )}
      </div>
    )
  }
}

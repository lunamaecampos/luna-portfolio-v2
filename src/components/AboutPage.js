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
                      src="../../images/selfie3.JPG" />
                    </div>
                  </div>
                </div>
                <div className="text-column">
                  <div className="header1">Hi, my name is <span>Luna Campos</span>.</div>
                  <p>I'm a freelance <b>Software Developer</b> and have been building and designing
                  web applications during my free time for the past two years.</p>
                  <p>I've been actively coding for 3+ years. I enrolled in
                    Computer Science classes at Citrus College to learn the fundamentals and data structures.
                    I received Dean's List and President's List recognition while enrolled in those courses.
                    I also attended Coding Dojo's Full-Stack Web Developer Immersive Bootcamp and
                    received their certificate of completion.
                  </p>
                  <p>My employment history has allowed me to become familiar with and practice the <b>7 soft skills</b>.  A majority of my work history includes holding a job at the same company for 5+ years and leaving to persue interests in coding.</p>
                  <p>I'm looking to <b>grow</b> and <b>adapt</b> as a software developer and <b>follow the best practices</b>.
                  I <b>love learning</b> and I'm <b>always ready to work</b> and learn the latest tech.</p>
                  <p>Aside from programming, some of my hobbies include running 6-10 miles per day, songwriting, music production, recording and repairing vintage analog equipment.</p>
                  <p className="aboutme-footer"></p>
                </div>
              </div>
            </div>
        )}
      </div>
    )
  }
}

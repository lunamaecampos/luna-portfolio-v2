import React from 'react';
import NavBar from './NavBar';

export const AboutPage = () => (
  <div className="main-wrapper">
  <div></div>
    <div className="title">About Me</div>
    <div className="info-card">
    <div className="column">
    <img
    className="portrait"
    src="../../images/selfie.jpeg" />
    </div>
    <div className="text-column">
    <div className="header1">Hi, my name is Luna! </div>
    <div>I'm a hard-working person who likes to call herself a Full-Stack Software Engineer.</div>
    <div>I've been actively coding for 3+ years. I enrolled in
      Computer Science classes to learn the fundamentals and data structures.
      I recieved Dean's List and President's List recognition while taking those classes.
      I also attended Coding Dojo's full-stack web developer bootcamp and
      recieved their their certificate of completion.
    </div>
    <div> Over the last 2 years, i've been honing my skills with freelance and pet projects.
    I'm always ready to work and learn the latest technologies!
    </div>
    <div>I worked at Lucille's BBQ for 5+ years and have worked other gigs to support myself,
    but im ready to make the leap to the tech industry.</div>
    </div>
    </div>
    <div></div>
    <div></div>
  </div>
);

export default AboutPage;

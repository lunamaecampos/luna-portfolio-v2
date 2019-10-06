import React from 'react';
import {BrowserRouter, Route, Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchWriter from './SearchWriter';
import { setTextFilter } from '../actions/filters';
import ProjectsPage from './ProjectsPage';
// import selectProjects from '../selectors/projects';
import { history } from '../routers/AppRouter';

const DropDown = () => (
  <div className="ul">
    <Link className="li" to="https://www.linkedin.com/in/luna-campos-a8721213b/" target="_blank">Linkedin</Link>
    <Link className="li" to="https://github.com/lunamaecampos" target="_blank">Github</Link>
    <Link className="li" to="mailto:lunamaecampos@gmail.com?subject=I was checking out your Portfolio site" target="_blank">Email</Link>
    <Link className="li" to="https://firebasestorage.googleapis.com/v0/b/portfolio-v2-69ad3.appspot.com/o/resume%2FCamposLunaResumeOctober2019.pdf?alt=media&token=3bc51114-f2c2-401f-af8b-267a84153a07" target="_blank">Resume</Link>
  </div>
);
class NavBarMenu extends React.Component {
  constructor(props){
    super(props)
    this.handleHome = this.handleHome.bind(this);
  }
  handleHome = (e) => {
    e.preventDefault();
    this.props.hamburgerClick();
    setTimeout(()=> {
      history.push('/');
    }, 1000);
  }
  handleAbout = (e) => {
    e.preventDefault();
    this.props.hamburgerClick();
    setTimeout(()=> {
      history.push('/about');
    }, 1000);
  }
  handleProjects = (e) => {
    e.preventDefault();
    this.props.hamburgerClick();
    setTimeout(()=> {
      history.push('/projects');
    }, 1000);
  }
  handleSkills = (e) => {
    e.preventDefault();
    this.props.hamburgerClick();
    setTimeout(()=> {
      history.push('/technologies');
    }, 1000);
  }
  render(){
    return (
          <div className="navbar-menu">
            <Link className="navbar-menu-item" onClick={this.handleHome} to='/'>Home</Link>
            <Link className="navbar-menu-item" onClick={this.handleAbout} to="/about">About</Link>
            <Link className="navbar-menu-item" onClick={this.handleProjects} to="/projects">Projects</Link>
            <Link className="navbar-menu-item" onClick={this.handleSkills} to="/technologies">Skills</Link>
            <Link className="navbar-menu-item" to="https://www.linkedin.com/in/luna-campos-a8721213b/" target="_blank">Linkedin</Link>
            <Link className="navbar-menu-item" to="https://github.com/lunamaecampos" target="_blank">Github</Link>
            <Link className="navbar-menu-item" to="mailto:lunamaecampos@gmail.com?subject=I was checking out your Portfolio Site" target="_blank">Email</Link>
            <Link className="navbar-menu-item" to="https://firebasestorage.googleapis.com/v0/b/portfolio-v2-69ad3.appspot.com/o/resume%2FCamposLunaResumeOctober2019.pdf?alt=media&token=3bc51114-f2c2-401f-af8b-267a84153a07" target="_blank">Resume</Link>
          </div>
    )
  }
}

export default class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checkbox: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    (!this.state.checkbox) ? this.setState({checkbox:true}) :
    this.setState({checkbox: false})
  }

  render(){
    return (
        <div>
          <div className="navbar">
            <Link to="/" className="corner">Luna Campos</Link>
            <input type="checkbox" id="buttonControl" checked={this.state.checkbox} />
            <label for="buttonControl">
              < NavBarMenu hamburgerClick={this.handleClick} />
              <div className="hamburger" onClick={this.handleClick}>
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </div>
            </label>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/projects" className="navbar-item">Projects</Link>
            <Link to="/technologies" className="navbar-item">Skills</Link>
            <div className="navbar-item">Connect
            <DropDown />
            </div>
            <img
              className="search-icon"
              src="../../images/search2.png" />
            <SearchWriter
              dataText={[
                'Search projects',
                'React',
                'Python',
                'Javascript'
              ]}
              />
          </div>

        </div>
    )
  }
}

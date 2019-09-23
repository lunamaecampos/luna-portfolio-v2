import React from 'react';
import {BrowserRouter, Route, Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { SearchWriter } from './Typewriter'
// import { history } from '../routers/AppRouter';

const DropDown = () => (
  <div className="ul">
    <Link className="li" to="/l" target="_blank">Linkedin</Link>
    <Link className="li" to="/l" target="_blank">Github</Link>
    <Link className="li" to="/l" target="_blank">Email</Link>
    <Link className="li" to="/l" target="_blank">Resume</Link>
  </div>
);
const NavBarMenu = (props) => (
        <div className="navbar-menu">
          <Link className="navbar-menu-item" to="/">Home</Link>
          <Link className="navbar-menu-item" to="/about">About</Link>
          <Link className="navbar-menu-item" to="/projects">Projects</Link>
          <Link className="navbar-menu-item" to="/technologies">Tech</Link>
          <Link className="navbar-menu-item" to="/l" target="_blank">Linkedin</Link>
          <Link className="navbar-menu-item" to="/l" target="_blank">Github</Link>
          <Link className="navbar-menu-item" to="/l" target="_blank">Email</Link>
          <Link className="navbar-menu-item" to="/l" target="_blank">Resume</Link>
        </div>
);

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
        <div className="navbar">
          <Link to="/" className="corner">Luna Campos</Link>
          <input type="checkbox" id="buttonControl" checked={this.state.checkbox} />
          <label for="buttonControl">
            < NavBarMenu />
            <div className="hamburger" onClick={this.handleClick}>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </div>
          </label>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/projects" className="navbar-item">Projects</Link>
          <Link to="/technologies" className="navbar-item">Tech</Link>
          <a className="navbar-item">Connect
          <DropDown />
          </a>
          <img
            className="search-icon"
            src="../../images/search.png" />
          <SearchWriter
            dataText={[
              'Search projects',
              'React',
              'Python',
              'Javascript'
            ]}
            />
        </div>
    )
  }
}

// export const NavBar = () => (
//   <div className="navbar">
//     <Link to="/" className="corner">Luna Campos</Link>
//     <input type="checkbox" id="buttonControl" />
//     <label for="buttonControl">
//       < NavBarMenu />
//       <div className="hamburger">
//         <span className="icon-bar top-bar"></span>
//         <span className="icon-bar middle-bar"></span>
//         <span className="icon-bar bottom-bar"></span>
//       </div>
//     </label>
//     <Link to="/about" className="navbar-item">About</Link>
//     <Link to="/projects" className="navbar-item">Projects</Link>
//     <Link to="/technologies" className="navbar-item">Tech</Link>
//     <a className="navbar-item">Connect
//     <DropDown />
//     </a>
//     <img
//       className="search-icon"
//       src="../../images/search.png" />
//     <SearchWriter
//       dataText={[
//         'Search projects',
//         'React',
//         'Python',
//         'Javascript'
//       ]}
//       />
//   </div>
// );

// <input
//   type="text"
//   className="searchbar"
//   placeholder="Search projects"
//   />

// export default NavBar;

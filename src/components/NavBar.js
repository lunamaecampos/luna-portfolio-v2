import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { SearchWriter } from './Typewriter'

const DropDown = () => (
  <div className="ul">
    <a className="li" href="/l" target="_blank">Linkedin</a>
    <a className="li" href="/l" target="_blank">Github</a>
    <a className="li" href="/l" target="_blank">Email</a>
    <a className="li" href="/l" target="_blank">Resume</a>
  </div>
);

const NavBarMenu = () => (
  <div className="navbar-menu">
    <a className="navbar-menu-item" href="/" >Home</a>
    <a className="navbar-menu-item" href="/about" >About</a>
    <a className="navbar-menu-item" href="/projects" >Projects</a>
    <a className="navbar-menu-item" href="/technologies" >Tech</a>
    <a className="navbar-menu-item" href="/l" target="_blank">Linkedin</a>
    <a className="navbar-menu-item" href="/l" target="_blank">Github</a>
    <a className="navbar-menu-item" href="/l" target="_blank">Email</a>
    <a className="navbar-menu-item" href="/l" target="_blank">Resume</a>
  </div>
);

export const NavBar = () => (
  <div className="navbar">
    <a href="/" className="corner">Luna Campos</a>
    <input type="checkbox" id="buttonControl" />
    <label for="buttonControl">
      < NavBarMenu />
      <div class="hamburger">
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
      </div>
    </label>
    <a href="/about" className="navbar-item">About</a>
    <a href="/projects" className="navbar-item">Projects</a>
    <a href="/technologies" className="navbar-item">Tech</a>
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
);

// <input
//   type="text"
//   className="searchbar"
//   placeholder="Search projects"
//   />

export default NavBar;

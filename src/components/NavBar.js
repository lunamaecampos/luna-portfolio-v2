import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

export const NavBar = () => (
  <div className="navbar">
    <a href="/" className="corner">Luna Campos</a>
    <a href="/about" className="navbar-item">About</a>
    <a href="/projects" className="navbar-item">Projects</a>
    <a href="/technologies" className="navbar-item">Technologies</a>
    <a href="/connect" className="navbar-item">Connect</a>
    <img
      className="navbar-icon"
      src="../../images/search2.png" />
    <input
      type="text"
      className="searchbar"
      placeholder="Search projects"
      />
  </div>
);



export default NavBar;

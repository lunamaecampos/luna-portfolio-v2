import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={() => (
      <div className="app-wrapper">
        <div className="app-backdrop-filter">
          <NavBar />
          <Component />
        </div>
      </div>
  )}/>
);



export default PublicRoute;

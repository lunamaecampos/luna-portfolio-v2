import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import TechPage from '../components/TechPage';
import ConnectPage from '../components/ConnectPage';
import DashboardPage from '../components/DashboardPage';
import AddProjectPage from '../components/AddProjectPage';
import EditProjectPage from '../components/EditProjectPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} exact={true} />
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/about" component={AboutPage} exact={true} />
        <PublicRoute path="/projects" component={ProjectsPage} exact={true} />
        <PublicRoute path="/technologies" component={TechPage} exact={true} />
        <PublicRoute path="/connect" component={ConnectPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddProjectPage} />
        <PrivateRoute path="/edit/:id" component={EditProjectPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

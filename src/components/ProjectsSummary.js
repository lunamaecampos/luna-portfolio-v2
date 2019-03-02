import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectProjects from '../selectors/projects';

export const ProjectsSummary = ({ allProjectCount }) => {
  return (
    <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">You have {allProjectCount} project(s)</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Project</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const allProjectCount = state.projects.length;
  console.log(state);
  return {
    allProjectCount: allProjectCount
  };
};

export default connect(mapStateToProps)(ProjectsSummary);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectProjects from '../selectors/projects';

export const ProjectsSummary = ({ allProjectCount }) => {
  const projectWord = allProjectCount === 1 ? 'project' : 'projects';
  return (
    <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">You have {allProjectCount} {projectWord}</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add A Project</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const allProjectCount = state.projects.length;
  return {
    allProjectCount: allProjectCount
  };
};

export default connect(mapStateToProps)(ProjectsSummary);

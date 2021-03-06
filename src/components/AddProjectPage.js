import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startAddProject } from '../actions/projects';

export class AddProjectPage extends React.Component {
  // const projectWord = allProjectCount === 1 ? 'project' : 'projects';
  onSubmit=(project) => {
    this.props.startAddProject(project);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <div className="page-header-form">
          <div className="content-container">
            <h1 className="page-header__title">Add Project</h1>
          </div>
        </div>
        <div className="form-container">
          <ProjectForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddProject: (project) => dispatch(startAddProject(project))
});
export default connect(undefined, mapDispatchToProps)(AddProjectPage);

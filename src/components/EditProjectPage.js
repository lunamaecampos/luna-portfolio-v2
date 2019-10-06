import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ProjectForm from './ProjectForm';
import ConfirmationModal from './ConfirmationModal';
import { startEditProject, startRemoveProject } from '../actions/projects';

export class EditProjectPage extends React.Component {
  state = {
    modalisOpen: false
  }
  onSubmit=(project) => {
    this.props.startEditProject(this.props.project.id, project);
    this.props.history.push('/dashboard');
  };
  onRemove=()=>{
    this.props.startRemoveProject({ id: this.props.project.id });
    this.props.history.push('/dashboard');
  };
  openModal=()=>{
    this.setState(()=>({modalisOpen: true}));
  };
  closeModal=()=>{
    this.setState(()=>({modalisOpen: false}));
  };
  render() {
    return (
      <div>
        <div className="page-header-form">
          <div className="content-container">
            <h1 className="page-header__title">Edit Project</h1>
          </div>
        </div>
        <div className="form-container">
          <ProjectForm
            project={this.props.project}
            onSubmit={this.onSubmit}
          />
          <div className="form">
            <button
              className="button button--secondary"
              onClick={this.openModal}
            >Remove Project</button>
          </div>
        </div>
        <ConfirmationModal
        modalisOpen={this.state.modalisOpen}
        closeModal={this.closeModal}
        onRemove={this.onRemove}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find((project) => project.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch) => ({
  startEditProject: (id, project) => dispatch(startEditProject(id, project)),
  startRemoveProject: (data) => dispatch(startRemoveProject(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);

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
    this.props.history.push('/');
  };
  onRemove=()=>{
    this.props.startRemoveProject({ id: this.props.project.id });
    this.props.history.push('/');
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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Project</h1>
          </div>
        </div>
        <div className="content-container">
          <ProjectForm
            project={this.props.project}
            onSubmit={this.onSubmit}
          />
          <button
            className="button button--secondary"
            onClick={this.openModal}
          >Remove Project</button>
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

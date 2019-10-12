import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import selectProjects from '../selectors/projects';
import LoadingPage from './LoadingPage';


class ProjectsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      doneLoading: undefined
    }
  }
  componentDidMount(){
    setTimeout(()=>  {
      this.setState({ doneLoading: true });
    }, 200)
  }
  render(){
    return (
      <div>
      {!this.state.doneLoading ? (
        <LoadingPage / >
      ) : (
        <div className="main-wrapper">
          <div className="title">Projects</div>
          <div className="projects-wrapper">
            <div className="horizontal-scroll-wrapper">
            {
                this.props.projects.length === 0 ? (
                  <div className="project-item">
                    <div className="noProjects">
                      No Projects found {!this.props.filters.text ||
                       `matching "${this.props.filters.text}"`}
                    </div>
                  </div>
                ) : (
                  this.props.projects.map((project)=>{
                    return <ProjectItem key={project.id} {...project} />;
                  })
                )
              }
              <div className="project-item-footer"></div>
            </div>
          </div>
        </div>
      )}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    projects: selectProjects(state.projects, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ProjectsPage);

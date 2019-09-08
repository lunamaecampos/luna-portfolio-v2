import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import selectProjects from '../selectors/projects';


export const ProjectsPage = (props) => (
  <div className="main-wrapper">
    <div className="title">Projects</div>
    <div className="projects-wrapper">
      <div className="horizontal-scroll-wrapper">
      {
          props.projects.length === 0 ? (
            <div className="list-item list-item--message">
              <span>no projects</span>
            </div>
          ) : (
            props.projects.map((project)=>{
              return <ProjectItem key={project.id} {...project} />;
            })
          )
        }
        <div className="project-item-footer"></div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: selectProjects(state.projects, state.filters)
  };
};


export default connect(mapStateToProps)(ProjectsPage);

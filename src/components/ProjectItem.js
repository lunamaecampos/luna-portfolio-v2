import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
export const ProjectItem = ({ title, liveLink, githubLink, description, languages, pictureUrl}) => (
      <div className='project-item'>
        <div className='desktop-project-wrapper'>
          <div className="project-title">{title}</div>
          <div className="project-column-1">
            <img
            className="project-picture" src={pictureUrl} />
            <div className="project-links">
              <a className="project-link"
              href={liveLink}>View Live Project</a>
              <a className="project-github"
              href={githubLink}>View Github Repo</a>
            </div>
          </div>
          <div className="project-column-2">
            <div className="project-description">{description}</div>
            <div className="project-languages"><span className="">Technologies used:</span> {languages}</div>
          </div>
        </div>
      </div>
);


export default ProjectItem;

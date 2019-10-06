import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
export const ProjectItem = ({ title, liveLink, githubLink, description, languages, pictureUrl}) => (
      <div className='project-item'>
        <div className='desktop-project-wrapper'>
          <div className="project-title">{title}</div>
          <div className="project-column-1">
            <img
            className="project-picture" src={pictureUrl} alt="Project Pic" />
            <div className="project-links">
              {liveLink ?
                (<a className="project-link" target="_blank" href={liveLink}>View Live Project</a>) :
                (<div className="project-link">No Live Project</div>)
              }
              <a className="project-github"
              target="_blank"
              href={githubLink}>View Github Repo</a>
            </div>
          </div>
          <div className="project-column-2">
            <div className="project-description">{description}</div>
            <div className="project-languages"><span className="">Technologies used:</span> <span className="languages-list">{languages}</span></div>
          </div>
        </div>
      </div>
);


export default ProjectItem;

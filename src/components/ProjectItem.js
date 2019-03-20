import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
export const ProjectItem = ({ title, liveLink, githubLink, description, languages, pictureUrl}) => (
      <div>
      <div>{title}</div>
      <img src={pictureUrl} />
      </div>
);


export default ProjectItem;

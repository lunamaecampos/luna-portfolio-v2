import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_PROJECT
export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
});

export const startAddProject = (projectData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      liveLink = '',
      githubLink = '',
      description = '',
      languages = {},
      picture = '',
      pictureUrl = '',
      pictures = {},
      createdAt = 0,
    } = projectData;
    const project = { title, liveLink, githubLink, description, languages, pictures, picture, pictureUrl, createdAt }

    return database.ref(`users/${uid}/projects`).push(project).then((ref) =>{
        dispatch(addProject({
          id: ref.key,
          ...project
        }));
    });
  };
};
// REMOVE_PROJECT
export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id
});

export const startRemoveProject = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/projects/${id}`).remove().then(() => {
      dispatch(removeProject({ id }));
    });
  };
}

// EDIT_PROJECT
export const editProject = (id, updates) => ({
  type: 'EDIT_PROJECT',
  id,
  updates
});
export const startEditProject = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/projects/${id}`).update(projects).then(() => {
      dispatch(editProject(id, updates));
    });
  };
};

//SET_PROJECTS
export const setProjects = (projects) =>  ({
  type: 'SET_PROJECTS',
  projects
});

export const startSetProjects = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/projects`).once('value').then((snapshot) => {
        const projects = ['hello'];
        snapshot.forEach((childSnapshot) => {
          projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setProjects(projects));
    });
  };
};

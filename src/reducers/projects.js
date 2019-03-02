const projectsReducerDefaultState = [];

export default (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
    console.log("hello adding");
      return [
        ...state,
        action.project
      ];
    case 'REMOVE_PROJECT':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PROJECT':
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            ...action.updates
          };
        } else {
          return project;
        };
      });
    case 'SET_PROJECTS':
      console.log("hello");
      return action.projects;
    default:
      return state;
  }
};

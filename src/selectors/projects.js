import moment from 'moment';


export default (projects, {text, sortBy, startDate, endDate}) => {
  return projects.filter((project) => {
    const createdAtMoment = moment(project.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
    const textMatch = project.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b)=>{
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1: -1;
    }
  });
};

import React from 'react';
import ProjectsSummary from './ProjectsSummary';
import ProjectListFilters from './ProjectListFilters';
import ProjectList from './ProjectList';

export const DashboardPage = () => (
  <div className="dashboard-page">
    <ProjectsSummary />
    <ProjectListFilters />
    <ProjectList />
  </div>
);

export default DashboardPage;

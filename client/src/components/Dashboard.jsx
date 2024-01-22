import React from 'react';
import Welcome from './Welcome.jsx';
import JobCard from './JobCard.jsx';
import Header from './Header.jsx;';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <JobCard />
    </div>
  );
};

export default Dashboard;

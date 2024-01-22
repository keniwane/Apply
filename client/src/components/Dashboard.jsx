import React from 'react';
import Welcome from './Welcome.jsx';
import JobCard from './JobCard.jsx';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';
import Activity from './Activity.jsx';

const Dashboard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Welcome />
      <div className='flex flex-grow'>
        <div className='w-1/3 p-4'>
          <Activity />
        </div>
        <div className='w-2/3 p-4 '>
          <Searchbar />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

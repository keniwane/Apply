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
      <div className='px-10'>
        <Welcome />
      </div>
      <div className='flex flex-grow'>
        <div className='w-1/4 p-3'>
          <Activity />
        </div>
        <div className='w-3/4 p-4 '>
          <Searchbar />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

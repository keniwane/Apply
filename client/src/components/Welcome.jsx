import React from 'react';
import Navbar from './Navbar';

const Welcome = () => {
  return (
    <div className='flex justify-between items-center text-white text-4xl'>
      <div>Welcome, Ken</div>
      <Navbar />
    </div>
  );
};

export default Welcome;

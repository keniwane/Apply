import React from 'react';
import { GoSearch } from 'react-icons/go';

const Searchbar = () => {
  return (
    <div className='relative w-full mb-4'>
      <GoSearch className='absolute left-2 top-3 transform text-gray-400' />
      <input
        type='text'
        placeholder='Search'
        className='w-full bg-transparent border-b pl-8 p-2  text-white'
      />
    </div>
  );
};

export default Searchbar;

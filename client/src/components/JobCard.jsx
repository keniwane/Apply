import React, { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';

const JobCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <button
        className='bg-gray-700 hover:bg-gray-600 text-white w-96 h-48 p-4 border-4 box-border rounded-md'
        onClick={() => {}}
      >
        <div className='flex justify-center items-center h-full'>
          <GoPlus className='large-icon' />
        </div>
      </button>
    </div>
  );
};

export default JobCard;

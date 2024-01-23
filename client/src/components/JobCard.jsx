import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import Sidebar from './Sidebar.jsx';

const JobCard = () => {
  const [cards, setCards] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    status: '',
    date: '',
    location: '',
    contactName: '',
    contactEmail: '',
  });

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleFormSubmit = (newData) => {
    setCards([...cards, newData]);
    closeSidebar();
  };

  return (
    <div className='flex flex-wrap'>
      <button
        className='bg-gray-700 hover:bg-gray-600 text-white w-96 h-48 p-4 border-2 box-border rounded-md m-2' // Keep the styling
        onClick={openSidebar}
      >
        <div className='flex justify-center items-center h-full'>
          <GoPlus className='large-icon' />
        </div>
      </button>
      {cards.map((card, index) => (
        <div
          key={index}
          className='bg-gray-700 hover:bg-gray-600 text-white w-96 h-48 p-4 border-2 box-border rounded-md m-2' // Keep the styling
        >
          <div>{card.jobTitle}</div>
          <div>{card.company}</div>
        </div>
      ))}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        formData={formData}
        setFormData={setFormData}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default JobCard;

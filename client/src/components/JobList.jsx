import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import Sidebar from './Sidebar';
import JobCard from './JobCard';

const JobList = () => {
  console.log('job list rendered');
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
    <div className='flex flex-wrap justify-start items-start'>
      {cards.map((card, index) => (
        <JobCard key={index} card={card} />
      ))}

      <button
        className='bg-job-card-color hover:bg-gray-600 text-white max-w-xs md:max-w-md lg:w-96 h-36 md:h-48 lg:h-54 p-4 border-2 box-border rounded-md m-2'
        onClick={openSidebar}
      >
        <div className='flex justify-center items-center h-full'>
          <GoPlus size='2em' />
        </div>
      </button>
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

export default JobList;

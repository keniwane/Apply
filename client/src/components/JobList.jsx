import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import Sidebar from './Sidebar.jsx';
import Filter from './Filter.jsx';

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
    <div className='flex flex-wrap'>
      <Filter cards={cards} />
      <button
        className='bg-gray-700 hover:bg-gray-600 text-white w-96 h-48 p-4 border-2 box-border rounded-md m-2'
        onClick={openSidebar}
      >
        <div className='flex justify-center items-center h-full'>
          <GoPlus className='large-icon' />
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

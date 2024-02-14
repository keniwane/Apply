import { MdClose } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Sidebar = ({ isOpen, onClose, formData, setFormData, onFormSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    onClose();
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-800 text-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } p-8`}
      style={{ width: '600px' }}
    >
      <button onClick={onClose} className='text-white'>
        <MdClose size='24' />
      </button>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='jobTitle' className='mb-2'>
            Job Title:
          </label>
          <input
            id='jobTitle'
            type='text'
            placeholder='Job Title'
            required
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            className='px-4 py-2 bg-gray-700 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='company' className='mb-2'>
            Company:
          </label>
          <input
            id='company'
            type='text'
            placeholder='Company'
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className='px-4 py-2 bg-gray-700 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='status' className='mb-2'>
            Status:
          </label>
          <input
            id='status'
            type='text'
            placeholder='Status'
            required
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className='px-4 py-2 bg-gray-700 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='datePicker' className='mb-2'>
            Date Submitted:
          </label>
          <DatePicker
            id='datePicker'
            selected={formData.date ? new Date(formData.date) : null}
            onChange={handleDateChange}
            dateFormat='yyyy-MM-dd'
            className='px-4 py-2 bg-gray-700 rounded w-full'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='location' className='mb-2'>
            Location:
          </label>
          <input
            id='location'
            type='text'
            placeholder='Location'
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className='px-4 py-2 bg-gray-700 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='contactName' className='mb-2'>
            Internal Contact Name | Title:
          </label>
          <input
            id='contactName'
            type='text'
            placeholder='Internal Contact Name | Title'
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className='px-4 py-2 bg-gray-700 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='contactEmail' className='mb-2'>
            Internal Contact Email:
          </label>
          <input
            id='contactEmail'
            type='text'
            placeholder='Internal Contact Email'
            value={formData.contactEmail}
            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
            className='px-4 py-2 bg-gray-700 rounded'
          />
        </div>
        <button type='submit' className='px-4 py-2 mt-4 bg-blue-500 hover:bg-blue-600 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sidebar;

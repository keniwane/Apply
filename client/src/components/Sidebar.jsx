import { MdClose } from 'react-icons/md';

const Sidebar = ({ isOpen, onClose, formData, setFormData, onFormSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    onClose();
  };

  return (
    <div
      style={{ width: '600px' }}
      className={`fixed top-0 right-0  h-full bg-gray-800 shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button onClick={onClose} className=''>
        <MdClose />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Job Title'
          required
          value={formData.jobTitle}
          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
        />
        <input
          type='text'
          placeholder='Company'
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <input
          type='text'
          placeholder='Status'
          required
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <input
          type='text'
          placeholder='Date Submitted'
          required={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type='text'
          placeholder='Location'
          required
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <input
          type='text'
          placeholder='Internal Contact Name | Title'
          value={formData.contactName}
          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
        />
        <input
          type='text'
          placeholder='Internal Contact Email'
          value={formData.contactEmail}
          onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Sidebar;

import { GoSearch } from 'react-icons/go';

const Searchbar = () => {
  return (
    <div style={{ width: '1210px' }} className='relative mb-4 text-2xl'>
      <GoSearch className='absolute left-1 top-3 transform text-gray-400' />
      <input type='text' placeholder='Search' className='w-full bg-transparent border-b pl-9 p-2 text-white' />
    </div>
  );
};

export default Searchbar;

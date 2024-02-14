const JobCard = ({ card }) => {
  return (
    <div className='bg-job-card-color hover:bg-gray-600 text-white max-w-xs md:max-w-md lg:w-96 h-36 md:h-48 lg:h-54 p-4 border-2 box-border rounded-md m-2 flex flex-col'>
      <div className='mb-2'>
        <div className='text-xs md:text-sm text-gray-300'>{card.date}</div>
      </div>
      <div className='mb-1 md:mb-2'>
        <div className='text-lg md:text-xl font-bold'>{card.company}</div>
      </div>
      <div className='text-base md:text-l mb-4'>{card.jobTitle}</div>
      <div className='flex-grow'></div>
      <div className='flex justify-between items-end'>
        <div className='text-xs md:text-sm'>{card.status}</div>
        <div className='text-xs md:text-sm'>{card.status}</div>
      </div>
    </div>
  );
};

export default JobCard;

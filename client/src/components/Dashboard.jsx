import Welcome from './Welcome.jsx';
import JobList from './JobList.jsx';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';
import Activity from './Activity.jsx';

const Dashboard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='px-16 p-8'>
        <Welcome />
      </div>
      <div className='flex flex-grow'>
        <div className='w-1/3 px-16 p-3 pt-0'>
          <Activity />
        </div>
        <div className='w-2/3 p-4 pt-0'>
          <Searchbar />
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

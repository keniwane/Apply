import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  return (
    <div>
      <nav>
        {/* Add your navigation links here */}
        <Link to='/'>Home</Link>
        {/* Add other links as needed */}
      </nav>

      {/* Define your routes here */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* Add other Route elements for different paths */}
      </Routes>
    </div>
  );
};

export default App;

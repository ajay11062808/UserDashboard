import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import UserDetails from './UserDetails';
import AccountCreation from './AccountCreation';

const Dashboard = () => {
  

  const handleUserAccountManagementClick = () => {
    Navigate('/account-creation');
  };
  return (
    <Router>
      <div className="flex flex-col items-center space-y-4 p-4">
        <Link onClick={handleUserAccountManagementClick} className="mb-4"><b>User Account Management</b></Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/user-details" className="p-1 bg-green-500 hover:underline">User Details</Link>
            </li>
            <li>
              <Link to="/account-creation" className="p-1 bg-green-500 hover:underline">Account Creation</Link>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/account-creation" element={<AccountCreation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;
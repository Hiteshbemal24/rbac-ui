import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Permissions from './pages/Permissions';

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

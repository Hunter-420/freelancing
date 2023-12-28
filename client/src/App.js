import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import SelectUser from './pages/SelectUser';
import Signing from './pages/Signing';
import FreelancerDashboard from './pages/FreelancerDashboard';

export default function App() {
  return (
    <Router>
      <div>
        {/* Your Header or Navigation Bar can go here if needed */}
        
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select-user" element={<SelectUser />} />
          <Route path="/signing" element={<Signing />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          
          {/* Add more routes for other pages as needed */}
          
          {/* Default route for unknown paths, can be a 404 page */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import toast from 'react-hot-toast';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="w-screen  bg-richblack-900 flex flex-col"  >

      {/* Navbar component with isLoggedIn state and setLoggedIn function */}
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      {/* Routing setup using react-router-dom */}
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        {/* Route for Login page, passing setLoggedIn function */}
        <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="signup" element={<Signup setLoggedIn={setLoggedIn}  />} />
        <Route path="dashboard" element={  <Dashboard/>
      } />
      </Routes>
    </div>
  );
}

export default App;

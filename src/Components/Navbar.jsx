import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Navbar({ isLoggedIn, setLoggedIn }) {
  const handleLogout = (event) => {
    event.preventDefault(); // Prevent default navigation behavior
    setLoggedIn(false);
    toast.success("Logged Out");
  };

  return (
    <div className="flex justify-between item-center w-11/12 max-w-[1160pw] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-700 text-richblack-100 py-1 px-3 mt-2 rounded-md border border-richblack-700">
            Login</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
                       <button className="bg-richblack-700 text-richblack-100 py-1 px-3 mt-2 rounded-md border border-richblack-700">
                       Dashboard</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
                        <button className="bg-richblack-700 text-richblack-100 py-1 px-3 mt-2 rounded-md border border-richblack-700">
                        Signup</button>
          </Link>
        )}
        {isLoggedIn && (
       <button className="bg-richblack-700 text-richblack-100e py-1 px-3 mt-2 
       rounded-md border border-richblack-700"  onClick={handleLogout}> 
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

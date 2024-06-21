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
    <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      <Link to="/">
        <img src={logo} alt="Logo" height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-5 text-richblack-100">
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

      <div className="flex gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          AHI Impact Award
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link to="/award-levels" className="text-gray-700 hover:text-primary">Award Levels</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary">How It Works</Link>
          <Link to="/impact-stories" className="text-gray-700 hover:text-primary">Impact Stories</Link>
          <Link to="/leaderboard" className="text-gray-700 hover:text-primary">Leaderboard</Link>
          <Link to="/events" className="text-gray-700 hover:text-primary">Events</Link>
          <Link to="/resources" className="text-gray-700 hover:text-primary">Resources</Link>
          <Link to="/get-involved" className="text-gray-700 hover:text-primary">Get Involved</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {role === 'participant' && <Link to="/participant" className="text-primary">Dashboard</Link>}
              {role === 'facilitator' && <Link to="/facilitator" className="text-primary">Portal</Link>}
              <button onClick={handleLogout} className="bg-primary text-white px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
              <Link to="/register" className="bg-primary text-white px-4 py-2 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
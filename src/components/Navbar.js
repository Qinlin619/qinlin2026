import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Qinlin Liu</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={isActive('/') && location.pathname === '/' ? 'active' : ''}>
          Work
        </Link>
        <Link to="/research" className={isActive('/research') ? 'active' : ''}>
          Research
        </Link>
        <Link to="/side" className={isActive('/side') ? 'active' : ''}>
          Side
        </Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
          About
        </Link>
        <Link to="/cv" className={isActive('/cv') ? 'active' : ''}>
          CV
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

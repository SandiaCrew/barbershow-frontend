// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="main-links main-links--navbar">
      {currentPath !== '/' && (
        <Link className="link-button link-button--navbar" to="/">
          <i className='bx bx-home'></i>
        </Link>
      )}
      {currentPath !== '/clients/new-client' && (
        <Link className="link-button link-button--navbar" to="/clients/new-client">
          <i className='bx bx-user-plus'></i>
        </Link>
      )}
      {currentPath !== '/clients' && (
        <Link className="link-button link-button--navbar" to="/clients">
          <i className='bx bx-group'></i>
        </Link>
      )}
      {currentPath !== '/scan-qr' && (
        <Link className="link-button link-button--navbar" to="/scan-qr">
          <i className='bx bx-qr-scan'></i>
        </Link>
      )}
      {currentPath !== '/settings' && (
        <Link className="link-button link-button--navbar" to="/settings">
          <i className='bx bx-cog'></i>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;

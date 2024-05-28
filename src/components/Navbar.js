// src/components/Navbar.js
import React from 'react';

const Navbar = () => (
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/scan-qr">Scan QR</a></li>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/clients">Clients</a></li>
    </ul>
  </nav>
);

export default Navbar;

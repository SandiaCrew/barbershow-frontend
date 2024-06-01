import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => (
  <nav className="main-links main-links--home">
    <Link className="link-button link-button--home" to="/scan-qr">Scan QR</Link>
    <Link className="link-button link-button--home" to="/clients/new-client">Add new client</Link>
    <Link className="link-button link-button--home" to="/clients">Clients</Link>
    {/* <Link className="link-button link-button--home" to="/settings">Settings</Link> */}
  </nav>
);

export default HomeNavbar;

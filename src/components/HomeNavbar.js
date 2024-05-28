// src/components/HomeNavbar.js
import React from 'react';

const HomeNavbar = () => (
  <nav className="main-links main-links--home">
    <a className="link-button link-button--home" href="/scan-qr">Scan QR</a>
    <a className="link-button link-button--home" href="/clients/new-client">Add new client</a>
    <a className="link-button link-button--home" href="/clients">Clients</a>
    <a className="link-button link-button--home" href="/settings">Settings</a>
  </nav>
);

export default HomeNavbar;

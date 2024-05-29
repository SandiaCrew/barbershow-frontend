import React from 'react';
import HomeNavbar from '../components/HomeNavbar';

const HomePage = () => (
  <div className="main">
    <div className="container container--home">
      <div className="logo">
        <img src="/assets/Braber Show Logo.png" alt="Logo" />
      </div>
      <HomeNavbar />
    </div>
  </div>
);

export default HomePage;

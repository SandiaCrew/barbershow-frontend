// src/pages/SettingsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import RewardForm from '../components/RewardForm';
import RewardsList from '../components/RewardsList';

const SettingsPage = () => (
  <div className="main">
    <div className="container container--page">
      <div className="container container-body">
        <h1 className="page-title">Settings</h1>
        <div className="rewards-settings">
          <h3>Loyalty Rewards</h3>
          <RewardForm />
          <RewardsList />
        </div>
      </div>
    </div>
  </div>
);

export default SettingsPage;

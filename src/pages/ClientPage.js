// src/pages/ClientPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ClientDetails from '../components/ClientDetails';
import ClientQR from '../components/ClientQR';
import VisitList from '../components/VisitList';

const ClientPage = () => (
  <div className="main">
    <div className="container container--page">
      <Navbar />
      <div className="container container-body">
        <h1 className="page-title">Client Name</h1>
        <ClientDetails />
        <ClientQR />
        <VisitList />
      </div>
    </div>
  </div>
);

export default ClientPage;

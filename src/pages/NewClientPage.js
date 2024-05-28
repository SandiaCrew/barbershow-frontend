// src/pages/NewClientPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ClientForm from '../components/ClientForm';

const NewClientPage = () => (
  <div className="main">
    <div className="container container--page">
      <Navbar />
      <div className="container container-body">
        <h1 className="page-title">Add a new client</h1>
        <ClientForm />
      </div>
    </div>
  </div>
);

export default NewClientPage;

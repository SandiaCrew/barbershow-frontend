import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ClientList from '../components/ClientList';

const ClientsPage = () => (
  <div className="main">
    <div className="container container--page">
      <Navbar />
      <div className="container container-body">
        <h1 className="page-title">Clients</h1>
        <SearchBar />
        <ClientList />
      </div>
    </div>
  </div>
);

export default ClientsPage;

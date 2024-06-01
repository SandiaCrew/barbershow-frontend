import React, { useState } from 'react'; // Removed useEffect
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ClientList from '../components/ClientList';
// Removed axios import as it's not used in this component

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="main">
      <div className="container container--page">
        <Navbar />
        <div className="container container-body">
          <h1 className="page-title">Clients</h1>
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
          <ClientList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;

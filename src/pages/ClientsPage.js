import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ClientList from '../components/ClientList';
import axios from 'axios';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/api/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      <div className="container container--page">
        <Navbar />
        <div className="container container-body">
          <h1 className="page-title">Clients</h1>
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
          <ClientList clients={filteredClients} />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;

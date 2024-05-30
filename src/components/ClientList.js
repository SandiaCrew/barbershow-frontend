import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/clients');
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
    <div>
      <input
        type="text"
        placeholder="Search clients..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="client-list">
        {filteredClients.length > 0 ? (
          filteredClients.map(client => (
            <li key={client._id} className="client-list__item">
              <Link to={`/clients/${client._id}`} className="client--link">{client.name}</Link>
            </li>
          ))
        ) : (
          <li>No clients found</li>
        )}
      </ul>
    </div>
  );
};

export default ClientList;

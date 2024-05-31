import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

const ClientList = ({ searchTerm = '' }) => {
  const [clients, setClients] = useState([]);

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

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
  );
};

export default ClientList;

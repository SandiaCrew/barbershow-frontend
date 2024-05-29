import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

const ClientList = () => {
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

  return (
    <ul className="client-list">
      {clients.map(client => (
        <li key={client._id} className="client-list__item">
          <Link to={`/clients/${client._id}`} className="client--link">{client.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;

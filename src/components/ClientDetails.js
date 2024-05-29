import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error('Error fetching client:', error);
      }
    };

    fetchClient();
  }, [id]);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="client-details">
      <p className="client-detail">Name: {client.name}</p>
      <p className="client-detail">Email: {client.email}</p>
      <p className="client-detail">Phone: {client.phone}</p>
      <div className="client-buttons">
        <button className="edit-client">Edit</button>
        <button className="delete-client">Delete</button>
      </div>
    </div>
  );
};

export default ClientDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ClientDetails from '../components/ClientDetails';
import ClientQR from '../components/ClientQR';
import VisitList from '../components/VisitList';
import axios from '../axios';

const ClientPage = () => {
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
    <div className="main">
      <div className="container container--page">
        <Navbar />
        <div className="container container-body">
          <h1 className="page-title">{client.name}</h1>
          <ClientQR clientId={client._id} clientPhone={client.phone} />
          <ClientDetails client={client} />
          <VisitList visits={client.visits} />
        </div>
      </div>
    </div>
  );
};

export default ClientPage;

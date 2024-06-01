import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../axios';
import VisitList from '../components/VisitList';
import ClientForm from '../components/ClientForm';
import '../main.css';

const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log("Client ID in useParams:", id);
    
    const fetchClient = async () => {
      if (!id) {
        console.error('Client ID is undefined in useEffect:', id);
        return;
      }

      console.log("Client ID in ClientDetails:", id);

      try {
        const response = await axios.get(`/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error('Error fetching client:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async (updatedClient) => {
    try {
      await axios.patch(`/clients/${id}`, updatedClient);
      setClient(updatedClient);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/clients/${id}`);
      navigate('/clients');
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  if (loading) {
    return <div>Loading client details...</div>;
  }

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <div className="client-details">
      {isEditing ? (
        <ClientForm
          initialValues={client}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div>
          <p className="client-detail">Name: {client.name}</p>
          <p className="client-detail">Email: {client.email}</p>
          <p className="client-detail">Phone: {client.phone}</p>
          <div className="client-buttons">
            <button className="edit-client" onClick={handleEdit}>Edit</button>
            <button className="delete-client" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
      <VisitList clientId={id} />
    </div>
  );
};

export default ClientDetails;

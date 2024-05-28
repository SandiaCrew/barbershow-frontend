// src/components/ClientDetails.js
import React from 'react';

const ClientDetails = () => (
  <div className="client-details">
    <p className="client-detail">Client Name</p>
    <p className="client-detail">Client Email</p>
    <p className="client-detail">Client Phone</p>
    <div className="client-buttons">
      <button className="edit-client">Edit</button>
      <button className="delete-client">Delete</button>
    </div>
  </div>
);

export default ClientDetails;

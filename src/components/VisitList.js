import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../main.css';

const VisitList = ({ clientId }) => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    console.log("Client ID in VisitList:", clientId);
    const fetchVisits = async () => {
      if (!clientId) {
        console.error('Client ID is undefined');
        return;
      }
      try {
        console.log("Fetching visits for Client ID:", clientId);
        const response = await axios.get(`/clients/${clientId}/visits`); // Adjusted URL
        setVisits(response.data);
      } catch (error) {
        console.error('Error fetching visits:', error);
      }
    };

    fetchVisits();
  }, [clientId]);

  return (
    <div className="visits">
      <h3>Visits</h3>
      <span className="total-visits">Total Visits<span>{visits.length}</span></span>
      {visits.length > 0 && (
        <span className="notice notice--active">There are rewards to be collected!</span>
      )}
      <h3>Times visited</h3>
      <ul className="visit-list">
        {visits.map((visit, index) => (
          <li key={index} className="visit-list-item">
            {new Date(visit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitList;

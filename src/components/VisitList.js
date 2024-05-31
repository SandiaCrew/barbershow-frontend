import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../main.css'; // Ensure main.css is imported

const VisitList = ({ clientId }) => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await axios.get(`/api/clients/${clientId}/visits`);
        setVisits(response.data);
      } catch (error) {
        console.error('Error fetching visits:', error);
      }
    };

    if (clientId) {
      fetchVisits();
    }
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

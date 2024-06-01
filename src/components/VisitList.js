import React, { useState, useEffect, useCallback } from 'react';
import axios from '../axios';
import '../main.css';

const VisitList = ({ clientId }) => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisits = useCallback(async () => {
    if (!clientId) {
      console.error('Client ID is undefined in fetchVisits:', clientId);
      return;
    }

    console.log("Client ID in VisitList:", clientId);

    try {
      console.log("Fetching visits for Client ID:", clientId);
      const response = await axios.get(`/clients/${clientId}/visits`);
      setVisits(response.data);
    } catch (error) {
      console.error('Error fetching visits:', error);
    } finally {
      setLoading(false);
    }
  }, [clientId]);

  useEffect(() => {
    if (clientId) {
      fetchVisits();
    }
  }, [clientId, fetchVisits]);

  if (!clientId) {
    return <div>Loading visits...</div>;
  }

  if (loading) {
    return <div>Loading visits...</div>;
  }

  return (
    <div className="visits">
      <h3>Visits</h3>
      <span className="total-visits">Total Visits<span>{visits.length}</span></span>
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

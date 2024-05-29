import React from 'react';

const VisitList = ({ visits }) => (
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

export default VisitList;

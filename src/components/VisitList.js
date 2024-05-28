// src/components/VisitList.js
import React from 'react';

const VisitList = () => (
  <div className="visits">
    <h3>Visits</h3>
    <span className="total-visits">Total Visits<span>3</span></span>
    <span className="notice notice--active">There are rewards to be collected!</span>
    <h3>Times visited</h3>
    <ul className="visit-list">
      <li className="visit-list-item">12.06.2024.</li>
      <li className="visit-list-item">11.03.2024.</li>
      <li className="visit-list-item">02.01.2024.</li>
    </ul>
  </div>
);

export default VisitList;

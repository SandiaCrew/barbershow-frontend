// src/components/RewardsList.js
import React from 'react';

const RewardsList = () => (
  <div className="active-rewards">
    <h3>Active Rewards</h3>
    <ul className="active-rewards-list">
      {/* Placeholder for dynamic reward items */}
      <li className="active-rewards-list-item">
        <span className="rewards-list-visits-number">5</span> - 
        <span className="rewards-list-reward">50% discount</span>
        <div className="rewards-list-buttons">
          <button className="edit"><i className='bx bx-edit-alt'></i></button>
          <button className="delete"><i className='bx bx-eraser'></i></button>
        </div>
      </li>
      <li className="active-rewards-list-item">
        <span className="rewards-list-visits-number">7</span> - 
        <span className="rewards-list-reward">70% discount</span>
        <div className="rewards-list-buttons">
          <button className="edit"><i className='bx bx-edit-alt'></i></button>
          <button className="delete"><i className='bx bx-eraser'></i></button>
        </div>
      </li>
      <li className="active-rewards-list-item">
        <span className="rewards-list-visits-number">10</span> - 
        <span className="rewards-list-reward">100% discount</span>
        <div className="rewards-list-buttons">
          <button className="edit"><i className='bx bx-edit-alt'></i></button>
          <button className="delete"><i className='bx bx-eraser'></i></button>
        </div>
      </li>
    </ul>
  </div>
);

export default RewardsList;

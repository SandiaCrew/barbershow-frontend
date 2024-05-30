import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../main.css'; // Ensure main.css is imported

const RewardsList = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await axios.get('/api/rewards');
        setRewards(response.data);
      } catch (error) {
        console.error('Error fetching rewards:', error);
      }
    };

    fetchRewards();
  }, []);

  return (
    <div className="active-rewards">
      <h3>Active Rewards</h3>
      <ul className="active-rewards-list">
        {rewards.map((reward) => (
          <li key={reward._id} className="active-rewards-list-item">
            <span className="rewards-list-visits-number">{reward.number}</span> - 
            <span className="rewards-list-reward">{reward.reward}</span>
            <div className="rewards-list-buttons">
              <button className="edit"><i className='bx bx-edit-alt'></i></button>
              <button className="delete"><i className='bx bx-eraser'></i></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsList;

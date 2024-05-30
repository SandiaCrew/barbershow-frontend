import React, { useState } from 'react';
import axios from 'axios';
import '../main.css'; // Ensure main.css is imported

const RewardForm = () => {
  const [number, setNumber] = useState('');
  const [reward, setReward] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/rewards', { number, reward });
      console.log('Reward added:', response.data);
      setNumber('');
      setReward('');
    } catch (error) {
      console.error('Error adding reward:', error);
    }
  };

  return (
    <form className="reward-form" onSubmit={handleSubmit}>
      <label htmlFor="number">Number of Visits</label>
      <input
        type="number"
        id="number"
        name="number"
        className="reward-form-input number-input"
        placeholder="Enter number of visits"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />

      <label htmlFor="reward">Reward</label>
      <input
        type="text"
        id="reward"
        name="reward"
        className="reward-form-input reward-input"
        placeholder="Enter reward"
        value={reward}
        onChange={(e) => setReward(e.target.value)}
        required
      />

      <button type="submit" className="form-button">Add Reward</button>
    </form>
  );
};

export default RewardForm;

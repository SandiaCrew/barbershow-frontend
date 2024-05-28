// src/components/RewardForm.js
import React from 'react';

const RewardForm = () => (
  <form className="reward-form">
    <label htmlFor="number">Number of Visits</label>
    <input type="number" id="number" name="number" className="reward-form-input number-input" placeholder="Enter number of visits" required />

    <label htmlFor="reward">Reward</label>
    <input type="text" id="reward" name="reward" className="reward-form-input reward-input" placeholder="Enter reward" required />
    
    <button type="submit" className="form-button">Add Reward</button>
  </form>
);

export default RewardForm;

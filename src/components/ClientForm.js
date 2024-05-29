import React, { useState } from 'react';
import axios from '../axios';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const ClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/clients', { name, email, phone });
      console.log('Client added:', response.data);
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <section id="form">
      <form className="client-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Enter client's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Enter client's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <PhoneInput
          country={'es'}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputClass="form-input"
          containerClass="intl-tel-input"
          required
        />

        <button type="submit" className="form-button">Add Client</button>
      </form>
    </section>
  );
};

export default ClientForm;

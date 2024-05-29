import React, { useState, useRef } from 'react';
import axios from '../axios';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { useNavigate } from 'react-router-dom';
import '../main.css'; // Ensure main.css is imported

const ClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const phoneInputRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: 'es',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/clients', {
        name,
        email,
        phone: phoneInputRef.current.value,
      });
      console.log('Client added:', response.data);
      navigate(`/clients/${response.data._id}`);
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
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          ref={phoneInputRef}
          required
        />

        <button type="submit" className="form-button">Add Client</button>
      </form>
    </section>
  );
};

export default ClientForm;

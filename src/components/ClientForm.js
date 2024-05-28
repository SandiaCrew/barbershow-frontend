// src/components/ClientForm.js
import React from 'react';

const ClientForm = () => (
  <section id="form">
    <form className="client-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" className="form-input" placeholder="Enter client's name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" className="form-input" placeholder="Enter client's email" required />

      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" className="form-input" placeholder="Enter client's phone number" required />

      <button type="submit" className="form-button">Add Client</button>
    </form>
  </section>
);

export default ClientForm;

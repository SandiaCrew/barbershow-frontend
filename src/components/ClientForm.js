import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../main.css';

const ClientForm = ({ initialValues, onSave, onCancel }) => {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    /* console.log('Initial values changed:', initialValues); */
    setFormValues(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    /* console.log('Input change:', e.target.name, e.target.value); // Debugging line */
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log('Submitting form with values:', formValues); */
    if (onSave) {
      onSave(formValues);
    } else {
      try {
        const response = await axios.post('/clients', formValues);
        /* console.log('Client added:', response.data); */
        setFormValues({ name: '', email: '', phone: '' }); // Reset form after successful submission
      } catch (error) {
        console.error('Error creating client:', error);
      }
    }
  };

  return (
    <form className="client-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="form-input"
        value={formValues.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-input"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="form-input"
        value={formValues.phone}
        onChange={handleChange}
        required
      />
      <div className="form-buttons">
        <button type="submit" className="form-button">Save</button>
        {onCancel && <button type="button" onClick={onCancel} className="form-button">Cancel</button>}
      </div>
    </form>
  );
};

export default ClientForm;

// RegisterComponent.js
import React, { useState } from 'react';
import './RegisterComponent.css';

function RegisterComponent() {
  const [formData, setFormData] = useState({
    name: '',
    aadharNo: '',
    panNo: '',
    assetDocument: null,
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'assetDocument') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadharNo">Aadhar No:</label>
          <input
            type="text"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="panNo">PAN No:</label>
          <input
            type="text"
            id="panNo"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="assetDocument">Asset Document:</label>
          <input
            type="file"
            id="assetDocument"
            name="assetDocument"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="register-btn">Submit</button>
      </form>
    </div>
  );
}

export default RegisterComponent;

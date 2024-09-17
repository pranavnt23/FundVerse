// LoginComponent.js
import React, { useState } from 'react';
import './LoginComponent.css';
import { Link } from 'react-router-dom'; // If you're using React Router

function LoginComponent() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("User ID:", userId);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Submit</button>
      </form>

      <p>Not Registered Yet? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default LoginComponent;

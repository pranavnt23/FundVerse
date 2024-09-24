import React from 'react';
import './App.css';
import logo from './images/FundLogo-removebg-preview.png';

function App() {
  return (
    <div className="App">
      <header className="fundverse-header">
        <div className="logo-section">
          <img src={logo} alt="Fundverse logo" />
          <span class="fundverse-title">FUNDVERSE</span>
        </div>
        <nav className="main-nav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#schemes">SCHEMES</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="auth-section">
          <a href="#login">LOGIN</a>
          <a href="#register">REGISTER</a>
        </div>
      </header>
      {/* Rest of your app content */}
    </div>
  );
}

export default App;

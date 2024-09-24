import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './images/FundLogo-removebg-preview.png';
import LoginComponent from './LoginComponent/LoginComponent'; // Import LoginComponent
import RegisterComponent from './RegisterComponent/RegisterComponent'; // Import RegisterComponent

// Example component placeholders for other routes
const Home = () => <div>Home Page Content</div>;
const About = () => <div>About Page Content</div>;
const Schemes = () => <div>Schemes Page Content</div>;
const FAQs = () => <div>FAQs Page Content</div>;
const Contact = () => <div>Contact Page Content</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="fundverse-header">
          <div className="logo-section">
            <img src={logo} alt="Fundverse logo" />
            <span className="fundverse-title">FUNDVERSE</span>
          </div>
          <nav className="main-nav">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/schemes">SCHEMES</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
          <div className="auth-section">
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
          </div>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginComponent />} /> {/* Renders LoginComponent */}
          <Route path="/register" element={<RegisterComponent />} /> {/* Renders RegisterComponent */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

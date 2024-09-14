import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Scheme data
  const schemes = [
    {
      title: "Scheme 1",
      description: "This is a short description about Scheme 1. It offers low interest rates for short-term investment plans."
    },
    {
      title: "Scheme 2",
      description: "Scheme 2 provides long-term savings opportunities with moderate risk and guaranteed returns."
    },
    {
      title: "Scheme 3",
      description: "Scheme 3 is ideal for high-return seekers with a focus on short-term, high-yield investments."
    }
  ];

  // State to track the current active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to the next slide
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % schemes.length);
  };

  // Move to the previous slide
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + schemes.length) % schemes.length);
  };

  // Effect to change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Chitfund Platform</h1>
        {/* Navbar */}
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#plans">Plans</a>
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </nav>
      </header>
      
      {/* Slideshow */}
      <div className="slideshow">
        <button className="prev-btn" onClick={goToPrevSlide}>❮</button>
        <div className="slide">
          <h2>{schemes[activeIndex].title}</h2>
          <p>{schemes[activeIndex].description}</p>
        </div>
        <button className="next-btn" onClick={goToNextSlide}>❯</button>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="welcome-page fullscreen">
      <h1>Welcome to Our Website</h1>
      <p>Thank you for visiting our website. We hope you find everything you need.</p>
      <div className="buttons">
        <button>Get Started</button>
        <button>
        <Link to="/register" className="register">Register</Link>
        </button>
        
        <button className="login">
        <Link to="/login" className="register">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;

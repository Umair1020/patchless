// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-animation">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
      <Link to="/" className="home-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

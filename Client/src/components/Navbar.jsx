import React from 'react';
import './Navbar.css'; // Import external CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">Classroom</div>
        <div className="navbar-links">
          <a href="/login" className="login-link">Login</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

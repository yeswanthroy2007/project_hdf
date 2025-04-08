import React from 'react';
import './Navbar.css';
import carIcon from './assets/cab.png';
import phoneIcon from './assets/phone-icon.png';

function Navbar() {
  const handleLogoClick = () => {
    window.location.reload(); // Reload the current page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo" onClick={handleLogoClick}>
          <img src={carIcon} alt="Car Icon" className="car-icon" />
        </div>
      </div>

      <div className="navbar-middle">
        <ul className="nav-links">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li className="contact">
            CONTACT US
            <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="auth-buttons">
          <span className="login">LOGIN</span>
          <span className="signup">SIGN UP</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

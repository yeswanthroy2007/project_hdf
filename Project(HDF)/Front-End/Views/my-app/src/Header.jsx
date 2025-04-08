import React from 'react';
import cabLogo from './../assets/icon.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={cabLogo} alt="CabU Logo" />
        <h1>CabU</h1>
      </div>
      <div className="signup">
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
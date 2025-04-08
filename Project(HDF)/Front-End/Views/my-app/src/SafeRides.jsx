import React from 'react';
import './SafeRides.css';
import instagramLogo from './assets/instagram-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import mediumLogo from './assets/medium-logo.png';

function SafeRides() {
  return (
    <div className="safe-rides">
      <h2>SAFE RIDES</h2>
      <div className="safe-rides-bottom">
        <p>
          Features About Contact<br />
          © 2025 CabU. All rights reserved.
        </p>
        <a href="#" className="instagram">
          <img src={instagramLogo} alt="Instagram Logo" className="social-logo" />
          Instagram
        </a>
        <a href="#" className="linkedin">
          <img src={linkedinLogo} alt="LinkedIn Logo" className="social-logo" />
          LinkedIn
        </a>
        <a href="#" className="medium">
          <img src={mediumLogo} alt="Medium Logo" className="social-logo" />
          Medium
        </a>
      </div>
    </div>
  );
}

export default SafeRides;
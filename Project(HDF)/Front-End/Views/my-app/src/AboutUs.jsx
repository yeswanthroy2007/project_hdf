import React from 'react';
import './AboutUs.css';
import aboutImage from './assets/taxi.png';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2 className="title">About us</h2>
        <p className="description">
          CabU is a student-focused cab-sharing platform designed to offer affordable, safe,
          and convenient travel.
        </p>
      </div>
      <div className="about-us-image">
        <img src={aboutImage} alt="About Us" className="image" />
      </div>
    </div>
  );
}

export default AboutUs;
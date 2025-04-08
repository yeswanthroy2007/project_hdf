import React from 'react';
import './WhyChooseUs.css';
import yellowcarwithperson from './assets/yellowcarwithperson.png'; // Corrected image name

function WhyChooseUs() {
  return (
    <section id="why-choose-us">
      <div className="why-choose-us-content">
        <h2>Join Shared Rides!</h2>
        <p>
          Discover and join existing rides created by other users! Share the journey, split the fare, and make your commute more social and affordable. Find rides going your way and connect with fellow travelers.
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={yellowcarwithperson} alt="Why Choose Us" />
      </div>
    </section>
  );
}

export default WhyChooseUs;
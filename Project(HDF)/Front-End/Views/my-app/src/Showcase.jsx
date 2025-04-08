import React from 'react';
import './Showcase.css';
import image from './assets/image.png';
import jointheride from './assets/jointheride.png';
import platforms from './assets/platforms.png';
import ridefaster from './assets/ridefaster.png';

function Showcase() {
  return (
    <section id="showcase">
      <div className="showcase-content">
        <img src={ridefaster} alt="Ride faster, safer, cheaper" className="title-image" />
        <p className="description">
          CabU connects commuters for seamless ride-sharing, verified partners,
          lower fares, and a smarter travel experience.
        </p>
        <img src={jointheride} alt="Join the ride!" className="join-ride-button" />
        <img src={platforms} alt="Partner Logos" className="partner-logos" />
      </div>
      <div className="showcase-image">
        <img src={image} alt="Car Illustration" className="car-image" />
      </div>
    </section>
  );
}

export default Showcase;
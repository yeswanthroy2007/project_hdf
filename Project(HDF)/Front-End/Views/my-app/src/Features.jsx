// src/Features.jsx

import React from 'react';
import './Features.css';
import featureImage from './assets/ts.png'; // Make sure this path is correct

function Features() {
  return (
    <div className="feature">
      <div className="feature-image">
        <img src={featureImage} alt="Features Icons" />
      </div>
      <div className="feature-content">
        <h2>Features</h2>
        <div className="underline"></div>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words.
        </p>
      </div>
    </div>
  );
}

export default Features;

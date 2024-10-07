import React from 'react';
import './Service.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-section">
      <h2>~ SERVICES ~</h2>
      <p>
        At Capturer, we offer a range of professional photography services tailored
        to meet your unique needs. With a commitment to excellence and creativity,
        we strive to exceed your expectations, delivering captivating visuals that
        tell your story with authenticity and passion.
      </p>
      <div className="services-container">
        <div className="service-card">
          <h3>Portrait Sessions</h3>
          <p>
            Our portrait sessions are designed  showcase your personality and style
            in stunning imagery.
          </p>
        </div>
        <div className="service-card">
          <h3>Maternity Sessions</h3>
          <p>
            Embrace the beauty and miracle of new life with our maternity and newborn
            photography sessions.
          </p>
        </div>
        <div className="service-card">
          <h3>Family Sessions</h3>
          <p>
            Cherish the bond of family with our custom-designed playful candid moments
            and portrait sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

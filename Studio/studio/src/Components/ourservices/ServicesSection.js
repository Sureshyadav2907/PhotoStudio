import React from 'react';
import './ServicesSection.css'; // Import your CSS styles
import TopNavigation from '../TopNavigation/TopNavigation';

const ServicesSection = () => {
  return (
    <div className="services-section1">
      <div style={{position:"relative",top:"105px",marginLeft:"20rem"}}> 
      <TopNavigation></TopNavigation>
      </div>
      <header className="services-header1">
        <h1>Explore Our Services</h1>
        <p>Dive into our services that make us stand out with exceptional quality and unparalleled excellence</p>
      </header>

      <div className="service-item">
        <img src="./images/image-1.jpg" alt="Wedding Photography" className="service-image" />
        <div className="service-description">
          <h2>Wedding Photography</h2>
          <p>
            We capture the magic of your wedding day with beautiful, high-quality photos. Our skilled photographers
            focus on every special moment, from loving glances to joyful celebrations. Using the best equipment,
            we ensure your memories are preserved perfectly.
          </p>
          <p>
            Trust us to create stunning images you'll cherish forever, making your big day unforgettable. Experience
            the difference with our personalized and exceptional service.
          </p>
        </div>
      </div>

      <div className="service-item">
        <div className="service-description">
          <h2>Pre-Wedding Photography</h2>
          <p>
            We offer exceptional pre-wedding photography that tells your unique love story. Whether it's a breathtaking
            destination shoot or a highly conceptual theme, our talented photographers capture your connection in stunning,
            creative images.
          </p>
          <p>
            Each photo highlights the special bond you share and the joy of your journey together. Experience high-quality
            photos that you’ll cherish forever, celebrating your love in unforgettable and artistic ways.
          </p>
        </div>
        <img src="./images/image-6.jpg" alt="Pre-Wedding Photography" className="service-image" />
      </div>
      <div className="service-item">
        <img src="./images/image-1.jpg" alt="Wedding Photography" className="service-image" />
        <div className="service-description">
          <h2>Engagement Photography</h2>
          <p>
            We capture the magic of your wedding day with beautiful, high-quality photos. Our skilled photographers
            focus on every special moment, from loving glances to joyful celebrations. Using the best equipment,
            we ensure your memories are preserved perfectly.
          </p>
          <p>
            Trust us to create stunning images you'll cherish forever, making your big day unforgettable. Experience
            the difference with our personalized and exceptional service.
          </p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-description">
          <h2>Haldi Photography</h2>
          <p>
            We offer exceptional pre-wedding photography that tells your unique love story. Whether it's a breathtaking
            destination shoot or a highly conceptual theme, our talented photographers capture your connection in stunning,
            creative images.
          </p>
          <p>
            Each photo highlights the special bond you share and the joy of your journey together. Experience high-quality
            photos that you’ll cherish forever, celebrating your love in unforgettable and artistic ways.
          </p>
        </div>
        <img src="./images/image-6.jpg" alt="Pre-Wedding Photography" className="service-image" />
      </div>
      <div className="service-item">
        <img src="./images/image-1.jpg" alt="Wedding Photography" className="service-image" />
        <div className="service-description">
          <h2>Mehandi Photography</h2>
          <p>
            We capture the magic of your wedding day with beautiful, high-quality photos. Our skilled photographers
            focus on every special moment, from loving glances to joyful celebrations. Using the best equipment,
            we ensure your memories are preserved perfectly.
          </p>
          <p>
            Trust us to create stunning images you'll cherish forever, making your big day unforgettable. Experience
            the difference with our personalized and exceptional service.
          </p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-description">
          <h2>Sangeet Photography</h2>
          <p>
            We offer exceptional pre-wedding photography that tells your unique love story. Whether it's a breathtaking
            destination shoot or a highly conceptual theme, our talented photographers capture your connection in stunning,
            creative images.
          </p>
          <p>
            Each photo highlights the special bond you share and the joy of your journey together. Experience high-quality
            photos that you’ll cherish forever, celebrating your love in unforgettable and artistic ways.
          </p>
        </div>
        <img src="./images/image-6.jpg" alt="Pre-Wedding Photography" className="service-image" />
      </div>
    </div>
  );
};

export default ServicesSection;

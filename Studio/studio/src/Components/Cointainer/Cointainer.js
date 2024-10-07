import React, { useEffect } from 'react'; 
import ScrollReveal from 'scrollreveal'; 
import './Cointainer.css';

function Cointainer() {
  const scrollRevealOption = {
    origin: 'bottom',
    distance: '50px', 
    duration: 1000, 
    delay: 100, 
    easing: 'ease', 
    scale: 1, 
    cleanup: true, 
    mobile: true, 
    reset: true, 
  };

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.about__container .section__header', {
      ...scrollRevealOption,
    });
    sr.reveal('.about__container .section__description', {
      ...scrollRevealOption,
      delay: 300,
      interval: 300,
    });
    sr.reveal('.about__container img', {
      ...scrollRevealOption,
      delay: 500,
    });
  }, []); 

  return (
    <div className="section__container about__container" id="about">
      <h2 className="section__header1">WE CAPTURE THE MOMENTS</h2>
      <p className="section__description">
        At Capturer, we specialize in freezing those fleeting moments in time
        that hold immense significance for you. With our passion for photography
        and keen eye for detail, we transform ordinary moments into
        extraordinary memories.
      </p>
      <p className="section__description">
        Whether it's a milestone event, a candid portrait, or the breathtaking
        beauty of nature, we strive to encapsulate the essence of every moment,
        ensuring that your cherished memories last a lifetime. Trust us to
        capture the magic of your life's journey, one frame at a time.
      </p>
      <img src="./images/logo-dark.png" alt="logo" />
    </div>
  );
}

export default Cointainer;

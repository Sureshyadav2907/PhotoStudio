import React from "react";
// import "./style.css"

const About = () => {
  return (
    <section className="about__container" id="about">
      <h2 className="section__header">ABOUT US</h2>
      <p className="section__description">
      At Capturer, we specialize in freezing those fleeting moments in time
        that hold immense significance for you. With our passion for photography
        and keen eye for detail, we transform ordinary moments into
        extraordinary memories.      </p>
        <p class="section__description">
        Whether it's a milestone event, a candid portrait, or the breathtaking
        beauty of nature, we strive to encapsulate the essence of every moment,
        ensuring that your cherished memories last a lifetime. Trust us to
        capture the magic of your life's journey, one frame at a time.
      </p>
      <div className="about__image">
        <img src="./images/logo-dark.png" alt="About us" />
      </div>
    </section>
  );
};

export default About;

import React, { useEffect } from 'react';
import Swiper, { Pagination } from 'swiper';  // Import Swiper and pagination
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/pagination';  // Import Swiper pagination styles
import './Feedback.css';  // Your custom CSS

function Feedback() {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Make the dots clickable
        type: 'radio',  // Use bullets for pagination
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      }
      
    });
  }, []);
  

  return (
    <section className="section__container client__container" id="client">
      <h2 className="section__header1">~ TESTIMONIALS ~</h2>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="client__card">
              <img src="./images/client-1.jpg" alt="client" />
              <p>
                Capturer exceeded all our expectations! Their attention to
                detail and ability to capture the essence of our special day was
                truly remarkable. Every time we look at our wedding photos,
                we're transported back to those magical moments. Thank you for
                preserving our memories so beautifully!
              </p>
              <h4>Sarah and Michael</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src="./images/client-2.jpg" alt="client" />
              <p>
                We couldn't be happier with our family portrait session with
                Capturer. They made us feel relaxed and comfortable throughout
                the entire shoot, resulting in natural and candid photos that
                perfectly reflect our family dynamic. These images will be
                cherished for years to come!
              </p>
              <h4>The Johnson Family</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src="./images/client-3.jpg" alt="client" />
              <p>
                Capturer's maternity and newborn sessions captured the most
                precious moments of our lives with such tenderness and care.
                From the anticipation of pregnancy to the joy of welcoming our
                little one, every photo tells a story that we'll cherish
                forever. Thank you for creating beautiful memories for our
                family!
              </p>
              <h4>Emily and David</h4>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>  {/* Pagination dots will appear here */}
      </div>
    </section>
  );
}

export default Feedback;

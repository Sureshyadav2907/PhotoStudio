import React from 'react'
import "./Gallery.css"
function Gallery() {
  return (
    <section className="section__container gallery__container">
    <h2 className="section__header1">~ GALLERY ~</h2>
    <div className="gallery__grid">
      <img src="./images/image-1.jpg" alt="gallery" />
      <img src="./images/image-2.jpg" alt="gallery" />
      <img src="./images/image-3.jpg" alt="gallery" />
      <img src="./images/image-4.jpg" alt="gallery" />
      <img src="./images/image-5.jpg" alt="gallery" />
      <img src="./images/image-6.jpg" alt="gallery" />
      <img src="./images/image-7.jpg" alt="gallery" />
      <img src="./images/image-8.jpg" alt="gallery" />
    </div>
    <div className="gallery__btn">
      <button className="btn">VIEW GALLERY</button>
    </div>
  </section>
  )
}

export default Gallery

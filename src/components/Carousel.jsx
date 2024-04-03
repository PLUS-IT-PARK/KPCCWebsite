import React from 'react'
import carousalImg0 from '../assets/img/carousalmob0.jpg'
import carousalImg1 from '../assets/img/carousalmob1.jsx.jpg'
import carousalImg2 from '../assets/img/carousalmob2.jsx.jpg'
import carousalImg3 from '../assets/img/carousalmob3.jpg'
function Carousel() {
  return (
    <>
        <section>
  {/* Carousel for Large Screens */}
  <div
    id="carouselLargeScreen"
    className="carousel slide d-none d-md-block"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://i.postimg.cc/qB3bwM5W/Section.jpg"
          className="d-block w-100 hero-carousel"
          alt="Image for large screens"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/rw12PNYX/Section-1.png"
          className="d-block w-100 hero-carousel"
          alt="Image for large screens"
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselLargeScreen"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselLargeScreen"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel for Small Screens */}
  <div
    id="carouselSmallScreen"
    className="carousel slide d-md-none"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={carousalImg0}
          className="d-block w-100 hero-carousel"
          alt="Image for small screens"
          style={{ height: 650 }}
        />
      </div>
      <div className="carousel-item">
        <img
          src={carousalImg1}
          className="d-block w-100 hero-carousel"
          alt="Image for small screens"
          style={{ height: 650 }}
        />
      </div>
      <div className="carousel-item">
        <img
          src={carousalImg2}
          className="d-block w-100 hero-carousel"
          alt="Image for small screens"
          style={{ height: 650 }}
        />
      </div>
      <div className="carousel-item">
        <img
          src={carousalImg3}
          className="d-block w-100 hero-carousel"
          alt="Image for small screens"
          style={{ height: 650 }}
        />
      </div>
      
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselSmallScreen"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselSmallScreen"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
    &nbsp;&nbsp;
  </div>
  </section>
    </>
  )
}

export default Carousel
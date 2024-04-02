import React from 'react'
import stmob1 from '../assets/img/stmob1.jpg'
import stmob2 from '../assets/img/stmob2.jpg'
import stmob3 from '../assets/img/stmob3.jpg'
import stmob4 from '../assets/img/stmob4.jpg'
import stmob5 from '../assets/img/stmob5.jpg'
import stmob6 from '../assets/img/stmob6.jpg'
import stmob7 from '../assets/img/stmob7.jpg'
import stmob8 from '../assets/img/stmob8.jpg'

function CarousalLabel() {
  return (
    <div>
      <>
  {/* leadership Carousel for Large Screens */}
  <div
    id="carouselLargeScreenLeadership"
    className="carousel slide d-none d-md-block"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={4}
        aria-label="Slide 5"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={5}
        aria-label="Slide 6"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={6}
        aria-label="Slide 7"
      />
      <button
        type="button"
        data-bs-target="#carouselLargeScreenLeadership"
        data-bs-slide-to={7}
        aria-label="Slide 8"
      />
    </div>
    {/*leadership Carousel Inner for Large Screens */}
    <div className="carousel-inner">
      {/* Shashi Tharoor */}
      <div className="carousel-item active position-relative">
        <img
          src="https://i.postimg.cc/cHYzvxyq/st1.jpg"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href="https://www.facebook.com/ShashiTharoor"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/shashitharoor/"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/@ShashiTharoorOfficial"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a href="" className="social-icon-link text-white fs-2 mx-2">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* K sudhakaran */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/j2M45m50/st2.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href="https://www.facebook.com/ksudhakaraninc"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/ksudhakaraninc/"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/INCKerala?s=20"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* vd satheesan */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/XJ3fg4B6/st3.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href="https://www.facebook.com/VDSatheeshanParavur/"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/vdsatheesanleaderofopposition/"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/vdsatheesan"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* deepa dasmunsi */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/hjpdbxqV/st4.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href=""
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* kodikunnil suresh */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/QxWFVvVQ/st5.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href="https://www.facebook.com/kodikunnilMP"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/kodikunnilMP"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* ramesh chennithala */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/t70ChC7h/st6.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href="https://www.facebook.com/rameshchennithala"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/chennithala"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* k c venugopal */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/Mp5f8VvN/st7.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href="https://www.facebook.com/kcvenugopalmp"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/@KCVenugopalOfficial"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/kcvenugopalmp"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* ak antony */}
      <div className="carousel-item">
        <img
          src="https://i.postimg.cc/Pxt65m4D/st8.png"
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute start-50 top-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <a
            href=""
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-2 mx-2"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </div>
    {/* Left and right controls */}
    <button 
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselLargeScreenLeadership"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button 
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselLargeScreenLeadership"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/*leadership Carousel for Small Screens */}
  <div
    id="carouselSmallScreenLeadership"
    className="carousel slide d-md-none"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={4}
        aria-label="Slide 5"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={5}
        aria-label="Slide 6"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={6}
        aria-label="Slide 7"
      />
      <button
        type="button"
        data-bs-target="#carouselSmallScreenLeadership"
        data-bs-slide-to={7}
        aria-label="Slide 8"
      />
    </div>

    {/* -----------------------Carousel Inner for Small Screens -------------------------------- */}
  
    <div className="carousel-inner">
      {/* Shashi Tharoor */}
      <div className="carousel-item active position-relative">
        <img
          src={stmob1}
          className="d-block w-100"
          alt="..."
          style={{ height: "100%" }}
        />
        <div
          className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
          style={{ zIndex: 1, marginTop: "-50px" }}
        >
          <a
            href="https://www.facebook.com/ShashiTharoor"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/shashitharoor/"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/@ShashiTharoorOfficial"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-youtube" />
          </a>
          <a href="" className="social-icon-link text-white fs-1 d-block mb-3">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* K sudhakaran */}
      <div className="carousel-item">
        <img
          src={stmob2}
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
          style={{ zIndex: 1, marginTop: "-50px" }}
        >
          <a
            href="https://www.facebook.com/ksudhakaraninc"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/ksudhakaraninc/"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/INCKerala?s=20"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-youtube" />
          </a>
          <a href="#" className="social-icon-link text-white fs-1 d-block mb-3">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* vd satheesan */}
      <div className="carousel-item">
  <img src={stmob3} className="d-block w-100" alt="..." />
  <div
    className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
    style={{ zIndex: 1, marginTop: "-50px" }}
  >
    <a
      href="https://www.facebook.com/VDSatheeshanParavur/"
      target="_blank"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-facebook-f" />
    </a>
    <a
      href="https://www.instagram.com/vdsatheesanleaderofopposition"
      target="_blank"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-instagram" />
    </a>
    <a
      href="#"
      target="_blank"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-youtube" />
    </a>
    <a
      href="https://twitter.com/vdsatheesan"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-twitter" />
    </a>
  </div>
</div>

      {/* deepa dasmunsi */}
      <div className="carousel-item">
        <img
          src={stmob4}
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
          style={{ zIndex: 1, marginTop: "-50px" }}
        >
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-youtube" />
          </a>
          <a href="#" className="social-icon-link text-white fs-1 d-block mb-3">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* kodikunnil suresh */} 
      <div className="carousel-item">
  <img src={stmob5} className="d-block w-100" alt="..." />
  <div
    className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
    style={{ zIndex: 1, marginTop: "-50px" }}
  >
    <a
      href="https://www.facebook.com/kodikunnilMP"
      target="_blank"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-facebook-f" />
    </a>
    <a
      href="#"
      target="_blank"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-instagram" />
    </a>
    <a
      href="#"
      target="_blank"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-youtube" />
    </a>
    <a
      href="https://twitter.com/kodikunnilMP"
      className="social-icon-link text-white fs-1 d-block mb-3"
    >
      <i className="fab fa-twitter" />
    </a>
  </div>
</div>
 
      {/* ramesh chennithala */}
      <div className="carousel-item">
        <img
          src={stmob6}
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
          style={{ zIndex: 1, marginTop: "-50px" }}
        >
          <a
            href="https://www.facebook.com/rameshchennithala"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/chennithala"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* k c venugopal */}
      <div className="carousel-item">
        <img
          src={stmob7}
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
          style={{ zIndex: 1, marginTop: "-50px" }}
        >
          <a
            href="https://www.facebook.com/kcvenugopalmp"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/@KCVenugopalOfficial"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/kcvenugopalmp"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
      {/* ak antony */}
      <div className="carousel-item">
        <img
          src={stmob8}
          className="d-block w-100"
          alt="..."
        />
        <div
          className="social-icons position-absolute top-50 start-0 translate-middle-y p-4"
          style={{ zIndex: 1, marginTop: "-50px" }}
        >
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            target="_blank"
            className="social-icon-link text-white fs-1 d-block mb-3"
          >
            <i className="fab fa-youtube" />
          </a>
          <a href="#" className="social-icon-link text-white fs-1 d-block mb-3">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </div>
    {/* Left and right controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselSmallScreenLeadership"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselSmallScreenLeadership"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</>

    </div>
  )
}

export default CarousalLabel
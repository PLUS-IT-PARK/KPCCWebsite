import React from 'react'

function Carousel() {
  return (
    <>
        <section>
{/* carousel */}
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner" >
      <div className="carousel-item active" data-bs-interval="4000">
        <img 
          src="https://i.postimg.cc/qB3bwM5W/Section.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item" data-bs-interval="4000">
        <img
          src="https://i.postimg.cc/rw12PNYX/Section-1.png"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    {/* <!-- Indicators --> */}
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
  </ol>

    {/* carousal controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
        </section>
    </>
  )
}

export default Carousel
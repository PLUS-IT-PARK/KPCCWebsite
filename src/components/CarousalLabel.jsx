import React from 'react'
function CarousalLabel() {
  return (
    <div>
    <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active position-relative" data-bs-interval="2000">
      <img src="./src/assets/img/st1.png" className="d-block w-100" alt="..." />
      <div style={{top:'15%'}}  className="carousel-caption d-block position-absolute">
        <h1  className='fw-bolder'>DR. SHASHI THAROOR</h1>
        <h2 className='fw-bold ' style={{color:'#FFCA10'}}>MEMBER OF PARLIMENT & CWC MEMBER</h2>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img  src="./src/assets/img/st1.png" className="d-block w-100" alt="..." />
      <div style={{top:'15%'}} className="carousel-caption d-block position-absolute">
        <h1 className='fw-bolder me-5'>DR. SHASHI THAROOR</h1>
        <h2 className='fw-bold' style={{color:'#FFCA10'}}>MEMBER OF PARLIMENT & CWC MEMBER</h2>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./src/assets/img/st1.png" className="d-block w-100 img-fluid" alt="..." />
      <div style={{top:'15%'}}  className="carousel-caption d-block position-absolute">
        <h1 className='fw-bolder'>DR. SHASHI THAROOR</h1>
        <h2 className='fw-bold' style={{color:'#FFCA10'}}>MEMBER OF PARLIMENT & CWC MEMBER</h2>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default CarousalLabel
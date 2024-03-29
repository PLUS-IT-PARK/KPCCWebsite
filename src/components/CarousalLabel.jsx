import React from 'react'
function CarousalLabel() {
  return (
    <div>
    <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
    {/* slide1 */}
    <div className="carousel-item active position-relative" data-bs-interval="3000">
      <img src="./src/assets/img/st1.jpg" className="d-block w-100" alt="..." />  
    </div>
    {/* slide 2 */}
    <div className="carousel-item" data-bs-interval="3000">
      <img  src="./src/assets/img/st2.png" className="d-block w-100" alt="..." />
      
    </div>
    {/* slide3 */}
    <div className="carousel-item" data-bs-interval="3000">
      <img src="./src/assets/img/st3.png" className="d-block w-100 img-fluid" alt="..." />
     
    </div>
{/* slide4 */}
    <div className="carousel-item" data-bs-interval="3000">
      <img src="./src/assets/img/st4.png" className="d-block w-100 img-fluid" alt="..." />
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
    className="carousel-control-next "
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
import React from 'react'
function CarousalLabel() {
  return (
    <div>
    <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
    {/* slide1 */}
    <div className="carousel-item active position-relative" data-bs-interval="2000">
      <img src="https://i.postimg.cc/cHYzvxyq/st1.jpg" className="d-block w-100" alt="https://i.postimg.cc/cHYzvxyq/st1.jpg" />  
    </div>
    {/* slide 2 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img  src="https://i.postimg.cc/j2M45m50/st2.png" className="d-block w-100" alt="..." />
      
    </div>
    {/* slide3 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/XJ3fg4B6/st3.png" className="d-block w-100 img-fluid" alt="..." />
     
    </div>
{/* slide4 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/hjpdbxqV/st4.png" className="d-block w-100 img-fluid" alt="..." />
    </div>

    {/* slide5 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/QxWFVvVQ/st5.png" className="d-block w-100 img-fluid" alt="..." />
    </div>

    {/* slide6 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/t70ChC7h/st6.png" className="d-block w-100 img-fluid" alt="..." />
    </div>

    {/* slide7 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/Mp5f8VvN/st7.png" className="d-block w-100 img-fluid" alt="..." />
    </div>

    {/* slide8 */}
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/Pxt65m4D/st8.png" className="d-block w-100 img-fluid" alt="..." />
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
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default CarousalLabel
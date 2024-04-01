import React from 'react'
import { Link } from 'react-router-dom'

function Channel() {
  return (
    <>
    <section style={{backgroundColor:'#207BC8'}} className='w-100 py-5'>
    <div className="container">
  <div className="row d-flex align-items-center justify-content-center">
    <div className=" col-lg-3 col-md-6 d-flex align-items-center justify-content-center mb-3">
    <Link target='_blank' to='https://inc.in' style={{textDecoration:'none'}}>
        <div className="card p-3" style={{ width: "18rem", borderRadius: "25px" }}>
          <img style={{height:'150px'}} src="https://i.postimg.cc/mrSwJPsg/aicc.png" className="card-img-top w-100 img-fluid image1" alt="..." />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "navy" }}
            >
              AICC NEWS
            </h5>
          </div>
        </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center mb-3">
        <Link target='_blank' to='https://www.kpcc.org.in' style={{textDecoration:'none'}}>
          <div className="card p-3" style={{ width: "18rem", borderRadius: 25 }}>
            <img  style={{height:'150px'}} src="https://i.postimg.cc/8PWnwPjj/kpcc.png" className="card-img-top w-100 img-fluid image1" alt="..." />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "center", color: "navy" }}
              >
                KPCC NEWS
              </h5>
            </div>
          </div>
        </Link>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center mb-3">
      <Link target='_blank' to='https://bharatjodonyayyatra.com' style={{textDecoration:'none'}}>
        <div className="card p-3" style={{ width: "18rem", borderRadius: 25 }}>
          <img style={{height:'130px'}}
            src="https://i.postimg.cc/httTv2Wc/bharathjodo.png"
            className="card-img-top w-100 img-fluid image1"
            alt="..."/>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "navy" }} >
              BHARAT JODO NYAY YATRA
            </h5>
          </div>
        </div>
      </Link>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center mb-3 ">
      <Link target='_blank'  style={{textDecoration:'none'}}>
        <div className="card p-3" style={{ width: "18rem", borderRadius: 25 }}>
          <img style={{height:'150px'}}
            src="https://i.postimg.cc/GhcsgXpG/volunteer.png"
            className="card-img-top img-fluid image1 w-100" 
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "navy" }}
            >
              VOLUNTEER WITH US
            </h5>
          </div>
        </div>
      </Link>
    </div>
  </div>

  <div className="row d-flex align-items-center justify-content-center">
    <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center  mb-3">
      <Link target='_blank' to="https://veekshanam.com" style={{textDecoration:'none'}}>
        <div className="card p-3" style={{ width: "18rem", borderRadius: "25px" }}>
          <img style={{height:'150px'}}
            src="https://i.postimg.cc/zGQbB5FF/veekshanam.png"
            className="card-img-top w-100 img-fluid image1"
            alt="..."/>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "navy" }}
            >
              VEEKSHANAM
            </h5>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center justify-content-center">
      <Link target='_blank' to="https://jaihindtv.in" style={{textDecoration:'none'}}>
        <div className="card p-3 " style={{ width: "18rem", borderRadius: 25 }}>
          <img style={{height:'150px'}}  src="https://i.postimg.cc/7hXbyyL7/jaihind.png" 
          className="card-img-top w-100 img-fluid image1" alt="..." />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "navy" }}
            >
              JAIHIND
            </h5>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center justify-content-center">
    <Link to={'/political-pdf'} target='_blank' style={{textDecoration:'none'}}>
        <div className="card p-3" style={{ width: "18rem", borderRadius: 25 }}>
          <img style={{height:'130px'}} src="https://i.postimg.cc/gjcksBK0/politicalaffairs.png" className="card-img-top w-100 img-fluid image1" alt="..." />
          <div className="card-body">
            <h5
              className="card-title "
              style={{ textAlign: "center", color: "navy" }}
            >POLITICAL AFFAIRS COMMITTEE
            </h5>
          </div>
        </div>
    </Link>
    </div>
    <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center justify-content-center">
      <Link target='_blank' to="https://manifesto.inc.in/en" style={{textDecoration:'none'}}>
        <div className="card p-3" style={{ width: "18rem", borderRadius: 25 }}>
          <img style={{height:'150px'}} src="https://i.postimg.cc/MTKhFkgg/manifesto.png" className="card-img-top image1 w-100 img-fluid" alt="..." />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "center", color: "navy" }}
            >
              MANIFESTO
            </h5>
          </div>
        </div>
      </Link>
    </div>
    &nbsp;
  </div>
  &nbsp;&nbsp;
</div>

    </section>
    </>
  )
}

export default Channel
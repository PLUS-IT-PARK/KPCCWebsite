import React from 'react'

function ChiefMinister() {
  return (
    <>
        <section style={{backgroundColor:' #207BC8'}} className="cheif-minister-container py-4">
    <div className="container">
      <div className="cheif-minister-head">
        <h1 className="text-start text-white fw-bold">
          CHIEF MINISTERS
        </h1>
      </div>
      <div className="cheif-minister-body py-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="card-content-container p-3 "
                style={{ height: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/gk8mRppK/cheif-minister-1.jpg"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 style={{color:'#004167'}} className="card-title fw-bolder">R SHANKAR</h4>
                      {/* <p className="card-text text-black fw-medium">Chairman, KPCC</p> */}
                      <h6 className='text-primary fw-semibold'>1962-64</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
              <div
                className="card-content-container p-3 "
                style={{ height: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/Qt10mfdv/cheif-minister-2.png"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 style={{color:'#004167'}} className="card-title fw-bolder">K KARUNAKARAN</h4>
                      {/* <p className="card-text text-black fw-medium">Chairman, KPCC</p> */}
                      <p className='text-primary fw-semibold'>1977-77 | 1982-87 | 1991-95</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="card-content-container p-3 "
                style={{ height: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/RFLwqyFC/cheif-minister-3.jpg"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 style={{color:'#004167'}} className="card-title fw-bolder">A K ANTONY</h4>
                      {/* <p className="card-text text-black fw-medium">Chairman, KPCC</p> */}
                      <p className='text-primary fw-semibold'>1977-78 | 1995-96 | 2001-2004</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="card-content-container p-3 "
                style={{ height: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/YSsCRxsN/Frame-40.jpg"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 style={{color:'#004167'}} className="card-title fw-bolder">OOMMEN CHANDY</h4>
                      {/* <p className="card-text text-black fw-medium">Chairman, KPCC</p> */}
                      <p className='text-primary fw-semibold'>2004-2006 | 2011-2016</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other cards */}
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default ChiefMinister
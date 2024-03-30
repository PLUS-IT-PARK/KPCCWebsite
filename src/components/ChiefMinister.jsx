import React from 'react'

function ChiefMinister() {
  return (
    <>
        <section style={{backgroundColor:' #207BC8'}} className="cheif-minister-container ">
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
                      <h5 className="card-title">R SHANKAR</h5>
                      <p className="card-text">Chairman, KPCC</p>
                      <p className='text-primary'>1962-64</p>
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
                      <h5 className="card-title text-black">K KARUNAKARAN</h5>
                      <p className="card-text">Chairman, KPCC</p>
                      <p className='text-primary'>1977-77 | 1982-87 | 1991-95</p>
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
                      <h5 className="card-title text-black">A K ANTONY</h5>
                      <p className="card-text">Chairman, KPCC</p>
                      <p className='text-primary'>1977-78 | 1995-96 | 2001-2004</p>
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
                      <h5 className="card-title text-black">OOMMEN CHANDY</h5>
                      <p className="card-text">Chairman, KPCC</p>
                      <p className='text-primary'>2004-2006 | 2011-2016</p>
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
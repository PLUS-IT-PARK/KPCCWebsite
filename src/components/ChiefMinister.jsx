import React from 'react'

function ChiefMinister() {
  return (
    <>
        <section style={{backgroundColor:' #207BC8'}} className="cheif-minister-container py-5">
    <div className="container">
      <div className="cheif-minister-head">
        <h1 className="text-start text-white font-weight-bold">
          CHEIF MINISTERS
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
                      src="./src/assets/img/cheif_minister_1.jpg"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dr. P. Ramalingam</h5>
                      <p className="card-text">Chairman, KPCC</p>
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
                      src="./src/assets/img/cheif_minister_2.png"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dr. P. Ramalingam</h5>
                      <p className="card-text">Chairman, KPCC</p>
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
                      src="./src/assets/img/cheif_minister_3.jpg"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dr. P. Ramalingam</h5>
                      <p className="card-text">Chairman, KPCC</p>
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
                      src="./src/assets/img/Frame 40.jpg"
                      className="card-img-top w-100 h-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dr. P. Ramalingam</h5>
                      <p className="card-text">Chairman, KPCC</p>
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
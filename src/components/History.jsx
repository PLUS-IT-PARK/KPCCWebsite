import React from 'react'

function History() {
  return (
    <>
<section
    className="history-container"
    style={{
      backgroundImage: 'url("./src/assets/img/how to use content addition 1.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden"
    }}
  >
    <div className="history-contents py-5 container">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12">
          <img
            src="./src/assets/img/Mahatma_gandhi.png"
            alt=""
            className="img-fluid"
          />
          <div className="history-number text-center" style={{ color: "navy" }}>
            <h1 style={{fontSize:'100px'}}>100+</h1>
          </div>
          <div className="kpcc-head  text-start px-3 px-md-5 mx-3 mx-md-5 mt-3 mt-md-0 justify-content-start align-items-center">
            <h1 className="history-title " style={{ color: "navy" }}>
              TURNING YEARS INTO DEMOCRACY
            </h1>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="kpcc-head text-black text-start px-3 px-md-5 mt-3 mt-md-0 justify-content-start">
            <h1
              className="history-title text-black text-start font-weight-bold"
              style={{ fontWeight: "bolder", color: "navy" }}
            >
              Kerala Pradesh Congress Committee
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mt-md-0 justify-content-start align-items-center mx-3 mx-md-0 mx-lg-0 mx-xl-0 mx-xxl-0 py-5">
            <div className="col ">
              <h2
                className="text-start font-weight-bold"
                style={{ color: "navy", fontWeight: "bolder" }}
              >
                History
              </h2>
              <p>
                The Role of Congress and the Development of the National
                Movement - Since ancient times, the British Supremacy's ruthless
                exploitation and dominance sparked countless rebellions; by the
                turn of the 19th century, the enraged multitudes were attempting
                to emancipate ..
              </p>
              <a
                href="#"
                className="btn btn-outline-0 btn-lg mt-3"
                style={{ color: "navy" }}
              >
                Learn More <i className="fas fa-arrow-right ms-2" />
              </a>
            </div>
            <div className="col ">
              <h2
                className="text-start font-weight-bold"
                style={{ color: "navy", fontWeight: "bolder" }}
              >
                Milestones
              </h2>
              <p>
                Historiography an account of KPCC - The national freedom
                movement significantly influenced the political history of
                Kerala. Here, an echo of the Salt Satyagraha was heard. The
                entrance of lower castes into the Vaikom temple via a Satyagraha
                was acknowledged as a direct challenge to the rulers'..
              </p>
              <a
                href="#"
                className="btn btn-outline-0 btn-lg mt-3"
                style={{ color: "navy" }}
              >
                Learn More <i className="fas fa-arrow-right ms-2" />
              </a>
            </div>
            <div className="col ">
              <h2
                className="text-start font-weight-bold"
                style={{ color: "navy", fontWeight: "bolder" }}
              >
                Developments
              </h2>
              <p>
                Developments in politics subsequent to the establishment of the
                state and Congress Party - The inaugural general election for
                the State Legislature of Kerala took place in February 1957. A
                handful of independent candidates and the Communist Party of
                India secured 65 of the 126 seats in the legislature. The
                Communist Ministry was ..
              </p>
              <a
                href="#"
                className="btn btn-outline-0 btn-lg mt-3"
                style={{ color: "navy" }}
              >
                Learn More <i className="fas fa-arrow-right ms-2" />
              </a>
            </div>
            <div className="col ">
              <h2
                className="text-start font-weight-bold"
                style={{ color: "navy", fontWeight: "bolder" }}
              >
                Activities
              </h2>
              <p>
                Travancore and Cochin's integration and the establishment of
                Kerala state - During the early British colonial period, the
                princely states of Travancore and Cochin engaged in internal
                conflicts and demonstrations to advocate for the rights of their
                respective populations. The initial agitations were directed
                toward the implementation of effective governance. Subsequently
              </p>
              <a
                href="#"
                className="btn btn-outline-0 btn-lg mt-3"
                style={{ color: "navy" }}
              >
                Learn More <i className="fas fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default History
import React from 'react'
import { Link } from 'react-router-dom'
function History() {
  return (
    <>
      <>
        {/* history */}
        <section
          className="history-container"
          style={{
            backgroundImage: 'url("https://i.postimg.cc/W3h2CJkG/how-to-use-content-addition-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden"
          }}
        >
          <div className="history-contents py-5 container">
            <div className="row justify-content-start">
              <div className="col-md-4 col-sm-12 text-start">
                <img
                  src="https://i.postimg.cc/9QLH2QVJ/Mahatma-gandhi1.png"
                  alt=""
                  className="img-fluid w-100"
                />
                <div
                  className="history-number text-start"
                  style={{ color: "#004167" }}
                >
                  100+
                </div>
                <div className="kpcc-head text-start  justify-content-start align-items-center">
                  <h1 className="history-title" style={{ color: "#004167" }}>
                    TURNING YEARS INTO DEMOCRACY
                  </h1>
                </div>
              </div>
              <div className="col-md-8 col-sm-12  mt-mb-3">
                <div className="kpcc-head-main text-start px-3 mt-3 mt-md-0 justify-content-start">
                  <h1 className="history-title text-start fw-bolder text-uppercase" style={{ fontWeight: "bolder", color: "#004167" }} >
                    Kerala Pradesh <br /> 
                    <span className="text-warning ">Congress</span>{" "}
                    Committee
                  </h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 mt-md-0 justify-content-start align-items-center mx-3 mx-md-0 mx-lg-0 mx-xl-0 mx-xxl-0 py-5 ">
                  <div className="col">
                    <h2
                      className="text-start font-weight-bold"
                      style={{ color: "#004167", fontWeight: "bolder" }}
                    >
                      History
                    </h2>
                    <p className='fw-medium' style={{ textAlign: 'justify' }}>
                      The Role of Congress and the Development of the National
                      Movement - Since ancient times, the British Supremacy's ruthless
                      exploitation and dominance sparked countless rebellions; by the
                      turn of the 19th century, the enraged multitudes were attempting
                      to emancipate ..
                    </p>
                    <Link to="/about"
                      className="btn btn-outline-0 btn-lg mt-3"
                      style={{ color: "#004167",textDecoration:'none' }}>
                      Learn More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                  <div className="col">
                    <h2
                      className="text-start font-weight-bold"
                      style={{ color: "#004167", fontWeight: "bolder" }}
                    >
                      Milestones
                    </h2>
                    <p className='fw-medium' style={{ textAlign: 'justify' }}>
                      Historiography an account of KPCC - The national freedom
                      movement significantly influenced the political history of
                      Kerala. Here, an echo of the Salt Satyagraha was heard. The
                      entrance of lower castes into the Vaikom temple via a Satyagraha
                      was acknowledged as a direct challenge to the rulers'..
                    </p>
                    <Link to="/about"
                      className="btn btn-outline-0 btn-lg mt-3"
                      style={{ color: "#004167",textDecoration:'none' }}
                    >
                      Learn More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                  <div className="col pt-md-5">
                    <h2
                      className="text-start font-weight-bold"
                      style={{ color: "#004167", fontWeight: "bolder" }}
                    >
                      Developments
                    </h2>
                    <p className='fw-medium' style={{ textAlign: 'justify' }}>
                      Developments in politics subsequent to the establishment of the
                      state and Congress Party - The inaugural general election for
                      the State Legislature of Kerala took place in February 1957. A
                      handful of independent candidates and the Communist Party of
                      India secured 65 of the 126 seats in the legislature. The
                      Communist Ministry was ..
                    </p>
                    <Link to="/about"
                      className="btn btn-outline-0 btn-lg mt-3"
                      style={{ color: "#004167",textDecoration:'none' }}>
                      Learn More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                  <div className="col pt-md-5">
                    <h2
                      className="text-start font-weight-bold"
                      style={{ color: "#004167", fontWeight: "bolder" }}
                    >
                      Activities
                    </h2>
                    <p className='fw-medium' style={{ textAlign: 'justify' }}>
                      Travancore and Cochin's integration and the establishment of
                      Kerala state - During the early British colonial period, the
                      princely states of Travancore and Cochin engaged in internal
                      conflicts and demonstrations to advocate for the rights of their
                      respective populations. The initial agitations were directed
                      toward the implementation of effective governance. Subsequently
                    </p>
                    <Link to="/about"
                      className="btn btn-outline-0 btn-lg mt-3"
                      style={{ color: "#004167",textDecoration:'none' }}>
                      Learn More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                  <div className="col pt-md-5 ">
                    <h2
                      className="text-start font-weight-bold"
                      style={{ color: "#004167", fontWeight: "bolder" }}
                    >
                      Structure
                    </h2>
                    <p className='fw-medium' style={{ textAlign: 'justify' }}>
                      Formation of Kerala State through the union of Travancore and
                      Cochin - The state ministry of the government of India, under
                      the leadership of Sardar Vallabhai Patel, instituted a policy
                      for the merger and integration of states, which laid the
                      foundation for the integration of Travancore and Cochin. The
                      consequence of this was the establishment of the State of
                      Travancore-Cochin ..
                    </p>
                    <Link to="/about"
                      className="btn btn-outline-0 btn-lg mt-3"
                      style={{ color: "#004167",textDecoration:'none' }}>
                      Learn More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </section>
      </>

    </>
  )
}

export default History
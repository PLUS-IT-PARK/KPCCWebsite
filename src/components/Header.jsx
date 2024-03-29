import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
         {/* navbar */}
  <nav
    className="navbar navbar-expand-lg navbar-light"
    style={{ backgroundColor: "#ffffff" }}
  >
    <div className="container-fluid w-100 px-lg-3">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <img src="https://i.postimg.cc/t7Q6F5JM/logo.png" alt="Your Logo" />
      </a>
      {/* Navbar Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar Content */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Nav Items */}
          <li className="nav-item active ms-3 mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">
            <Link to={'/'} className="nav-link fw-bold text-black" href="#">
              HOME
            </Link>
          </li>
          <li className="nav-item active ms-3 mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0">
            <Link to={'/about'} className="nav-link fw-bold text-black" href="#">
              KPCC
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link style={{textDecoration:'none'}} className="nav-link fw-bold text-black" href="#">
              HALL OF FAME            </Link>
          </li>
          <li  className="nav-item ms-3">
            <Link className="nav-link fw-bold text-black" href="#">
              OFFICE BEARERS
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link style={{textDecoration:'none'}} className="nav-link fw-bold text-black" href="#">
              FRONTAL ORGANIZATIONS
            </Link>
          </li>
          <li className="nav-item ms-3">
  <a style={{textDecoration:'none'}} className="nav-link fw-bold text-black" href="./src/assets/documents/format.pdf" target="_blank">
    FORMAT C-7
  </a>
</li>
        </ul>
        {/* Contribute and Join as Volunteer Buttons */}
        <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0 mx-5">
          <button
            className="btn text-white me-3 mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0 border-0 text-uppercase"
            style={{ backgroundColor: "red" }}
          >
            Contribute
          </button>
          <button
            className="btn text-white mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0 border-0 text-uppercase"
            style={{ backgroundColor: "red" }}
          >
            Join as Volunteer
          </button>
        </div>
        {/* Social Media Icons */}
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Link to="https://www.facebook.com/INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="./src/assets/img/facebook.png" alt="" /></Link>
          <Link to="https://www.instagram.com/inckerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'100px'}} src="./src/assets/img/insta.png" alt="" /></Link>
          <Link to="https://www.youtube.com/@INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="./src/assets/img/youtube.png" alt="" /></Link>
          <Link to="https://twitter.com/INCKerala?s=20" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="./src/assets/img/twitter.png" alt="" /></Link>
        </div>
      </div>
    </div>
  </nav>
    </header>
  )
}

export default Header

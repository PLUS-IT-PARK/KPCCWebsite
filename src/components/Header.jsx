import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
   {/* navbar */}
  <nav
    className="navbar navbar-expand-lg navbar-light"
    style={{ backgroundColor: "#ffffff" }}>
    <div className="container-fluid w-100 px-lg-3 ">
      {/* Logo */}
      <Link style={{textDecoration:'none'}} className="navbar-brand" to={'/'}>
        <img src="https://i.postimg.cc/t7Q6F5JM/logo.png" alt="Your Logo" />
      </Link>
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
            <Link style={{textDecoration:'none'}} to={'/about'} className="nav-link fw-bold text-black" >
              KPCC
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link to={'/hall-of-fame'} style={{textDecoration:'none'}} className="nav-link fw-bold text-black" >
              HALL OF FAME 
            </Link>
          </li>
          <li  className="nav-item ms-3">
           
            <Link   to={'/office-bearers'} className="nav-link fw-bold text-black" >
              OFFICE BEARERS
            </Link>
          </li>
          <li className="nav-item ms-3">
            
            <Link to={'/frontal-organizations'}  style={{textDecoration:'none'}} className="nav-link fw-bold text-black" >
              FRONTAL ORGANIZATIONS
            </Link>
          </li>
          <li className="nav-item ms-3">
  <a style={{textDecoration:'none'}} className="nav-link fw-bold text-black" href="/format-c-7" target="_blank">
    FORMAT C-7
  </a>
</li>
        </ul>
        {/* Contribute and Join as Volunteer Buttons */}
        <div className="d-flex align-items-center justify-content-start ms-auto mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0 mx-5">
          <Link to={'/donate'}
            className="btn text-white me-3 mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0 border-0 text-uppercase"
            style={{ backgroundColor: "red",textDecoration:'none' }}>
            Contribute
          </Link>
          <Link to="https://volunteer-app.dmckpcc.in/login" target='_blank'
            className="btn text-white mt-3 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-0 mt-xxs-0 mt-xxxs-0 mt-xxxxs-0 border-0 text-uppercase"
            style={{ backgroundColor: "red",textDecoration:'none' }}>
            Join as Volunteer
          </Link>
        </div>
        {/* Social Media Icons */}
        <div className="d-flex align-items-center justify-content-start gap-3 ">
          <Link to="https://www.facebook.com/INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/85mnDygM/facebook.png" alt="" /></Link>
          <Link to="https://www.instagram.com/inckerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'100px'}} src="https://i.postimg.cc/HnWvLQTK/insta.png" alt="" /></Link>
          <Link to="https://www.youtube.com/@INCKerala" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/8zfKskV1/youtube.png" alt="" /></Link>
          <Link to="https://twitter.com/INCKerala?s=20" target='_blank' style={{textDecoration:'none'}}><img style={{height:'30px'}} src="https://i.postimg.cc/1tmr0sbV/twitter.png" alt="" /></Link>
        </div>
      </div>
    </div>
  </nav>
    </header>
  )
}

export default Header

import React from 'react'
import './banner.css'
import bannerImg from '../assets/img/bannerweb.jpg'
import bannerMobImg from '../assets/img/bannerMob.jpg'

function Banner() {
  return (
    <section className='w-100'>
      {/* for large screens */}
      <div className='banner-container d-none d-md-block'>
      <img className="w-100 img-fluid" style={{height:'400px',objectFit:'cover',objectPosition:'top'}} src={bannerImg} alt="banner" />
      <div  style={{height:'300px'}} className='banner-content d-flex align-items-center justify-content-center flex-column  p-5'>
     <h1 className='fw-bolder text-light'>Hall of Fame - KPCC Presidents</h1>
    <div className='d-flex justify-content-start w-100 '>
      <h4 className='text-regular' style={{color:'#FFC107'}} >Home / Hall of Fame</h4>
      </div>
      </div>
      </div>
    {/* for small screens */}
    <div className='banner-container  d-md-none'>
      <img className="w-100 img-fluid"   src={bannerMobImg} alt="banner" />
      <div  style={{height:'300px'}} className='banner-content d-flex align-items-center justify-content-center flex-column  p-5'>
     <h1 className='fw-bolder text-light'>Hall of Fame - KPCC Presidents</h1>
    <div className='d-flex justify-content-start w-100 '>
      <h4 className='text-regular' style={{color:'#FFC107'}} >Home / Hall of Fame</h4>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Banner

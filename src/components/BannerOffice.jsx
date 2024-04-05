import React from 'react'
import './banner.css'
import bannerImg from '../assets/img/bannerweb.jpg'
import bannerMob from '../assets/img/bannerMob.jpg'

function BannerOffice() {
  return (
    <section className='w-100'>
      <div className='banner-container d-none d-md-block'>
      <img className="w-100 img-fluid d-block" style={{height:'400px',objectFit:'cover',objectPosition:'top'}}  src={bannerImg} alt="banner" />
      <div  style={{height:'300px'}} className='banner-content d-flex align-items-center justify-content-center flex-column  p-5'>
     <h1 className='fw-bolder text-light'>Office Bearers - KPCC Presidents</h1>
    <div className='d-flex justify-content-start w-100 '>
      <h4 className='text-regular' style={{color:'#FFC107'}} >Home / Office Bearers</h4>
      </div>
      </div>
      </div>
      {/* small screens */}
      <div className='banner-container d-md-none'>
      <img className="w-100 img-fluid d-block"   src={bannerMob} alt="banner" />
      <div  style={{height:'300px'}} className='banner-content d-flex align-items-center justify-content-center flex-column  p-5'>
     <h1 className='fw-bolder text-light'>Office Bearers - KPCC Presidents</h1>
    <div className='d-flex justify-content-start w-100 '>
      <h4 className='text-regular' style={{color:'#FFC107'}} >Home / Office Bearers</h4>
      </div>
      </div>
      </div>
        </section>
  )
}

export default BannerOffice
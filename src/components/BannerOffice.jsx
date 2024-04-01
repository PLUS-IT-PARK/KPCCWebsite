import React from 'react'
import './banner.css'
import bannerImg from '../assets/img/BannerKpcc.jpg'

function BannerOffice() {
  return (
    <section className='w-100'>
      <div className='banner-container'>
      <img className="w-100 img-fluid" style={{height:'300px'}}  src={bannerImg} alt="banner" />
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
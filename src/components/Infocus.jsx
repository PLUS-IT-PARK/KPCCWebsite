import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import img1 from '../assets/img/infocus1.jpg'
import img2 from '../assets/img/infocus2.jpg'
import img3 from '../assets/img/infocus3.jpg'
import img4 from '../assets/img/infocus4.jpg'


function Infocus() {
  return (
    <section className='py-4 d-flex align-items-center justify-content-center w-100'>
     <div className='container py-5'> 
     <h1 style={{color:'#004167'}} className=' fw-bolder text-uppercase py-4'>Infocus</h1>
     <Swiper
       modules={[ Autoplay,Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation = {true}
      //  autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
       pagination={{ clickable: true }}
       breakpoints={{
        // When window width is >= 992px (lg devices)
        992: {
          slidesPerView: 3,
        },
        // When window width is >= 768px and < 992px (md devices)
        768: {
          slidesPerView: 3,
        },
        // When window width is < 768px (mobile devices)
        0: {
          slidesPerView: 1,
        },
      }}
      //  scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      <div className="card " style={{width: "16rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src={img1} className='w-100 img-fluid' />
     <div className="card-body">
      <p className='fw-semi-bold text-black'>Nov 05, 2023 </p>
    <h5 className="card-title text-light fw-bolder" >SHRI MALLIKARJUN KHARGE’S</h5>
  </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card " style={{width: "16rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src={img2} className='w-100 img-fluid' />
     <div className="card-body">
     <p className='fw-semi-bold text-black'>Nov 30, -0001 </p>
    <h5 className="card-title text-light fw-bolder" >CONGRESS PARLIMENTARY</h5>
  </div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="card " style={{width: "16rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src={img3} className='w-100 img-fluid' />
     <div className="card-body">
      <p className='fw-semi-bold text-black'>Nov 30, -0001</p>
    <h5 className="card-title text-light fw-bolder" >THE LEADER OF PRACHARS</h5>
  </div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="card " style={{width: "16rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src={img4} className='w-100 img-fluid' />
     <div className="card-body">
      <p className='fw-semi-bold text-black'>Dec 29, 2023</p>
    <h5 className="card-title text-light fw-bolder" >NATIONAL HERALD CASE - THE TRUTH</h5>
  </div>
      </div>

      </SwiperSlide>
     
    </Swiper>
     </div>
    </section>
  )
}

export default Infocus
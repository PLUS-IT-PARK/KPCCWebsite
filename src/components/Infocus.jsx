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

function Infocus() {
  return (
    <section className='py-4 d-flex align-items-center justify-content-center w-100'>
     <div className='container py-5'> 
     <h1 className='text-black fw-bolder text-uppercase py-4'>Infocus</h1>
     <Swiper
       modules={[ Autoplay,Navigation, Pagination, Scrollbar, A11y]}
       centeredSlides = {true}
       spaceBetween={50}
       slidesPerView={3}
       navigation = {true}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       pagination={{ clickable: true }}
       breakpoints={{
        // When window width is >= 992px (lg devices)
        992: {
          slidesPerView: 3,
        },
        // When window width is >= 768px and < 992px (md devices)
        768: {
          slidesPerView: 2,
        },
        // When window width is < 768px (mobile devices)
        0: {
          slidesPerView: 1,
        },
      }}
      //  scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      <div className="card rounded-5 p-3" style={{width: "18rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src="https://i.postimg.cc/QxJNwDzd/infocus.png" className='w-100 img-fluid' />
     <div className="card-body">
    <h5 className="card-title text-light fw-bolder" >SHRI MALLIKARJUN KHARGE’S</h5>
  </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card rounded-5 p-3" style={{width: "18rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src="https://i.postimg.cc/QxJNwDzd/infocus.png" className='w-100 img-fluid' />
     <div className="card-body">
    <h5 className="card-title text-light fw-bolder" >SHRI MALLIKARJUN KHARGE’S</h5>
  </div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="card rounded-5 p-3" style={{width: "18rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src="https://i.postimg.cc/QxJNwDzd/infocus.png" className='w-100 img-fluid' />
     <div className="card-body">
    <h5 className="card-title text-light fw-bolder" >SHRI MALLIKARJUN KHARGE’S</h5>
  </div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="card rounded-5 p-3" style={{width: "18rem", background: "linear-gradient(white,rgb(57, 115, 176))"}}>
      <img style={{height:'200px'}} src="https://i.postimg.cc/QxJNwDzd/infocus.png" className='w-100 img-fluid' />
     <div className="card-body">
    <h5 className="card-title text-light fw-bolder" >SHRI MALLIKARJUN KHARGE’S</h5>
  </div>
      </div>

      </SwiperSlide>
     
    </Swiper>
     </div>
    </section>
  )
}

export default Infocus
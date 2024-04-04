import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import img1 from '../assets/img/infocus1.jpg'
// import img2 from '../assets/img/infocus2.jpg'
// import img3 from '../assets/img/infocus3.jpg'
// import img4 from '../assets/img/infocus4.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../baseUrl';


function Infocus() {
const [blog,setBlog] = useState([])
  const getInfocusData = async () =>{
    const result = await axios.get(`${url}/api/admin/get-blogs`)
    setBlog(result.data.blogs)
  }

  useEffect(() => {
    getInfocusData()
  },[])
  console.log(blog);
  return (
    <section className='py-4 d-flex align-items-center justify-content-center w-100'>
      <div className='container py-5'>
        <h1 style={{ color: '#004167' }} className=' fw-bolder text-uppercase py-4'>Infocus</h1>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
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
         {blog?.length>0 && 
         blog.map((obj,index)=>(
          <SwiperSlide key={index}>
            <div className="card " style={{ width: "17rem", background: "linear-gradient(white,rgb(57, 115, 176))" }}>
              <img style={{ height: '300px' }} src={obj?.image} className='w-100 img-fluid' />
              <div className="card-body py-4">
                <p className='fw-semi-bold text-black'>{obj?.date}</p>
                <h5 className="card-title text-light fw-bolder" >{obj?.title}</h5>
                <Link to={`/blogs/${obj?.slug}`} className='btn text-white p-0'>View more <i className="fa-solid fa-arrow-right ms-3"></i></Link>
              </div>
            </div>
          </SwiperSlide>
         ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Infocus
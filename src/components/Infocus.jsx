import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../baseUrl';
import './infocus.css';
function Infocus() {
  const [blog, setBlog] = useState([]);

  const getInfocusData = async () => {
    const result = await axios.get(`${url}/api/admin/get-blogs`);
    setBlog(result.data.blogs);
  };

  useEffect(() => {
    getInfocusData();
  }, []);

  return (
    <section  className='py-4 d-flex align-items-center justify-content-center'>
      <div className='container py-5'>
        <h1 style={{ color: '#004167' }} className='fw-bolder text-uppercase py-4'>Infocus</h1>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          centeredSlides={false}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            992: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            0: {
               slidesPerView: 1,
               spaceBetween:0,
               centeredSlides: true,
               },
          }}
          
        >
          {blog?.length > 0 &&
            blog.map((obj, index) => (
              <SwiperSlide key={index} className="mobile-centered-swiper" >
                <Link style={{ textDecoration: 'none' }} to={`/blogs/${obj?.slug}`}>
                  <div className="card" style={{ width: "17rem", background: "linear-gradient(white, rgb(57, 115, 176))" }}>
                    <img  src={obj?.image} className='w-100 img-fluid' alt={obj?.title} />
                    <div className="card-body py-5">
                      <p className='fw-semi-bold text-black'>{obj?.date}</p>
                      <h5 className="card-title text-light fw-bolder">{obj?.title}</h5>
                      <button className='btn text-white pt-1 p-0'>View more <i className="fa-solid fa-arrow-right ms-3"></i></button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Infocus;

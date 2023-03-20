import React from 'react'
import { Link } from 'react-router-dom'
import bgimage from '../../assets/images/bg-image.webp'
import '../../Styles/home.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Itemcard from '../layouts/Itemcard';
import data from '../../productdata';
const Home = () => {
  return (
    <>
    <div>
       <div className="section  ">
        <div>
          <img className='w-100' src={bgimage} alt="" />
        </div>
        <div className="section-txt text-center p-3">
          <h2 className="my-5">The New Minimal PRODUCT COLLECTION</h2>
          <Link
            className="btn btn-warning p-3 text-decoration-none"
            to={"/collections"}
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </div>
  <div className='container'>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {data.productData.slice(7,12).map((item) => {
      return <SwiperSlide><Itemcard image={item.image} title={item.title} price={item.price}/></SwiperSlide>
    }) }
    </Swiper>
  </div>
    
    </>
  )
}

export default Home

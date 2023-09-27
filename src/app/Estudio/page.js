"use client"
import React from 'react'
import Image from 'next/image';
import "../../../styles/banner.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const images = [
  "/bn1.jpg",
  "/bn2.jpg",
  "/bn3.jpg",
];

const Banner = () => {
  return (
   <section id='home' className='banner'>
     <Swiper
      slidesPerView={1}
      spaceBetween={10}
        pagination={{
          clickable:true
        }}
        modules={[Navigation,Pagination]}
        navigation={true}
        loop={true}
        className="img-container"
      >
        { images.map((image, index) =>(
        <SwiperSlide key={index}>
          <Image src={image} alt={image} width={1920} height={1280} priority/>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className='box'>
        <h1> ¿Queres conocernos y trabajar con nostros?</h1>
        <strong>Somos un grupo de arquitectos apasionados por nuestra profesion<i className='fa-solid fa-globe'></i></strong>
        <p>Mira nuestros ultimos proyectos destacados</p>
        <a href='#'>Conocenos</a>
      </div>
   </section>
  )
}

export default Banner
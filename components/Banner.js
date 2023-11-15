"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// Import required modules
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import "../styles/banner.css";

const images = [
  "/bn1.jpg",
  "/bn1.jpg",
  "/bn1.jpg",
  "/bn1.jpg",
  "/bn1.jpg",
  "/bn1.jpg",
];
const Banner = () => {
    return (
        <>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCube, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <Image src={image} alt={image} width={1920} height={1280} priority />
                <div className="overlay"></div>
                <div className="text-content">
                  <h1>Descripción(opcion)</h1>
                {/*   <p>Descripción de la diapositiva. Puedes agregar información adicional aquí.</p> */}
                </div>
              </div>
              <br/>
              <br/>
            </SwiperSlide>
          ))}
        </Swiper>
        </>
    );
  };    
  export default Banner

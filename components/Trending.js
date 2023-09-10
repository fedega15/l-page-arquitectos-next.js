"use client"
import React from "react";
import "../styles/trending.css";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const trends = [
  {
    id: 1,
    proyect: "Exibichion de arte",
    name: "Exibichion de arte",
    img: "/p1.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
  {
    id: 2,
    proyect: "Moda",
    name: "Moda",
    img: "/p2.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
  {
    id: 3,
    proyect: "Hoteles",
    name: "Hoteles",
    img: "/p3.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
  {
    id: 4,
    proyect: "Productos",
    name: "Productos",
    img: "/p4.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
  {
    id: 5,
    proyect: "Edificios",
    name: "Edificios",
    img: "/p5.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
  {
    id: 6,
    proyect: "Muebles",
    name: "Muebles",
    img: "/p6.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
  {
    id: 7,
    proyect: "Interories",
    name: "Interiores",
    img: "/p7.png",
    activites: 10,
    places: 12,
    days: "1week",
    price: 1.2,
  },
];
const Trending = () => {
  return (
    <section id="proyectos">
      <div className="heading">
        <h2>pryectos123</h2>
        <p>asdasdasdasd</p>
      </div>
      <div className="wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          navigation={true}
          loop={true}
          className="img-container"
          breakpoints={{
            800: {
                slidesPerView:2,
                spaceBetween:10
            },
            1100: {
                slidesPerView:3,
                spaceBetween:20
            }
          }}
        >
          {trends.map((trend) => (
            <SwiperSlide key={trend.id}>
              <div className="card" >
                <div className="title">
                  <span>
                    <i className="fas fa-map-marker"></i>
                    {trend.proyect}{" "}
                  </span>
                  <a href="#">{trend.name}</a>
                </div>
                <div className="img-container">
                  <Image
                    src={trend.img}
                    alt={trend.img}
                    width={350}
                    height={170}
                  />
                </div>
                <div className="text">
                  <span>
                    <i className="fa-solid fa-shoe-prints"></i>
                    {trend.activites}Activites
                  </span>
                  <span>
                    <i className="fa-solid fa-compass"></i>
                    {trend.places}Places
                  </span>
                  <span>
                    <i className="fa-solid fa-calendar-alt"></i>
                    {trend.days}Days
                  </span>
                </div>
                <hr />
                <div className="price">
                  <p>
                    From ${trend.price}
                    <span>/person</span>
                  </p>
                  <a href="#"> Book Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;

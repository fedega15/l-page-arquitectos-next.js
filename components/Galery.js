import React from "react";
import "../styles/galery.css";
import Image from "next/image";

const galeria = [

  {
    id: 1,
    proyect: "ARQUITECTURA",
    name: "ARQUITECTURA",
    img:  "/g5.png",  
    activites: 10,
    places: 32,
    days: "1week",
    price: 1.2,
    link: "/Arquitectura",
  },
  {
    id: 4,
    proyect: "DISEÑO MOBILIARIO",
    name: "DISEÑO MOBILIARIO",
    img: "/g4.png",
    activites: 1450,
    places: 132,
    days: "1week",
    price: 1.2,
    link: "/Concursos",
  },
  {
    id: 3,
    proyect: "RECYCLABLE FURNITURE",
    name: "RECYCLABLE FURNITURE",
   
    img: "/g1.jpg",
    activites: 23,
    places: 54,
    days: "1week",
    price: 1.2,
    link: "/RecyclableForniture",

  },
  {
    id: 4,
    proyect: "MOBILE DESIGN",
    name: "MOBILE DESIGN",
  img:  "/g2.png", 
    activites: 10,
    places: 200,
    days: "1week",
    price: 1.2,
    link: "/MobileDesigne",
  },
  
  {
    proyect: "ARQUITECTURA MODULAR",
    name: "ARQUITECTURA MODULAR",
    img: "/g7.png",
    id: 5,
   
    activites: 45,
    places: 46,
    days: "1week",
    price: 1.2,
    link: "/Mobiliario",
  },
  {
    id: 6,
  
    img: "/g6.jpg",
    proyect: "CONCURSOS",
    name: "CONCURSOS",
    activites: 70,
    places: 244,
    days: "1week",
    price: 1.2,
    link: "/Modular",
  },

];
const Galery = () => {
  return (
    <section id="galery">
      <div className="grid">
        {galeria.map((galeria, index) => (
          <a
            key={galeria.id}
            href={galeria.link}
            className={`active card card-${index}`}
          >
            <div className={`card card-${index}`} key={galeria.id}>
              <Image
                src={galeria.img}
                alt={galeria.img}
                width={600}
                height={600}
                className="imagen-galeria"
              />
              <div className="box">
              <span className="star">
               {/*  {galeria.name === "ARQUITECTURA" && <button><i class="fa-solid fa-hand-pointer"></i></button>} */}
                  {/*    <i className="fa-solid fa-star"></i>
                {galeria.activites} */}
                </span>
                <div className="group">
                  <div className="text">
                    <strong>{galeria.name}</strong>
                    <span>{galeria.places} Poyectos</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Galery;

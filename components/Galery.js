import React from "react";
import "../styles/galery.css";
import Image from "next/image";

const galeria = [
  {
    id: 1,
    proyect: "Arquitectura",
    name: "Arquitectura",
    img: "/g5.jpg",
    activites: 10,
   /*  places: 32, */
    days: "1week",
    price: 1.2,
    link: "/Arquitectura",
  },
  {
    id: 2,
    proyect: "CONCURSOS",
    name: "Concursos",

    img: "/g6.jpg",
    activites: 1450,
    /* places: 132, */
    days: "1week",
    price: 1.2,
    link: "/Concursos",
  },
  {
    id: 3,
    proyect: "DISEÑO MOBILIARIO",
    name: "Mobiliario/Objetos",
    img: "/g1.jpg",
    activites: 23,
   /*  places: 54, */
    days: "1week",
    price: 1.2,
    link: "/RecyclableForniture",
  },
  {
    id: 4,
    proyect: "ARQUITECTURA MODULAR",
    name: "Arquitectura Modular",
    img: "/g7.jpg",
    activites: 10,
    /* places: 200, */
    days: "1week",
    price: 1.2,
    link: "/Mobiliario",
  },
  {
    proyect: "MOBILE",
    name: "Mobile ",
    
    img: "/g2.jpg",
    id: 5,
    activites: 45,
    /* places: 46, */
    days: "1week",
    price: 1.2,
    link: "/MobileDesigne",
  },
 
];
const Galery = () => {
  return (
    <div className="wrapper">
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
                      <span>{galeria.places}  </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Galery;

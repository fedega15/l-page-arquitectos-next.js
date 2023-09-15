import React from "react";
import "../styles/galery.css";
import Image from "next/image";
import Link from 'next/link';

const galeria = [
  {
    id: 1,
    proyect: "EXHIBICION",
    name: "EXHIBICION",
    img: "/g1.png",
    activites: 10,
    places: 200,
    days: "1week",
    price: 1.2,
    link:"/Exhibicion"
  },
  {
    id: 2,
    proyect: "MODA",
    name: "MODA",
    img: "/g2.png",
    activites: 10,
    places: 32,
    days: "1week",
    price: 1.2,
    link:"/Moda"
  },
  {
    id: 3,
    proyect: "PRODUCTOS",
    name: "PRODUCTOS",
    img: "/g4.png",
    activites: 23,
    places: 54,
    days: "1week",
    price: 1.2,
    link:"/Productos"
  },
  {
    id: 4,
    proyect: "EDIFICIOS",
    name: "EDIFICIOS",
    img: "/g5.png",
    activites: 1450,
    places: 132,
    days: "1week",
    price: 1.2,
    link:"/Edificios"
  },
  {
    id: 5,
    proyect: "MUEBLES",
    name: "MUEBLES",
    img: "/g6.png",
    activites: 45,
    places: 46,
    days: "1week",
    price: 1.2,
    link:"/Muebles"
  },
  {
    id: 6,
    proyect: "INTERIORES",
    name: "INTERIORES",
    img: "/g7.png",
    activites: 70,
    places: 244,
    days: "1week",
    price: 1.2,
    link:"/Interiores"
  },
];
const Galery = () => {
  return (
    <section id="galery">
   {/*    <div className="heading">
        <h2>Galeria</h2>
        <p>
          En esta galeria encontraras nuestros disntintos enfoques de
          arquitectura en los cuale trabajamos
        </p>
      </div> */}

        <div className="grid">
          {galeria.map((galeria, index) => (
            <a key={galeria.id} href={galeria.link} className={`active card card-${index}`}  >
            <div className={`card card-${index}`}  key={galeria.id}>
              <Image
                src={galeria.img}
                alt={galeria.img}
                width={600}
                height={600}
              />
            <div className="box">
              <span className="star">
             {/*    <i className="fa-solid fa-star"></i>
                {galeria.activites} */}
              </span>
              <div className="group">
                <div className="text">
                <strong>{galeria.name}</strong>
                  <span>{galeria.places}  Poyectos</span>
                </div>
                {/* <span className="price">${galeria.price}</span> */}
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

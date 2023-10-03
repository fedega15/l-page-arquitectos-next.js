import React from "react";
import "../../../styles/acerca.css";
import Image from "next/image";
import Card from "../../../components/Card";

export const galeria = [
  {
    id: 1,
    image: "/card1.jpg",
    name: "Santiago Semmino",
    rol: "renders diseño proyectos",
    descripcion:
      " capaz de diseñar, dirigir, implementar y gestionar soluciones arquitectónicas, y responder adecuadamente a los problemas del hábitat en todos sus aspectos y dimensiones",
  },
  {
    id: 2,
    image: "/card2.jpg",
    name: "Roman Riquelme",
    rol: "renders diseño proyectos",
    descripcion:
      " capaz de diseñar, dirigir, implementar y gestionar soluciones arquitectónicas, y responder adecuadamente a los problemas del hábitat en todos sus aspectos y dimensiones",
  },
  {
    id: 3,
    image: "/card3.jpg",
    name: "Agostina Selzer",
    rol: "renders diseño proyectos",
    descripcion:
      " capaz de diseñar, dirigir, implementar y gestionar soluciones arquitectónicas, y responder adecuadamente a los problemas del hábitat en todos sus aspectos y dimensiones",
  },
  {
    id: 4,
    image: "/card4.jpg",
    name: "feder",
    rol: "renders diseño proyectos",
    descripcion:
      " capaz de diseñar, dirigir, implementar y gestionar soluciones arquitectónicas, y responder adecuadamente a los problemas del hábitat en todos sus aspectos y dimensiones",
  },
  {
    id: 5,
    image: "/card5.jpg",
    name: "fede",
    rol: "renders diseño proyectos",
    descripcion:
      " capaz de diseñar, dirigir, implementar y gestionar soluciones arquitectónicas, y responder adecuadamente a los problemas del hábitat en todos sus aspectos y dimensiones",
  },
  {
    image: "/card6.jpg",
    id: 6,
    name: "fede",
    rol: "renders diseño proyectos",
    descripcion:
      " capaz de diseñar, dirigir, implementar y gestionar soluciones arquitectónicas, y responder adecuadamente a los problemas del hábitat en todos sus aspectos y dimensiones",
  },
];

const Page = () => {
  return (
    <section id="galery">
      <div className="heading">
        <h1>NOSOTROS</h1>
        <div className="horizontal-line-2"></div>
      </div>
      <div className="grid">
        {galeria.map((proyecto) => (
          <div className="cont" key={proyecto.id}>
            <Card
              image={proyecto.image}
              name={proyecto.name}
              rol={proyecto.rol}
              descripcion={proyecto.descripcion}
            />
          </div>
        ))}
      </div>
      <div class="main__action">
        <a class="main__scroll" href="#">
          <div class="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(28,28,30,1)"
              ></path>
            </svg>
          </div>
          <div class="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(28,28,30,1)"
              ></path>
            </svg>
          </div>

          <span class="main__scroll-text">Scroll</span>
        </a>
      </div>
    </section>
  );
};

export default Page;

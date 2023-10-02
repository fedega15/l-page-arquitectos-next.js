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
      </div>
      <div className="horizontal-line-2"></div>
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
    </section>
  );
};

export default Page;

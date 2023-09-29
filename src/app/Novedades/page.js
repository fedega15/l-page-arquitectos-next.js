import Image from "next/image";
import React from "react";
import "../../../styles/novedades.css";
import Slider from "../../../components/Slider";

const testimonials = [
  {
    id: 1,
    name: "Ecosistema",
    avatar: "/tmiembro.jpg",
    text: "Argemtina - Rosario ",
  },
  {
    id: 2,
    name: "conferencias",
    avatar: "/tmiembro1.jpg",
    text: "Bolivia - La Paz",
  },
  {
    id: 3,
    name: "Baño",
    avatar: "/tmiembro3.jpg",
    text: "Argentina - La Plata",
  },
  {
    id: 4,
    name: "Diseño de Exposiciones / Instalaciones de Arte",
    avatar: "/tmiembro2.jpg",
    text: "Brazil- Rio de Janeiro",
  },
  {
    id: 5,
    name: "Superficies arquitectónic",
    avatar: "/tmiembro2.jpg",
    text: "EE UU - Oklahoma",
  },
  {
    id: 6,
    name: "Gráfico / Marca",
    avatar: "/tmiembro2.jpg",
    text: "Alaska",
  },
  {
    id: 5,
    name: "Diseño industrial",
    avatar: "/tmiembro2.jpg",
    text: "Rusia",
  },
  {
    id: 5,
    name: "Interiores / Diseño de edificios",
    avatar: "/tmiembro2.jpg",
    text: "España - Barcelona",
  },
  {
    id: 5,
    name: "Concursos",
    avatar: "/tmiembro2.jpg",
    text: "Palma de Mayorca",
  },
  {
    id: 5,
    name: "Pluralismo",
    avatar: "/tmiembro2.jpg",
    text: "Ibiza",
  },
];
const page = () => {
  return (
    <section id="testimonios">
      <div className="heading">
        <h2>CONTENIDO EXTRA</h2>
      </div> 
      <div className="horizontal-line"></div>
      <div className="slider">
        {/* <h2>Proyectos y investigaciones</h2>
        <p>
          En esta sección encontrarás nuestras investigaciones, innovaciones y
          nuevos enfoques.
        </p> */}
        <div className="cards-container">
        <div className="avatar">
                <Slider/>
              </div>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="text">
                <i className="fas fa-quote-left"></i>
                <strong>{testimonial.name}</strong>
                <p>{testimonial.text}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      {/* <div className="slider">
        <h1> Links rapidos:
            <a>asdasdasd</a>
            <a>asdasdasd</a>
            <a>asdasdasd</a>
            <a>asdasdasd</a>
            <a>asdasdasd</a>
        </h1>

      </div> */}
    </section>
  );
};

export default page;
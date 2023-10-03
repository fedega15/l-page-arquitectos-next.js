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
    id: 7,
    name: "Diseño industrial",
    avatar: "/tmiembro2.jpg",
    text: "Rusia",
  },
  {
    id: 8,
    name: "Interiores / Diseño de edificios",
    avatar: "/tmiembro2.jpg",
    text: "España - Barcelona",
  },
  {
    id: 9,
    name: "Concursos",
    avatar: "/tmiembro2.jpg",
    text: "Palma de Mayorca",
  },
  {
    id: 10,
    name: "Pluralismo",
    avatar: "/tmiembro2.jpg",
    text: "Ibiza",
  },
];
const page = () => {
  
  return (
    <section id="testimonios">
      <div className="heading">
        <h1>EVENTOS</h1>
        <div className="horizontal-line-2"></div>
      </div>
      <div className="slider">
        {/* <h2>Proyectos y investigaciones</h2>
        <p>
          En esta sección encontrarás nuestras investigaciones, innovaciones y
          nuevos enfoques.
        </p> */}
        <div className="cards-container">
          <div className="avatar">
            <Slider />
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
      
      <div className="main__action">
        <a className="main__scroll" href="#">
          <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(28,28,30,1)"
              ></path>
            </svg>
          </div>
          <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(28,28,30,1)"
              ></path>
            </svg>
          </div>

          <span className="main__scroll-text">Scroll</span>
        </a>
      </div>
    </section>
  );
};

export default page;

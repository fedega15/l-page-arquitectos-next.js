import Image from "next/image";
import React from "react";
import "../../../styles/novedades.css";

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
      <hr></hr>
      <div className="slider">
        <h2>Proyectos y investigaciones</h2>
        <p>
          En esta sección encontrarás nuestras investigaciones, innovaciones y
          nuevos enfoques.
        </p>
        <div className="cards-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="text">
                <i className="fas fa-quote-left"></i>
                <strong>{testimonial.name}</strong>
                <p>{testimonial.text}</p>
              </div>
              <div className="avatar">
                <Image
                  src={testimonial.avatar}
                  alt="t1"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider">
        <h1> Links rapidos:
            <a>asdasdasd</a>
            <a>asdasdasd</a>
            <a>asdasdasd</a>
            <a>asdasdasd</a>
            <a>asdasdasd</a>
        </h1>

      </div>
    </section>
  );
};

export default page;
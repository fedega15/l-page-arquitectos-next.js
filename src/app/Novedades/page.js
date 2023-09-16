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
    name: "Diseño industrial ",
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
    name: "Arquitectura movil",
    avatar: "/tmiembro2.jpg",
    text: "Brazil- Rio de Janeiro",
  },
  {
    id: 4,
    name: "Arquitectura movil",
    avatar: "/tmiembro2.jpg",
    text: "EE UU - Oklahoma",
  },
];

testimonials.sort((a, b) => a.name.localeCompare(b.name));

const groupedTestimonials = {};

// Agrupa los testimonios por letra inicial
testimonials.forEach((testimonial) => {
  const initialLetter = testimonial.name.charAt(0).toUpperCase();
  if (!groupedTestimonials[initialLetter]) {
    groupedTestimonials[initialLetter] = [];
  }
  groupedTestimonials[initialLetter].push(testimonial);
});
const page = () => {
  return (
    <section id="testimonios">
      <hr></hr>
      <div className="slider">
        <h2>Proyectos y novedades</h2>
        <p>
          En esta sección encontrarás nuestras investigaciones, innovaciones y
          nuevos enfoques.
        </p>
        {Object.keys(groupedTestimonials).map((letter) => (
          <div key={letter} className="letter-card">
            <div className="letter">{letter}</div>
            <div className="cards-container">
              {groupedTestimonials[letter].map((testimonial) => (
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
        ))}
      </div>
    </section>
  );
};

export default page;

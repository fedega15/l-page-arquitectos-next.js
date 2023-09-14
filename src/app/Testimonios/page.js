import Image from "next/image";
import React from "react";
import "../../../styles/testimonios.css"

const testimonials = [
    {
        id:1,
        name:"fernando rodriguez",
        avatar:"/tmiembro.jpg",
        text:"proyecto rio cuarto, excelente trabajo y finalizado de obra, muy conforme"
    },
    {
        id:1,
        name:"fernando rodriguez",
        avatar:"/tmiembro.jpg",
        text:"proyecto rio cuarto, excelente trabajo y finalizado de obra, muy conforme"
    },
    {
        id:1,
        name:"fernando rodriguez",
        avatar:"/tmiembro.jpg",
        text:"proyecto rio cuarto, excelente trabajo y finalizado de obra, muy conforme"
    },
    {
        id:1,
        name:"fernando rodriguez",
        avatar:"/tmiembro.jpg",
        text:"proyecto rio cuarto, excelente trabajo y finalizado de obra, muy conforme"
    },
]

const page = () => {
  return (
    <section id="testimonios">
      <div className="img-container">
        <Image 
        src="/t1.png" 
        alt="t1" 
        width={488} 
        height={482} />
      </div>
      <div className="slider">
        <h2>Testimonios de nuestros clientes</h2>
        <p> Agradecemos mucho sus devoluciones nos ayudan a seguir creciendo</p>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <div className="text">
              <i className="fas fa-quote-left"></i>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </div>
            <div className="avatar">
            <Image 
            src={testimonial.avatar}
            alt="t1"
            width={488}
            height={482} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;

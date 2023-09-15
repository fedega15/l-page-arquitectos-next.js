import Image from "next/image";
import React from "react";
import "../../../styles/novedades.css"

const testimonials = [
    {
        id:1,
        name:"Ecosistema",
        avatar:"/tmiembro.jpg",
        text:"Diseño de mobiliario con materiales reciclados "
    },
    {
        id:1,
        name:"Diseño industrial ",
        avatar:"/tmiembro1.jpg",
        text:"Te mostramos cómo combinar los materiales, los muebles perfectos y la forma de usar el color para conseguir sentirte como en un loft urbano de diseño."
    },
    {
        id:1,
        name:"Equipamiento de baño",
        avatar:"/tmiembro3.jpg",
        text:"Hemos desarrollado a lo largo de los años una extensa gama de acabados para todas nuestras líneas de griferías y accesorios de baño, cocina y el jardín."
    },
    {
        id:1,
        name:"Arquitectura movil",
        avatar:"/tmiembro2.jpg",
        text:"Oficina móvil que se adapte a la dinámica nómade que requiere un estudio que proyecta, dirige y construye y que, a su vez, acompañe las distintas etapas de un proyecto: desde el primer contacto con el cliente hasta la entrega final de obra"
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
        <h2>Proyectos y novedades</h2>
        <p> En esta seccion encontraraas nuestras investigaciones inovaciones y nuevos enfoques</p>
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

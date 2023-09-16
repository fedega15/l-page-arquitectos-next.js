import Image from "next/image";
import React from "react";
import "../../../styles/contacto.css";

const testimonials = [
    {
      id: 1,
      text: "QR perfil de instagram",
      avatar: "/w2.png",
      icon: "fa-brands fa-instagram",
    },
    {
      id: 1,
      text: "QR directo de WhatsApp ",
      avatar: "/w1.png",
      icon: "fa-brands fa-whatsapp",
    },
  ];

const page = () => {
  return (
    <section id="testimonios">
      <div className="img-container">
          <h2>Nuestras oficinas </h2>
          <h1>Santa Fe 2144, 3D</h1>
          <a 
           href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79"> 
          <Image src="/map.png" alt="sub" width={488} height={482} border={2} />
          </a>
      </div>
      <div className="slider">
        <h2>Escanea nuestros QR</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <div className="text">
             
              <p>{testimonial.text} <i className={testimonial.icon}></i></p>
              <strong>{testimonial.name}</strong>
            </div>
            
            <div className="avatar">
              <Image
                src={testimonial.avatar}
                alt="w1"
                width={488}
                height={482}
              />
            </div>
            
          </div>
        ))}
          <div>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.link/d08xt8" className="redes" ><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-facebook-messenger"></i></a>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79" className="redes" ><i className="fa-solid fa-location-dot"></i> </a>
            </div>
      </div>
    </section>
  );
};

export default page;

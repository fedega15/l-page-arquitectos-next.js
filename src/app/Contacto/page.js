"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../../../styles/contacto.css";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "santiagosemino@ssaestudio.com ",
    avatar: "/w2.png",
    link: "//mailto:federico.galassi9@gmail.com",
    href: "//mailto:federico.galassi9@gmail.com",
    icon: "fa fa-envelope",
  },
  {
    id: 2,
    text: "3364689065",
    avatar: "/w2.png",
    link: "//wa.link/d08xt8",
    href: "https://wa.link/d08xt8",
    icon: "fa-brands fa-whatsapp",
  },
  {
    id: 3,
    text: "Linkedin",
    avatar: "/w2.png",
    link: "//https://www.linkedin.com/feed/",
    href: "//https://www.linkedin.com/feed/",
    icon: "fa-brands fa-linkedin",
  },
  {
    id: 4,
    text: "Instagram",
    avatar: "/w2.png",
    link: "//mailto:federico.galassi9@gmail.com",
    href: "//mailto:federico.galassi9@gmail.com",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 4,
    text: "Facebook",
    avatar: "/w2.png",
    link: "//mailto:federico.galassi9@gmail.com",
    href: "//mailto:federico.galassi9@gmail.com",
    icon: "fa-brands fa-facebook-messenger",
  },
];

const Page = () => {
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar si la página se ha cargado
  const textAnimationControls = useAnimation();

  useEffect(() => {
    // Cuando la página se carga completamente, establece isLoaded a true
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });

    return () => {
      window.removeEventListener("load", () => {
        setIsLoaded(true);
      });
    };
  }, []);

  useEffect(() => {
    // Cuando isLoaded es true, activa la animación del texto
    if (isLoaded) {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [isLoaded, textAnimationControls]);

  useEffect(() => {
    // Define el umbral de desplazamiento en el que deseas aplicar la animación
    const scrollThreshold = 200; // Ajusta esto según tus necesidades

    // Aplica la animación al elemento de texto
    if (scrollY >= scrollThreshold) {
      textAnimationControls.start({ x: -100, opacity: 0 });
    } else {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [scrollY, textAnimationControls]);

  return (
    <section id="testimonios">
      <motion.div className="heading"initial={{ x: -100, opacity: 0 }} // Estado inicial de la animación
          animate={textAnimationControls} // Aplica la animación al h1
      >
        <h1
 
        >
          CONTACTO
        </h1>

        <div className="horizontal-line-2"></div>
      </motion.div>

      <div className="img-container">
        <h1 className="t1">Santa Fe 2144, Piso 3D. Rosario</h1>
        <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
          <iframe
            className="map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZGjr2UZKzuxve0Nb3F4A0IwOuOFTktQ&ehbc=2E312F"
          ></iframe>
        </a>
      </div>
      <div className="slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <div className="text">
              <a href={testimonial.href} className="redes">
                <i class={testimonial.icon}></i>
              </a>
              <Link href={testimonial.link}>
                <strong>{testimonial.text}</strong> <i></i>
              </Link>
              <strong>{testimonial.name} </strong>
            </div>

            <div className="avatar"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;

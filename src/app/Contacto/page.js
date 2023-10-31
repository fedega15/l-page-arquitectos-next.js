"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../../../styles/contacto.css";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../../../components/data";

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const textAnimationControls = useAnimation();

  // Efecto para manejar el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Efecto para manejar la carga completa de la página
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Efecto para manejar la animación del texto
  useEffect(() => {
    // Define el umbral de desplazamiento en el que deseas aplicar la animación
    const scrollThreshold = 200; // Ajusta esto según tus necesidades

    if (isLoaded && scrollY >= scrollThreshold) {
      textAnimationControls.start({ x: -100, opacity: 0 });
    } else {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [scrollY, isLoaded, textAnimationControls]);

  return (
    <section id="testimonios">
      <motion.div 
      className="heading"
      transition={{ duration: 0.5 }}
      initial={{ x: -100, opacity: 0 }} // Estado inicial de la animación
      animate={textAnimationControls} // Aplica la animación al h1
      
      >
        <h1>
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
                <i className={testimonial.icon}></i>
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

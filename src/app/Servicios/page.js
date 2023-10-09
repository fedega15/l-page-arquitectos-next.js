"use client";
import "../../../styles/servicios.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
export const galeria = [
  {
    id: 1,
    name: "Interiores / Diseño de edificios",
    links: [
      { name: "Hotel Nhow Berlín", link: "/ASD4" },
      { name: "Fun Factory Múnich", link: "/ASD5" },
      { name: "kado", link: "/ASD6" },
    ],
    descripcion:
      "Como empresa de diseño industrial que ha crecido en el diseño de interiores y edificios durante los últimos 15 años, hemos evolucionado hasta convertirnos en una empresa de diseño de servicio completo, que ayuda a nuestros clientes a alcanzar sus objetivos en una amplia gama de tipologías de proyectos y ubicaciones globales. Nuestro estudio cuenta con un equipo internacional de talentosos diseñadores y contamos con el respaldo de una variada cartera de consultores globales para cualquier tipo de proyecto. Diseñamos a todas las escalas, desde la residencia privada hasta el imponente edificio de uso mixto. Estamos equipados para apoyar a nuestros clientes con un servicio integrado durante todo el ciclo de vida de un proyecto.",
  },
  {
    id: 2,
    name: "Diseño industrial",
    links: [
      { name: "Hotel Nhow Berlín", link: "/ASD4" },
      { name: "Fun Factory Múnich", link: "/ASD5" },
      { name: "kado", link: "/ASD6" },
    ],
    descripcion:
      "En cada proyecto encontramos la solución que fusiona nuestra visión con la experiencia de nuestros clientes para dar vida a objetos hermosos, funcionales, fabricables, progresivos y económicamente viables. Trabajamos con grandes corporaciones y empresas emergentes para crear y desarrollar conceptos innovadores en prácticamente todas las categorías de bienes de consumo. Desde el inicio del concepto hasta el desarrollo del diseño, los detalles, la creación de prototipos y la orientación en la fabricación, nuestro equipo de diseñadores industriales tiene una amplia experiencia en la creación de diseños que mejoran las experiencias de la vida cotidiana.",
  },
  {
    id: 3,
    name: "Gráfico / Marca",
    links: [
      { name: "Hotel Nhow Berlín", link: "/ASD4" },
      { name: "Fun Factory Múnich", link: "/ASD5" },
      { name: "kado", link: "/ASD6" },
    ],
    descripcion:
      "Nos especializamos en patronaje, estampado, branding y dirección creativa. Nuestros clientes trabajan directamente con el equipo creativo en una variedad de proyectos, lo que permite no incumplir plazos ni realizar trabajos en el extranjero. Producimos diseños que ayudan a crear o revitalizar marcas que se destacan a través de una variedad de medios impresos y otros. Dependiendo de la naturaleza del proyecto, la gráfica se entrelaza en el diseño del producto y del interior. Tenemos la capacidad de diseñar un proyecto bajo un mismo techo, lo que permite un proceso más fluido y un diseño holístico..",
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
    <section id="galery">
   <motion.div 
   className="heading"
   initial={{ x: -100, opacity: 0 }} // Estado inicial de la animación
    animate={textAnimationControls} // Aplica la animación al h1
    transition={{ duration: 0.5 }}

      >
        <h1
 
        >
          SERVICIOS
        </h1>
        
      </motion.div>
      <div className="grid">
        {galeria.map((proyecto, index) => (
          <div className="cont" key={proyecto.id}>
            <div className="item">
              <div className="horizontal-line-2"></div>
              <h2>{proyecto.name}</h2>
            </div>
            <div className="item">
              <p>{proyecto.descripcion}</p>
            </div>
            <div className="item">
              <h1>Links Destacados:</h1>
              <ul>
                {proyecto.links.map((enlace, i) => (
                  <li key={i}>
                    <a href={enlace.link} className="link-destacado">
                      {enlace.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        ))}
      </div>
      
    </section>
  );
};

export default Page;

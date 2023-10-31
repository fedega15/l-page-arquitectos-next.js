"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import "../../../styles/acerca.css";

export const galeria = [
  { 
    img:"/serv1.jpg",
    number:11,
    mes: "Junio",
    año: 2016,
    title: " Construcción Sustentable U.T.N.",
    tipo:"CHARLA",
    enlace: "https://noticias.perfil.com/noticias/general/2019-09-18-santiago-semino-arquitectos-nuevas-formas-de-habitar.phtml"
  },
  { 
    img:"/photo3.jpg",
    number:28,
    mes: "Agosto",
    año: 2019,
    title: " Revista Noticias",
    tipo:"NOTA",
    enlace: "https://noticias.perfil.com/noticias/general/2019-09-18-santiago-semino-arquitectos-nuevas-formas-de-habitar.phtml"
  },
  { 
    img:"/serv2.jpg",
    number:26,
    mes: "Mayo",
    año: 2020,
    title: "D.Y Patil University (Pune-India)",
    tipo:"LECTURE",
    enlace: "https://drive.google.com/file/d/1VOTVjd2oSF_yYT8HyGO5b0-sTzZ10KRj/view"
  },
  { 
    img:"/serv3.jpg",
    number:16,
    mes: "Marzo",
    año: 2023,
    title: "Terrenos y Quintas ",
    tipo:"NOTA",
    enlace: "https://notas.terrenosyquintas.com/construccion-en-seco-la-tendencia-que-reduce-costos/"
  },
  { 
    img:"/photo2.jpg",
    number:30,
    mes: "Junio",
    año: 2023,
    title: "Mundo Construcción",
    tipo:"ENTREVISTA",
    enlace: "https://open.spotify.com/episode/3JjW62ePXmv7W1ATY3r4nk?si=Ev-5LthNRx-3NDiOGf3TaQ"
  },
]
const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const textAnimationControls = useAnimation();

  useEffect(() => {
    // Define the scroll threshold where you want to apply the animation
    const scrollThreshold = 200; // Adjust this threshold as needed
  
    if (scrollY >= scrollThreshold) {
      textAnimationControls.start({ x: -100, opacity: 0 });
    } else {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [scrollY, textAnimationControls]);


  return (
    <section className="grid" id="galery">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={textAnimationControls}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        <h1>PRENSA</h1>
        <div className="horizontal-line-2"></div>
      </motion.div>
      <br />
      <div className="press-grid">
      {galeria.map((galeria, i) => (
      <div key={i} className="press-article">
      <Image
        src={galeria.img}
        alt={galeria.img}
        width={200}
        height={200}
      />
      <div className="article-header">
        <div className="date">
          <span className="date-number">{galeria.number}</span>
          <span className="date-number2">{galeria.mes} </span>
          <span className="date-number3">{galeria.año} </span>
        </div>
        <div className="article-content">
          <h2>{galeria.title}</h2>
          <p>{galeria.tipo}</p>

          <a
            target="_blank"
            href={galeria.enlace}
            className="press-link"
          >
            Leer más
          </a>
        </div>
      </div>
    </div>
          ))}
        
      </div>
    </section>
  );
};

export default Page;

"use client";
import React from "react";
import "../../../styles/acerca.css";
import Image from "next/image";
import Card from "../../../components/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const galeria = [
  {
    id: 1,
    image: "/card1.jpg",
    estudio: "/serv3.jpg",
    name: "Santiago Semmino",
    rol: "[Socio Fundador/ Arquitecto]",
    descripcion: "Departamento Arquitectura",
  },
  {
    id: 2,
    image: "/card1.jpg",
    estudio: "/photo2.jpg",
    name: "Agostina Selzer",
    rol: "[Diseño / Renders]",
    descripcion: "Departamento Arquitectura",
  },
  {
    id: 3,
    image: "/card1.jpg",
    estudio: "/bn1.jpg",
    name: "Agostina Selzer",
    rol: "[Diseño / Renders]",
    descripcion: "Departamento Arquitectura",
  },
  {
    id: 4,
    image: "/card1.jpg",
    estudio: "/serv2.jpg",
    name: "Federico Galassi",
    rol: "[Socio Fundador/ Arquitecto]",
    descripcion: "Departamento Arquitectura",
  },
  {
    id: 5,
    image: "/card1.jpg",
    name: "Federico Galassi",
    rol: "[Socio Fundador/ Arquitecto]",
    descripcion: "Departamento Arquitectura",
  },
  {
    image: "/card1.jpg",
    id: 6,
    name: "Federico Galassi",
    rol: "[Socio Fundador/ Arquitecto]",
    descripcion: "Departamento Arquitectura",
  },
  {
    image: "/card1.jpg",
    id: 7,
    name: "Federico Galassi",
    rol: "[Socio Fundador/ Arquitecto]",
    descripcion: "Departamento Arquitectura",
  },
  {
    image: "/card1.jpg",
    id: 8,
    name: "Federico Galassi",
    rol: "[Socio Fundador/ Arquitecto]",
    descripcion: "Departamento Arquitectura",
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
  
  const [isLoaded, setIsLoaded] = useState(false);
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
    // Cuando isLoaded es true o el scroll es menor al umbral, activa la animación del texto
    if (isLoaded || scrollY < 200) {
      textAnimationControls.start({ x: 0, opacity: 1 });
    } else {
      textAnimationControls.start({ x: -100, opacity: 0 });
    }
  }, [isLoaded, scrollY, textAnimationControls]);

  const nosotrosTitleControls = useAnimation();
  const equipoTitleControls = useAnimation();
  const prensaTitleControls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Configura la animación inicial cuando se monta el componente
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };


  useEffect(() => {
    // Cuando isLoaded es true, activa la animación del texto
    if (isLoaded) {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [isLoaded, textAnimationControls]);
  // Agrega un listener para el cambio de tamaño de la ventana
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Maneja el evento de scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Ajusta los umbrales en función del ancho de la ventana
    let equipoThreshold = 300;
    let prensaThreshold = 1050;
    if (windowWidth <= 768) {
      // Si el ancho de la ventana es menor o igual a 768px (dispositivos móviles), ajusta los umbrales
      equipoThreshold = 990;
      prensaThreshold = 3700;
    }

    // Para la sección "NOSOTROS"
    if (scrollY <= 0 || scrollY >= documentHeight - windowHeight) {
      nosotrosTitleControls.start({ x: 0, opacity: 1 });
    } else if (scrollY >= 200) {
      nosotrosTitleControls.start({ x: -100, opacity: 0 });
    }

    // Para la sección "EQUIPO"
    if (scrollY >= equipoThreshold && scrollY < prensaThreshold) {
      equipoTitleControls.start({ x: 0, opacity: 1 });
    } else {
      equipoTitleControls.start({ x: -100, opacity: 0 });
    }

    // Para la sección "PRENSA"
    if (scrollY >= prensaThreshold) {
      prensaTitleControls.start({ x: 0, opacity: 1 });
    } else {
      prensaTitleControls.start({ x: -100, opacity: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nosotrosTitleControls, equipoTitleControls, prensaTitleControls]);

  return (
    <section id="galery">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={textAnimationControls}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        <h1>NOSOTROS</h1>
        <div className="horizontal-line-2"></div>
      </motion.div>
      <div className="studio-info">
        <div className="studio-description">
          <h2>Estudio SSA</h2>
          <p>
            arquitectura como herramienta para otorgar a sus clientes verdaderos
            productos de confort, sosteniendo costos competitivos. No buscamos
            insertarnos dentro de un contexto que consideramos en su mayoría
            obsoleto, sino romper el degradado mercado inmobiliario local,
            bregando por elevar su calidad. Nos interesa tener un impacto
            positivo en la ciudad que construimos, entendiendo a la arquitectura
            como una herramienta de transformación que afecta a la sociedad en
            su conjunto
          </p>
        </div>
        <div className="studio-images">
          {galeria.slice(0, 4).map((proyecto) => (
            <div className="studio-image" key={proyecto.id}>
              <Image
                src={proyecto.estudio}
                alt={proyecto.name}
                className="card-image"
                width={600} // Tamaño más grande
                height={400} // Tamaño más grande
              />
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      <section className="grid" id="equipo">
        <motion.div
          className="heading"
          initial={{ x: -100, opacity: 0 }}
          animate={equipoTitleControls}
          transition={{ duration: 0.5 }}
        >
          <h1>EQUIPO</h1>
          <div className="horizontal-line-2"></div>
        </motion.div>
        {galeria.map((proyecto) => (
          <div className="cont" key={proyecto.id}>
            <Card
              image={proyecto.image}
              name={proyecto.name}
              rol={proyecto.rol}
              descripcion={proyecto.descripcion}
            />
          </div>
        ))}
      </section>
      <div class="main__action">
        <a class="main__scroll" href="#">
          <div class="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(28,28,30,1)"
              ></path>
            </svg>
          </div>
          <div class="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(28,28,30,1)"
              ></path>
            </svg>
          </div>

          <span class="main__scroll-text">Scroll</span>
        </a>
      </div>
      <hr></hr>
      <section className="grid" id="prensa">
        <motion.div
          className="heading"
          initial={{ x: -100, opacity: 0 }}
          animate={prensaTitleControls}
          transition={{ duration: 0.5 }}
        >
          <h1>PRENSA</h1>
          <div className="horizontal-line-2"></div>
        </motion.div>
        <div className="press-section">
          <div className="press-article">
            <h2>Título del artículo de prensa 1</h2>
            <p>Descripción o contenido del artículo de prensa 1.</p>
            <a href="#prensa" className="press-link">
              Leer más
            </a>
          </div>
          <div className="press-article">
            <h2>Título del artículo de prensa 2</h2>
            <p>Descripción o contenido del artículo de prensa 2.</p>
            <a href="#galery" className="press-link">
              Leer máss
            </a>
          </div>
          <div className="press-article">
            <h2>Título del artículo de prensa 3</h2>
            <p>Descripción o contenido del artículo de prensa 3.</p>
            <a href="#equipo" className="press-link">
              Leer más
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;

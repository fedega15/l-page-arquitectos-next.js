"use client";
import React from "react";
import "../../../styles/acerca.css";
import Image from "next/image";
import Card from "../../../components/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {galeria, colab, colaboradores} from "../../../components/data"


const Page = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const textAnimationControls = useAnimation();
  const nosotrosTitleControls = useAnimation();
  const equipoTitleControls = useAnimation();
  const prensaTitleControls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Ajusta los umbrales en función del ancho de la ventana
    let equipoThreshold = 300;
    let prensaThreshold = 1050;
    if (windowWidth <= 768) {
      equipoThreshold = 990;
      prensaThreshold = 3700;
    }

    // Actualiza el scrollY
    setScrollY(scrollY);

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

  // Función para manejar el evento de carga
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Función para manejar el evento de redimensionamiento de la ventana
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Agrega los event listeners una sola vez
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    scrollY,
    windowWidth,
    textAnimationControls,
    nosotrosTitleControls,
    equipoTitleControls,
    prensaTitleControls,
  ]);

  // Efecto para manejar animaciones de texto
  useEffect(() => {
    if (isLoaded || scrollY < 200) {
      textAnimationControls.start({ x: 0, opacity: 1 });
    } else {
      textAnimationControls.start({ x: -100, opacity: 0 });
    }
  }, [isLoaded, scrollY, textAnimationControls]);

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
            Somos un equipo interdisciplinario enfocado en el diseño y la
            arquitectura, con dedicación a proyectos de todo tipo de escala,
            diseño de mobiliario, objetos, sistemas modulares, y con activa
            participación a concursos nacionales e internacionales. Nuestra
            oficina está impulsada por jóvenes arquitectos, ingenieros,
            interioristas, diseñadores gráficos, industriales que diseñan y
            desarrollan conjuntamente proyectos desde los primeros bocetos hasta
            la supervisión final en obra. En nuestro proceso de trabajo aparece
            el diseño sustentable como eje principal de nuestros proyectos. El
            estudio de los nuevos sistemas de construcción, la transformación y
            evolución de las ciudades, la innovación tecnológica, y el diseño
            eficiente es lo que nos motiva a seguir creciendo.
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

      <hr></hr>
      <section className="grid" id="prensa">
        <motion.div
          className="heading"
          initial={{ x: -100, opacity: 0 }}
          animate={prensaTitleControls}
          transition={{ duration: 0.5 }}
        >
          <h1>ASESORES</h1>
          <div className="horizontal-line-2"></div>
        </motion.div>
        <div className="grid1">
          <div className="cont1">
            <div className="item">
              <h3>Asesores </h3>
              <ul>
                {colaboradores.map((enlace, i) => (
                  <li key={i}>
                    <p className="span" href={enlace.name}>
                      {enlace.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              <span>Han colaborado con nosotros desde 2014 </span>
              <ul>
                {colab.map((enlace, i) => (
                  <li key={i}>
                    <p className="span" href={enlace.name}>
                      {enlace.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;

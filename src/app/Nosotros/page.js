"use client";
import { useEffect, useState, React } from "react";
//Animation
import { useAnimation } from "framer-motion";
//Styles
import "../../../styles/acerca.css";
// Data
import { galeria, colab, colaboradores, colab2 } from "../../../components/data";
//componentes
import Heading from "../../../components/nosotros/Heading";
import {
  TeamMembers,
  StudioImages,
  Advisors,
} from "../../../components/nosotros/NosotrosComponent";
import Image from "next/image";

const Page = () => {
  //states
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  //animation
  const textAnimationControls = useAnimation();
  const nosotrosTitleControls = useAnimation();
  const equipoTitleControls = useAnimation();
  const prensaTitleControls = useAnimation();
  //animation state
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
      equipoThreshold = 290;
      prensaThreshold = 2200;
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
  }, [scrollY,windowWidth,textAnimationControls,nosotrosTitleControls,equipoTitleControls,prensaTitleControls,
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
      <Heading title="NOSOTROS" animationControls={textAnimationControls} />
      <div className="studio-info">
        <div className="studio-description">
         {/*  <h2>Estudio SSA</h2> */}
         <br />
          <span>
          Somos un equipo interdisciplinario enfocado en el diseño y la arquitectura, con dedicación a proyectos de todo tipo de escala,
      diseño de mobiliario, objetos, sistemas modulares, y con activa participación a concursos nacionales e internacionales.
          </span>
           <br></br>
        <br></br>
          <span>
          Nuestra oficina está impulsada por jóvenes arquitectos, ingenieros, interioristas, diseñadores gráficos, industriales que diseñan y
      desarrollan conjuntamente proyectos desde los primeros bocetos hasta la supervisión final en obra. En nuestro proceso de trabajo aparece
      el diseño sustentable como eje principal de nuestros proyectos.
          </span>
          <br></br>
          <br></br>
          <span>
          El estudio de los nuevos sistemas de construcción, la transformación y evolución de las ciudades, la innovación tecnológica,
      y el diseño eficiente es lo que nos motiva a seguir creciendo.
          </span>
        </div>
        <div className="studio-images">
          {galeria.slice(0, 1).map((proyecto) => (
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
      <TeamMembers
        galeria={galeria}
        equipoTitleControls={equipoTitleControls}
      />
      <Advisors
        colaboradores={colaboradores}
        colab={colab}
        colab2={colab2}
        prensaTitleControls={prensaTitleControls}
      />
    </section>
  );
};

export default Page;

"use client";
import { useEffect, useState, React } from "react";
//Animation
import { useAnimation } from "framer-motion";
//Styles
import "../../../styles/acerca.css";
// Data
import { galeria, colab, colaboradores } from "../../../components/data";
//componentes
import Heading from "../../../components/nosotros/Heading";
import {
  TeamMembers,
  StudioImages,
  Advisors,
} from "../../../components/nosotros/NosotrosComponent";

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
      {/*   <StudioDescription /> */}
        <StudioImages galeria={galeria} />
      </div>
      <TeamMembers
        galeria={galeria}
        equipoTitleControls={equipoTitleControls}
      />
      <Advisors
        colaboradores={colaboradores}
        colab={colab}
        prensaTitleControls={prensaTitleControls}
      />
    </section>
  );
};

export default Page;

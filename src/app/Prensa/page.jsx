'use client'
import "../../../styles/acerca.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const Page = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
        console.log(setScrollPosition);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
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
      
    );
  };
  
  export default Page;
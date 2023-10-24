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
      <br />
            <div className="press-article">
              <h2>JORNADA DE CONSTRUCCIÓN SUSTENTABLE - U.T.N.</h2>
              <p>CHARLA</p>
              <h5>Junio 2016</h5>
              <a href="#galery" className="press-link">
                Leer máss
              </a>
            </div>
            <div className="press-article">
              <h2>REVISTA NOTICIAS</h2>
              <p>NOTA</p>
              <h5>Agosto 2019</h5>
              <a href="https://noticias.perfil.com/noticias/general/2019-09-18-santiago-semino-arquitectos-nuevas-formas-de-habitar.phtml" className="press-link">
                Leer más
              </a>
            </div>
            <div className="press-article">
              <h2>D.Y. PATIL UNIVERSITY (PUNE, INDIA)</h2>
              <p>LECTURE</p>
              <h5>MAYO 2020</h5>
              <a href="https://drive.google.com/file/d/1VOTVjd2oSF_yYT8HyGO5b0-sTzZ10KRj/view" className="press-link">
                Leer más
              </a>
            </div>
            <div className="press-article">
              <h2>TERRENOS Y QUINTAS</h2>
              <p>NOTA</p>
              <h5>MARZO 2023</h5>
              <a href="https://notas.terrenosyquintas.com/construccion-en-seco-la-tendencia-que-reduce-costos/" className="press-link">
                Leer más
              </a>
            </div>
            <div className="press-article">
              <h2>MUNDO CONSTRUCCION</h2>
              <p>ENTREVISTA</p>
              <h5>JUNIO 2023</h5>
              <a href="https://open.spotify.com/episode/3JjW62ePXmv7W1ATY3r4nk?si=Ev-5LthNRx-3NDiOGf3TaQ" className="press-link">
                Leer más
              </a>
            </div>
        </section>
      
    );
  };
  
  export default Page;
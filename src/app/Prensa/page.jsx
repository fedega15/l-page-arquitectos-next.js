"use client";
import "../../../styles/acerca.css";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
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

  // Efecto para manejar el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollPosition(window.scrollY); // Si necesitas seguir rastreando la posición de desplazamiento
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
    const scrollThreshold = 200; // Umbral de desplazamiento

    if (isLoaded) {
      // Cuando la página se carga completamente
      textAnimationControls.start({ x: 0, opacity: 1 });
    } else if (scrollY < scrollThreshold) {
      // Cuando el scroll es menor al umbral
      textAnimationControls.start({ x: 0, opacity: 1 });
    } else {
      textAnimationControls.start({ x: -100, opacity: 0 });
    }
  }, [isLoaded, scrollY, textAnimationControls]);

  // Efecto para manejar el redimensionamiento de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Efecto para manejar el evento de scroll específico para la sección "PRENSA"
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      let equipoThreshold = 300;
      let prensaThreshold = 1050;

      if (windowWidth <= 768) {
        equipoThreshold = 990;
        prensaThreshold = 3700;
      }

      if (scrollY <= 0 || scrollY >= documentHeight - windowHeight) {
        nosotrosTitleControls.start({ x: 0, opacity: 1 });
      } else if (scrollY >= 200) {
        nosotrosTitleControls.start({ x: -100, opacity: 0 });
      }

      if (scrollY >= equipoThreshold && scrollY < prensaThreshold) {
        equipoTitleControls.start({ x: 0, opacity: 1 });
      } else {
        equipoTitleControls.start({ x: -100, opacity: 0 });
      }

      if (scrollY >= prensaThreshold) {
        prensaTitleControls.start({ x: 0, opacity: 1 });
      } else {
        prensaTitleControls.start({ x: -100, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    windowWidth,
    scrollY,
    nosotrosTitleControls,
    equipoTitleControls,
    prensaTitleControls,
  ]);

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
        <div className="press-article">
          <Image
            src="/e1.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
          />
          <div className="article-header">
            <div className="date">
              <span className="date-number">23</span>
              <span className="date-number2">Junio </span>
              <span className="date-number3">2016 </span>
            </div>
            <div>
              <span>Construccion Sustentable U.T.N. </span>
              <p>
                CHARLA -{" "}
                <a href="#galery"  target="_blank" className="press-link">
                  Leer más
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="press-article">
          <Image
            src="/e1.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
          />
          <div className="article-header">
            <div className="date">
              <span className="date-number">23</span>
              <span className="date-number2">Agosto </span>
              <span className="date-number3">2019 </span>
            </div>
            <div>
              <span>Revista Noticias</span>
              <p>
                NOTA -{" "}
                <a
                target="_blank"
                  href="https://noticias.perfil.com/noticias/general/2019-09-18-santiago-semino-arquitectos-nuevas-formas-de-habitar.phtml"
                  className="press-link"
                >
                  Leer más
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="press-article">
          <Image
            src="/e1.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
          />
          <div className="article-header">
            <div className="date">
              <span className="date-number">23</span>
              <span className="date-number2">Mayo </span>
              <span className="date-number3">2020 </span>
            </div>
            <div>
              <span>D.Y. Patil University - (PUNE, INDIA)</span>
              <p>
                LECTURE -{" "}
                <a
                 target="_blank"
                  href="https://drive.google.com/file/d/1VOTVjd2oSF_yYT8HyGO5b0-sTzZ10KRj/view"
                  className="press-link"
                >
                  Leer más
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="press-article">
          <Image
            src="/e1.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
          />
          <div className="article-header">
            <div className="date">
              <span className="date-number">23</span>
              <span className="date-number2">Marzo </span>
              <span className="date-number3">2023 </span>
            </div>
            <div>
              <span>Terrenos y Quintas</span>
              <p>
                NOTA -{" "}
                <a
                 target="_blank"
                  href="https://notas.terrenosyquintas.com/construccion-en-seco-la-tendencia-que-reduce-costos/"
                  className="press-link"
                >
                  Leer más
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="press-article">
          <Image
            src="/e1.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
          />
          <div className="article-header">
            <div className="date">
              <span className="date-number">23</span>
              <span className="date-number2">Junio </span>
              <span className="date-number3">2023 </span>
            </div>
            <div>
              <span>Mundo Construccion</span>
              <p>
                ENTREVISTA-{" "}
                <a
                 target="_blank"
                  href="https://open.spotify.com/episode/3JjW62ePXmv7W1ATY3r4nk?si=Ev-5LthNRx-3NDiOGf3TaQ"
                  className="press-link"
                >
                  Leer más
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

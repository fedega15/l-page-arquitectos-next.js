"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Prensa from "../../../components/Prensa";
import "../../../styles/acerca.css";
import { prensa } from "../../../components/data";


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
        {prensa.map((galeria, i) => (
          <div key={i} className="press-article">
            <Prensa
              img={galeria.img}
              number={galeria.number}
              mes={galeria.mes}
              año={galeria.año}
              title={galeria.title}
              tipo={galeria.tipo}
              enlace={galeria.enlace}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;

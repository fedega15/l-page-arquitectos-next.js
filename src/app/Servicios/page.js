"use client";
import "../../../styles/servicios.css";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ServComponent from "../../../components/servicios/ServComponent";
import { servicios } from "../../../components/data";

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

  const [showMoreItems, setShowMoreItems] = useState({}); // Estado para controlar qué elementos se muestran

  // Define el umbral de desplazamiento en el que deseas aplicar la animación
  const scrollThreshold = 200; // Ajusta esto según tus necesidades

  useEffect(() => {
    // Aplica la animación al elemento de texto
    if (isLoaded) {
      textAnimationControls.start({ x: 0, opacity: 1 });
    } else if (scrollY >= scrollThreshold) {
      textAnimationControls.start({ x: -100, opacity: 0 });
    } else {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [isLoaded, scrollY, textAnimationControls]);

  const toggleShowMore = (itemId) => {
    setShowMoreItems((prevItems) => ({
      ...prevItems,
      [itemId]: !prevItems[itemId],
    }));
  };
  return (
    <ServComponent
      servicios={servicios}
      textAnimationControls={textAnimationControls}
      showMoreItems={showMoreItems}
      toggleShowMore={toggleShowMore}
    />
  );
};

export default Page;

"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Prensa from "../../../components/Prensa";
import "../../../styles/acerca.css";
import { prensa } from "../../../components/data";
import PrensaComponent from "../../../components/prensa/PrensaComponent";


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
   <PrensaComponent
   Prensa={Prensa}
   prensa={prensa}
   textAnimationControls={textAnimationControls}
   />
  );
};

export default Page;

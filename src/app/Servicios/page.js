"use client";
import "../../../styles/servicios.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const galeria = [
  {
    id: 1,
    name: "Proyectos de Arquitectura",
    links: [
      { name: "Hotel Nhow Berlín", link: "/ASD4" },
      { name: "Fun Factory Múnich", link: "/ASD5" },
      { name: "kado", link: "/ASD6" },
    ],
    descripcion: `Diseñamos proyectos de arquitectura de todo tipo de formato y escala, en nuestro proceso    de trabajo los proyectos están divididos 4 diferentes etapas:`,
    descripcion1: `1. ESTUDIO PRELIMINAR
      Es el estudio preliminar del proyecto, donde analizamos el pedido del cliente, y empezamos a
      diseñarlo.
      De estos primeros bocetos podemos empezar a estimar tipo de sistema constructivo, cantidad de
      niveles de construcción, metros cubiertos, etc. Todos estos datos podemos estimar un costo
      estimado general de obra preliminar, y empezar a definir el programa de necesidades junto con el
      cliente.`,
    descripcion2: `2. ANTEPROYECTO
      Una vez definida la primera etapa, pasamos al anteproyecto, donde empezaremos a diseñar el
      proyecto requerido. En esta etapa entra la parte sustentable, y empieza a mezclarse con el diseño
      del proyecto.
      En esta etapa se le empieza a mostrar al cliente, cierta planimetría y una maqueta digital, donde se
      podrá ver la volumetría, algunos espacios exteriores e interiores, asi como tambien debe exhibir los
      sistemas constructivos propuestos y los elementos más representativos de la estructura e
      instalaciones que puedan tener gravitación en la documentación final del proyecto, esta etapa debe
      estar acompañado por un presupuesto global estimativo.
      El Anteproyecto debe cumplir con las disposiciones del Reglamento de Edificación vigente de la
      ciudad donde se va a implantar el proyecto.`,
    descripcion3: `3. LEGAJO EJECUTIVO
      En esta etapa vamos a poder definir, instalaciones finales, sanitarios, terminaciones
      Se le entrega al cliente una carpeta con toda la planimetría para poder ejecutar la obra, con el
      contratista que el cliente elija.
      Esta carpeta cumplirá con las disposiciones del Reglamento de Edificación e incluirá toda la
      información necesaria para que el constructor confeccione los planos de ejecución
      correspondientes a la ingeniería de detalle.
      El desarrollo de un proyecto debe estar acompañado por sucesivas estimaciones y ajustes de
      cómputos y costos para permitir la evaluación de alternativas morfológicas o de especificación.`,
    descripcion4: `4. GESTIÓN MUNICIPAL
      Ofrecemos el servicio de Gestión municipal en el cual gestionamos Permisos Municipales y/o Finales
      de Obra.
      Permiso de Edificación:
      Para la habilitación y/o permiso de edificación el arquitecto a cargo deberá presentar el
      legajo correspondiente en el colegio de arquitectos y pagar sus respectivos aportes, una vez
      hecho este trámite, deberá presentar el legajo municipal, el cual deberá incluir toda la
      información requerida por el municipio correspondiente.
      Final de Obra
      Este trámite se gestionará y presentará una vez finalizada la obra, presentando las
      correcciones o planos adicionales correspondientes según la reglamentación de cada
      municipio.`,
  },
  {
    id: 2,
    name: "Dirección de Obras",
    links: [
      { name: "Hotel Nhow Berlín", link: "/ASD4" },
      { name: "Fun Factory Múnich", link: "/ASD5" },
      { name: "kado", link: "/ASD6" },
    ],
    descripcion: `Nos encargamos del servicio de Dirección de Obras, desde la planificación previa al comienzo
       de la misma, revisando cada detalle de la parte Técnica, haciendo el control de calidad de la
       ejecución de la mano de obra, hasta la supervisión de las terminaciones finales de obra.`,
    descripcion1: `El Director de Obra junto con el comitente serán los encargados de presupuestar las distintas
      tareasGestion y planificacion de obras, y seleccionar la Mano de Obra, también adjudican las obras a los distintos rubros
      intervinientes`,
    descripcion2: `Todos los presupuestos aprobados de la obra se deberán entregar al Director de Obra, quien
    actualiza la planilla de Cómputo y Presupuesto y deberá presentar la certificación semanal de la
    obra.
    `,
    descripcion3: `LA TAREA DEL DIRECTOR DE OBRA ES EL CONTROL Y LA COORDINACIÓN DE LAS TAREAS`,
  },
  {
    id: 3,
    name: "Gestion y Planificacion de Obras",
    links: [
      { name: "Hotel Nhow Berlín", link: "/ASD4" },
      { name: "Fun Factory Múnich", link: "/ASD5" },
      { name: "kado", link: "/ASD6" },
    ],
    descripcion:
    `Nos encargamos del servicio Gestión y planificación de obras de todo tipo de escala y
    complejidad, coordinando y gestionando día a día las tareas diarias de la obra.`,
    descripcion1:
    `La gestión y planificación es tratar de estar adelantado a las tareas diarias y poder ir gestionando
    con anticipación algunas tareas que requieren un seguimiento más minucioso, y así poder cumplir
    con el cronograma de obra.
    `,
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

  const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar si la página se ha cargado
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
    // Cuando isLoaded es true, activa la animación del texto
    if (isLoaded) {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [isLoaded, textAnimationControls]);

  useEffect(() => {
    // Define el umbral de desplazamiento en el que deseas aplicar la animación
    const scrollThreshold = 200; // Ajusta esto según tus necesidades

    // Aplica la animación al elemento de texto
    if (scrollY >= scrollThreshold) {
      textAnimationControls.start({ x: -100, opacity: 0 });
    } else {
      textAnimationControls.start({ x: 0, opacity: 1 });
    }
  }, [scrollY, textAnimationControls]);

  return (
    <section id="galery">
      <motion.div
        className="heading"
        initial={{ x: -100, opacity: 0 }} // Estado inicial de la animación
        animate={textAnimationControls} // Aplica la animación al h1
        transition={{ duration: 0.5 }}
      >
        <h1>SERVICIOS</h1>
      </motion.div>
      <div className="grid">
        {galeria.map((proyecto, index) => (
          <div className="cont" key={proyecto.id}>
            <div className="item">
              <div className="horizontal-line-2"></div>
              <h2>{proyecto.name}</h2>
            </div>
            <div className="item">
              <p>{proyecto.descripcion}</p>
              <p>{proyecto.descripcion1}</p>
              <p>{proyecto.descripcion2}</p>
              <p>{proyecto.descripcion3}</p>
              <p>{proyecto.descripcion4}</p>
            </div>
            <div className="item">
              <h1>Links Destacados:</h1>
              <ul>
                {proyecto.links.map((enlace, i) => (
                  <li key={i}>
                    <a href={enlace.link} className="link-destacado">
                      {enlace.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;

"use client";
import React from "react";
import "../../../styles/acerca.css";
import Image from "next/image";
import Card from "../../../components/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const galeria = [
  {
    id: 1,
    image: "/card1.jpg",
    estudio: "/serv3.jpg",
    name: "Santiago Semmino",
    rol: "[Arquitecto]",
    descripcion: "Departamento Arquitectura",
  },
  {
    id: 2,
    image: "/card1.jpg",
    estudio: "/photo2.jpg",
    name: "Fernando Fola",
    rol: "[Maestro mayor de obras]",
    descripcion: "Departamento Arquitectura",
  },
  {
    id: 3,
    image: "/card2.jpg",
    estudio: "/bn1.jpg",
    name: "Jeremias Nolli",
    rol: "[Maestro mayor de obras]",
    descripcion: "Departamento Arquitectura",
  },

  {
    id: 4,
    image: "/card2.jpg",
    name: "Lucia Sanchez",
    estudio: "/01.jpg",
    rol: "[Arquitecta]",
    descripcion: "Departamento Arquitectura",
  },
  {
    image: "/card5.jpg",
    id: 5,
    name: "Agostina Selzer ",
    rol: "[Diseñadora]",
    descripcion: "Departamento Diseño",
  },
  {
    image: "/card1.jpg",
    id: 6,
    name: "Luisina Viglione ",
    rol: "[Administracion]",
    descripcion: "Departamento Adminsitrativo",
  },
  {
    image: "/card1.jpg",
    id: 7,
    name: "Federico Galassi",
    rol: "[Desarrollador Web]",
    descripcion: "Departamento Tecnologia",
  },
];
export const colab = [
  {
    id: 1,
    name: "GUILLERMINA GARCIA CASSIS",
  },
  {
    id: 3,
    name: "CARLA PAONE ",
  },
  {
    id: 4,
    name: "GERMAN CARDONATO",
  },
  {
    id: 5,
    name: "EMILIANO ESMORES",
  },
  {
    id: 6,
    name: "MAURO CANULLO ",
  },
  {
    id: 7,
    name: "JULIETA VERON",
  },
  {
    id: 8,
    name: "FRANCO TOPA",
  },
  {
    id: 9,
    name: "LEANDRO HERRERA",
  },
  
];
export const colab1 = [


{
  id: 10,
  name: "MANUEL BARBIERI",
},
{
  id: 11,
  name: "BELEN PEPE",
},
{
  id: 12,
  name: "CECILIA MAZZA",
},
{
  id: 13,
  name: "IGNACIO GALOPPO",
},
{
  id: 14,
  name: "EUGENIA VALVASON",
},
{
  id: 15,
  name: "VARINIA MATEO",
},
{
  id: 16,
  name: "DULCE SCALDINI",
},
];
export const colaboradores = [
  {
    id: 1,
    name: "Ing. OMAR NORRIS",
  },
  {
    id: 3,
    name: "Ing. RITA CAMPODÓNICO ",
  },
  {
    id: 4,
    name: "Ing. FERNANDO",
  },
  {
    id: 5,
    name: "Renders YAMILA BALEANI",
  },
  {
    id: 6,
    name: "Renders MAXI VELAZQUEZ ",
  },
  {
    id: 7,
    name: "Dis Industrial ALEJANDRO ALFANO",
  },
  {
    id: 8,
    name: "Dis Industrial MAURICIO MARINUCCI",
  },
  {
    id: 9,
    name: "Gestión Municipal JORGELINA SELLE",
  },
];
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
  }, [scrollY,windowWidth,textAnimationControls,nosotrosTitleControls,equipoTitleControls,prensaTitleControls,]);

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
      <div className="main__action">
        <a className="main__scroll" href="#">
          <div className="main__scroll-box">
            {scrollPosition === 0 ? (
              /* Renderiza el icono cuando el scroll es igual a cero */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* <path d="M0 0h24v24H0z" fill="none"></path>
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 14.414-5.707-5.707 1.414-1.414 4.293 4.293 4.293-4.293 1.414 1.414z" fill="rgb(0,0,0)"/></svg> */}
              </svg>
            ) : (
              /* Renderiza otro icono cuando el scroll no es igual a cero */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm4.293 12.707-4.293-4.293-4.293 4.293-1.414-1.414 5.707-5.707 5.707 5.707z"
                    fill="rgb(0,0,0)"
                  />
                </svg>
              </svg>
            )}
          </div>
          {scrollPosition === 0 ? (
            <span className="main__scroll-text"></span>
          ) : (
            <span className="main__scroll-text">Click up!</span>
          )}
        </a>
      </div>

      <hr></hr>
      <section className="grid" id="prensa">
        {/* <motion.div
          className="heading"
          initial={{ x: -100, opacity: 0 }}
          animate={prensaTitleControls}
          transition={{ duration: 0.5 }}
        >
          <h1>COLAB</h1>
          <div className="horizontal-line-2"></div>
        </motion.div> */}

        <h1 className="asd" > Colaboradores a lo largo de nuestra trayectoria</h1>
        <div className="horizontal-line-2"></div>
        <div className="grid1">
          <div className="cont1">
            <div className="item">
            {/*   <h1>Colaboradores </h1> */}
              <ul>
                {colaboradores.map((enlace, i) => (
                  <li key={i}>
                    <p href={enlace.name} className="link-destacado">
                      {enlace.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              {/* <h1>Han colaborado con nosotros desde 2014 </h1> */}
              <ul>
                {colab.map((enlace, i) => (
                  <li key={i}>
                    <p href={enlace.name} className="link-destacado">
                      {enlace.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="item">
              {/* <h1>Han colaborado con nosotros desde 2014 </h1> */}
              <ul>
                {colab1.map((enlace, i) => (
                  <li key={i}>
                    <p href={enlace.name} className="link-destacado">
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

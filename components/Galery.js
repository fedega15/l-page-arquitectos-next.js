"use client";
import "../styles/galery.css";
import Image from "next/image";
import { galery } from "./data";

const Galery = () => {
  return (
    <div className="wrapper">
      {/* Banner con logo y descripción */}
      <section id="banner">
        <div className="banner-content">
          <Image
            src="/w2.png" // Asegúrate de colocar aquí el path correcto al logo
            alt="SSA Logo"
            width={50}
            height={25}
            className="logo"
          />
          <p className="description">
            Bienvenido a SSA, un estudio de arquitectura innovador especializado en soluciones
            sostenibles y diseños personalizados. Descubre a continuación nuestra galería de proyectos destacados.
          </p>
          <span className="arrow-down">↓</span> {/* Nueva flecha */}
        </div>
      </section>

      <section id="galery">
        <div className="grid">
          {galery.map((galeria, index) => (
           <div className={`card card-${index}`} key={galeria.id}>
           <a href={galeria.link} className={`active card card-${index}`}>
             <Image
               src={galeria.img}
               alt={galeria.img}
               width={220}
               height={100}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className="imagen-galeria"
             />
             <div className="overlay">
               <span className="ver-mas">Ver más</span>
             </div>
             <div className="box">
               <span className="star"></span>
               <div className="group">
                 <div className="text">
                   <strong>{galeria.name}</strong>
                   <span>{galeria.places} </span>
                 </div>
               </div>
             </div>
           </a>
         </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Galery;

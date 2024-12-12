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
          <div className="text-overlay right">
            <h1>Bienvenidos a SSA</h1>
            <p>
              Un estudio de arquitectura innovador especializado en
              soluciones sostenibles y diseños personalizados. Descubre a continuación nuestra galería de proyectos destacados.
            </p>
            <div className="buttons-container">
            <a href="#galery"  className="button">Galeria de arquitectura</a>
            </div>
            <a href="#galery" className="arrow-down">↓</a> {/* Flecha clickeable */}
          </div>

          <div className="image-container">
            <Image
              src="/A6.jpg" // Coloca aquí la ruta correcta de tu imagen
              alt="Welcome Image"
              layout="fill"
              objectFit="cover"
              className="background-image"
            />
          </div>
        </div>
        <div className="experience-text">
        <h5>25 años de experiencia y +100 obras</h5>
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
                  <div className="group">
                    <div className="text">
                      <span>{galeria.places}</span>
                    </div>
                  </div>
                </div>
                <div className="title">
                  <strong>{galeria.name}</strong>
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
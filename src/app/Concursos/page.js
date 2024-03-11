import React from "react";
import "../../../styles/exhibicion.css";
import Image from "next/image";
import { concursos } from "../../../components/data";

export const galeria = concursos;

const page = () => {
  return (
    <section id="galery">
      <div
        className="grid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#ff6600", // Puedes cambiar el color según tu preferencia
          backgroundColor: "#f2f2f2", // Puedes cambiar el color de fondo según tu preferencia
          textAlign: "center",
          padding: "20px",
        }}
      >
        ¡Sitio en construcción! Estamos trabajando para mejorar tu experiencia.
      </div>

      {/* <div className="grid">
        {concursos.map((galeria, index) => (
          <a key={galeria.id} href={`/Concursos-photo/${index}`} className="active">
            <div className={`card card-${index}`} key={galeria.id}>
              <Image
                src={galeria.img}
                alt={galeria.img}
                width={420}
                height={300}// Tamaño más grande
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
  

              />
              <div className="box" key={galeria.id}>
                <span className="text"></span>
                <div className="group">
                  <div>
                    <span className="text">
                    <strong>{galeria.name}</strong>
                      {" "}
                      <h3>
                        <i className="fas fa-map-marker-alt"> </i> {" "}
                        {galeria.ubi}
                      </h3>
                    </span>
                    <h3 className="text">{galeria.year} </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div> */}
    </section>
  );
};

export default page;

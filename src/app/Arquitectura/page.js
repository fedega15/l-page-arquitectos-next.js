import React from "react";
import "../../../styles/exhibicion.css"
import Image from "next/image";
import { Arquitectura } from "../../../components/data";

export const galeria = Arquitectura

const page = () => {
  return (
    <section id="galery">
      {/*     <div className="heading">
        <h2>Exibicon de arte</h2>
        <p>
          En esta galeria encontraras nuestras demostraciones de arte
        </p>
      </div> */}

      <div className="grid">
        {Arquitectura.map((galeria, index) => (
          <a key={galeria.id} href={`/Arquitectura-photo/${index}`} className="active">
            <div className={`card card-${index}`} key={Arquitectura.id}>
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
                        <i className="fas fa-map-marker-alt"> </i> -{" "}
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
      </div>
    </section>
  );
};

export default page;

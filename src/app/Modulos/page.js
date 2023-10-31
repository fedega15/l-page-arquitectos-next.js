import React from "react";
import "../../../styles/exhibicion.css"
import Image from "next/image";
import { modulos } from "../../../components/data";

export const galeria = modulos

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
        {modulos.map((galeria, index) => (
          <a key={galeria.id} href={`/Modulos-photo/${index}`} className="active">
            <div className={`card card-${index}`} key={galeria.id}>
              <Image
                src={galeria.img}
                alt={galeria.img}
                width={600}
                height={600}
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

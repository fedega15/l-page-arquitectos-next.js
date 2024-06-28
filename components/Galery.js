"use client";
import "../styles/galery.css";
import Image from "next/image";
import { galery } from "./data";

const Galery = () => {
  return (
    <div className="wrapper">
      <section id="galery">
        <div className="grid">
          {galery.map((galeria, index) => (
            <div className={`card card-${index}`} key={galeria.id}>
              <a href={galeria.link} className={`active card card-${index}`}>
                <Image
                  src={galeria.img}
                  alt={galeria.img}
                  width={420}
                  height={200} // Tamaño más grande
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="imagen-galeria"
                />

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

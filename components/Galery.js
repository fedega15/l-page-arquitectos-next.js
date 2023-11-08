"use client"
import "../styles/galery.css";
import Image from "next/image";
import { galery } from "./data"; 
import React, { useEffect, useState } from "react";

const Galery = () => {
  

  return (
    <div className="wrapper">
      <section id="galery">
        <div className="grid">
          {galery.map((galeria, index) => (
            <a
              key={galeria.id}
              href={galeria.link}
              className={`active card card-${index}`}
            >
              <div className={`card card-${index}`}>
                <Image
                  src={galeria.img}
                  alt={galeria.img}
                  width={600}
                  height={600}
                  className="imagen-galeria"
                />
                <div className="box">
                  <span className="star">
                  </span>
                  <div className="group">
                    <div className="text">
                      <strong>{galeria.name}</strong>
                      <span>{galeria.places}  </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Galery;

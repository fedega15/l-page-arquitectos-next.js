"use client";
import { galeria } from "@/app/Arquitectura/page";
import React, { useRef, useState } from "react";
import "../../../../styles/photopage.css";
import Banner from "../../../../components/Banner";
import Link from "next/link";

const PhotoPage = ({ params: { slug } }) => {
  const projectImages = galeria[slug].images;
  return (
    <section id="testimonios">
      <div className="slider">
        <h2>{galeria[slug].proyect}</h2>
        <h1>{galeria[slug].ubi}</h1>
        <p className="crossed-lines">{galeria[slug].descripcion}</p>
        <br />
        <Link href="/Arquitectura">&larr; Volver a la galería</Link>
      </div>
      <div className="img-container">
        <Banner className="banner" images={projectImages} />
      </div>
    </section>
  );
};

export default PhotoPage;

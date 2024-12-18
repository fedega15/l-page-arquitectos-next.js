"use client";
import Image from "next/image";
import { galeria } from "@/app/Modulos/page";
import React, { useState } from "react";
import "../../../../styles/photopage.css";
import Banner from "../../../../components/Banner";
import Link from "next/link";

const PhotoPage = ({ params: { slug } }) => {
  const projectImages = galeria[slug].images;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section id="testimonios">
      <div className="slider">
        <h2>{galeria[slug].name}</h2>
        <h1>{galeria[slug].ubi}</h1>
        <p className="crossed-lines">{galeria[slug].descripcion}</p>
        <br />
        <Link href="/Modulos">&larr; Volver a la galería</Link>
      </div>{" "}
      <div className="img-container">
        <Banner className="banner" images={projectImages} />
      </div>
    </section>
  );
};

export default PhotoPage;

import Image from 'next/image'
import { galeria } from '../../MobileDesigne/page';
import React from "react";
import "../../../../styles/photopage.css"
import Banner from '../../../../components/Banner';
import Link from 'next/link';

const PhotoPage = ({params: { slug }}) => {
  const projectImages = galeria[slug].images;
      return (
        <section id="testimonios">
          
          <div className="slider">
          <Link href="/MobileDesigne">
         &larr; Volver a la galería
        </Link>
            <h2>{galeria[slug].name}</h2>
            <h1>{galeria[slug].ubi}</h1>
            <p className='crossed-lines'>
              	{galeria[slug].descripcion}
            </p>
          </div>
          <div className="img-container">
          <Banner className="banner" images={projectImages}  />
          </div>
        </section>
  )
}

export default PhotoPage
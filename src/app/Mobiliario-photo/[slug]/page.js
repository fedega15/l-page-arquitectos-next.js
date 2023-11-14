import Image from 'next/image'
import { galeria } from '@/app/Mobiliario/page'
import React from "react";
import "../../../../styles/photopage.css"
import Banner from '../../../../components/Banner';

const PhotoPage = ({params: { slug }}) => {
  console.log(galeria[slug].photo1)
  console.log(galeria[slug].img)
      return (
        <section id="testimonios">
        <div className="slider">
          <h2>{galeria[slug].name}</h2>
          <h1>{galeria[slug].ubi}</h1>
          <p className='crossed-lines'>
            {galeria[slug].descripcion}
          </p>
        </div>
        <div className="img-container">
          <Banner className="banner" />
        </div>
      </section>
  )
}

export default PhotoPage
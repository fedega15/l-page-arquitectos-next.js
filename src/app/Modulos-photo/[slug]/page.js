"use client"
import Image from 'next/image'
import { galeria } from '@/app/Modulos/page'
import React, { useState } from "react";
import "../../../../styles/photopage.css"

const PhotoPage = ({params: { slug }}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          {/* <div className="img-container">
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image   src={galeria[slug].photo1} alt="sub" width={458} height={452} border={2} />
            </a>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image   src={galeria[slug].photo2} alt="sub" width={458} height={452} border={2} />
            </a>
          </div>
          <div className="img-container">
          <div className="line-bottom-right"></div>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image   src={galeria[slug].photo3}alt="sub" width={458} height={452} border={2} />
            </a>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image  src={galeria[slug].photo4} alt={galeria[slug]}width={458} height={452} border={2} />
            </a>
          </div> */}
          <div className='galeria'>
            <Image  src="/photo3.jpg" alt={galeria[slug]}width={458} height={452} border={2}/>
            <Image  src={galeria[slug].photo4} alt={galeria[slug]}width={458} height={452} border={2}/>
            <Image  src={galeria[slug].photo2} alt={galeria[slug]}width={458} height={452} border={2}/>
            <Image  src={galeria[slug].photo4} alt={galeria[slug]}width={458} height={452} border={2}/>
            <Image  src={galeria[slug].photo4} alt={galeria[slug]}width={458} height={452} border={2}/>
            <Image  src={galeria[slug].photo4} alt={galeria[slug]}width={458} height={452} border={2}/>
            <Image  src={galeria[slug].photo4} alt={galeria[slug]}width={458} height={452} border={2}/>
          </div>
        </section>
  )
}

export default PhotoPage
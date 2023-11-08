"use client"
import Image from 'next/image'
/* import { galeria } from '@/app/Arquitectura/page' */
import React, { useEffect, useState } from "react";
import "../../../../styles/photopage.css"
import { fetchArquitecturaData } from '../../../../lib/dataFetcher';


const PhotoPage = ({params: { slug }}) => {
  const [arquitecturaData, setArquitecturaData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchArquitecturaData();
      setArquitecturaData(data);
    }
    fetchData();
  }, []);

      return (
        <section id="testimonios">
          
          <div className="slider">
            <h2>{arquitecturaData[slug].name}</h2>
            <h1>{arquitecturaData[slug].ubi}</h1>
            <p className='crossed-lines'>
              	{galeria[slug].descripcion}
            </p>
          </div>
          <div className="img-container">
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image   src={arquitecturaData[slug].photo1} alt="sub" width={458} height={452} border={2} />
            </a>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image   src={arquitecturaData[slug].photo2} alt="sub" width={458} height={452} border={2} />
            </a>
          </div>
          <div className="img-container">
          <div className="line-bottom-right"></div>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image   src={arquitecturaData[slug].photo3}alt="sub" width={458} height={452} border={2} />
            </a>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79">
              <Image  src={arquitecturaData[slug].photo4} alt={arquitecturaData[slug]}width={458} height={452} border={2} />
            </a>
          </div>
        </section>
  )
}

export default PhotoPage
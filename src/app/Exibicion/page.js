import React from 'react'
import "../../../styles/exibicion.css";
import Image from "next/image";

const galeria = [
  {
    id: 1,
    proyect: "Exibicion de arte",
    name: "SONICO",
    ubi : "galeria de arte sidney",
    img: "/e1.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2023,
    link:"/Exibicion"
  },
  {
    id: 2,
    proyect: "Moda",
    name: "APAGAR",
    ubi : "galeria de arte auckland",
    img: "/e2.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2021,
    link:"/Moda"
  },
  {
    id: 3,
    proyect: "Productos",
    name: "TOTEM",
    ubi : "galeria de arte dobrazil",
    img: "/e3.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 1999,
    link:"/Productos"
  },
  {
    id: 4,
    proyect: "Edificios",
    name: "LARI",
    ubi : "galeria de arte otawa",
    img: "/e4.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2022,
    link:"/Edificios"
  },
  {
    id: 5,
    proyect: "Muebles",
    name: "MR & MS",
    ubi : "galeria de arte japon",
    img: "/e5.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2022,
    link:"/Muebles"
  },
  {
    id: 6,
    proyect: "Interiores",
    name: "MUNDO",
    ubi : "galeria de arte rusia",
    img: "/e6.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2023,
    link:"/Interiores"
  },
  {
    id: 7,
    proyect: "Interiores",
    name: "ROUND",
    ubi : "galeria de arte crespo",
    img: "/e7.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2021,
    link:"/Interiores"
  },
  {
    id: 8,
    proyect: "Interiores",
    name: "FLIGHT565",
    img: "/e8.png",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2022,
    link:"/Interiores"
  },
];

const page = () => {
  return (
    <section id="galery">
      <div className="heading">
        <h2>Exibicon de arte</h2>
        <p>
          En esta galeria encontraras nuestras demostraciones de arte
        </p>
      </div>

      <div className="grid">
        {galeria.map((galeria, index) => (
          <a key={galeria.id}href={galeria.link} className="active" >
          <div className={`card card-${index}`}  key={galeria.id}>
            <Image
              src={galeria.img}
              alt={galeria.img}
              width={600}
              height={600}
            />
            <div className="box" key={galeria.id} >
              <span className='text'>
              <strong>{galeria.name}</strong>
              </span>
              <div className='group'>
                <div >
                  <span  className='text'> <h3><i className="fas fa-map-marker-alt"></i>{galeria.ubi}</h3></span> 
                  <h3 className="text">{galeria.year}</h3>
                </div>
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default page
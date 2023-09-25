import React from "react";
import "../../../styles/servicios.css"
import Image from "next/image";

export const galeria = [
  {
    id: 1,
    proyect: "Exibicion de arte",
    name: "SONICO",
    ubi: "galeria de arte sidney",
    img: "/serv1.jpg",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2023,
    link: "/Exibicion",
    servicio:"Arquitectura",
    descripcion:"Diseñamos en base a lineamientos estéticos, pensamos en cada etapa del proyecto atendiendo a todos los detalles para que la obra sea perfectamente ejecutable.Buscamos constantemente la innovación en el uso e implementación de materiales."
  },
  {
    id: 2,
    proyect: "Moda",
    name: "APAGAR",
    ubi: "galeria de arte auckland",
    img: "/serv2.jpg",
    activites: 10,
    places: 12,
    days: "1week",
    year: 2021,
    link: "/Moda",
    servicio:"Construccion",
    descripcion:"Gestionamos de manera eficiente el proceso constructivo completo, buscando el máximo rendimiento de los recursos, disminuyendo los costos y minimizando los tiempos."
  },
  {
    id: 3,
    proyect: "Productos",
    name: "TOTEM",
    ubi: "galeria de arte dobrazil",
    img: "/serv3.jpg",
    activites: 10,
    places: 12,
    days: "1week",
    year: 1999,
    link: "/Productos",
    servicio:"Gerenciamiento",
    descripcion:"Aseguramos la ejecución de la obra comprometiéndonos con la calidad planificada y cumpliendo con los plazos estipulados."
  },
  
];

const page = () => {
  return (
    <section id="galery">
      <div className="heading">
        <h2>QUE HACEMOS</h2>
      </div> 

      <div className="grid">
        {galeria.map((galeria, index) => (
          <div className="cont" key={galeria.id}> 
          <a key={galeria.id} href={`/photo/${index}`} className="active">
            <div className={`card card-${index}`} key={galeria.id}>
              <Image
                src={galeria.img}
                alt={galeria.img}
                width={600}
                height={600}
              />
             
            </div>
            <h1>{galeria.servicio}</h1>
            <p>{galeria.descripcion}</p>
          </a>
          </div>
        ))}
      </div>
    </section>
    
    
  );
};

export default page;

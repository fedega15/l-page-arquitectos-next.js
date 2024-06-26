import Heading from "./Heading";
import Image from "next/image";
const StudioDescription = () => (
    <div className="studio-description">
      <span>
         Somos un equipo interdisciplinario enfocado en el diseño y la
              arquitectura, con dedicación a proyectos de todo tipo de escala,
              diseño de mobiliario, objetos, sistemas modulares, y con activa
              participación a concursos nacionales e internacionales. 
      </span>
    </div>
  );

const Advisors = ({ colaboradores, colab, prensaTitleControls, colab2 }) => (
    <section className="grid" id="prensa">
      <div className="grid1">
        <div className="cont1">
          <div className="item">
            <br />
            <h3>Asesores externos </h3>
            <br />
            <ul>
              {colaboradores.map((enlace, i) => (
                <li key={i}>
                  <p className="span" href={enlace.name}>
                    {enlace.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="item">
            <br />
            
            <span>Han colaborado con nosotros desde 2014 </span>
            <ul>
              <br />
              {colab2.map((enlace, i) => (
                <li key={i}>
                  <p className="span" href={enlace.name}>
                    {enlace.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="item3">
            <br />
            
            <span> </span>
            <ul>
              <br />
              <br />
              {colab3.map((enlace, i) => (
                <li key={i}>
                  <p className="span" href={enlace.name}>
                    {enlace.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
      </div>
    </section>
  );


  const StudioImages = ({ galeria }) => (
    <div className="studio-images">
      {galeria.slice(0, 1).map((proyecto) => (
        <div className="studio-image-container" key={proyecto.id}>
          <div className="studio-image-overlay">
            <span className="studio-image-text">
            <span>
      Somos un equipo interdisciplinario enfocado en el diseño y la arquitectura, con dedicación a proyectos de todo tipo de escala,
      diseño de mobiliario, objetos, sistemas modulares, y con activa participación a concursos nacionales e internacionales.
      Nuestra oficina está impulsada por jóvenes arquitectos, ingenieros, interioristas, diseñadores gráficos, industriales que diseñan y
      desarrollan conjuntamente proyectos desde los primeros bocetos hasta la supervisión final en obra. En nuestro proceso de trabajo aparece
      el diseño sustentable como eje principal de nuestros proyectos.
      El estudio de los nuevos sistemas de construcción, la transformación y evolución de las ciudades, la innovación tecnológica,
      y el diseño eficiente es lo que nos motiva a seguir creciendo.
    </span>
            </span>
          </div>
          <div className="studio-image-wrapper">
            <Image
              src={proyecto.estudio}
              alt={proyecto.name}
              className="studio-image"
              layout="responsive"
              width={1920} // Ancho original de la imagen
              height={1280} // Altura original de la imagen
            />
          </div>
        </div>
      ))}
      
    </div>
    
    
  );

  

  import Card from "./Card";
import { colab3 } from "../data";
  
  const TeamMembers = ({ galeria, equipoTitleControls, showMoreItems, toggleShowMore }) => (
      <section className="grid" id="equipo">
        {/* <Heading title="EQUIPO" animationControls={equipoTitleControls} /> */}
        {galeria.map((proyecto) => (
          <div className="cont" key={proyecto.id}>
            <Card
              image={proyecto.image}
              name={proyecto.name}
              rol={proyecto.rol}
              descripcion={proyecto.descripcion}
              link={proyecto.link}
              mail={proyecto.mail}
              linkemail={proyecto.linkemail}
            />
          </div>
          
        ))}
        
      </section>
    );
  
  
  export  { Heading, TeamMembers, StudioImages, Advisors, StudioDescription };
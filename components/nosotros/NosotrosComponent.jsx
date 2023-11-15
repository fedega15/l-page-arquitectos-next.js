import Heading from "./Heading";

const StudioDescription = () => (
    <div className="studio-description">
      <h2>Estudio SSA</h2>
      <p>
         Somos un equipo interdisciplinario enfocado en el diseño y la
              arquitectura, con dedicación a proyectos de todo tipo de escala,
              diseño de mobiliario, objetos, sistemas modulares, y con activa
              participación a concursos nacionales e internacionales. Nuestra
              oficina está impulsada por jóvenes arquitectos, ingenieros,
              interioristas, diseñadores gráficos, industriales que diseñan y
              desarrollan conjuntamente proyectos desde los primeros bocetos hasta
              la supervisión final en obra. En nuestro proceso de trabajo aparece
              el diseño sustentable como eje principal de nuestros proyectos. El
              estudio de los nuevos sistemas de construcción, la transformación y
              evolución de las ciudades, la innovación tecnológica, y el diseño
              eficiente es lo que nos motiva a seguir creciendo.
      </p>
    </div>
  );

const Advisors = ({ colaboradores, colab, prensaTitleControls }) => (
    <section className="grid" id="prensa">
      <Heading title="ASESORES" animationControls={prensaTitleControls} />
      <div className="grid1">
        <div className="cont1">
          <div className="item">
            <h3>Asesores</h3>
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
            <span>Han colaborado con nosotros desde 2014 </span>
            <ul>
              {colab.map((enlace, i) => (
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
  import Image from "next/image";

const StudioImages = ({ galeria }) => (
    <div className="studio-images">
      {galeria.slice(0, 4).map((proyecto) => (
        <div className="studio-image" key={proyecto.id}>
          <Image
                  src={proyecto.estudio}
                  alt={proyecto.name}
                  className="card-image"
                  width={420}
                  height={300}// Tamaño más grande
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
        </div>
      ))}
    </div>
  );

  import Card from "./Card";
  
  const TeamMembers = ({ galeria, equipoTitleControls }) => (
      <section className="grid" id="equipo">
        <Heading title="EQUIPO" animationControls={equipoTitleControls} />
        {galeria.map((proyecto) => (
          <div className="cont" key={proyecto.id}>
            <Card
              image={proyecto.image}
              name={proyecto.name}
              rol={proyecto.rol}
              descripcion={proyecto.descripcion}
            />
          </div>
        ))}
      </section>
    );
  
  
  export  { Heading, TeamMembers, StudioImages, Advisors, StudioDescription };
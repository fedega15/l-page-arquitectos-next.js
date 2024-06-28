const { default: Heading } = require("../nosotros/Heading");

const ServComponent = ({
  servicios,
  /*  showMoreItems, toggleShowMore  */ textAnimationControls,
}) => (
  <section id="galery">
    <Heading title="SERVICIOS" animationControls={textAnimationControls} />
    <div className="grid">
      {servicios.map((proyecto, index) => (
        <div className="cont" key={proyecto.id}>
          <div className="item">
            <h2>{proyecto.name}</h2>
          </div>
          <div className="item">
            <p>{proyecto.descripcion}</p>
          </div>
          <div className="item">
            <h1>Links Destacados:</h1>
            <ul>
              {proyecto.links.map((enlace, i) => (
                <li key={i}>
                  <a href={enlace.link} className="link-destacado">
                    {enlace.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr />
        </div>
      ))}
    </div>
  </section>
);
export default ServComponent;

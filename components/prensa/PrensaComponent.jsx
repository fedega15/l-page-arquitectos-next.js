const { default: Heading } = require("../nosotros/Heading");

const PrensaComponent = ({ Prensa, prensa, textAnimationControls  }) => (

    <section className="grid" id="galery">
    <Heading title="PRENSA" animationControls={textAnimationControls} />
<br />
<div className="press-grid">
  {prensa.map((galeria, i) => (
    <div key={i} className="press-article">
      <Prensa
        img={galeria.img}
        number={galeria.number}
        mes={galeria.mes}
        año={galeria.año}
        title={galeria.title}
        tipo={galeria.tipo}
        enlace={galeria.enlace}
      />
    </div>
  ))}
</div>
</section>
 );
 export default PrensaComponent
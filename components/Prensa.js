// Card.js
import Image from "next/image";
import React from "react";

const Card = ({ img, number, mes, año, title,tipo, enlace }) => {
  return (
    <div>
    <Image
      src={img}
      alt={img}
      width={420}
      height={300}// Tamaño más grande
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="article-header">
      <div className="date">
        <span className="date-number">{number}</span>
        <span className="date-number2">{mes} </span>
        <span className="date-number3">{año} </span>
      </div>
      <div className="article-content">
        <h2>{title}</h2>
        <p>{tipo}</p>

      {/*   <a
          target="_blank"
          href={enlace}
          className="press-link"
        >
          Leer más
        </a> */}
      </div>
    </div>
    </div>
  );
};

export default Card;

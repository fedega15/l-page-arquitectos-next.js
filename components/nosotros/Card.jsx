// Card.js
import Image from "next/image";
import React from "react";

const Card = ({ name, rol, descripcion, image }) => {
  return (
    <div className="card">
      <Image
        src={image}
        alt={name}
        className="card-image"
        width="100"
        height="100"
      />
      <h3>{name}</h3>
      <span>{rol}</span>
      <br/>
      <span>{descripcion}</span>
    </div>
  );
};

export default Card;

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
      <h2>{name}</h2>
      <h3>{rol}</h3>
      <br />
      <h5>{descripcion}</h5>
    </div>
  );
};

export default Card;

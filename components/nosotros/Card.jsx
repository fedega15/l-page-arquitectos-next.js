// Card.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ link , name, rol, descripcion, image,   }) => {
  return (
    <div className="card">
      <Image
        src={image}
        alt={name}
        className="card-image"
        width={420}
        height={300}// Tamaño más grande
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h3>{name}</h3>
      <div>
      <Link href={link}>{rol} </Link>
      </div>
      <br/>
      <span>{descripcion}</span>
    </div>
  );
};

export default Card;

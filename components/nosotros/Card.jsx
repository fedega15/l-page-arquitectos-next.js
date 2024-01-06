import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({ link, name, rol, descripcion, image, mail, linkemail }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card">
      <Image
        src={image}
        alt={name}
        className="card-image"
        width={420}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h3>{name}</h3>

      <br />
      <span>
        {showFullDescription ? (
          <>
            {descripcion}
            <div>
              <br />
              <Link target="_blank" href={linkemail}>
                <h1>{mail}</h1>
              </Link>
            </div>
            <div>
              <Link target="_blank" href={link}>
                <h1>{rol}</h1>
              </Link>
            </div>
          </>
        ) : (
          <>
            {`${descripcion.slice(0, 150)}...`}
       
          </>
        )}
      </span>
      <br />
      {descripcion.length > 150 && (
        <button onClick={toggleDescription}>
          {showFullDescription ? "Leer menos" : "Leer más"}
        </button>
      )}
    </div>
  );
};

export default Card;

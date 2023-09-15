import React from "react";
import "../../../styles/contacto.css";
import Image from "next/image";

const page = () => {
  return (
    <section id="contacto">
      <div className="text-1">
        <div className="img-container">
          <h2>Nuestras oficinas </h2>

          <h1>Santa Fe 2144, 3D</h1>
          <Image src="/map.png" alt="sub" width={488} height={482} border={2} />
        </div>
        <br />
        <br />
        <hr />
        <br />
        <h2>Dejanos tu correo y nos contactamos </h2>
        <p>
          Recibirars un correo en las proximas horas con informacion que podria
          serte muy util
        </p>

        <form>
          <input type="email" required placeholder="Ingresa tu correo" />
          <button aria-label="send" title="send">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <div className="text">
      <div className="img-container">
        <Image src="/sub.png" alt="sub" width={488} height={482} />
      </div>
      </div>
    </section>
  );
};

export default page;

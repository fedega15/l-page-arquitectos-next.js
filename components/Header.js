"use client";
import { useEffect, useState } from "react";

import "../styles/header.css";
import Image from "next/image";

const categories = [
  { name: "Proyectos", link: "/#galery" },
  { name: "Servicios", link: "/Servicios" },
  { name: "Nosotros", link: "/Acerca" },
  { name: "Prensa", link: "/Prensa" },
  { name: "Contacto", link: "/Contacto" },
];
{
  /*     { name: "Proyectos", link: "#proyectos" } */
}
{
  /* { name: "Testimonios", link: "#testimonios" } */
}
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <header
      style={{
        background:
          visible || showMenu
            ? "transparent"
            : "transparent" /* ACA CAMBIE var(--bg-main) POR EL PRIMER TRANSPARENT */,
        boxShadow: visible ? "none" : "none",
      }}
    >
      <nav>
      <a href="/" className="logo">
          <Image
          src= "/mineral.png"
          alt="minerales"
          width={160}
          height={50}
          className="logo"
          />
        </a>

        <div
          className="menu_btn"
          onClick={() => setShowMenu((value) => !value)}
        >
          
          {showMenu ? (
            <i></i>
          ) : (
            <button className="menu-d">
              <strong>MENU</strong>
            </button>
          )}

          <ul
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 5) 0%, rgba(54, 54, 54, 0.6) 500%)",
              height: showMenu ? 475 : 0,
            }}
          >
            <i
              className="fa-solid fa-xmark"
              style={{
                position: "relative",
                left: "10px",
                top: "0px",
               
              }}
            ></i>
            <div className="box-li">
              {categories.map((category) => (
                <li key={category.name}>
                  <a href={category.link} className="active">
                    {category.name}
                  </a>
                </li>
              ))}
            </div>

              <a
                href="//www.instagram.com/ssa_estudio/"
                className="redes"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
               <a href="//wa.link/a6w9de" className="redes">
                <i className="fa-brands fa-whatsapp"></i>
              </a> 
              <a
                href="//www.linkedin.com/in/santiago-semino-arquitectos-60406218b/"
                className="redes"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="//www.facebook.com/ssaestudio?locale=es_LA"
                className="redes"
              >
                <i className="fa-brands fa-facebook-messenger"></i>
              </a>
              <a
                href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79"
                className="redes"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}
              </a>  
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

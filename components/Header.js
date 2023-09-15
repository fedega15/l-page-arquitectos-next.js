"use client";
import { useEffect, useState } from "react";

import "../styles/header.css";

const categories = [
  { name: "Trabajos", link: "/#galery" },
  { name: "Acerca de", link: "/Acerca" },
  { name: "Contacto", link: "/Contacto" },
  { name: "Novedades", link: "/Novedades" },
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
            ? "linear-gradient(180deg,rgba(170, 164, 164, 0.6) 0%,rgba(54, 54, 54, 0.6) 100%)"
            : "transparent" /* ACA CAMBIE var(--bg-main) POR EL PRIMER TRANSPARENT */,
        boxShadow: visible ? "2px 20px 30px var(--shadow-color)" : "none",
      }}
    >
      <nav>
        <a href="/" className="logo">
          <i className="fa-solid fas fa-compass"></i> SSA
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
              height: showMenu ? 950 : 0,
            }}
          >
            <i
              className="fa-solid fa-xmark"
              style={{ position: "relative", left: "230px", top:"15px", color:"rgb(8, 243, 27)"}}
            ></i>
            {categories.map((category) => (
              <li key={category.name}>
                <a href={category.link} className="active">
                  {category.name}
                </a>
              </li>
            ))}
            <div>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/fedegalassi_/" className="redes" ><i className="fa-brands fa-facebook-messenger"></i></a>
            <a href="https://maps.app.goo.gl/3oR6RPvDhTtfmDm79" className="redes" ><i className="fa-solid fa-location-dot"></i> </a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

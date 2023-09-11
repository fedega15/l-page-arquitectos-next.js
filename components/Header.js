"use client";
import { useEffect, useState } from "react";

import "../styles/header.css";

const categories = [

  { name: "Inicio", link: "/" },
  { name: "Galeria", link: "/#galery" },
  { name: "Contacto", link: "/#contacto" },
];  {/*     { name: "Proyectos", link: "#proyectos" } */}
{/* { name: "Testimonios", link: "#testimonios" } */}
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
        background: visible || showMenu ? "var(--bg-main)" : "transparent",
        boxShadow: visible ? "2px 20px 30px var(--shadow-color)" : "none",
      }}
    >
      <nav>
        <a href="#" className="logo">
          <i className="fa-solid fas fa-compass"></i> SSA
        </a>

        <div className="menu_btn" onClick={ () => setShowMenu(value => !value)}>
        {showMenu ? <i className="fa-solid fa-xmark"></i>: <i className="fa-solid fa-bars">  </i>}
        </div>
        <ul style={{ height : showMenu ? 250 : 0}}>
          {categories.map((category) => (
            <li key={category.name}>
              <a href={category.link} className="active">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

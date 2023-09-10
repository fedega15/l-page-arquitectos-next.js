import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <strong>REDES SOCIALES</strong>
          <div className="social">
            <a href="/#" aria-label="facebook" title="facebook">
              <i className="fab fa-facebook-f "></i>
            </a>
            <a href="/#" aria-label="twitter" title="twitter">
              <i className="fab fa-twitter "></i>
            </a>
            <a href="/#" aria-label="instagram" title="instagram">
              <i className="fab fa-instagram "></i>
            </a>
            <a href="/#" aria-label="github" title="github">
              <i className="fab fa-github "></i>
            </a>
          </div>
        </div>
        <div className="box">
            <strong>LINKS</strong>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#galery">Galeria</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </div>
        <div className="box">
            <strong>EXTRA LINKS</strong>
            <ul>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terminos de uso</a></li>
            </ul>
        </div>
        <div className="box">
            <strong>CONTACTO</strong>
          <span><i className="fas fa-map-marker-alt"></i>Santa Fe 1231-Rosario, Argentina</span>
          <span><i className="fas fa-envelope"></i>Federico.galassi9@gmail.com</span>
          <span><i className="fas fa-phone-square-alt"></i>3364689065</span>
        </div>
      </div>
      <span className="copyright"> FedericoGalassiDev 2023- All Copyright Reserved</span>
    </footer>
  );
};

export default Footer;

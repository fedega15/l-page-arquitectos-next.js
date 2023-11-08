"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchArquitecturaData } from "../../../lib/dataFetcher"; 
import "../../../styles/exhibicion.css"


const page = () => {
  const [arquitecturaData, setArquitecturaData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchArquitecturaData();
      setArquitecturaData(data);
    }
    fetchData();
  }, []);

  return (
    <section id="galery">
      <div className="grid">
        {arquitecturaData.map((galeria, index) => (
          <a key={galeria.id} href={`/Arquitectura-photo/${index}`} className="active">
            <div className={`card card-${index}`} key={arquitecturaData.id}>
              <Image
                src={galeria.img}
                alt={galeria.img}
                width={600}
                height={600}
              />
              <div className="box" key={galeria.id}>
                <span className="text"></span>
                <div className="group">
                  <div>
                    <span className="text">
                    <strong>{galeria.name}</strong>
                      {" "}
                      <h3>
                        <i className="fas fa-map-marker-alt"> </i> -{" "}
                        {galeria.ubi}
                      </h3>
                    </span>
                    <h3 className="text">{galeria.year} </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default page;

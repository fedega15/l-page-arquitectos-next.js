"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchArquitecturaData } from "../../../lib/dataFetcher"; 
import "../../../styles/exhibicion.css"


const Page = () => {
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
          <a key={arquitecturaData.id} href={`/Arquitectura-photo/${index}`} className="active">
            <div className={`card card-${index}`} >
              <Image
                src={arquitecturaData.img}
                alt={arquitecturaData.img}
                width={600}
                height={600}
              />
              <div className="box" key={arquitecturaData.id}>
                <span className="text"></span>
                <div className="group">
                  <div>
                    <span className="text">
                    <strong>{arquitecturaData.name}</strong>
                      {" "}
                      <h3>
                        <i className="fas fa-map-marker-alt"> </i> -{" "}
                        {arquitecturaData.ubi}
                      </h3>
                    </span>
                    <h3 className="text">{arquitecturaData.year} </h3>
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

export default Page;

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import Modal from 'react-modal'; // Importa el componente Modal de react-modal

import '../styles/banner.css';

const images = [
  '/bn1.jpg',
  '/bn1.jpg',
  '/bn1.jpg',
  '/bn1.jpg',
  '/bn1.jpg',
  '/bn1.jpg',
];

const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const customStyles = {
    overlay: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo sombreado o desenfocado
      backdropFilter: 'blur(8px)',
      zIndex: 1000, // Ajusta el índice z para asegurarte de que esté por encima de otros elementos
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      maxHeight: '100%',
      borderRadius:"none",
      backgroundColor:"none",
      zIndex: 1001, // Ajusta el índice z para asegurarte de que esté por encima de otros elementos
    },
  };
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // Verificar el ancho de la pantalla y establecer el estado correspondiente
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 900); // Cambia el ancho límite según tus necesidades
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar el ancho inicial al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Si la pantalla es pequeña, ajusta el estilo del modal
  if (isSmallScreen) {
    customStyles.content = {
      ...customStyles.content,
      marginLeft:"17px",
      width: '90%',
      left: '3px',
      transform: 'translate(0, -50%)', // Ajusta la transformación para centrar verticalmente
      top: '55%',
      borderRadius: '0', // Elimina el radio de la esquina para que ocupe toda la pantalla
    };
  }
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalIsOpen(false);
  };

  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => openModal(image)}>
            <div className="slide-content">
              <Image src={image} alt={image} width={1920} height={1280} priority />
              <div className="overlay"></div>
              <div className="text-content">
                <h1>Descripción(opcion)</h1>
                <br></br>
                <br></br>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Ampliada"
         style={customStyles}
        overlayClassName="overlay"
      >
        <div className="modal-content">
{/*           <button onClick={closeModal}>Cerrar</button> */}
          <Image src={selectedImage} alt={selectedImage} width={1920} height={1280} priority />
        </div>
      </Modal>
    </>
  );
};

export default Banner;

import Image from 'next/image';
import React from 'react';
import "../styles/slidermodal.css";

const Slider = () => {
  return (
    <div className='slider1'>
      <div className='slider-container'>
        <div className='slider-track'>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image className='img' src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          <div className='slide'>
            <Image src="/e1.png" alt='/e1.png' width="200" height="200" />
          </div>
          {/* Agrega más imágenes según sea necesario */}
        </div>
      </div>
    </div>
  );
}

export default Slider;

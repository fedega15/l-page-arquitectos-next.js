import React from 'react'
import "../styles/contacto.css"
import Image from 'next/image'

const Contacto = () => {
  return (
    <section id='contacto'>
        <div className='text'>
            <h2>Dejanos tu correo y nos contactamos </h2>
            <p>Recibirars un correo en las proximas horas con informacion que podria serte muy util</p>
            
            <form>
                <input type='email' required placeholder='Ingresa tu correo'/>
                    <button aria-label='send' title='send'>
                        <i className='fas fa-paper-plane'></i>
                    </button>
            </form>
        </div>
        <div className='img.container'>
            <Image  
            src="/sub.png"
            alt='sub'
            width={488}
            height={482}
            />
        </div>
    </section>
  )
}

export default Contacto
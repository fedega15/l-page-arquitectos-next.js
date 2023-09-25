import Link from 'next/link'
import React from 'react'

const Modal = ({children}) => {
  return (
    <div>
        <Link href="/" className='modal'/>
        {children}
    </div>
  )
}

export default Modal
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import '../styles/CartWidget.css'

const cartWidget = () => {
  return (
    <div className='carrito'>
      <a href="" className='icono-carrito'>
        <i><FaCartShopping /></i>
      </a>
      <span className="texto-carrito">3</span>
    </div>
  )
}

export default cartWidget
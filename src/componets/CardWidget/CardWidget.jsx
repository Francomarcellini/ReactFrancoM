import React from 'react'
import './CardWidget.css'


const CardWidget = () => {
    const imgCarrito = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png"
  return (
    <div>
        <img className='imgCarro' src="{imgCarrito}" alt="Carrito "  />
        <strong> 10 </strong>
    </div>
  )
}

export default CardWidget
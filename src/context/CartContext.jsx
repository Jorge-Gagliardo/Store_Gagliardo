import { createContext } from "react";
import { useState } from 'react'

export const CartContext = createContext()


export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [prods, setProds] = useState([])

  return (

    <CartContext.Provider value={{ cart, setCart, prods, setProds }}>
      {children}
    </CartContext.Provider>

  )

}

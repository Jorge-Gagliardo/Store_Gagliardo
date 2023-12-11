import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartContext } from './context/CartContext'
import ItemList from './components/ItemList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Cart from './components/Checkout'

function App() {


  const [cart, setCart] = useState([])
  const [prods, setProds] = useState([])

  return (
    <>
      {/* Proveedor de context */}
      <CartContext.Provider value={{ cart, setCart, prods, setProds }}>


        <BrowserRouter>
          {/* Barra de navegacion */}
          <NavBar />

          {/* Rutas de la store */}
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemList />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App

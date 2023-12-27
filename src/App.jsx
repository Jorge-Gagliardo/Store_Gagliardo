import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'

function App() {


  return (
    <>
      {/* Proveedor de context */}
      <CartProvider>


        <BrowserRouter>
          {/* Barra de navegacion */}
          <NavBar />

          {/* Rutas de la store */}
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>

        </BrowserRouter>



      </CartProvider>
    </>
  )
}

export default App

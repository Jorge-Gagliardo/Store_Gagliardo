import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCartContainer from './components/ItemCartContainer'
import ItemList from './components/ItemList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>

        {/* Barra de navegacion */}
        <NavBar />

        {/* Rutas de la store */}
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoriaId' element={<ItemList />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<ItemCartContainer />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

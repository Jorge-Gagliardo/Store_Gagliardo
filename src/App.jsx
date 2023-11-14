import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemList from './components/ItemList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoriaId' element={<ItemList />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

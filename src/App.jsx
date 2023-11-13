import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

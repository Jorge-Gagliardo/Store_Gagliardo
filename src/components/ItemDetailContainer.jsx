import productos from '../productos.js'

import { useParams } from 'react-router-dom'
import '../styles/ItemDetailContainer.css'
import ItemDetail from './ItemDetail.jsx'

const ItemDetailContainer = () => {
  const { id } = useParams()

  var productoEncontrado = productos.find((producto) => producto.id === parseInt(id))

  return (
    <div className='container-item'>
      <ItemDetail
        titulo = {productoEncontrado.titulo}
        desc = {productoEncontrado.desc}
      />
    </div>
  )
}

export default ItemDetailContainer
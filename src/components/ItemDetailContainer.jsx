import ItemCount from '../components/ItemCount'
import productos from '../productos.js'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import '../styles/ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const { id } = useParams()

  var productoEncontrado = productos.find((producto) => producto.id === parseInt(id))
  console.log(productos)
  console.log(id)
  console.log(productoEncontrado)


  return (
    <div className='container-item'>
      <Card style={{ width: '20rem' }} className='centrar-item'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{productoEncontrado.titulo}</Card.Title>
          <Card.Text>
            {productoEncontrado.desc}
          </Card.Text>
          <ItemCount />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer
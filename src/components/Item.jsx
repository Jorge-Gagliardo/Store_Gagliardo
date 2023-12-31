import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Item.css'
import { Link } from 'react-router-dom'
import imagenRef from '../assets/imagenRef.png'

const Item = ({ titulo, id, desc, precio, categoria, stock, imagen }) => {
  return (
    <div className='container-Item'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={`${imagen}`} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item
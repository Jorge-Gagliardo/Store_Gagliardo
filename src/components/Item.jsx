import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Item.css'
import { Link } from 'react-router-dom'

const Item = ({ titulo, id, desc, precio, categoria }) => {
  return (
    <div className='container-Item'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
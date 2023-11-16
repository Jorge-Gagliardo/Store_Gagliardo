import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount'
import '../styles/ItemDetail.css'
import imagenRef from '../assets/imagenRef.png'

const ItemDetail = ({ titulo, desc }) => {
  return (
    <div className='container-card'>
      <Card style={{ width: '20rem' }} className='centrar-item'>
        <Card.Img variant="top" src={imagenRef} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <ItemCount />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail
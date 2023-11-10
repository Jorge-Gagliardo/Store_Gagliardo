import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Item.css'

const Item = ({ titulo }) => {
  return (
    <div className='container-Item'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item
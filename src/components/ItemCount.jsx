import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import '../styles/ItemCount.css'


const ItemCount = () => {

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);

  const addToCart = () => {
    setShow(true)
  }

  return (
    <div className='centrar-itemCount'>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{ position: "fixed", top: 20, right: 20 }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Producto agregado</strong>
            <small>justo ahora</small>
          </Toast.Header>
          <Toast.Body>{`Has agregado ${count} productos al carrito`}</Toast.Body>
        </Toast>
      <Button variant="primary" onClick={() => setCount(count + 1)}>+</Button>{' '}
      <Badge bg="success">{count}</Badge>{' '}
      <Button variant="danger" onClick={() => setCount(count - 1)}>-</Button>{' '}
      <Button variant="dark" onClick={addToCart}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount
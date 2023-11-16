import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/ItemCount.css'
import ToastCustom from './ToastCustom';


const ItemCount = () => {

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);

  const addToCart = () => {
    setShow(true)
  }

  const handleCloseToast = () => {
    setShow(false);
  };

  return (
    <>
      <ToastCustom
        count = {count}
        showCustom = {show}
        onClose = {handleCloseToast}
      />

      <div className='centrar-itemCount'>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => setCount(count + 1)}>+</Button>
          <Button variant="secondary" onClick={() => setCount(count - 1)}>-</Button>
          <Button variant="secondary" onClick={addToCart}>
            Agregar <Badge bg="info">{count}</Badge>
          </Button>
        </ButtonGroup>
      </div>

    </>
  )
}

export default ItemCount
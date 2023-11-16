import Toast from 'react-bootstrap/Toast';
import { useState } from 'react'

const ToastCustom = ( { count, showCustom, onClose } ) => {
  
  return (
    <>
      <Toast onClose={onClose} show={showCustom} delay={3000} autohide style={{ position: "fixed", top: 80, right: 20 }}>
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
    </>
  )
}

export default ToastCustom
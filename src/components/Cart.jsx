import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/Cart.css'

const Cart = () => {

  const { cart, stCart } = useContext(CartContext)

  return (
    <div>

      {
        cart.map((p) => (
          <div key={p.id} style={{ width: '80%', margin: '0 auto' }}>
            <Card style={{ marginBottom: '15px' }}>
              <Card.Body>
                <Row>
                  {/* Imagen a la izquierda */}
                  <Col md={3}>
                    <Card.Img src={`../src/assets/${p.imagen}.jpg`} style={{ width: '100%', height: 'auto' }} />
                  </Col>

                  {/* Contenido a la derecha */}
                  <Col md={9}>
                    <Row style={{ height: '100%' }}>
                      {/* Columna 1 */}
                      <Col>
                        <Card.Title>Producto</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.titulo}</Card.Text>
                        </div>
                      </Col>

                      {/* Columna 2 */}
                      <Col>
                        <Card.Title>Precio</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.precio} USD</Card.Text>
                        </div>
                      </Col>

                      {/* Columna 3 */}
                      <Col>
                        <Card.Title>Cantidad</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.count}</Card.Text>
                        </div>
                      </Col>

                      {/* Columna 4 */}
                      <Col>
                        <Card.Title>Total</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.precio * p.count} USD</Card.Text>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>


        ))
      }

    </div>
  )
}

export default Cart




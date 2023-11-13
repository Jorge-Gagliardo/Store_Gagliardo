import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

import React from 'react'
import CartWidget from './cartWidget'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to={'/'}>
          <Navbar.Brand>STORE</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Items" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ITEM 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ITEM 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ITEM 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Home</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={'/cart'}>
          <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  )
}



export default NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

import CartWidget from './cartWidget'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary estilos-navbar">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='estilos-elementos-navbar'>
              STORE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Cambiar estos href */}
              <div className='container-elementos-navbar'>
              <div className='elemento-navbar'>
                <Link className='estilos-elementos-navbar' to={'/'}>
                  Home
                </Link>
              </div>

              <div className='elemento-navbar'>
                <Link className='estilos-elementos-navbar' to={'/contacto'}>
                  Contacto
                </Link>
              </div>
              </div>
              

              <NavDropdown title="Categorías" id="basic-nav-dropdown">

                <div className='items'>
                  <Link to="/categoria/categoria1" className='texto'>Categoría 1</Link>
                </div>

                <div className='items'>
                  <Link to="/categoria/categoria2" className='texto'>Categoría 2</Link>
                </div>

                <div className='items'>
                  <Link to="/categoria/categoria3" className='texto'>Categoría 3</Link>
                </div>

                <NavDropdown.Divider />

                <div className='items'>
                  <Link to="/" className='texto'>Home</Link>
                </div>

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
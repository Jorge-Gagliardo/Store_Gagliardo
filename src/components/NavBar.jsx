import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import CartWidget from './cartWidget'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary estilos-navbar">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='estilos-elementos-navbar'>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Level Up Games
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

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
                  <Link to="/categoria/consolas" className='texto'>Consolas</Link>
                </div>

                <div className='items'>
                  <Link to="/categoria/computadoras" className='texto'>Computadoras</Link>
                </div>

                <div className='items'>
                  <Link to="/categoria/accesorios" className='texto'>Accesorios</Link>
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
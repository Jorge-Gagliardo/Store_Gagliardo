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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>
            <Link to={'/'}>
              STORE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              //!Cambiar estos href
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">

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




      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>
              STORE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Categoría" id="basic-nav-dropdown">
                <NavDropdown.Item className='items'>
                  <Link to="/categoria/categoria1" className='texto'>ITEM 1</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className='items'>
                  <Link to="/categoria/categoria2" className='texto'>ITEM 2</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className='items'>
                  <Link to="/categoria/categoria3" className='texto'>ITEM 3</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item className='items'>
                  <Link to="/" className='texto'>Home</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </Container>
      </Navbar> */}
    </>
  )
}



export default NavBar
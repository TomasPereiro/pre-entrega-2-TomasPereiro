import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function NavBar() {

 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/'>The Beach</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/category/women's clothing">
              <Nav.Link>women's clothing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/men's clothing">
              <Nav.Link>men's clothing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/electronics">
              <Nav.Link>electronics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/jewlery">
              <Nav.Link>jewlery</Nav.Link>
            </LinkContainer>
            <Nav.Link>cart:</Nav.Link>
            




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}


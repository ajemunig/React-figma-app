import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaStar, FaSitemap} from 'react-icons/fa';
import { AiFillCompass } from 'react-icons/ai';

const NavBar = () => {
  const iconStyle = { verticalAlign: 'middle' };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Nav className="me-auto">
         <Nav.Link as={Link} to="/"> <FaHome /> Home</Nav.Link>

        <NavDropdown title={<span><FaStar style={iconStyle} /> Stores</span>} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/stores">  Stores  </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title={<span><FaSitemap style={iconStyle} /> Item Lists</span>} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/items">Item Lists</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title={<span><AiFillCompass style={iconStyle} /> Deals Summary </span>} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/deals">Deals Summary</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;


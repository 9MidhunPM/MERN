import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const location = useLocation();

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          Employee Dashboard
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' || location.pathname === '/dashboard' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/employee-form"
              className={location.pathname === '/employee-form' ? 'active' : ''}
            >
              Employee Form
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

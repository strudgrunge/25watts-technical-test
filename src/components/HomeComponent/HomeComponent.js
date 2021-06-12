import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './HomeComponent.css';

const HomeComponent = () => {
  return (
    <div className="nav-container">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="#home">
            <div className="logo-container">
              <img src="assets/logo_25w.svg" alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav justify-content-end w-100">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default HomeComponent;

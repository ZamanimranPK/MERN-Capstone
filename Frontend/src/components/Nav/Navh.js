import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';


function Navh() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" onClick={handleShow}>IoT Web Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Button variant="secondary">Logout</Button>{' '}
          </Nav>
        </Navbar.Collapse>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Home
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                    Devices
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                    Logout
                </ListGroup.Item>
            </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navh;
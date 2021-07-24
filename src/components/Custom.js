import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar(){
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Asset Discovery Tool</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Link</Nav.Link>
                <Nav.Link href="#features">Link</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function CustomNavbar(){
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Asset Discovery Tool</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;
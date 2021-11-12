import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Head = (Props) => {
    return (
        <>
            <Navbar  bg="primary" variant='dark' collapseOnSelect expand="lg" class="navbar ">
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="me-auto  navbar-nav">
                        
                    <Nav.Link href="/">{Props.item1}</Nav.Link>
                    <Nav.Link href="#about">{Props.item2}</Nav.Link>
                    <Nav.Link href="#team">{Props.item3}</Nav.Link>
                    <Nav.Link href="#Contact">{Props.item4}</Nav.Link>
                    <Nav.Link href="#Services">{Props.item5}</Nav.Link>
                    <Nav.Link href="#service">{Props.item6}</Nav.Link>
                    <Nav.Link href="#home">{Props.item7}</Nav.Link>
                    <Nav.Link href="#features">{Props.item8}</Nav.Link>
                    <Nav.Link href="#pricing">{Props.item9}</Nav.Link>
                    <Nav.Link href="#home">{Props.item10}</Nav.Link>
                    <Nav.Link href="#features">{Props.item11}</Nav.Link>
                    <Nav.Link href="#pricing">{Props.item12}</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};
export default Head;

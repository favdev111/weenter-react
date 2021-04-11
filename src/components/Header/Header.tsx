import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Image } from 'react-bootstrap';

import logo from "../../assets/img/logo.png";
import './Header.scss';

function Header() {
    return (
        <div className="container">
            <Navbar>
                <Navbar.Brand href="#home">
                    <Image src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto custom-nav-left gothic-400-16">
                        <Nav.Link href="#home">Our team</Nav.Link>
                        <Nav.Link href="#link">Tokens</Nav.Link>
                        <Nav.Link href="">Connect wallet</Nav.Link>
                        <Nav.Link href="">LightPaper</Nav.Link>
                    </Nav>
                    <Button variant="outline-green gothic-400-16 border-btn">Connect wallet</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export { Header };
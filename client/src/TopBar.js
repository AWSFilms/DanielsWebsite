import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { NavBar, Nav, NavItem, NavDropdown, Navbar, Container } from 'react-bootstrap';
import Destinations from './Destinations';
import { Link } from 'react-router-dom';
import Logo from '/Users/danielvass/Documents/danielwebsite/src/pictures/Logo.jpeg';

function TopBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Fly Low
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="Destinations">Destinations</Nav.Link>
                    <Nav.Link href="About">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        /*
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            */
    );
};

export default TopBar;

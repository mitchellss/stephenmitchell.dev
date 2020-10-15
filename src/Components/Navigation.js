import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import github from '../githublogo.png';

export default class TopNavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">StephenMitchell.us</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/skyprecision">Capstone: Skyprecision</NavDropdown.Item>
                            <NavDropdown.Item href="/irl_skilltrees">Irl Skill Trees</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/mitchellss">
                            Github
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/stephen-mitchell-287608170/">
                            LinkedIn 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
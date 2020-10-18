import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

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
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/research">Research</Nav.Link>
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
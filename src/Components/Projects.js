import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="cardcontainer card3">
                <Card bg="dark" >
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>SkyPrecision: Aerial Multispectral Imaging for Precision Agriculture</Card.Title>
                        <Card.Text>Building the frontend, backend, and infrastructure of a web-app for crop visualization.</Card.Text>
                        <Link to="/projects/skyprecision">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>PlayerTrak</Card.Title>
                        <Card.Text>Developing an algorithm for measuring the drop jump ratio based on biometric data.</Card.Text>
                        <Link to="/projects/playertrak">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>StephenMitchell.us</Card.Title>
                        <Card.Text>The process I went through and tools I used to build this website.</Card.Text>
                        <Link to="/projects/stephenmitchellus">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
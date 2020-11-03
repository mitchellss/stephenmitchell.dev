import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vineyard_pic from '../vineyard.jpg';
import research_pic from '../research.jpg';
import card_code from '../card_code.png';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="cardcontainer card3">
                <Card bg="dark" >
                    <Card.Img variant="top" src={vineyard_pic} />
                    <Card.Body>
                        <Card.Title>SkyPrecision: Aerial Multispectral Imaging for Precision Agriculture</Card.Title>
                        <Card.Text>Building the frontend, backend, and infrastructure of a web-app for crop visualization.</Card.Text>
                        <Link to="/projects/skyprecision">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src={research_pic} />
                    <Card.Body>
                        <Card.Title>PlayerTrak: Measuring the Drop Jump Ratio with Intertial Measurement Units</Card.Title>
                        <Card.Text>Developing an algorithm to calculate athletic performace proxies based on biometric data.</Card.Text>
                        <Link to="/projects/playertrak">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src={card_code} />
                    <Card.Body>
                        <Card.Title>StephenMitchell.us</Card.Title>
                        <Card.Text>
                            The process I went through and tools 
                            I used to build this website.
                        </Card.Text>
                        <Link to="/projects/stephenmitchellus">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
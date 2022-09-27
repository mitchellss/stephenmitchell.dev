import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vineyard_pic from '../vineyard.jpg';
import research_pic from '../research.jpg';
import card_code from '../card_code.png';
import coming_soon from '../coming_soon.png';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="cardcontainer card3">
                <Card bg="dark" className="card5">
                    <Card.Img variant="top" src={vineyard_pic} />
                    <Card.Body>
                        <Card.Title>Embedded Systems for Precision Agriculture</Card.Title>
                        <Card.Text>Building the frontend, backend, and infrastructure of a web-app for vineyard frost prediction.</Card.Text>
                        <Link to="/projects/espa">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src={research_pic} />
                    <Card.Body>
                        <Card.Title>PlayerTrak: Exploring Amateur Performance in Athletic Tests Using Wearable Sensors</Card.Title>
                        <Card.Text>Developing an algorithm to calculate athletic performace proxies based on biometric data.</Card.Text>
                        <Link to="/projects/playertrak">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src={card_code} />
                    <Card.Body>
                        <Card.Title>StephenMitchell.dev</Card.Title>
                        <Card.Text>
                            The process I went through and tools
                            I used to build this website.
                        </Card.Text>
                        <Link to="/projects/stephenmitchelldev">
                            <Button variant="primary">Go Here</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card bg="dark" >
                    <Card.Img variant="top" src={coming_soon} />
                    <Card.Body>
                        <Card.Title>Recipe Rest</Card.Title>
                        <Card.Text>
                            Self-hosted solution to the problem of inconsistent online recipe formatting
                        </Card.Text>
                        <Button variant="primary" disabled>Go Here</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import img1 from '../bannerdesktop.jpg';
import img2 from '../bannermobile.jpg';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="mobileimagecontainer">
                    <img
                        className="d-block w-100 mobilebanner unselectable"
                        src={img2}
                        alt="First slide"
                    />
                    <h1 className="mobileimagetext">Hi, I'm Stephen.<br />Welcome to my <br />website!</h1>
                </div>

                <div className="desktopimagecontainer">
                    <img
                        className="d-block w-100 desktopbanner"
                        src={img1}
                        alt="First slide"
                    />
                    <h1 className="desktopimagetext">Hi, I'm Stephen.<br />Welcome to my website!</h1>
                </div>

                <div className="cardcontainer">
                    <Card bg="dark" >
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>Learn about who I am and what I am passionate about.</Card.Text>
                            <Link to="/about">
                                <Button variant="primary">Go Here</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card bg="dark" >
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>My Projects</Card.Title>
                            <Card.Text>Take a look at the projects I am working on!</Card.Text>
                            <Link to="/projects">
                                <Button variant="primary">Go Here</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card bg="dark" >
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Contact Me</Card.Title>
                            <Card.Text>Send me an email or give me a call!</Card.Text>
                            <Link to="/contact">
                                <Button variant="primary">Go Here</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
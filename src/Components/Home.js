import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css';
import img1 from '../bannerdesktop.jpg';
import img2 from '../bannermobile.jpg';

export default class Home extends React.Component {
    render() {
        return (
            <div>

                <div className="mobileimagecontainer">
                    <img
                        className="d-block w-100 mobilebanner"
                        src={img2}
                        alt="First slide"
                    />
                    <h1 className="mobileimagetext unselectable">Hi, I'm Stephen.<br />Welcome to my <br/>website!</h1>
                </div>

                <div className="desktopimagecontainer">
                    <img
                        className="d-block w-100 desktopbanner"
                        src={img1}
                        alt="First slide"
                    />
                    <h1 className="desktopimagetext unselectable">Hi, I'm Stephen.<br />Welcome to my website!</h1>
                </div>

                <div className="cardcontainer">
                    <Card >
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>Learn about who I am and what I am passionate about.</Card.Text>
                            <Button href="/about" variant="primary">Go Here</Button>
                        </Card.Body>
                    </Card>

                    <Card >
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>My Skills</Card.Title>
                            <Card.Text>See what I have picked up on over the years.</Card.Text>
                            <Button href="/skills" variant="primary">Go Here</Button>
                        </Card.Body>
                    </Card>

                    <Card >
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>My Projects</Card.Title>
                            <Card.Text>Take a look at the projects I am working on!</Card.Text>
                            <Button href="/projects" variant="primary">Go Here</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
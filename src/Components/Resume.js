import React from 'react';
import { Card, Button } from 'react-bootstrap';
import img1 from '../resume_pic.jpg';
import resume from '../Stephen.Mitchell.Resume.pdf';

export default class Resume extends React.Component {
    render() {
        return (
            <div className="cardcontainer card2">
                <Card bg="dark" >
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Resume</Card.Title>
                        <Card.Text>Click to view my resume!</Card.Text>
                        <Button variant="primary" target="_blank" href={resume}>Go Here</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
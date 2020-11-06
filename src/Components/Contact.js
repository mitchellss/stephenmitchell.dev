import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';
import img1 from '../fall.jpg';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="cardcontainer card4">
                    <Image src={img1} className="test2"/>
                    <Card bg="dark" >
                        <Card.Body>
                            <Card.Title>Contact Me</Card.Title>
                            <Card.Text>If you have any questions feel free to contact me! I can be reached in the following ways:</Card.Text>
                            <ListGroup bg="dark">
                                <ListGroup.Item bsPrefix="list-group-item1">Phone: (703) 488 8863</ListGroup.Item>
                                <ListGroup.Item bsPrefix="list-group-item1">Email: mitchess@dukes.jmu.edu</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
import React from 'react';
import { Card, Button, Breadcrumb, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import img1 from '../vineyard2.jpg';

export default class SkyPrecision extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb bsPrefix="breadcrumb1">
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>
                        Embedded Systems for Precision Agriculture
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="test">
                    <Image src={img1} fluid />
                    <h1 className="desktopimagetext2 blackbackground">Embedded Systems for Precision Agriculture</h1>
                </div>

                <div className="underbannertext2">
                    <p className="infotext">
                        Embedded Systems for Precision Agriculture was the name of my two year capstone project. Aimed at bringing precision agriculture to a vineyard in Bridgewater, Virginia.
                    </p>
                </div>

                <div className="cardcontainer card5">
                    <Card bg="dark" >
                        <Card.Body>
                            <Card.Title>Find This Project on GitHub</Card.Title>
                            {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitchellss/skyprecision_api">
                                <Button variant="primary" className="buttonspace">Go to API</Button>
                            </a> */}
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitchellss/skyprecision_client">
                                <Button variant="primary">Go to frontend</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}
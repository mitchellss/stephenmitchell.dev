import React from 'react';
import { Card, Button, Breadcrumb, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import img1 from '../bannerdjr.png';

export default class PlayerTrak extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb bsPrefix="breadcrumb1" >
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>
                        PlayerTrak
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="test">
                    <Image src={img1} className="test2"/>
                    <h1 className="desktopimagetext2 blackbackground">PlayerTrak</h1>
                </div>

                <div className="underbannertext2">
                    <p className="infotext">
                        PlayerTrak is the research project I have been working on with Dr. Jason Forsyth to track athletic performance using wearable sensors.
                    </p>
                </div>

                <div className="cardcontainer card5">
                <Card bg="dark" >
                    <Card.Body>
                        <Card.Title>Find Our Conference Paper</Card.Title>
                        <a target="_blank" rel="noopener noreferrer" href="https://ieeexplore.ieee.org/document/9483715">
                            <Button variant="primary" className="buttonspace">Go to IEEE Xplore</Button>
                        </a>
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
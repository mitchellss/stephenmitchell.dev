import React from 'react';
import { Card, Button, Breadcrumb, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import img1 from '../websitebanner.jpg';

export default class PersonalWebsite extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb bsPrefix="breadcrumb1">
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>
                        StephenMitchell.us
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="test">
                    <Image src={img1} className="test2"/>
                    <h1 className="desktopimagetext2 blackbackground">StephenMitchell.us</h1>
                </div>

                <div className="underbannertext2">
                    <p className="infotext">
                        I built this website with react-bootstrap in order to make myself and my projects more easily accessible to future employers. I'm glad you found it :)
                    </p>
                </div>

                <div className="underbannertext2">
                    <p className="infotext">
                        I use GitHub actions in order to rebuild the site any time I make a commit to the main branch. The site is hosted on an AWS S3 bucket.
                    </p>
                </div>

                <div className="cardcontainer card5">
                <Card bg="dark" >
                    <Card.Body>
                        <Card.Title>Find This Project on GitHub</Card.Title>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitchellss/stephenmitchell.us">
                            <Button variant="primary" className="buttonspace">Go to GitHub</Button>
                        </a>
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
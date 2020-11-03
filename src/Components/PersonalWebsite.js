import React from 'react';
import { Breadcrumb, Image } from 'react-bootstrap';
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
            </div>
        )
    }
}
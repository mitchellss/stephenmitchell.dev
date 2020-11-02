import React from 'react';
import { Image } from 'react-bootstrap';
import img1 from '../about_desktop.jpg';
import img2 from '../girlfriendpic.jpg';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className="aboutmebanner">
                    <div className="aboutmetext">
                        <h1 className="center">About Me</h1>
                    </div>
                    <Image src={img1} fluid className="aboutmebannerpic" />
                </div>
                <div className="underbannertext">
                    <p className="infotext">Hello and welcome to my website! My name is Stephen Mitchell and I am a Junior at James Madison University majoring in Computer Science and Engineering. I am also an avid hiker and archer in my free time (the above picture is the JMU men’s bowhunter squad from the 2020 USA Archery Indoor Nationals and the below picture is my girlfriend and me hiking a trail at Rocky Gap in Maryland).</p>
                </div>
                <div className="lowerbanner">
                    <Image src={img2} fluid className="girlfriendpic" />
                    <div className="textandquote">
                        <div className="lowertext">
                            <p className="test">In the summers I like to spend my time swimming, surfing, and paddleboarding on the beaches in Maine with my two brothers and my dog. I love staying active and busy and I am never afraid to take on a new challenge. <br /><br />I am a lifelong learner with a passion for DevOps engineering that I hope to bring to the company I end up working for. Feel free to take a look at the projects I am working on and my previous experience and let me know if you would be interested in having me work for you.</p>
                        </div>
                        <h2 className="quote">“I shall pass this way but once; any good, therefore, that I can do or any kindness that I can show to any human being, let me do 		it now. Let me not defer nor neglect it, for I shall not pass this 		way again.”<br />- Etienne de Grellet</h2>
                    </div>
                </div>
            </div>
        )
    }
}
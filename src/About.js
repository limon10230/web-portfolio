import React from 'react';
import {Col, Container, Row, Button } from 'react-bootstrap';
import './About.css'
import aboutImg from './image/img2.png'

const About = () => {
    return (
        <div>
           <Container className="bgColor">
  <Row>
  <Col> 
    <img className="aboutImg" src={aboutImg} alt="" />
    </Col>

    <Col className="about">
   
   <h1>ABOUT ME</h1><br />
   <h4>I fell in love with programming and I have at least learnt something, I think… I am fluent in classics like C++, Javascript and Python. My field of Interest's are building new Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing. Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js</h4>
   <br />
  <a href="https://drive.google.com/file/d/1B9N4fQPbHEcgnvUroH7IDKV1vw-wDpgm/view?usp=sharing"target="_blank"> <Button className="button" variant="primary" size="lg" >
    Hire Me
  </Button></a>
  
    </Col>
    
  </Row>
  
</Container>

        </div>
    );
};

export default About;
import React from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import './Home.css'
import image from "./image/banner.jpg"
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MHL</Navbar.Brand>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/project">Project</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact">
        Contact
      </Nav.Link>
    </Nav.Item>
  </Nav>

    </Container>
  </Navbar>

  <Container className="homeBg">
  <Row>
    <Col className="home">
   <Zoom right><h5>WELCOME TO MY WORLD</h5></Zoom>
   <h1>Hi, I'm Mehedi Hasan  Limon</h1>
   
   <Zoom left>
   <h1 className="text-color">Frontend Developer.</h1>
        </Zoom>
   <br />

   <a href="https://drive.google.com/file/d/1B9N4fQPbHEcgnvUroH7IDKV1vw-wDpgm/view?usp=sharing"target="_blank"> <Button className="button" variant="primary" size="lg" >
    Download CV
  </Button></a>
    </Col>
    <Col> 
    <img className="image" src={image} alt="" />
    </Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Home;
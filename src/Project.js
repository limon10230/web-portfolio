import React from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';
import './Project.css'
import Zoom from 'react-reveal/Zoom';
import cycleImg from './image/Screenshot_cycleShop.png'
import dentalImg from './image/Screenshot_dental.png'
import teacherImg from './image/Screenshot_topTeacher.png'

const Project = () => {
    return (
        <div>
           <div>
           <Zoom left>
   <h1>My Latest Project.</h1>
        </Zoom>
           <br />
           </div>
           <div>
           <Row xs={1} md={2} className="g-4">
 
    <Col>
      <Card>
        <Card.Img variant="top" src={cycleImg} />
        <Card.Body>
          <h3>Cycle Shop</h3>
          <a href="https://cycle-shop-542b8.web.app/"target="_blank"> <Button className="button" variant="primary" size="lg" >
    Preview
  </Button></a>
  <a href="https://github.com/programming-hero-web-course-4/niche-website-server-side-limon10230"target="_blank"> <Button className="button" variant="primary" size="lg" >
   Client Code
  </Button></a>
  <a href="https://cycle-shop-542b8.web.app/"target="_blank"> <Button className="button" variant="primary" size="lg" >
   Server Code
  </Button></a>

        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src={dentalImg} />
        <Card.Body>
          <h3>Dental Care</h3>
          <a href="https://dental-health-care-5f52d.web.app/"target="_blank"> <Button className="button" variant="primary" size="lg" >
    Preview
  </Button></a>
  <a href="https://github.com/limon10230/dental-health"target="_blank"> <Button className="button" variant="primary" size="lg" >
   Client Code
  </Button></a>
  

        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src={teacherImg} />
        <Card.Body>
          <h3>Top Teacher Found:</h3>
          <a href="https://top-teachers-team.netlify.app/"target="_blank"> <Button className="button" variant="primary" size="lg" >
    Preview
  </Button></a>
  <a href="https://github.com/limon10230/teacher-team"target="_blank"> <Button className="button" variant="primary" size="lg" >
   Client Code
  </Button></a>
 

        </Card.Body>
      </Card>
    </Col>
 
</Row>
           </div>
        </div>
       
    );
};

export default Project;
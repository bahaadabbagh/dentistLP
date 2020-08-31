import React from "react";
import { Carousel, Col, Row, Button } from "react-bootstrap";
import firstSlide from "../images/dantal.png";
import secondSlide from "../images/dantal1.png";
import thirdSlide from "../images/dantal2.png";

export default function homeCarousel() {
  return (
    <Carousel className="mainCarousel">
      <Carousel.Item>
        <Row>
          <Col className="carouselText" md="5">
            <span className="carouselHero">STOP NUMBING <br/>START REPAIRING</span>
            <h5>  <br/>  <br/> The bold mission of America's MEDITEX Companies is to bring an end to the burdens of disease, in all it's forms</h5>
            <Row className="carouselButtons">
            <Button className="greenButton"> <strong>Departments</strong></Button>
            <Button className="blackButton"> <strong>Get in touch</strong></Button>
            </Row>
          </Col>
          <Col className="carouselImg" md="7">
            <img src={firstSlide} alt="First slide"/>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col className="carouselText" md="5">
            <span className="carouselHero">STRONGER TEETH <br/> FOR THE FUTURE</span>
            <h5>  <br/>  <br/> The bold mission of America's MEDITEX Companies is to bring an end to the burdens of disease, in all it's forms</h5>
            <Row className="carouselButtons">
            <Button className="greenButton"> <strong>Departments</strong></Button>
            <Button className="blackButton"> <strong>Get in touch</strong></Button>
            </Row>
          </Col>
          <Col className="carouselImg" md="7">
            <img src={secondSlide} alt="second slide"  />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col className="carouselText" md="5">
            <span className="carouselHero">FOR A <br/> SUPERSTAR SM </span>
            <h5>  <br/>  <br/> The bold mission of America's MEDITEX Companies is to bring an end to the burdens of disease, in all it's forms</h5>
            <Row className="carouselButtons">
            <Button className="greenButton"> <strong>Departments</strong></Button>
            <Button className="blackButton"> <strong>Get in touch</strong></Button>
            </Row>
          </Col>
          <Col className="carouselImg" md="7">
            <img src={thirdSlide} alt="Third slide" width="100%"/>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

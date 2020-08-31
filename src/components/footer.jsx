import React from "react";
import logo from "../images/logo.jpg";
import recentPosts from "../images/recentPosts.jpg";
import copyrights from "../images/copyrights.jpg";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
  return (
    <Container>
      <Row>
        <Col className="footerCol" md="4">
          <Row>
            <img src={logo} alt="logo" />
          </Row>
          <Row>
            <i class="fas fa-map-marker-alt" id="randomIcon"></i>
            <p>7088 Micaela Cliffs, Thielshire, USA</p>
          </Row>
          <Row>
            <i class="fas fa-phone-alt" id="randomIcon"></i>
            <p>(052) 611-5711</p>
          </Row>
          <Row>
            <i class="far fa-envelope" id="randomIcon"></i>
            <p>hello@medicol.com</p>
          </Row>
          <Row>
            <i class="fab fa-facebook" id="socialIcons"></i>
            <i class="fab fa-twitter" id="socialIcons"></i>
            <i class="fab fa-linkedin-in" id="socialIcons"></i>
            <i class="fab fa-instagram" id="socialIcons"></i>
            <i class="fab fa-skype" id="socialIcons"></i>
          </Row>
        </Col>
        <Col md="4" >
          <img src={recentPosts} alt="recentPosts" width="100%" />
        </Col>
        <Col md="4" className="footerCol">
          <Row>
            <h4>Newsletter</h4>
          </Row>
          <Row>
            <p>Subscribe to our newsletter. We are not spammers.!</p>
          </Row>
          <Row>
            <input type="email" placeholder="Your email address" className="subscribeMail" required></input>
          </Row>
          <Row>
            <button type="submit"className="contactUsButton"id="subsicribeButton">
              <strong>SUBSCRIBE</strong>
            </button>
          </Row>
        </Col>
      </Row>
      <Row>
        <img src={copyrights} alt="copyrights" width="100%" />
      </Row>
    </Container>
  );
}

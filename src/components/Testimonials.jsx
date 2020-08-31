import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import testimonialsImg from "../images/testimonialsImg.jpg"
 
export default function Testimonials() {
    return (
        <div className="testimonials">
            <Row >
                <Col>
           <h3 className="testimonialsHero">TESTIMONIALS</h3>
           </Col>
           <Col md="4"></Col>
           <Col className="buttonCol"> 
           
           <button className="testimonialButton"><i class="fas fa-angle-left"></i></button>
           <button className="testimonialButton"><i class="fas fa-angle-right"></i></button>
           </Col>
           </Row>
           
           <Row>
               <img src={testimonialsImg} alt="testimonial" width="100%" />
           </Row>
        </div>
    )
}


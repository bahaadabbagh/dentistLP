import React from 'react';
import {Row, Col} from "react-bootstrap";
import testimonialsImg from "../images/testimonialsImg.jpg"
 
export default function Testimonials() {
    return (
        <div>
            <Row>
                <Col md="4">
           <h3><strong>TESTIMONIALS</strong></h3>
           </Col>
           <Col md="4"></Col>
           <Col md="4" className="buttonCol"> 
           <button className="testimonialButton">&lt;</button>
           <button className="testimonialButton">&gt; </button>
           </Col>
           </Row>
           <Row>
               <img src={testimonialsImg} alt="testimonial image" width="100%" />
           </Row>
        </div>
    )
}


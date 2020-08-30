import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {Col} from "react-bootstrap"

export default function loginPgae() {
    return (
<div className="allForm">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.85229192479!2d28.97633693668368!3d41.037001418764085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIFNxdWFyZSwgR8O8bcO8xZ9zdXl1LCAzNDQzNSBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1598785426750!5m2!1sen!2str" width="100%" height="500rem" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className="map"></iframe>
    <MDBContainer className="homeForm">
      <MDBRow>
      <Col md="7"></Col>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody className="innerForm">
              <form >
                <h5 className="py-4">GET IN TOUCH</h5>
                <div className="grey-text">
                  <input
                    placeholder="Name"
                    group
                    type="text"
                    className="formInput"
                    required
                  />
                  <input
                    placeholder="Email"
                    group
                    type="email"
                    className="formInput"
                    required
                  />
                  <input
                    placeholder="Phone"
                    group
                    type="tel"
                    className="formInput"
                    required
                  />
                  <input
                    placeholder="Message"
                    group
                    type="text"
                    className="formInput"
                    id="messageInput"
                    required
                  />
                </div>
                {/* <div className=" py-4 mt-2"> */}
                    <button color="cyan" type="submit" className="formButton">
                    <strong>SEND MESSAGE </strong>
                 
                   </button>
                {/* </div> */}
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>        
</div>
    )
}





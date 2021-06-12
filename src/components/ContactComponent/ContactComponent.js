import React from 'react';
import { Form, Container } from 'react-bootstrap';
import './ContactComponent.css';

const ContactComponent = () => {
  return (
    <div id="contact" className="contact">
      <Container>
        <h1>Get in touch </h1>
        <h2>We are hiring!</h2>
        <div className="contact-container">
          <Form>
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              {/* <Form.Label>Phone</Form.Label> */}
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <button className="btn-custom">Send</button>
          </Form>
          <div className="contact-img">
            <img src="assets/image.png" alt="img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactComponent;

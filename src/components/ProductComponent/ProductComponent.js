import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './ProductComponent.css';

const ProductComponent = () => {
  return (
    <div id="product" className="product-container">
      <div className="acord">
        <Accordion defaultActiveKey="0" className="w-75">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              style={{ fontWeight: 'bold' }}
            >
              Sed ut perspiciatis
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              style={{ fontWeight: 'bold' }}
            >
              Ut enim ad minima veniam
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.y
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              style={{ fontWeight: 'bold' }}
            >
              Sit amet, consectetur, adipisci
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      {/* <div>
        <img src="assets/image-1.png" alt="img" />
    </div> */}
    </div>
  );
};

export default ProductComponent;

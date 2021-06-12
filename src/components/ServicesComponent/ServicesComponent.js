import React from 'react';
import { Container } from 'react-bootstrap';
import './ServicesComponent.css';

const ServicesComponent = () => {
  return (
    <div id="services" className="services">
      <Container className="services-contain">
        <div
          className="services-container"
          // style={{
          //   backgroundImage: `url(${process.env.PUBLIC_URL + '/image-2.png'})`,
          //   BackgroundRepeat: 'no-repeat',
          //   BackgroundPosition: 'top center',
          // }}
        >
          <div className="services-slide">
            <div className="slide-card">
              <div>
                <p>Sed ut perspiciatis</p>
                <h3>Nemo Enim</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <div className="slide-arrows">
                  <img src="assets/left.svg" alt="icon" />
                  <img src="assets/right.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ServicesComponent;

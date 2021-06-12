import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel touch>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/slide1-background.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            malesuada orci eget convallis maximus.
          </p>
          <button className="btn-custom">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/slide2-background.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            malesuada orci eget convallis maximus.
          </p>
          <button className="btn-custom">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/slide3-background.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            malesuada orci eget convallis maximus.
          </p>
          <button className="btn-custom">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselComponent;

import React from 'react';
import './AboutComponent.css';

const AboutComponent = () => {
  return (
    <div id="about">
      <div id="paginated-card" className="content">
        <div className="card-scroller">
          <div className="colored_card">
            <img src="assets/globe.svg" alt="icon" />
            <h3>Stet clita kasd gubergren</h3>
          </div>
          <div className="colored_card">
            <img src="assets/cloud.svg" alt="icon" />
            <h3>At vero eos et accusam</h3>
          </div>
          <div className="colored_card">
            <img src="assets/headset.svg" alt="icon" />
            <h3>Sed ut perspiciatis unde</h3>
          </div>
          <div className="colored_card">
            <img src="assets/users.svg" alt="icon" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>We Help Businesses</h1>
        <h2> Grow and Innovate</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
    </div>
  );
};
export default AboutComponent;

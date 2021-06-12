import React from 'react';
import HomeComponent from '../components/HomeComponent/HomeComponent';
import AboutComponent from '../components/AboutComponent/AboutComponent';
import CarouselComponent from '../components/CarouselComponent/CarouselComponent';
import ServicesComponent from '../components/ServicesComponent/ServicesComponent';
import ProductComponent from '../components/ProductComponent/ProductComponent';
import ContactComponent from '../components/ContactComponent/ContactComponent';
import './Page.css';

const Page = () => {
  return (
    <div>
      <HomeComponent />
      <CarouselComponent />
      <AboutComponent />
      <ServicesComponent />
      <ProductComponent />
      <ContactComponent />
      <footer>
        <p>2020 © All rights reserved.</p>
        <div>
          <img src="assets/logo_25w.svg" alt="logo" />
        </div>
      </footer>
    </div>
  );
};

export default Page;

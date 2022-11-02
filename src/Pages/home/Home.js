import React from 'react';
import About from './About_Us/About';
import Banner from './Banner/Banner';
import HelpLine from './HelpLine/HelpLine';
import Product from './Product/Product';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <HelpLine></HelpLine>
      <Product></Product>
      
    </div>
  );
};

export default Home;
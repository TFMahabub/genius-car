import React from 'react';
import About from './About_Us/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      
    </div>
  );
};

export default Home;
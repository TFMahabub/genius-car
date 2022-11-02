import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../ShearedPages/footer/Footer';
import Nav from '../../ShearedPages/navbar/Nav';

const Main = () => {
  return (
    <div className='px-2 md:px-0'>
     <Nav></Nav>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Main;
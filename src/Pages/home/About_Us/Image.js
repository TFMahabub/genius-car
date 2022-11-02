import React from 'react';
import presone from '../../../images/images/about_us/person.jpg'
import parts from '../../../images/images/about_us/parts.jpg'

const Image = () => {
  return (
    <div className='md:mx-auto relative'>
      <img className='md:max-h-80 rounded-lg' src={presone} alt="" />
      <div className='hidden md:block md:absolute bg-[#fff] p-2 rounded-xl top-40 left-24 right-[-100px]'>
       <img className='rounded-lg' src={parts} alt="" />
      </div>
    </div>
  );
};

export default Image;
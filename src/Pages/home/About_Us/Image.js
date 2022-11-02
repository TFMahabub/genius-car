import React from 'react';
import presone from '../../../images/images/about_us/person.jpg'
import parts from '../../../images/images/about_us/parts.jpg'

const Image = () => {
  return (
    <div className='relative md:w-1/2'>
      <img className='md:max-h-[340px] rounded-lg' src={presone} alt="" />
      <div className='hidden md:block md:absolute bg-[#fff] p-2 rounded-xl top-40 left-24'>
        <img className='md:max-h-48 rounded-lg' src={parts} alt="" />
      </div>
    </div>
  );
};

export default Image;
import React from 'react';
import Address from './Address';
import Hotline from './Hotline';
import Time from './Time';

const HelpLine = () => {
  return (
    <div className='md:mt-16 md:flex items-center justify-evenly p-8 bg-[#000] rounded-lg'>
      <Time></Time>
      <Hotline></Hotline>
      <Address></Address>
    </div>
  );
};

export default HelpLine;
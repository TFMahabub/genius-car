import React from 'react';
import Image from './Image';
import Text from './Text';

const About = () => {
  return (
    <div className='md:flex md:items-center md:justify-between mt-16 md:mt-[120px]'>
      <Image></Image>
      <Text></Text> 
    </div>
  );
};

export default About;
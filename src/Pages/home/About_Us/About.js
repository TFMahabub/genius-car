import React from 'react';
import Image from './Image';
import Text from './Text';

const About = () => {
  return (
    <div className='md:grid grid-cols-2 mt-16 md:mt-[120px]'>
      <Image></Image>
      <Text></Text> 
    </div>
  );
};

export default About;
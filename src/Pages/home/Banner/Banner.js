import React from 'react';
import img1 from '../../../images/images/banner/1-crops.jpg';
import img2 from '../../../images/images/banner/2-crops.jpg';
import img3 from '../../../images/images/banner/3-crops.jpg';
import img4 from '../../../images/images/banner/4-crops.jpg';
import img5 from '../../../images/images/banner/5-crops.jpg';
import img6 from '../../../images/images/banner/6-crops.jpg';
import './Banner.css'
import BannerItem from './BannerItem';

const Banner = () => {

  const sliders = [
    {
      prv: 6,
      id: 1,
      next: 2,
      img: img1
    },
    {
      prv: 1,
      id: 2,
      next: 3,
      img: img2
    },
    {
      prv: 2,
      id: 3,
      next: 4,
      img: img3
    },
    {
      prv: 3,
      id: 4,
      next: 5,
      img: img4
    },
    {
      prv: 4,
      id: 5,
      next: 6,
      img: img5
    },
    {
      prv: 5,
      id: 6,
      next: 1,
      img: img6
    },
  ]


  return (
    <section>
      <div className="mx-auto carousel w-full">
        {
          sliders.map(sld => <BannerItem key={sld.id} sld={sld}></BannerItem>)
        }
         
        
      </div>
    </section>
  );
};

export default Banner;
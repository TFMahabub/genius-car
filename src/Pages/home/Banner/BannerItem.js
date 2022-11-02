import React from 'react';

const BannerItem = ({sld}) => {
  const {img, prv, id, next} = sld;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
          <div className='banner-img'>
            <img src={img} alt='' className="w-full"/>
          </div>
          <div className="absolute flex transform right-5 bottom-5">
            <a href={`#slide${prv}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle ml-2">❯</a>
          </div>
          <div 
          className='absolute top-4 md:top-40 text-center md:text-start mx-auto md:mx-0 md:ml-10 max-w-md'
          >

            <h2 
            className='mb-7 md:mb-0 text-3xl md:text-5xl md:font-semibold text-[#fff]'>
              Affordable Price For Car Servicing
            </h2>

            <p
            className='text-[#fff] my-6 hidden md:block'
            >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <a href="" className='text-sm md:text-lg bg-orange px-2 py-[7px] md:py-3 md:px-4 text-[#fff] mr-3'>Discover More</a>
            <a href="" className='text-sm md:text-lg border py-[7px] md:py-3 px-2 md:px-4 text-[#fff]'>Latest Project</a>
          </div>
        </div>
  );
};

export default BannerItem;
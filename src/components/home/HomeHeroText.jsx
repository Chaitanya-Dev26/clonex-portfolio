import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
  return (
    <div className='font-[font1]  pt-5 mt-65 lg:mt-0 text-center'>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10.5vw]' > 
          The spark for
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10.5vw]' >
          all
        <div className='h-[7vw] w-[15.5vw] rounded-full -m  overflow-hidden'>
          <Video /> 
        </div>
          things
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10.5vw]' >
          creative
        </div>
    </div>
  );   
};

export default HomeHeroText; 
import React from 'react';

const ContactHeroText = ({text1 = "", text2 = "", text3 = "project" }) => {
  return (
    <div className='font-[font1] pt-5 mt-65 lg:mt-0 text-center'>
        <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[9vw] leading-[10.5vw]' > 
          To talk
        </div>
        <div className='lg:text-[10vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10.5vw]' >
          {text1 && <>{text1}<br></br></>}
        </div>
        <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[9vw] leading-[10.5vw]' >
          {text2 && <>{text2}<br></br></>}
          <div className='flex justify-center items-center relative'>
            <span>{text3}</span>
          </div>
        </div>
    </div>
  );   
};

export default ContactHeroText; 
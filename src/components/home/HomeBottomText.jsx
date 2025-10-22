import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 pb-2 '>
      <p className='absolute lg:w-[15vw] w-64 lg:right-5 right-2 lg:bottom-40 bottom-25 font-[font1] text-xs lg:text-base lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction 
        infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 flex items-center px-3 pt-1 lg:px-12 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:lg:mt-5' to='/projects'>Work</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 flex items-center px-3 pt-1 lg:px-12 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:lg:mt-5' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
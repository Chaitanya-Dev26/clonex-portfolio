import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-12 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-5' to='/projects'>Projects</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-12 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-5' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
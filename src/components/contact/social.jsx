import React from 'react';

const Social = () => {
    return (
<div className='mt-[15vh]'>
                <h1 className='font-[font1] lg:text-[1vw] text-center lg:leading-[0.8] lg:pt-10 uppercase'>follow us</h1>
                    <div className='gap-2 font-[font2] flex items-center justify-center mt-8'>
                        <button className='uppercase cursor-pointer font-[font2] text-[5vw] border-1 rounded-full border-white hover:text-[#D3FD50] pr-7 pl-7 pt-3 leading-none inline-block' style={{ margin: '0', lineHeight: '1' }}>fb</button>
                        <button className='uppercase cursor-pointer font-[font2] text-[5vw] border-1 rounded-full border-white hover:text-[#D3FD50] pr-7 pl-7 pt-3 leading-none inline-block' style={{ margin: '0', lineHeight: '1' }}>ig</button>
                        <button className='uppercase cursor-pointer font-[font2] text-[5vw] border-1 rounded-full border-white hover:text-[#D3FD50] pr-7 pl-7 pt-3 leading-none inline-block' style={{ margin: '0', lineHeight: '1' }}>in</button>
                        <button className='uppercase cursor-pointer font-[font2] text-[5vw] border-1 rounded-full border-white hover:text-[#D3FD50] pr-7 pl-7 pt-3 leading-none inline-block' style={{ margin: '0', lineHeight: '1' }}>be</button>
                    </div>
 </div>
    )
}

export default Social

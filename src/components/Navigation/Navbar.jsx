import React, { useContext, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { NavbarColorContext, NavbarContext } from '../context/NavContext'
import { projects } from '../../data/projects'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const navGreenRef = useRef(null)
    const navGreenRefSmall = useRef(null)
    const navGreenRefTiny = useRef(null)
    const agencyContainerRef = useRef(null)
    const workContainerRef = useRef(null)
    const agencyTextRef = useRef(null)
    const workTextRef = useRef(null)
    const menuContainerRef = useRef(null)
    const menuTextRef = useRef(null)
    const navContext = useContext(NavbarContext)
    const colorContext = useContext(NavbarColorContext)
    
    const navOpen = navContext ? navContext[0] : false
    const setNavOpen = navContext ? navContext[1] : () => {}
    const navColor = colorContext ? colorContext[0] : 'white'
    const projectCount = projects.length
    const location = useLocation()
    
    // Check if current page should show simple navbar
    const isSimpleNavbar = location.pathname === '/' || location.pathname === '/contact'

    useGSAP(() => {
        // Only run animations for complex navbar
        if (isSimpleNavbar) return;
        
        console.log('GSAP animation starting...') // Debug log
        
        // Animation timeline with delay to let other animations finish first
        const tl = gsap.timeline({ delay: 1.8 })
        
        // Agency container animates in first
        tl.fromTo(agencyContainerRef.current, {
            y: -200,
            scaleY: 0,
            transformOrigin: "bottom"
        }, {
            y: 0,
            scaleY: 1,
            duration: 0.5,
            ease: "power2.out",
            onStart: () => console.log('Agency animation starting'),
            onComplete: () => console.log('Agency animation complete')
        })
        .fromTo(agencyTextRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        
        // Work container starts at same time
        .fromTo(workContainerRef.current, {
            y: -200,
            scaleY: 0,
            transformOrigin: "bottom"
        }, {
            y: 0,
            scaleY: 1,
            duration: 0.5,
            ease: "power2.out",
            onStart: () => console.log('Work animation starting'),
            onComplete: () => console.log('Work animation complete')
        }, 0.1)
        .fromTo(workTextRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.8")
        
        // Menu container animates from 6vw to 12.5vw height
        .fromTo(menuContainerRef.current, {
            height: "6vw",
            y: -5
        }, {
            height: "12.5vw",
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onStart: () => console.log('Menu animation starting'),
            onComplete: () => console.log('Menu animation complete')
        }, 0.2)
        .fromTo(menuTextRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
    }, { dependencies: [isSimpleNavbar], revertOnUpdate: true })

    // Simple navbar for home and contact pages
    if (isSimpleNavbar) {
        return (
            <div className='z-50 flex fixed top-0 w-full items-start justify-between'>
                <Link to="/" className='p-3 block cursor-pointer'>
                    <div className='lg:w-32 w-24'>
                        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill={navColor} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                </Link>
                <div 
                    onClick={() => setNavOpen(true)}
                    onMouseEnter={() => { navGreenRef.current.style.height = '100%' }}
                    onMouseLeave={() => { navGreenRef.current.style.height = '0%' }}
                    className='l:h-14 h-11 bg-black relative lg:w-[15.5vw] w-49 cursor-pointer'>
                    <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                    <div className='relative h-full lg:px-8 px-6.5 flex flex-col justify-center items-end gap-1 group'>
                        <div className="lg:w-12.5 w-11 h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
                        <div className="lg:w-6.5 w-6 h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        )
    }

    // Complex navbar with animations for other pages
    return (
        <div className='z-50 flex fixed top-0 w-full items-center justify-between lg:h-16 h-14'>
            <Link to="/" className='px-3 pt-3 block cursor-pointer'>
                <div className='lg:w-32 w-23'>
                    <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill={navColor} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </Link>
            
            <div className='flex items-start'>
                {/* Tiny left-most container */}
                <div 
                    ref={workContainerRef}
                    onClick={() => setNavOpen(true)}
                    onMouseEnter={() => { navGreenRefTiny.current.style.height = '100%' }}
                    onMouseLeave={() => { navGreenRefTiny.current.style.height = '0%' }}
                    className='lg:h-[8rem] h-10 bg-black relative lg:w-[20vw] w-28 cursor-pointer flex items-end'>
                    <div ref={navGreenRefTiny} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                    <div className='relative w-full h-full flex flex-col justify-between lg:px-3 px-2 group'>
                        <div></div>
                        <div ref={workTextRef} className='flex items-baseline gap-2'>
                            <span className='text-white group-hover:text-black text-xl font-[font2] uppercase transition-colors duration-300'>
                                Work
                            </span>
                            <span className='text-white group-hover:text-black text-xl font-[font2] transition-colors duration-300'>
                                ({projectCount})
                            </span>
                        </div>
                    </div>
                </div>

                {/* Smaller left container */}
                <div 
                    ref={agencyContainerRef}
                    onClick={() => setNavOpen(true)}
                    onMouseEnter={() => { navGreenRefSmall.current.style.height = '100%' }}
                    onMouseLeave={() => { navGreenRefSmall.current.style.height = '0%' }}
                    className='lg:h-[9.5vw] h-12 bg-black relative lg:w-[30vw] w-36 cursor-pointer flex items-end'>
                    <div ref={navGreenRefSmall} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                    <div className='relative w-full h-full flex flex-col justify-between lg:px-3 px-2 group'>
                        <div></div>
                        <span ref={agencyTextRef} className='text-white group-hover:text-black text-xl font-[font2] uppercase transition-colors duration-300'>
                            agency
                        </span>
                    </div>
                </div>

                {/* Existing menu container */}
                <div 
                    ref={menuContainerRef}
                    onClick={() => setNavOpen(true)}
                    onMouseEnter={() => { navGreenRef.current.style.height = '100%' }}
                    onMouseLeave={() => { navGreenRef.current.style.height = '0%' }}
                    className='lg:h-[6vw] h-14 bg-black relative lg:w-[15.5vw] w-47 cursor-pointer flex items-end'>
                    <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                    <div className='relative w-full h-full flex flex-col justify-between lg:px-3 px-2 group'>
                        <div className='flex justify-end items-center pt-4 px-5 flex-1'>
                            <div className='flex flex-col gap-1'>
                                <div className="lg:w-15 w-6 h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
                                <div className="lg:w-7 w-3 h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
                            </div>
                        </div>
                        <span ref={menuTextRef} className='text-white group-hover:text-black text-xl font-[font2] uppercase transition-colors duration-300'>
                            menu
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
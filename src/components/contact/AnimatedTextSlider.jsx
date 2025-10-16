import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AnimatedTextSlider.css'

const AnimatedTextSlider = ({ text = "HELLO@K72.CA", images = ["/black-heart-svgrepo-com.svg"], backgroundColor = '#D3FD50', textColor = 'black' }) => {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const container = containerRef.current;
    if (!container) return;
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      markers: false, // Disable markers in production
      onUpdate: (self) => {
        if (!container) return; // Additional safety check
        const scrollDirection = self.direction;
        if (scrollDirection > 0) {
          gsap.to(container, { 
            rotation: -5, 
            duration: 0.7, 
            ease: 'power2.out' 
          });
        } else if (scrollDirection < 0) {
          gsap.to(container, { 
            rotation: 5, 
            duration: 0.7, 
            ease: 'power2.out' 
          });
        }
      }
    });

    // Cleanup function
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className='relative overflow-hidden w-full' 
      style={{ 
        backgroundColor, 
        color: textColor,
        transform: 'rotate(5deg)'
      }}
    >
      <div className='flex'>
        <div className='moveX flex items-center gap-8'>
          <h2 className='whitespace-nowrap font-[font2] lg:text-[10vw] text-6xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>
            {text}
          </h2>
          {images.map((img, index) => (
            <img 
              key={`first-${index}`}
              className='lg:h-40 h-8 rounded-full shrink-0 lg:w-40 w-8 object-cover' 
              src={img} 
              alt="" 
            />
          ))}
          <h2 className='whitespace-nowrap font-[font2] lg:text-[10vw] text-6xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>
            {text}
          </h2>
          {images.map((img, index) => (
            <img 
              key={`first-dup-${index}`}
              className='lg:h-40 h-8 rounded-full shrink-0 lg:w-40 w-8 object-cover' 
              src={img} 
              alt="" 
            />
          ))}
        </div>
        
        <div className='moveX flex items-center gap-8'>
          <h2 className='whitespace-nowrap font-[font2] lg:text-[10vw] text-6xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>
            {text}
          </h2>
          {images.map((img, index) => (
            <img 
              key={`second-${index}`}
              className='lg:h-40 h-8 rounded-full shrink-0 lg:w-40 w-8 object-cover' 
              src={img} 
              alt="" 
            />
          ))}
          <h2 className='whitespace-nowrap font-[font2] lg:text-[10vw] text-6xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>
            {text}
          </h2>
          {images.map((img, index) => (
            <img 
              key={`second-dup-${index}`}
              className='lg:h-40 h-8 rounded-full shrink-0 lg:w-40 w-8 object-cover' 
              src={img} 
              alt="" 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedTextSlider

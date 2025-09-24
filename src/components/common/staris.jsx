import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {

    const currentPath = useLocation().pathname


    const stairParentRef=useRef(null)
    const pageRef = useRef(null);

    useGSAP(() => {
      gsap.set(stairParentRef.current, { display: 'block' });
      gsap.set('.stair', { y: '-100%' });
  
      const tl = gsap.timeline();
      
      tl.to('.stair', {
        y: '0%',
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      })
      .to('.stair', {
        y: '100%',
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.in',
        delay: 0.3
      })
      .to(stairParentRef.current, {
        display: 'none',
        onComplete: () => {
          gsap.set('.stair', { y: '0%' });
        }
      })

      gsap.set(pageRef.current, { opacity: 0 });
      
      gsap.to(pageRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 1.2,
        ease: 'power2.out'
      });
    }, [currentPath]);

    console.log(props.children)


    return (
        <div>
            <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
                <div className="h-full w-full flex">
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs;
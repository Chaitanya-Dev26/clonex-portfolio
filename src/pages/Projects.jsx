import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Social from '../components/common/socialMain'
import { projects } from '../data/projects'


const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectCount = projects.length;

  gsap.registerPlugin(ScrollTrigger)


  useGSAP(() => {
    gsap.utils.toArray('.hero').forEach((hero, index) => {
      gsap.from(hero, {
        height: '100px',      // shrink effect
        stagger: { amount: 0.01 }, // small stagger
        scrollTrigger: {
          trigger: hero,
          start: 'top 100%',  // when top of hero hits bottom of viewport
          end: 'top -150%',   // allow animation to continue as it scrolls up
          scrub: true,
          markers: true
        }
      })
    })
  })

  return (
    <div >
      <div className='lg:px-4'>
        <div className='pt-[45vh]'>
          <div className='flex items-top gap-2'>
            <h2 className='font-[font2] lg:text-[12.5vw] text-6xl uppercase leading-[0.8]'>Work</h2>
            <span className='text-5xl font-[font2] text-black'>{projectCount}</span>
          </div>
        </div>
        <div className='-lg:mt-20 lol'>
          {projects.map(function (elem, idx) {
            return <div key={idx} className='hero w-full lg:h-[650px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })}
        </div>
      </div>
      <div>
        <Social />
      </div>
    </div>
  )
}

export default Projects
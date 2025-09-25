import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {

  // Create a ref to access the image container div in the section1
  // This allows us to directly manipulate the DOM element, such as adding
  // scroll-based animations or other imperative DOM operations
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -105%',
        markers: true,
        scrub: true,
        pin: true,
        // pinSpacing: true,
        // pinReparent: true,
        // pinType:"transform",
        // scrub: 1,
        // anticipatePin: 1,
        onUpdate: (self) => {
          let imageIndex;
          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        }
      }
    });
  }, []);

  return (
    <div>
       <div className="section1 relative py-1">   {/*section1 image used for ref */}
        <div ref={imageDivRef} className="absolute overflow-hidden lg:h-[20vw] h-[28vw] rounded-3xl lg:w-[15vw] w-[20vw] lg:top-67 top-20 left-[30vw]">
          <img ref={imageRef}
            className ="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[28vh]">
            <h1 className="lg:text-[20vw] text-[18vw] text-center uppercase leading-[18vw]">
              Seven7y <br />
              two
            </h1>
          </div>
          <div className="lg:pl-[40%] pl-[3%] lg:mt-20 mt-18 p-3">
            <p className="lg:text-6xl text-[20px] leading-[1]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;

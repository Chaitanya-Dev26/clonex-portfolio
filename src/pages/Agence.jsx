import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect, useContext } from "react";
import Social from "../components/common/socialMain";
import "./Agence.css";
import { NavbarColorContext } from "../components/context/NavContext";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const claireTextRef = useRef(null);
  const claireText2Ref = useRef(null);
  const robertNameRef = useRef(null);
  const robertNameRef2 = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const socialRef = useRef(null);
  
  const colorContext = useContext(NavbarColorContext);
  const navColor = colorContext ? colorContext[0] : 'black';
  const setNavColor = colorContext ? colorContext[1] : () => {};

  let xPercent = 0;

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  const colorTransitionRef = useRef(null);
  const sectionsContainerRef = useRef(null);

  useGSAP(() => {
    gsap.to(document.body, {
      scrollTrigger: {
        trigger: sectionsContainerRef.current,
        start: "10% top",
        end:"11% top" , 
        scrub: true, 
        markers: false, 
        onUpdate: (self) => {
          if (self.progress > 0.5) {
            setNavColor('white');
          } else {
            setNavColor('black');
          }
        }
      }
    });

    gsap.to(sectionsContainerRef.current, {
      scrollTrigger: {
        trigger: sectionsContainerRef.current,
        start: "10% top",
        end: "11% top", 
        scrub: true, 
        markers: true,
      },
      backgroundColor: "black",
      color: "white", 
      ease: "power2.inOut",
    });
    gsap.to(".text-to-change", {
      scrollTrigger: {
        trigger: colorTransitionRef.current,
        start: "50% center",
        end: "50% center",
        scrub: true,
      },
      color: "white",
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -105%",
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
        },
      },
    });

    // Project 1 - First sticky section
    gsap.to(project1Ref.current, {
      scrollTrigger: {
        trigger: project1Ref.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    // Project 2 - Second sticky section that scrolls over project 1
    gsap.to(project2Ref.current, {
      scrollTrigger: {
        trigger: project2Ref.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    // Project 3 - Third sticky section that scrolls over project 2
    gsap.to(project3Ref.current, {
      scrollTrigger: {
        trigger: project3Ref.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  useEffect(() => {
    gsap.set(robertNameRef2.current, {
      left: robertNameRef2.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(robertNameRef.current, { xPercent: xPercent });
    gsap.set(robertNameRef2.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent -= 0.1;
  };

  return (
    <div>
      <div className="section1 relative py-1">
        {" "}
        {/*section1 image used for ref */}
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[28vw] rounded-3xl lg:w-[15vw] w-[20vw] lg:top-67 top-20 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
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
      <div ref={sectionsContainerRef} className="sections-container">
        <div ref={colorTransitionRef} className="section2 h-[53vh] w-full mt-[20vh] px-[11vw]">
          <div className="font-[font1] font-bold">
            {/* Top row: left title and right list */}
            <div className="flex w-full items-start">
              <div className="w-[33%]">
                <p className="text-xl lg:text-xl mb-1">Expertise</p>
              </div>
              <div className="w-[4%]" />
              <div className="w-[38%]">
                <ul className="text-xl lg:text-xl leading-[1.1] space-y-1">
                  <li>Strategy</li>
                  <li>Advertising</li>
                  <li>Branding</li>
                  <li>Design</li>
                  <li>Content</li>
                </ul>
              </div>
            </div>

            {/* Bottom row: three text blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-34 gap-y-10 mt-28 lg:mt-40">
              <div>
                <p className="mt-3 text-lg lg:text-xl leading-snug">
                  Our Work_ Born in curiosity, raised by dedication and fed with
                  a steady diet of creativity.
                </p>
              </div>
              <div>
                <p className="mt-3 text-lg lg:text-xl leading-snug">
                  Our Creative_Simmering in an environment where talent can come
                  to a full boil. Encouraged to become the best versions of
                  ourselves.
                </p>
              </div>
              <div>
                <p className="mt-3 text-lg lg:text-xl leading-snug">
                  Our Culture_We’re open to each other. Period. The team works
                  together to create a space that makes us proud.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section3 relative font-[font2] h-screen w-full mt-[35vh] px-[11vw]">
          {/* background image behind heading */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full w-[36vw] rounded-3xl overflow-hidden z-10">
            <img
              className="h-full w-full object-cover"
              src="https://k72.ca/images/teamMembers/Claire_640X960.jpg?w=640&h=960&s=8db7275995c2d79210fcf8641b5792fc"
              alt=""
            />
          </div>
          {/* extra heading behind the image */}
          <div className="claire-row absolute inset-0 mb-75 flex items-center justify-center z-0 pointer-events-none">
            <h2
              ref={claireTextRef}
              className="text-[5vw] lg:text-[10vw] uppercase leading-none text-[#D3FD50]"
            >
              claire
            </h2>
            <h2
              ref={claireText2Ref}
              className="text-[5vw] lg:text-[10vw] uppercase leading-none text-[#D3FD50]"
            >
              claire
            </h2>
          </div>
          {/* heading above image */}
          <div className="relative z-10 flex flex-col items-center h-full">
            <div className="flex-1" />
            <div className="name-row mb-[28vh] flex flex-row items-end justify-center">
              <div
                ref={robertNameRef}
                className="flex flex-row items-end whitespace-nowrap"
              >
                <h2 className="lg:text-[10vw] text-[18vw] text-center uppercase leading-none text-[#D3FD50]">
                  Robert
                </h2>
                <span className="ml-20 text-[2vw] text-white font-normal uppercase leading-[3]">
                  account manager
                </span>
              </div>
              <div
                ref={robertNameRef2}
                className="flex flex-row items-end whitespace-nowrap"
              >
                <h2 className="lg:text-[10vw] text-[18vw] text-center uppercase leading-none text-[#D3FD50]">
                  Robert
                </h2>
                <span className="ml-20 text-[2vw] text-white font-normal uppercase leading-[3]">
                  account manager
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Employees Section */}
        <div className="section4 h-[198vh] w-full">
          <div className=" py-22 ">
            <div className="link origin-top relative border-t-1 border-white mt-[10vh] px-4 py-1 group">
              <div className="flex justify-between hover:text-black transition-all duration-300  items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account excutive
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Sophie Auger
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Buisness Lead
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Carl Godbout
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Copywriter
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Camille Brière
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account Manager
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Claire Robert
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  EVP & Managing Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Pierre-Luc Paiement
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Art Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Mélanie Laviolette
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Director of Strategy
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Michèle Riendeau
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Meggie Lavoi
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Art Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Alex Sauvageau
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account Manager
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Philippe Perreault
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Strategist
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Béatrice Roussin
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account Manager
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Lou Gravel-Jean
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Planificateur stratégique principal
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Olivier Roeyaerts
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account Manager
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Hélène Conti
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Account Coordinator
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Lawrence Meunier
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Associate Creative Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Hugo Joseph
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Graphic Designer
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Olivier Duclos
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Associate Creative Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase">
                  Joël Letarte
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out"></div>
            </div>
            <div className="link origin-top relative border-t-1 border-b-1 border-white px-4 py-1 overflow-hidden">
              <div className="flex justify-between hover:text-black transition-all duration-300 items-center relative z-10">
                <h1 className="font-[font1] text-[19px] text-left pb-4">
                  Associate Creative Director
                </h1>
                <h1 className="font-[font2] text-[2.5vw] text-right leading-[0.8] pt-6 pb-2 uppercase ">
                  Sébastien Roy
                </h1>
              </div>
              <div className="navGreenOverlay absolute inset-0 bg-[#D3FD50] h-0 transition-all duration-300 ease-in-out "></div>
            </div>
          </div>
        </div>
        {/*projects*/}
        <div ref={project1Ref} className="section5 h-screen w-full rounded-[3rem] mb-8 relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-[3rem]"
            style={{ backgroundImage: 'url(https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda)' }}
          ></div>
          <div className="absolute inset-0 rounded-[3rem] bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <h2 className="text-white text-2xl font-[font2] uppercase cursor-pointer transition-all duration-300 hover:text-[#D3FD50] hover:underline">
              view all projects
            </h2>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="text-white text-4xl font-[font1] text-center mb-1">
              Lamajeure
            </div>
            <div className="text-white text-8xl font-[font2] text-center leading-relaxed group-hover:underline transition-all duration-300">
              Lamajeure
            </div>
          </div>
        </div>
        
        <div ref={project2Ref} className="h-screen w-full rounded-[3rem] mb-8 relative overflow-hidden cursor-pointer group">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-[3rem]"
            style={{ backgroundImage: 'url(https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124)' }}
          ></div>
          <div className="absolute inset-0 rounded-[3rem] bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="text-white text-4xl font-[font1] text-center mb-1">
              GardaWorld
            </div>
            <div className="text-white text-8xl font-[font2] text-center leading-relaxed group-hover:underline transition-all duration-300">
              Crsis24
            </div>
          </div>
        </div>
        
        <div ref={project3Ref} className="h-screen w-full rounded-[3rem] mb-8 relative overflow-hidden cursor-pointer group">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-[3rem]"
            style={{ backgroundImage: 'url(https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821)' }}
          ></div>
          <div className="absolute inset-0 rounded-[3rem] bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="text-white text-4xl font-[font1] text-center mb-1">
              Lassonde
            </div>
            <div className="text-white text-8xl font-[font2] text-center leading-relaxed group-hover:underline transition-all duration-300">
              Fruitè
            </div>
          </div>
        </div>
        
        {/* Social section that collapses over the third div */}
        <div ref={socialRef} className="w-full">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Agence;

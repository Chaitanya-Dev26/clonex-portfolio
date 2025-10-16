import React from "react";
import gsap from "gsap";
import { useLocationTime } from "../../hooks/useLocationTime"; // adjust path if needed

const Social = () => {
  const {
    currentTime,
    allLocations,
    currentLocationIndex,
    timeRef,
    locationRef,
    formatTime,
  } = useLocationTime();

  const socialLinks = ["fb", "ig", "in", "be"];

  const footerLinks = [
    "privacy policy",
    "privacy notice",
    "ethics report",
    "consent choices",
  ];

  return (
    <div className="h-[62vh] w-full bg-black pt-2.5 px-2 relative flex flex-col justify-between">
      {/* Top Section - Social & Contact */}
      <div className="flex justify-between items-start">
        {/* Social Buttons */}
        <div className="flex gap-2 font-[font2] items-center">
          {socialLinks.map((label) => (
            <button
              key={label}
              className="uppercase cursor-pointer text-white text-[5vw] border-2 rounded-full border-white hover:border-[#D3FD50] hover:text-[#D3FD50] px-7 pt-3 leading-none inline-block font-[font2]"
              style={{ lineHeight: "1" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <div className="font-[font2] flex items-center">
          <button className="uppercase cursor-pointer text-white text-[5vw] border-2 rounded-full border-white hover:border-[#D3FD50] hover:text-[#D3FD50] px-7 pt-3 leading-none inline-flex items-center gap-2 font-[font2]">
            Contact
            <img
              src="/black-heart-svgrepo-com.svg"
              alt="heart"
              className="w-[3vw] h-[5vw] invert hover:brightness-125"
            />
          </button>
        </div>
      </div>

      {/* Bottom Section - Time, Footer Links, Back to Top */}
      <div className="text-white text-md font-[font1] flex items-center justify-between pb-2 px-2 relative">
        {/* Location & Time */}
        <div className="flex items-center gap-3">
          {/* Globe Icon */}
          <svg
            className="w-10 h-10 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>

          {/* Dynamic Location and Time */}
          <div className="flex items-baseline gap-2">
            <div
              ref={locationRef}
              className="text-2xl font-[font2] text-gray-300 uppercase"
            >
              {allLocations.length > 0
                ? allLocations[currentLocationIndex].name
                : "LOADING..."}
            </div>
            <div className="text-2xl font-[font2] text-gray-300">|</div>
            <div
              ref={timeRef}
              className="text-2xl font-mono text-white tracking-tight"
            >
              {allLocations.length > 0 ? formatTime(currentTime) : "--:--:--"}
            </div>
          </div>
        </div>

        {/* Center Footer Links */}
        <div className="flex gap-10 justify-center absolute left-1/2 transform -translate-x-1/2">
          {footerLinks.map((label) => (
            <button
              key={label}
              className="uppercase cursor-pointer hover:text-[#D3FD50] opacity-80 tracking-wide"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Back to Top */}
        <button className="uppercase cursor-pointer hover:text-[#D3FD50] font-[font2] text-xl tracking-wide">
          back to top
        </button>
      </div>
    </div>
  );
};

export default Social;

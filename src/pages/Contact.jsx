import React from "react";
import ContactHeroText from "../components/contact/ContactHeroText";
import AnimatedTextSlider from "../components/contact/AnimatedTextSlider";
import Social from "../components/contact/social";

const Contact = () => {
  return (
    <div className="bg-black text-white h-max w-full">
      <ContactHeroText text1="about" text2="your" />
      <div className="mt-[15vh]"></div>
      <AnimatedTextSlider />
      <Social />

      <div className="mt-[15vh]">
        <ContactHeroText text1="about" text2="your" text3="brand" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>

      <div className="mt-[15vh]">
        <ContactHeroText text1="about" text2="natural" text3="wine" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>

      <div className="mt-[15vh]">
        <ContactHeroText text3="results" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>

      <div className="mt-[15vh]">
        <ContactHeroText text1="about" text2="nothing in" text3="particular" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>

      <div className="mt-[15vh]">
        <ContactHeroText text1="for the" text2="sake of" text3="talking" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>

      <div className="mt-[15vh]">
        <ContactHeroText text1="about" text2="your" text3="goals" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>

      <div className="mt-[15vh]">
        <ContactHeroText text3="conversion" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>
      <div className="mt-[15vh]">
        <ContactHeroText text1="about" text2="the" text3="funnel" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text2="about" text3="identity" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text1="about" text2="your" text3="feelings" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text2="about" text3="diversity" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text1="about" text2="your" text3="startup" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text2="about a" text3="pitch" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text2="about" text3="beards" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text1="about" text2="Degrassi" text3="Junior high" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text1="about" text2="your" text3="business" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text3="on mute" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
        <div className="mt-[15vh]"></div>
        <ContactHeroText text2="much" text3="louder" />
        <div className="mt-[15vh]"></div>
        <AnimatedTextSlider />
        <Social />
      </div>
    </div>
  );
};

export default Contact;

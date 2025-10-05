import React from "react";
import DarkVeil from "../ui/HeroBG";
import Button from "../ui/Button";
import { div } from "framer-motion/client";

const Hero = () => {
  return (
    // <div className="h-screen w-screen flex items-center justify-center relative bg-gray-900">
    //   <DarkVeil className="relative inset-0 z-0" />
    //   <div className="absolute z-2 flex  flex-col items-center justify-center h-ful text-center px-5 md:px-0">
    //     <p className="text-sm md:text-lg text-gray-300">Empowering Your</p>
    //     <h1 className="text-3xl md:text-5xl lg:text-8xl font-extrabold text-white my-5">
    //       DIGITAL FUTURE
    //     </h1>
    //     <p className="text-sm md:text-lg text-gray-300 max-w-3xl">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus mollitia officia soluta pariatur provident saepe? Voluptatibus iure omnis ut!
    //     </p>
    //     <Button text={"Get Started"} className="mt-8" />
    //   </div>
    // </div>

    <div className="hero-container">
      <main className="hero-section">
        {" "}
        <div className="hero-content">
           {" "}
          <h1 className="hero-title">
             
            <span className="award-text" style={{ color: "#000000" }}>
              award winning  {" "}
            </span>
            {/* Gradient yellow text */} {" "}
            <span
              className="web-design-text"
              style={
                {
                  // small gap between the two parts
                }
              }
            >
              web design agency  {" "}
            </span>
             {" "}
          </h1>
           {" "}
          <p className="hero-description">
            We're VelvetByte an award-winning{" "}
            <span className="bold-text">London based web design agency</span>,
            focused on creating bespoke and interactive{" "}
            <span className="bold-text">web experiences</span> for aspiring &
            established businesses and enterprises.  {" "}
          </p>
          <button className="work-btn">Our Work</button>{" "}
        </div>
        {/* Large, faded background text */}{" "}
        <div className="faded-bg-text">VELVET </div>{" "}
      </main>
    </div>
  );
};

export default Hero;

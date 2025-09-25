import React from "react";
import DarkVeil from "../ui/HeroBG";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-gray-900">
      <DarkVeil className="relative inset-0 z-0" />
      <div className="absolute z-2 flex  flex-col items-center justify-center h-ful text-center px-5 md:px-0">
        <p className="text-sm md:text-lg text-gray-300">Empowering Your</p>
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-extrabold text-white my-5">
          DIGITAL FUTURE
        </h1>
        <p className="text-sm md:text-lg text-gray-300 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus mollitia officia soluta pariatur provident saepe? Voluptatibus iure omnis ut!
        </p>
        <Button text={"Get Started"} className="mt-8" />
      </div>
    </div>
  );
};

export default Hero;

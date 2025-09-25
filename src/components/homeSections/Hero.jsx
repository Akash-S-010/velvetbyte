import React from "react";
import DarkVeil from "../ui/HeroBG";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-gray-900">
      <DarkVeil className="relative inset-0 z-0" />
      <div className="absolute z-2 flex  flex-col items-center justify-center h-ful text-center">
        <p className="text-md text-gray-300">Empowering Your</p>
        <h1 className="text-xl md:text-5xl lg:text-8xl font-extrabold text-white my-5">
          DIGITAL FUTURE
        </h1>
        <p className="text-md text-gray-300 max-w-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eaque
          odit accusantium deserunt dicta ratione incidunt nostrum consequatur
          nesciunt harum delectus ut praesentium, voluptate laborum vel, cumque
          eligendi. Reiciendis, veritatis?
        </p>
        <Button text={"Get Started"} className="mt-8" />
      </div>
    </div>
  );
};

export default Hero;

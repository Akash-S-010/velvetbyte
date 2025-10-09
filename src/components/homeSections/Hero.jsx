import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black relative">
      {/* Hero Section */}
      <main className="flex justify-center items-center text-center px-10 py-20 min-h-[calc(100vh-80px)] relative overflow-hidden">
        <div className="z-10 max-w-[650px]">
          <h1 className="text-6xl font-extrabold leading-tight mb-8">
            <span className="block text-3xl mb-3 font-medium bg-gradient-to-r from-[#ffc72c] via-[#ff9900] to-[#ff5e00] bg-clip-text text-transparent">
              award winning
            </span>
            <span className="block tracking-wide bg-gradient-to-r from-yellow-400 via-[#827226] to-[#fbc02d] bg-clip-text text-transparent font-bold">
              Web Design <br />Agency
            </span>
          </h1>
          <p className="text-base leading-relaxed text-gray-600 mb-5">
            We're VelvetByte an award-winning{" "}
            <span className="font-semibold text-black">London based web design agency</span>,
            focused on creating bespoke and interactive{" "}
            <span className="font-semibold text-black">web experiences</span> for aspiring &
            established businesses and enterprises.
          </p>
          <Button text="Learn More" className="mx-auto text-sm" theme="white" />
        </div>
        {/* Scroll Indicator */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 -rotate-90 flex items-center text-[10px] font-semibold tracking-wider text-gray-600 select-none">
          <span className="w-2.5 h-2.5 border border-gray-500 rounded-full mr-2.5"></span>
          <span className="text-gray-400">SCROLL DOWN</span>
        </div>
        {/* Faded Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[250px] font-black text-black/3 pointer-events-none whitespace-nowrap z-0">
          VELVET
        </div>
      </main>
    </div>
  );
};

export default Hero;
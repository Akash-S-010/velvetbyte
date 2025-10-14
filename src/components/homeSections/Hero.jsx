import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { SplashCursor } from "../ui/SplashCursor";

const Hero = () => {
  const heroRef = useRef(null);

  const handleLearnMoreClick = () => {
    window.location.href = "/services";
  };

  return (
    
    <div ref={heroRef} className="min-h-screen w-full bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SplashCursor targetRef={heroRef} />
      </div>
      
      <main className="flex justify-center items-center text-center px-10 py-20 min-h-[calc(100vh-80px)] relative overflow-hidden">
        <div className="z-10 max-w-[650px]">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            <span className="block text-xl md:text-3xl mb-3 font-medium bg-gradient-to-r from-[#ffc72c] via-[#ff9900] to-[#ff5e00] bg-clip-text text-transparent">
              Build. Design. Market
            </span>
            <span className="block tracking-wide bg-gradient-to-r from-yellow-400 via-[#827226] to-[#fbc02d] bg-clip-text text-transparent font-bold">
              Web Development <br />Company
            </span>
          </h1>
         <p>
  We're VelvetByte,{" "}
  <span className="font-semibold text-black">a creative web development company</span>, doing honest work at honest prices.{" "}
  <span className="font-semibold text-black">Project-based work</span> for aspiring and established businesses and enterprises.
</p>

          <Button text="Learn More" className="mx-auto text-sm" theme="white" onClick={handleLearnMoreClick} />
        </div>
        
        <div className="absolute left-5 top-1/2 -translate-y-1/2 -rotate-90 flex items-center text-[10px] font-semibold tracking-wider text-gray-600 select-none">
          <span className="w-2.5 h-2.5 border border-gray-500 rounded-full mr-2.5 hidden md:block"></span>
          <span className="text-gray-400 hidden md:block">SCROLL DOWN</span>
        </div>
        
     <div
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[250px] font-black pointer-events-none whitespace-nowrap z-0"
  style={{ color: 'rgba(0, 0, 0, 0.025)' }}
>
  VELVET
</div>




      </main>
    </div>
  );
};

export default Hero;
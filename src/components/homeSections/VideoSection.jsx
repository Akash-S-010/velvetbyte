import React from "react";
import Button from "../ui/Button";
import video from "../../assets/3d_abstract.mp4";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill backdrop-blur-2xl"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 opacity-50 bg-black backdrop-blur z-2"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 sm:mb-4">Unlock Unique <span className="text-primary">Ideas</span></h2>
        <p className="text-sm sm:text-base md:text-lg max-w-xl px-2">
          Today's businesses need more than just digital tools—they need clear
          strategic direction, backed by deep customer insight.
        </p>
        <Button text={"Get Started"} className="mt-4 sm:mt-6" onClick={() => window.location.href = "/services"} />
      </div>
    </section>
  );
};

export default VideoSection;

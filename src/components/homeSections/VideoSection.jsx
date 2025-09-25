import React from "react";
import Button from "../ui/Button";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-fill backdrop-blur-2xl"
      >
        <source src="https://cdn.pixabay.com/video/2023/02/11/150253-798222949_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 opacity-50 bg-black backdrop-blur z-2"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">Unlock Unique Ideas</h2>
        <p className="text-lg max-w-xl">
          Today's businesses need more than just digital tools—they need clear
          strategic direction, backed by deep customer insight.
        </p>
        <Button text={"Get Started"} className="mt-6"/>
      </div>
    </section>
  );
};

export default VideoSection;

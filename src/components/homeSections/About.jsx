import React from "react";
import CardStack from "../ui/CardStack";
import Button from "../ui/Button";

const About = () => {
  const cardData = [
    {
      id: 1,
      content: "Crafting innovative digital experiences.",
      name: "Emma Wilson",
      designation: "Creative Director",
    },
    {
      id: 2,
      content: "Building robust tech solutions.",
      name: "Liam Brown",
      designation: "Lead Developer",
    },
    {
      id: 3,
      content: "Driving strategic growth.",
      name: "Olivia Taylor",
      designation: "Business Strategist",
    },
  ];

  return (
    <div className="h-2/3 flex-col md:flex-row items-center justify-center text-center bg-white text-black px-5 md:px-10 lg:px-30">
      <div>
        <h2 className="text-xl md:text-5xl lg:text-6xl font-semibold">About Us</h2>
        <p className="text-md md:text-xl max-w-2xl text-muted my-7">
          At Velvetbyte, we specialize in delivering cutting-edge digital
          solutions that empower businesses to thrive in the digital world. Our
          team of talented developers and designers work tirelessly to create
          innovative and user-friendly platforms that drive growth and
          engagement.
        </p>
        <Button text={"Learn More"}  theme="white"/>
      </div>
      <div>
        <CardStack items={cardData} offset={12} scaleFactor={0.08} />
      </div>
    </div>
  );
};

export default About;

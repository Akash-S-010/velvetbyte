import React from "react";
import CardStack from "../ui/CardStack";
import Button from "../ui/Button";

const About = () => {
  const cardData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Enhancing your online presence effectively.",
    image: "https://i.pinimg.com/736x/28/16/31/281631dde3d7c8f3107edd23392fb991.jpg",
  },
  {
    id: 2,
    title: "Web Design & Development",
    description: "Creating stunning and functional websites.",
    image: "https://i.pinimg.com/736x/b6/09/b5/b609b5d59e8eec14cadae2d41d9bd993.jpg",
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Crafting visually appealing designs.",
    image: "https://i.pinimg.com/736x/d1/9f/54/d19f54f607b16e8b91550867c1b7842f.jpg",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description: "Building robust online stores.",
    image: "https://i.pinimg.com/736x/b3/5e/33/b35e337ad27fdba7ef5abfb3006212bd.jpg",
  },
];


  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 px-4 sm:px-5 py-8 md:px-10 lg:px-30 bg-white text-black">
      {/* Left: Text Content */}
      <div className="flex-1 text-center lg:text-left w-full px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold">
          About <span className="text-primary">Us</span>
        </h2>
        <p className="text-sm sm:text-base md:text-xl max-w-2xl text-gray-600 my-4 sm:my-7 mx-auto lg:mx-0">
          At Velvetbyte, we specialize in delivering cutting-edge digital
          solutions that empower businesses to thrive in the digital world. Our
          team of talented developers and designers work tirelessly to create
          innovative and user-friendly platforms that drive growth and
          engagement.
        </p>
        <Button text="Learn More" theme="white" className={"mx-auto lg:mx-0"}/>
      </div>

      {/* Right: Cards */}
      <div className="flex-1 flex justify-center w-full mt-6 lg:mt-0">
        <CardStack items={cardData} offset={10} scaleFactor={0.06} />
      </div>
    </section>
  );
};

export default About;

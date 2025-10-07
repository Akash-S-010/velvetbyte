import React from "react";
import "./Home.css";
import Button from "../ui/Button";

function Hero() {
  return (
    <div>
      <div className="home-container">
        {/* Header Section */} {/* Scroll Indicator */}
        {/*    <div className="scroll-indicator">

    <span className="scroll-circle"></span>

    <span className="scroll-text">SCROLL DOWN</span>

   </div> */}
        {/* Hero Section */}{" "}
        <main className="hero-section">
          {" "}
          <div className="hero-content">
            {" "}
            <h1 className="hero-title">
              <span className="award-text" style={{ color: "#000000" }}>
                award winning{" "}
              </span>
              {/* Gradient yellow text */}{" "}
              <span
                className="web-design-text"
                style={
                  {
                    // small gap between the two parts
                  }
                }
              >
                web design agency{" "}
              </span>{" "}
            </h1>{" "}
            <p className="hero-description">
              We're VelvetByte an award-winning{" "}
              <span className="bold-text">London based web design agency</span>,
              focused on creating bespoke and interactive{" "}
              <span className="bold-text">web experiences</span> for aspiring &
              established businesses and enterprises.{" "}
            </p>
            <Button text="Learn More" className={"mx-auto"} theme="white"/>
          </div>{" "}
          {/* <div className="scroll-indicator">
            <span className="scroll-circle"></span>{" "}
            <span className="scroll-text">SCROLL DOWN</span>{" "}
          </div> */}
          {/* Large, faded background text */}{" "}
          <div className="faded-bg-text"> VELVET </div>{" "}
        </main>
        {/* Sections */} {/* Speak To Us Button (Fixed) */}{" "}
        <button className="speak-to-us-btn">
          SPEAK <br /> TO US{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default Hero;

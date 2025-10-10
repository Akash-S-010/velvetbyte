import React from "react";
import Button from "../ui/Button";

const StickyScroll = () => {
  return (
    <div>
      {/* HERO */}
      <section className="h-screen w-full bg-white text-black grid place-content-center sticky top-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <h1 className="text-3xl sm:text-4xl md:text-7xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          We Present Unique Strategy for <br /> Your{" "}
          <span className="text-primary">Business.</span>
        </h1>
        <Button
          className="mt-8 w-50 mx-auto"
          theme="white"
          text={"Get Started"}
        />
      </section>



      {/* Second section contend*/}
      <section className="text-white w-full bg-black relative z-10 hidden md:block">
        <div className="grid grid-cols-2">
          <div className="sticky top-0 h-screen flex items-center justify-end">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-center tracking-tight leading-[120%]">
              We Have The Best
              <br />
              <span className="text-primary"> Solutions</span>
            </h1>
          </div>

          <div className="grid gap-2 overflow-hidden">
            {[
              "https://i.pinimg.com/736x/99/e4/a4/99e4a4b5714b232dc966371cd0ae8709.jpg",
              "https://i.pinimg.com/736x/af/85/c9/af85c9cc2c2a8034f9be36a35dfb743a.jpg",
              "https://i.pinimg.com/736x/14/e1/b0/14e1b04d2f6a3bd6d409f85a1ad08164.jpg",
              "https://i.pinimg.com/736x/9c/6d/cf/9c6dcfb7317df7a432d397ebe7c11688.jpg",
              "https://i.pinimg.com/736x/80/98/7e/80987e388dd2023cd6d527b999783fa4.jpg",
            ].map((src, i) => (
              <figure
                key={i}
                className={`grid place-content-center ${
                  i % 2 === 0 ? "-skew-x-12" : "skew-x-12"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StickyScroll;

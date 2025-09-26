import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const StickyScrollLayout = () => {
  return (
    <div>
      {/* HERO */}
      <section className="h-screen w-full bg-white text-black grid place-content-center sticky top-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          We Present Unique Strategy for <br /> Your{" "}
          <span className="text-primary">Business.</span>
        </h1>
        <Button
          className="mt-8 w-50 mx-auto"
          theme="white"
          text={"Get Started"}
        />
      </section>

      {/* Second*/}
      <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </section>

      {/* Second section contend*/}
      <section className="text-white w-full bg-black">
        <div className="grid grid-cols-2">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              We Have The Best
              <br />
              <span className="text-primary"> Solutions</span>
            </h1>
          </div>
          <div className="grid gap-2">
            {[
              "https://i.pinimg.com/736x/99/e4/a4/99e4a4b5714b232dc966371cd0ae8709.jpg",
              "https://i.pinimg.com/736x/af/85/c9/af85c9cc2c2a8034f9be36a35dfb743a.jpg",
              "https://i.pinimg.com/736x/14/e1/b0/14e1b04d2f6a3bd6d409f85a1ad08164.jpg",
              "https://i.pinimg.com/736x/9c/6d/cf/9c6dcfb7317df7a432d397ebe7c11688.jpg",
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
                  className="transition-all duration-300 w-80 h-96 object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GRID RIGHT / TEXT LEFT */}
      {/* <section className="text-white w-full bg-black">
        <div className="grid grid-cols-2 px-8">
          <div className="sticky top-0 h-screen grid place-content-center text-left px-10">
            <h1 className="text-4xl font-medium tracking-tight leading-[120%]">
              Web Design & Development
            </h1>
            <p className="mt-4 w-xl">
              We create stunning and responsive websites that captivate your
              audience and drive results. Our designs are tailored to reflect
              your brand's identity and values.
            </p>
            <Button className="mt-4 w-50" text={"Learn More"} />
          </div>
          <div className="grid gap-2">
            {[
              "https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop",
            ].map((src, i) => (
              <figure
                key={i}
                className="sticky top-0 h-screen grid place-content-center"
              >
                <img
                  src={src}
                  alt=""
                  className="transition-all duration-300 w-96 h-96 object-cover rounded-md"
                />
              </figure>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default StickyScrollLayout;

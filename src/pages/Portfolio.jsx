import React from "react";
import { motion } from "framer-motion";
import CostSection from "../components/portfoliosections/CostSection";
import OurWorks from "../components/portfoliosections/OurWorks";
import ImageGallery from "../components/portfoliosections/ImageGallery";
import AnimatedSection from "../components/portfoliosections/AnimatedSection";

function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="bg-gray-100">
      <div className="flex items-end justify-center pb-4 bg-black h-[20vh] md:h-[60vh]">
        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-light md:leading-30"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="block">
            Discover What
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="block text-5xl  sm:text-[9vw] md:text-[12vw] font-bold"
          >
            We
            <span className="text-primary"> Delivered.</span>
          </motion.span>
        </motion.h2>
      </div>
      <ImageGallery />
      <AnimatedSection />
      <OurWorks />
      <CostSection />
    </div>
  );
}

export default Portfolio;

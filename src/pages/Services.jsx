import React, { useState } from "react";
import { motion } from "framer-motion";
import StickySection from "../components/ui/StickySection";
import ClientsSection from "../components/ui/ClientSection";

const Services = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

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

  const services = [
    {
      title: "Website Development",
      images: [
        "https://i.pinimg.com/1200x/dd/fa/89/ddfa893277c1e91cc7bca6a4a4a6e3c7.jpg",
        "https://i.pinimg.com/736x/b3/5e/33/b35e337ad27fdba7ef5abfb3006212bd.jpg",
        "https://i.pinimg.com/1200x/3d/75/d9/3d75d9c75fd2332493c9872c634200e7.jpg",
        "https://velvetbyte.com/img/works/p1.jpg",
      ],
      description:
        "Boost your business with custom websites, WordPress, Shopify, and eCommerce solutions designed to captivate and convert. Engage users, streamline shopping, and skyrocket sales with stunning, user-friendly designs tailored to your brand. Transform clicks into loyal customers with our high-impact, conversion-driven digital storefronts. Launch your success today!success.",
      technologies: [
        "WordPress CMS",
        "Shopify & WooCommerce",
        "SEO Optimized Websites",
        "Full Stack Websites",
        "Fully Bespoke Web Design",
        "Hosting Services",
      ],
    },
    {
      title: "Mobile App Development",
      images: [
        "https://i.pinimg.com/1200x/7c/ff/91/7cff91dfbd3f3aea482afcd15e191efb.jpg",
        "https://i.pinimg.com/1200x/fe/e4/29/fee4296f057a5d5b17bd5ca60dba08a5.jpg",
        "https://i.pinimg.com/736x/84/5b/36/845b36d6035254f1ef344c1d6c2014ba.jpg",
        "https://i.pinimg.com/1200x/99/70/c0/9970c085506e48ad68cdcf3d49bf0a5e.jpg",
      ],
      description:
        "Discover our cross-platform apps, designed with intuitive, user-friendly interfaces to captivate and engage customers. Seamlessly connect across devices, delivering immersive experiences that boost interaction, loyalty, and satisfaction. Elevate your brand with dynamic, responsive apps crafted to keep users hooked and drive meaningful engagement in every interaction.udience.",
      technologies: [
        "Fully Responsive Designs",
        "Animated & Interactive",
        "Engaging User Experience",
        "SEO Optimized",
        "Hosting Services",
      ],
    },
    {
      title: "Digital Marketing",
      images: [
        "https://i.pinimg.com/736x/af/85/c9/af85c9cc2c2a8034f9be36a35dfb743a.jpg",
        "https://i.pinimg.com/1200x/7b/85/60/7b85603d88f47543bb1ccc544c24e30b.jpg",
        "https://i.pinimg.com/1200x/8f/11/05/8f1105c888ebc2b250078e5dd06497de.jpg",
        "https://i.pinimg.com/736x/01/39/d3/0139d3684e4870c3b704bd5a2f44cb69.jpg",
      ],
      description:
        "Boost your business with powerful SEO, dynamic social media, targeted PPC, impactful branding, and high-ROI performance marketing. Drive massive traffic, engage your audience, and skyrocket revenue with strategies that deliver results. Connect with customers, amplify your brand, and dominate your market today!usiness.",
      technologies: [
        "SEO",
        "Social Media Marketing",
        "Performance Marketing",
        "Content Creation",
        "Email Marketing",
      ],
    },
    {
      title: "Graphic Design & UI/UX",
      images: [
        "https://velvetbyte.com/img/works/7.jpg",
        "https://i.pinimg.com/1200x/c6/99/c9/c699c918cf736e8efeaa6c55b031ef6d.jpg",
        "https://i.pinimg.com/736x/7f/f2/9e/7ff29e97a20bc21cab0cefe17e27841e.jpg",
        "https://velvetbyte.com/img/works/8.jpg",
      ],
      description:
        "Crafting intuitive, user-centric experiences and stunning brand visuals that captivate and engage audiences. Our designs blend creativity and functionality, ensuring seamless interactions and unforgettable impressions. Elevate your brand with bold, innovative aesthetics tailored to resonate deeply and drive meaningful connections in every digital touchpoint.tations.",
      technologies: [
        "Creative Ads",
        "Poster Designing",
        "Brochure Designing",
        "Social Media Designing",
      ],
    },
    {
      title: "Branding & Identity",
      images: [
        "https://velvetbyte.com/img/works/06.jpg",
        "https://i.pinimg.com/736x/57/df/73/57df734f302003a8fa853fb25d657bc7.jpg",
        "https://i.pinimg.com/736x/64/fc/dd/64fcddee7158264f38ac2f34fb3ffe67.jpg",
        "https://i.pinimg.com/736x/6f/84/28/6f8428ce263811304936da57da759c42.jpg",
      ],
      description:
        "Craft a bold brand identity with striking logos, vibrant brochures, and a dynamic digital presence. Establish a unique voice that captivates and connects, driving engagement and loyalty. Elevate your brand with strategic storytelling and visuals that resonate, leaving a lasting impression on your audience.tations.",
      technologies: [
        "Logos",
        "Brochures",
        "Brand Identity & Strategy",
        "Digital Presences",
      ],
    },
    {
      title: "Custom IT Solutions",
      images: [
        "https://i.pinimg.com/736x/08/b5/24/08b5243bcdba39420c4906acba69b73a.jpg",
        "https://i.pinimg.com/736x/18/c1/fa/18c1fa6f163e4f6466e6d54ed66a0468.jpg",
        "https://i.pinimg.com/1200x/77/ae/e8/77aee827c010aebe8b0b9681557a87a4.jpg",
        "https://i.pinimg.com/736x/8d/37/99/8d3799e24be55bdfddb7a4fd8e4100d0.jpg",
      ],
      description:
        "Transform your business with our custom IT solutions! We craft tailored software and cutting-edge automation tools to supercharge efficiency, streamline operations, and drive growth. Unlock your potential with innovative, user-focused technology designed to fit your unique needs. Partner with us to revolutionize your workflow and achieve unparalleled success!tations.",
      technologies: [
        "Ai",
        "IoT",
        "Automation",
        "Custom Software",
        "Cloud Computing",
      ],
    },
  ];

  return (
    <section className="min-h-screen">
      <div className="relative w-full h-[20vh] md:h-[60vh] overflow-hidden">
        <div className="h-full flex items-end justify-center pb-4 bg-black">
          <motion.h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-light md:leading-30"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="block">
              Explore Our
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block text-5xl  sm:text-[9vw] md:text-[12vw] font-bold"
            >
              Core
              <span className="text-primary"> Services.</span>
            </motion.span>
          </motion.h2>
        </div>
      </div>

      <StickySection services={services} />
      <div className="mt-20">
        <ClientsSection />
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import StickySection from "../components/ui/StickySection";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      images: [
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
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
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
      ],
      description:
        "Discover our cross-platform apps, designed with intuitive, user-friendly interfaces to captivate and engage customers. Seamlessly connect across devices, delivering immersive experiences that boost interaction, loyalty, and satisfaction. Elevate your brand with dynamic, responsive apps crafted to keep users hooked and drive meaningful engagement in every interaction.",
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
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
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
      title: "UI/UX & Graphic Design",
      images: [
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
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
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
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
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
      ],
      description:
        "Transform your business with our custom IT solutions! We craft tailored software and cutting-edge automation tools to supercharge efficiency, streamline operations, and drive growth. Unlock your potential with innovative, user-focused technology designed to fit your unique needs. Partner with us to revolutionize your workflow and achieve unparalleled success!tations.",
      technologies: [
        "Ai",
        "IoT",
        "Automation",
        "Custom Software",
        "Cloud Computing",],
    },
  ];

  return (
    <div className="min-h-screen">
      <div>
        
      </div>
      <StickySection services={services} />
    </div>
  );
};

export default Services;

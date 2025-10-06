import React from "react";
import StickySection from "../ui/StickySection";


const ServicesComponent = () => {
  const services = [
    {
      title: "Ecommerce Website Development",
      images: [
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
      ],
      description:
        "Our creative agency builds growth-driven ecommerce solutions with a focus on performance, scalability, and design. From strategy to launch, we streamline development procedures, ensuring efficiency and quality. Specializing in WooCommerce and Shopify, we deliver tailored online stores that engage customers, strengthen brands, and drive measurable business success.",
      technologies: [
        "Fully Bespoke Web Design",
        "Engaging User Experience",
        "SEO Optimised Websites",
        "WordPress CMS",
        "Shopify & WooCommerce",
      ],
    },
    {
      title: "Website Design & Development",
      images: [
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
      ],
      description:
        "As an award-winning London web design agency, our team takes a thorough and creative approach to every web design project, ensuring we build a website that perfectly tailored to your needs. We focus on what sets you apart, helping define your brand and align it with your target audience.",
      technologies: [
        "Fully responsive Web Designs",
        "Animated & Interactive",
        "Engaging User Experience",
        "Frontend Development",
        "Back-end Development",
        "Full Stack Development",
        "SEO Optimised Websites",
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
        "As a Google certified web design agency, we provide complete SEO and digital marketing solutions, all managed in-house by our dedicated account managers. Our team offers a variety of digital marketing services across multiple channels, ensuring measurable ROI for your business.",
      technologies: [
        "Social Media Marketing",
        "Performance Marketing",
        "SEO",
        "Content Creation",
        "Email Marketing",
      ],
    },
    {
      title: "Graphic Design",
      images: [
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg",
        "https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg",
      ],
      description:
        "Our creative agency is a team of professionals focused on helping your brand grow through stunning graphic designs. Our talented London-based team specializes in creating brand identities that capture the essence of your business, aligning with your audience's expectations.",
      technologies: [
        "Creative Ads",
        "Branding",
        "Poster Designing",
        "Brochure Designing",
      ],
    },
  ];

  return (
    <>
      <StickySection  services={services}/>
    </>
  );
};

export default ServicesComponent;

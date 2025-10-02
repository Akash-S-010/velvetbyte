import React from "react";
import { ShoppingCart, Code, BarChart2, Palette } from "lucide-react";
import Button from "./Button";

const StickySections = () => {
  const services = [
    {
      title: "Ecommerce Website Development",
      icon: <ShoppingCart size={48} />,
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
      icon: <Code size={48} />,
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
      icon: <BarChart2 size={48} />,
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
      icon: <Palette size={48} />,
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
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {services.map((service, index) => (
        <section key={index} className="bg-white py-6 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Left sticky title */}
            <div
              className="sticky top-0 h-[50vh] md:h-screen flex items-center justify-start pl-0 md:pl-3 z-10"
              style={{ willChange: "transform" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {service.title}
              </h1>
            </div>

            {/* Right content panels */}
            <div className="relative">
              {/* Panel 1 - Image Grid with Color Swatches */}
              <div className="flex items-start justify-start px-0 sm:px-4 md:px-8 pt-8 sm:pt-12 md:pt-20">
                <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {service.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${service.title} ${i + 1}`}
                        className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-0 sm:space-x-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-300 rounded-lg flex items-center justify-center">
                      <span className="text-xs sm:text-sm text-white">#72CDFB</span>
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-xs sm:text-sm text-white">#250D61</span>
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-xs sm:text-sm text-black">#FFFFFF</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2 - Description */}
              <div className="flex items-start justify-start px-0 sm:px-4 md:px-8 py-6 sm:py-8 md:py-12">
                <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
                  <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                  <Button text={"Get Started"} className="mt-4 sm:mt-6 md:mt-8" theme="white" />
                </div>
              </div>

              {/* Panel 3 - Technologies */}
              <div className="flex items-start justify-start px-0 sm:px-4 md:px-8 py-6 sm:py-8 md:py-12">
                <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
                  {service.technologies.map((tech, i) => (
                    <h2
                      key={i}
                      className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600"
                    >
                      {tech}
                      <div className="h-0.5 bg-gray-200 w-full mt-2 sm:mt-3 md:mt-4"></div>
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default React.memo(StickySections);

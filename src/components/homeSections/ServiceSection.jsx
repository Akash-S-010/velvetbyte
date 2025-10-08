import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import Button from "../ui/Button";

const services = [
  {
    title: "Ecommerce Website Development",
    description:
      "Our creative agency builds growth-driven ecommerce solutions with a focus on performance, scalability, and design. From strategy to launch, we streamline development procedures, ensuring efficiency and quality. Specializing in WooCommerce and Shopify, we deliver tailored online stores that engage customers, strengthen brands, and drive measurable business success.",
    technologies: [
      "Fully Bespoke Web Design",
      "Engaging User Experience",
      "SEO Optimised Websites",
      "WordPress CMS",
      "Shopify & WooCommerce",
    ],
    color: "#000000",
  },
  {
    title: "Website Development",
    description:
      "Boost your business with custom websites, WordPress, Shopify, and eCommerce solutions designed to captivate and convert. Engage users, streamline shopping, and skyrocket sales with stunning, user-friendly designs tailored to your brand. Transform clicks into loyal customers with our high-impact, conversion-driven digital storefronts. Launch your success today!",
    technologies: [
      "WordPress CMS",
      "Shopify & WooCommerce",
      "SEO Optimized Websites",
      "Full Stack Websites",
    ],
    color: "#fd7e14",
  },
  {
    title: "Digital Marketing",
    description:
      "As a Google certified web design agency, we provide complete SEO and digital marketing solutions, all managed in-house by our dedicated account managers. Our team offers a variety of digital marketing services across multiple channels, ensuring measurable ROI for your business.",
    technologies: [
      "Social Media Marketing",
      "Performance Marketing",
      "SEO",
      "Content Creation",
      "Email Marketing",
    ],
    color: "#000000",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative agency is a team of professionals focused on helping your brand grow through stunning graphic designs. Our talented London-based team specializes in creating brand identities that capture the essence of your business, aligning with your audience's expectations.",
    technologies: [
      "Creative Ads",
      "Branding",
      "Poster Designing",
      "Brochure Designing",
    ],
    color: "#fd7e14",
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className=" min-h-screen" ref={container}>
        <section className="">
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.05;
            return (
              <Card
                key={`s_${i}`}
                i={i}
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                color={service.color}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

export const Card = ({
  i,
  title,
  description,
  technologies,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="text-white relative top-0 md:-top-[15%] min-h-[400px] md:h-[500px] w-[90%] md:w-[80%] rounded-xl p-6 md:p-12 shadow-lg transform transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left Content */}
        <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold  mb-4 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            {description}
          </p>
         <Button text="Get Started" theme="black" className={"w-50 mx-auto md:mx-0"}/>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start mt-8 md:mt-0 ml-0 md:ml-40">
          <ul className="text-lg md:text-2xl space-y-4">
            {technologies.map((tech, idx) => (
              <>
                <li className="font-semibold" key={idx}>{tech}</li>
                <div className="h-0.5 bg-white/10"></div>
              </>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

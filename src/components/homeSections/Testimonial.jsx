import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "VelvetByte built our Shopify store from scratch and it's been a game-changer. The design is clean, checkout is smooth, and we've seen a 50% increase in conversions. They handled everything from product setup to payment integration perfectly.",
    image:
      "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=fd7e14&color=fff&size=128&bold=true",
    name: "Sarah Mitchell",
    role: "E-commerce Business Owner",
  },
  {
    text: "We needed a fast, modern website and VelvetByte delivered a stunning React site that loads instantly. The animations are smooth, it's fully responsive, and our bounce rate dropped by 35%. Highly professional work!",
    image:
      "https://ui-avatars.com/api/?name=Alex+Chen&background=000000&color=fff&size=128&bold=true",
    name: "Alex Chen",
    role: "Tech Startup Founder",
  },
  {
    text: "VelvetByte developed a full-stack web application for our business with custom dashboards, user authentication, and real-time features. The platform is robust, scalable, and exactly what we needed. Excellent development team!",
    image:
      "https://ui-avatars.com/api/?name=Priya+Kapoor&background=fd7e14&color=fff&size=128&bold=true",
    name: "Priya Kapoor",
    role: "SaaS Company CEO",
  },
  {
    text: "Their digital marketing strategy transformed our online presence. From SEO to social media campaigns, VelvetByte knows how to drive real results. Our website traffic increased 3x and lead generation is up 60%!",
    image:
      "https://ui-avatars.com/api/?name=James+Rodriguez&background=000000&color=fff&size=128&bold=true",
    name: "James Rodriguez",
    role: "Marketing Director",
  },
  {
    text: "I needed a complete rebrand and VelvetByte nailed it. They created our logo, brand guidelines, business cards, and social media templates. Everything is cohesive, professional, and our brand finally stands out in the market.",
    image:
      "https://ui-avatars.com/api/?name=Emma+Taylor&background=fd7e14&color=fff&size=128&bold=true",
    name: "Emma Taylor",
    role: "Small Business Owner",
  },
  {
    text: "VelvetByte designed all our marketing materials - brochures, flyers, and digital ads. The graphic design quality is exceptional and really captures our brand identity. Our campaigns look premium and professional now.",
    image:
      "https://ui-avatars.com/api/?name=David+Kumar&background=000000&color=fff&size=128&bold=true",
    name: "David Kumar",
    role: "Creative Director",
  },
  {
    text: "They built our mobile app for both iOS and Android and the experience is flawless. The UI is intuitive, performance is excellent, and our users love it. VelvetByte handled everything from design to deployment seamlessly.",
    image:
      "https://ui-avatars.com/api/?name=Lisa+Anderson&background=fd7e14&color=fff&size=128&bold=true",
    name: "Lisa Anderson",
    role: "Product Manager",
  },
  {
    text: "We hired VelvetByte to build a custom e-commerce platform with advanced features. They delivered a powerful, scalable solution with inventory management, analytics, and seamless payment processing. Outstanding work!",
    image:
      "https://ui-avatars.com/api/?name=Michael+Patel&background=000000&color=fff&size=128&bold=true",
    name: "Michael Patel",
    role: "Retail Business Owner",
  },
  {
    text: "VelvetByte created a beautiful portfolio website for my freelance business using React. It's fast, modern, and showcases my work perfectly. I've been getting more client inquiries since launching it!",
    image:
      "https://ui-avatars.com/api/?name=Sophie+Williams&background=fd7e14&color=fff&size=128&bold=true",
    name: "Sophie Williams",
    role: "Freelance Designer",
  },
];

const TestimonialsColumn = ({ className, testimonials, duration }) => {
  return (
    <div className={className} style={{ willChange: "transform" }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0)", // Force GPU acceleration
        }}
      >
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border shadow-lg shadow-blue-500/10 max-w-xs w-full"
                  key={i}
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                      loading="eager"
                      decoding="async"
                      style={{
                        transform: "translate3d(0, 0, 0)", // Prevent sub-pixel rendering issues
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
      </motion.div>
    </div>
  );
};

const Testimonial = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="my-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mx-auto"
        >
          <h2 className="text-center text-2xl sm:text-4xl md:text-6xl font-semibold tracking-tighter mt-5">
            <span className="text-primary">Trusted</span> By <br />
            Startups and Entrepreneurs
          </h2>
          <p className="text-center text-xs md:text-lg mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={15}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          {/* <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

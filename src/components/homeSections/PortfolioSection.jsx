import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Code, BarChart2, Palette, Smartphone, Briefcase, MoveRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A fully responsive e-commerce website built with Shopify, featuring seamless payment integration and optimized UX.',
      image: 'https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg',
      linkHref: '#',
      linkText: 'View Project',
      icon: <ShoppingCart size={24} />,
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'A sleek, modern website for a London-based firm, designed with WordPress and tailored for brand identity.',
      image: 'https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg',
      linkHref: '#',
      linkText: 'View Project',
      icon: <Code size={24} />,
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'A high-ROI social media campaign with targeted ads and SEO optimization, driving 50% more traffic.',
      image: 'https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg',
      linkHref: '#',
      linkText: 'View Project',
      icon: <BarChart2 size={24} />,
    },
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'A complete brand overhaul with logo, brochures, and creative ads, crafted for a global audience.',
      image: 'https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg',
      linkHref: '#',
      linkText: 'View Project',
      icon: <Palette size={24} />,
    },
    {
      title: 'Mobile App UI',
      category: 'UI/UX Design',
      description: 'An intuitive mobile app interface designed for user engagement, with interactive prototypes.',
      image: 'https://i.pinimg.com/736x/e1/62/9c/e1629c2ef715f4e8be3a349f461dd6b9.jpg',
      linkHref: '#',
      linkText: 'View Project',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'A custom portfolio site for a creative agency, showcasing their work with a modern, animated design.',
      image: 'https://i.pinimg.com/736x/8d/02/39/8d0239697ffc0840e7e19d5356a8228c.jpg',
      linkHref: '#',
      linkText: 'View Project',
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-[8rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className='text-primary'>Portfolio</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Explore our latest projects showcasing our expertise in web development, design, and digital marketing.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                title={project.title}
                description={project.description}
                icon={project.icon}
                image={project.image}
                linkText={project.linkText}
                linkHref={project.linkHref}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
          <Button text="View All Projects" className={"mt-14 mx-auto"}/>
      </div>
    </section>
  );
};

export default React.memo(PortfolioSection);
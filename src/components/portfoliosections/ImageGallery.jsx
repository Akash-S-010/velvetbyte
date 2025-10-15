import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Selorae",
    category: "E-commerce Platform for Perfume Brand",
    image: "/images/portfolio/Selorae.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: 2,
    title: "Amaya",
    category: "Graphic Design for Jewellery",
    image: "/images/portfolio/Amaya.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Haya Golds and Diamonds",
    category: "Graphic Design for Jewellery",
    image: "/images/portfolio/Haya.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    title: "Popees Baby Care",
    category: "E-commerce Platform (Shopify)",
    image: "/images/portfolio/Popees.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: 5,
    title: "Reveler",
    category: "Branding",
    image: "/images/portfolio/reveler.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 6,
    title: "Vkrithi",
    category: "E-commerce Site for Fashion Brand",
    image: "/images/portfolio/Vkrithi.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 7,
    title: "Blackmelo",
    category: "E-commerce Website for Fashion Brand",
    image: "/images/portfolio/Blacmelo.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: 8,
    title: "Real Estate Team Website",
    category: "Website",
    image: "/images/portfolio/RealEstate.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white-200">
      <h2 className="text-2xl md:text-6xl font-semibold text-center text-gray-800 mb-6 md:mb-14">
        Explore Our <span className='text-primary'>Works</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[400px]">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`relative group overflow-hidden rounded-lg cursor-pointer 
              ${project.colSpan} ${project.rowSpan}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

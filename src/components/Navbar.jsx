import React, { use, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <nav className="fixed w-full px-5 md:px-10 lg:px-20 py-10 bg-transparent z-50">
      <div className="w-full flex justify-between items-center">
        <img src={logo} alt="logo" className="w-36 cursor-pointer" onClick={() => navigate("/")} />
        <button className="text-white z-50" onClick={() => setIsOpen(true)}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="text-gray-500 cursor-pointer">
              <Menu size={28} />
            </div>
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-10 backdrop-blur-md flex items-center justify-center z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-black border border-gray-700 p-6 rounded-lg shadow-lg w-80 h-auto text-white relative"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-5 right-5 text-white"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
              <div className="flex flex-col text-center space-y-4 mt-12">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  {
                    name: "Portfolio",
                    path: "/portfolio",
                  },
                  { name: "Contact", path: "/contact" },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                  >
                    <Link
                      to={item.path}
                      className="text-lg text-primary font-semibold hover:text-white transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  text={"Contact Us"}
                  className="mt-8"
                  onClick={() => navigate("/contact")}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

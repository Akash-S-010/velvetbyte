import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../assets/logoDark.png";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    id: "01",
    name: "Home",
    to: "/",
    desc: "A digital home to introduce our work, ideas, and collaborations that shape creative experiences.",
  },
  {
    id: "02",
    name: "About",
    to: "/aboutus",
    desc: "Learn about who we are and what drives our approach to creating meaningful design and strategy.",
  },
  {
    id: "03",
    name: "Services",
    to: "/services",
    desc: "Explore the range of creative and digital services we offer to help ideas grow and connect.",
  },
  {
    id: "04",
    name: "Portfolio",
    to: "/portfolio",
    desc: "Browse through our past projects and see how we bring imagination and clarity to every design.",
  },
  {
    id: "05",
    name: "Contact",
    to: "/contact",
    desc: "Let’s start something together. Reach out to collaborate, inquire, or simply say hello.",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true); // ✅ Added scroll visibility state

  // Scroll visibility effect for the navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 0 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    if (menuOpen) {
      setIsVisible(true); // Always show header when menu is open
      window.removeEventListener("scroll", handleScroll);
    } else {
      setIsVisible(window.scrollY <= 0);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Also hide scroll for html element
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = ""; // Reset html element overflow
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = ""; // Cleanup for html element
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header - ✅ Added scroll visibility classes */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto px-5 md:px-20 flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoDark} alt="logo" className="w-32 md:w-40" />
          </Link>

          {/* CTA Button */}
          <div className="flex items-center  space-x-2 md:space-x-4">
            <button
              onClick={() => window.location.href = "/contact"}
              className="px-4 py-2 bg-black text-white rounded-tl-2xl rounded-br-2xl text-sm font-semibold cursor-pointer hover:rounded-tl-xs hover:rounded-br-xs transition-all duration-300"
            >
              Get Started
            </button>

            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-900 p-2 cursor-pointer transition hover:scale-105"
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu - Added higher z-index to appear above hidden navbar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 bottom-0 z-[50] bg-[#F9F2E7] text-black px-4 md:px-16 overflow-y-auto" // ✅ Adjusted top to start below header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Grid Menu */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-2xl border cursor-pointer transition-all duration-300 p-6 md:p-10 flex flex-col justify-between
                      ${
                        isActive
                          ? "bg-black text-white border-black"
                          : "group border-gray-400 bg-[#F9F2E7] hover:bg-black hover:text-white"
                      }`}
                    onClick={() => {
                      if (!isActive) {
                        setMenuOpen(false);
                        navigate(item.to);
                      }
                    }}
                  >
                    <div>
                      <span className="block text-lg font-semibold mb-2">
                        ({item.id})
                      </span>
                      <h3
                        className={`text-4xl font-extrabold mb-4 ${
                          isActive
                            ? "text-white"
                            : "text-black group-hover:text-white"
                        }`}
                      >
                        {item.name.toUpperCase()}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isActive
                            ? "text-gray-200"
                            : "text-gray-700 group-hover:text-gray-200"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* Only show button if not active page */}
                    {!isActive && (
                      <div className="mt-6">
                        <button className="px-5 py-2 rounded-md text-sm font-semibold transition-all bg-primary text-white hover:bg-primary/80">
                          Visit
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
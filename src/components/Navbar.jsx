// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';

// const COLORS = {
//   primaryOrange: '#FF9900',
//   textDark: '#000000',
//   buttonBackground: '#000000',
//   buttonText: '#FFFFFF',
// };

// // 1. Navbar Container
// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 30px;
//   background-color: white;
//   height: 80px;
//   width: 100%;
//   box-sizing: border-box;
//   z-index: 100;
//   border-bottom: 1px solid #f0f0f0;

//   @media (max-width: 600px) {
//     padding: 15px 20px;
//   }
// `;

// // 2. Logo
// const Logo = styled(Link)`
//   font-family: Arial, sans-serif;
//   font-size: 24px;
//   font-weight: 700;
//   color: ${COLORS.textDark};
//   text-decoration: none;
//   cursor: pointer;

//   &::after {
//     content: '.';
//     color: ${COLORS.primaryOrange};
//     font-size: 1.5em;
//     line-height: 0;
//     vertical-align: top;
//     font-weight: 900;
//     margin-left: 1px;
//   }
// `;

// // 3. Right-Side Controls
// const Controls = styled.div`
//   display: flex;
//   align-items: center;
// `;

// // 4. Start A Project Button
// const StartProjectButton = styled(Link)`
//   background-color: ${COLORS.buttonBackground};
//   color: ${COLORS.buttonText};
//   font-weight: 600;
//   font-size: 16px;
//   padding: 12px 20px;
//   border-radius: 8px;
//   text-decoration: none;
//   margin-right: 15px;
//   cursor: pointer;
//   transition: background-color 0.3s, transform 0.1s;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: #333;
//   }

//   &::before,
//   &::after {
//     content: '/';
//     margin: 0 5px;
//     color: ${COLORS.primaryOrange};
//     font-weight: 400;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// // 5. Hamburger Button
// const HamburgerButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 30px;
//   height: 25px;
//   padding: 0;
//   margin-left: 15px;
//   z-index: 101;
// `;

// const BurgerLine = styled.div`
//   width: 100%;
//   height: 3px;
//   background-color: ${COLORS.textDark};
//   border-radius: 10px;
//   transition: all 0.3s linear;
//   transform-origin: 1px;
// `;

// // Animations
// const slideIn = keyframes`
//   from { transform: translateX(100%); }
//   to { transform: translateX(0); }
// `;

// const slideOut = keyframes`
//   from { transform: translateX(0); }
//   to { transform: translateX(100%); }
// `;

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Sidebar
// const SidebarOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   height: 100vh;
//   width: 400px;
//   max-width: 90%;
//   background-color: ${COLORS.buttonBackground};
//   color: ${COLORS.buttonText};
//   padding: 80px 40px;
//   box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
//   z-index: 99;
//   animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s forwards;
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 600px) {
//     width: 100%;
//     padding: 80px 20px;
//   }
// `;

// const SidebarList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin-top: 50px;
// `;

// const SidebarItem = styled.li`
//   margin-bottom: 25px;
//   opacity: 0;
//   animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.8s forwards;
//   animation-delay: ${({ delay }) => delay}s;
// `;

// const SidebarLink = styled(Link)`
//   color: ${COLORS.buttonText};
//   text-decoration: none;
//   font-size: 36px;
//   font-weight: 700;
//   transition: color 0.3s;

//   &:hover {
//     color: ${COLORS.primaryOrange};
//   }

//   @media (max-width: 600px) {
//     font-size: 28px;
//   }
// `;

// // --- REACT COMPONENT ---
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const menuItems = [
//     {name:'Home' ,href:'/'},
//     { name: 'About', href: '/aboutus' },
//     { name: 'Services', href: '/services' },
//     { name: 'Portfolio', href: '/portfolio' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   // Prevent background scroll when sidebar open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   // Sidebar component
//   const Sidebar = () => (
//     <SidebarOverlay isOpen={isOpen}>
//       <SidebarList>
//         {menuItems.map((item, index) => (
//           <SidebarItem
//             key={item.name}
//             isOpen={isOpen}
//             delay={0.2 + index * 0.1}
//             onClick={toggleSidebar}
//           >
//             <SidebarLink to={item.href}>{item.name}</SidebarLink>
//           </SidebarItem>
//         ))}
//       </SidebarList>
//     </SidebarOverlay>
//   );

//   return (
//     <>
//       <NavbarContainer>
//        <div className="logo">velvetbyte.</div>

//         <Controls>
//           <button className="start-project-btn">

//             <span>Start A Project</span>

//           </button>

//           <HamburgerButton onClick={toggleSidebar} aria-expanded={isOpen}>
//             <BurgerLine
//               style={{
//                 transform: isOpen
//                   ? 'rotate(45deg) translate(2px, 2px)'
//                   : 'rotate(0)',
//               }}
//             />
//             <BurgerLine style={{ opacity: isOpen ? 0 : 1 }} />
//             <BurgerLine
//               style={{
//                 transform: isOpen
//                   ? 'rotate(-45deg) translate(2px, -2px)'
//                   : 'rotate(0)',
//               }}
//             />
//           </HamburgerButton>
//         </Controls>
//       </NavbarContainer>

//       {isOpen && <Sidebar />}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "../assets/logoDark.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/aboutus" },
  { name: "Services", to: "/services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 0 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    setIsVisible(window.scrollY <= 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto px-5 md:px-20">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <img src={logoDark} alt="logo" className="w-40" />
              </Link>
            </div>

            {/* Right-side controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="bg-black text-white hover:bg-gray-900 rounded-tl-lg rounded-br-lg text-sm md:text-base px-2 md:px-4 py-1 cursor-pointer transition"
              >
                Start Now
              </button>
              <motion.button
                className="text-gray-900 rounded-lg p-2 transition duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Mobile Menu (Fixed: Added relative wrapper) */}
      <div className="relative z-[60]">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dark Overlay */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Sliding Panel */}
              <motion.div
                className="fixed right-4 top-20 z-50 overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-2xl flex justify-between items-start max-w-xl"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Left: Menu Links */}
                <div className="flex-1 pr-10 md:mr-10 border-r border-gray-300">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <Link
                        to={item.to}
                        className="text-gray-700 hover:text-black flex items-center rounded-lg px-3 py-2 font-medium transition-colors duration-200 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <div className="ml-6">
                          <MoveRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Contact Info */}
                <div className="flex-1 text-gray-700 hidden md:block pl-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Contact Info
                  </h3>
                  <p className="text-xs mb-2">📧 hello@velvetbyte.com</p>
                  <p className="text-xs mb-2">📞 +91 1234567891</p>
                  <p className="text-xs">🏢 Kochi, Kerala</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
        

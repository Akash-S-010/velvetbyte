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
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../assets/logoDark.png";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // current route

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="mx-auto px-5 md:px-20 flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoDark} alt="logo" className="w-40" />
          </Link>

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
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#F9F2E7] text-black p-6 md:p-16 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Grid Menu */}
            <div className="grid md:grid-cols-3 gap-6 py-10">
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
                        window.location.href = item.to;
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const COLORS = {
  primaryOrange: '#FF9900',
  textDark: '#000000',
  buttonBackground: '#000000',
  buttonText: '#FFFFFF',
};

// 1. Navbar Container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: white;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 600px) {
    padding: 15px 20px;
  }
`;

// 2. Logo
const Logo = styled(Link)`
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.textDark};
  text-decoration: none;
  cursor: pointer;

  &::after {
    content: '.';
    color: ${COLORS.primaryOrange};
    font-size: 1.5em;
    line-height: 0;
    vertical-align: top;
    font-weight: 900;
    margin-left: 1px;
  }
`;

// 3. Right-Side Controls
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

// 4. Start A Project Button
const StartProjectButton = styled(Link)`
  background-color: ${COLORS.buttonBackground};
  color: ${COLORS.buttonText};
  font-weight: 600;
  font-size: 16px;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-right: 15px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #333;
  }

  &::before,
  &::after {
    content: '/';
    margin: 0 5px;
    color: ${COLORS.primaryOrange};
    font-weight: 400;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// 5. Hamburger Button
const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  padding: 0;
  margin-left: 15px;
  z-index: 101;
`;

const BurgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${COLORS.textDark};
  border-radius: 10px;
  transition: all 0.3s linear;
  transform-origin: 1px;
`;

// Animations
const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Sidebar
const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  max-width: 90%;
  background-color: ${COLORS.buttonBackground};
  color: ${COLORS.buttonText};
  padding: 80px 40px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  z-index: 99;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s forwards;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
    padding: 80px 20px;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

const SidebarItem = styled.li`
  margin-bottom: 25px;
  opacity: 0;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.8s forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const SidebarLink = styled(Link)`
  color: ${COLORS.buttonText};
  text-decoration: none;
  font-size: 36px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: ${COLORS.primaryOrange};
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

// --- REACT COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    {name:'Home' ,href:'/'},
    { name: 'About', href: '/aboutus' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  // Prevent background scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Sidebar component
  const Sidebar = () => (
    <SidebarOverlay isOpen={isOpen}>
      <SidebarList>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={item.name}
            isOpen={isOpen}
            delay={0.2 + index * 0.1}
            onClick={toggleSidebar}
          >
            <SidebarLink to={item.href}>{item.name}</SidebarLink>
          </SidebarItem>
        ))}
      </SidebarList>
    </SidebarOverlay>
  );

  return (
    <>
      <NavbarContainer>
       <div className="logo">velvetbyte.</div>

        <Controls>
          <button className="start-project-btn">

            <span>Start A Project</span>

          </button>

          <HamburgerButton onClick={toggleSidebar} aria-expanded={isOpen}>
            <BurgerLine
              style={{
                transform: isOpen
                  ? 'rotate(45deg) translate(2px, 2px)'
                  : 'rotate(0)',
              }}
            />
            <BurgerLine style={{ opacity: isOpen ? 0 : 1 }} />
            <BurgerLine
              style={{
                transform: isOpen
                  ? 'rotate(-45deg) translate(2px, -2px)'
                  : 'rotate(0)',
              }}
            />
          </HamburgerButton>
        </Controls>
      </NavbarContainer>

      {isOpen && <Sidebar />}
    </>
  );
};

export default Navbar;

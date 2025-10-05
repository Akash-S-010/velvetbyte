import React, { useState, useEffect } from 'react';

// The CSS as a JavaScript template literal string
const NAVBAR_STYLES = `
/* --- Variables for consistency --- */
:root {
  --black: #000000;
  --white: #ffffff;
  --red: #f0003c; /* A strong red for the dot */
}

/* --- Main Navbar Container --- */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%; 
  background-color: var(--white);
  position: relative; 
  min-height: 80px; 
  z-index: 100;
}

/* --- Logo Styling --- */
.navbar-logo {
  display: flex;
  align-items: flex-end; 
  font-family: Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 900; 
  line-height: 1; 
  z-index: 101; 
}

.logo-text-black {
  color: var(--black);
}

.logo-dot-red {
  color: var(--red);
  font-size: 3rem; 
  margin-left: -5px; 
}

/* --- CTA Button Styling (Start a Project) --- */
.navbar-cta-wrapper {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.cta-button {
  background-color: var(--black);
  color: var(--white);
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0; 
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #333333;
}

.arrow-icon {
  margin-left: 10px;
  font-size: 1.2rem;
  line-height: 1;
}

/* --- Hamburger Button Styling --- */
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 20px; 
  z-index: 101; 
}

.line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--black);
  transition: all 0.3s ease-in-out;
}

/* --- Mobile Menu Overlay Styling --- */
.mobile-menu-overlay {
  position: fixed; /* Use fixed to cover the entire viewport */
  top: 80px; /* Start right below the navbar (assuming navbar height is ~80px) */
  left: 0;
  width: 100%;
  height: calc(100vh - 80px); /* Fill the rest of the screen */
  transform: translateX(100%); /* Start off-screen to the right */
  background-color: var(--white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 99; 
  padding-bottom: 20px;
  transition: transform 0.4s ease-out;
  overflow-y: auto; /* Allow scrolling if menu content is large */
}

.mobile-menu-overlay.open {
  transform: translateX(0); /* Slide into view */
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.mobile-menu-list li {
  padding: 15px 5%;
  border-bottom: 1px solid #eeeeee;
}

.mobile-menu-list a {
  text-decoration: none;
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 600;
  display: block; 
  transition: color 0.2s;
}

.mobile-menu-list a:hover {
  color: var(--red);
}

/* --- Desktop View: Hide the mobile menu --- */
@media (min-width: 992px) {
  .mobile-menu-overlay {
    display: none; 
  }
}
`;

// Helper component to inject the style tag once
const GlobalStyleInjector = ({ styles }) => {
  useEffect(() => {
    // Check if the style tag already exists to prevent duplicates
    if (!document.getElementById('navbar-style-injector')) {
      const style = document.createElement('style');
      style.id = 'navbar-style-injector';
      style.textContent = styles;
      document.head.appendChild(style);
    }
  }, [styles]); // Dependency on styles (though it won't change)

  return null; // This component doesn't render anything itself
};

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu's state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Inject the CSS into the document head
    <>
      <GlobalStyleInjector styles={NAVBAR_STYLES} />
      
      <nav className="navbar">
        {/* Logo/Brand Name */}
        <div className="navbar-logo">
          <span className="logo-text-black">creative</span>
          <span className="logo-dot-red">.</span>
        </div>

        {/* Primary Call-to-Action Button */}
        <div className="navbar-cta-wrapper">
          <button className="cta-button">
            Start a Project <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Full-Screen Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-list">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
import React from "react";

// --- Data for the portfolio items (I've added titles) ---
const works = [
  {
    title: "Blacmelo Web Design", // Added title
    description: "A beautiful web design built with React and Tailwind, focusing on responsiveness and modern aesthetics.",
    image: "https://i.postimg.cc/DfjH717v/clothes-laptop-bed-arrangement-high-angle.jpg",
    link: "https://blacmelo.com/",
  },
  {
    title: "Vkriti E-commerce", // Added title
    description: "E-commerce platform with modern UI/UX and fast performance, designed for high-volume sales and ease of use.",
    image: "https://i.postimg.cc/kXYTxskD/friends-shopping-second-hand-market.jpg",
    link: "https://vkriti.com/",
  },
  {
    title: "Nsmediaco Blog", // Added title
    description: "A mobile-responsive blog using Next.js and Markdown for rapid content delivery and an optimal reading experience.",
    image: "https://i.postimg.cc/c41xbRXw/professional-equipment-camera-tripod-stand-field-front-prepared-table-evening-time.jpg",
    link: "https://nsmediaco.com/",
  },
];

// --- Classy & Attractive Styles ---
const classyStyles = {
  section: {
    padding: "6rem 2rem", // Increased padding
    backgroundColor: "#ffffff", // Pure white background for class
    textAlign: "center",
    fontFamily: "'Helvetica Neue', Arial, sans-serif", // Classy font stack
  },
  title: {
    fontSize: "3rem", // Larger, more impactful title
    fontWeight: 300, // Lighter font weight for sophistication
    marginBottom: "1rem",
    color: "#1a1a1a",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "4rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2.5rem", // Increased gap
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px", // Slightly softer corners
    border: "1px solid #eee", // Subtle border for definition
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)", // Softer, more pronounced shadow
    overflow: "hidden",
    width: "320px", // Slightly wider card
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px", // Taller image area
    objectFit: "cover",
  },
  content: {
    padding: "1.5rem", // More internal padding
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: 500,
    margin: "0 0 0.5rem 0",
    color: "#1a1a1a",
  },
  description: {
    fontSize: "1rem",
    color: "#4a4a4a",
    marginBottom: "1.5rem",
    lineHeight: 1.5,
  },
  button: {
    backgroundColor: "black", // A sophisticated forest green or deep navy would also work
    color: "white",
    border: "none",
    padding: "0.7rem 1.5rem",
    fontSize: "0.9rem",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: 600,
    letterSpacing: "0.5px",
  },
  // Button hover style (will be applied inline via onMouseEnter)
  buttonHover: {
    backgroundColor: "#388e3c",
    transform: "translateY(-1px)",
  },
};

const OurWorks = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <section style={classyStyles.section}>
      <h2 style={classyStyles.title}>Selected Works</h2>
      <p style={classyStyles.subtitle}>
        A showcase of our recent projects, built with modern technologies.
      </p>
      <div style={classyStyles.container}>
        {works.map((work, index) => (
          <div
            key={index}
            style={{
              ...classyStyles.card,
              // Apply hover styles for card
              transform: hoveredCard === index ? "translateY(-10px)" : "translateY(0)",
              boxShadow: hoveredCard === index ? "0 15px 40px rgba(0, 0, 0, 0.1)" : classyStyles.card.boxShadow,
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img 
              src={work.image} 
              alt={work.title || `Project ${index + 1}`} 
              style={classyStyles.image} 
            />
            <div style={classyStyles.content}>
              <h3 style={classyStyles.cardTitle}>{work.title || `Project ${index + 1}`}</h3>
              <p style={classyStyles.description}>{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    ...classyStyles.button,
                    // Apply hover styles for button
                    ...(hoveredButton === index ? classyStyles.buttonHover : {}),
                }}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
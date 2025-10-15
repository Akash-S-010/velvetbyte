import React from "react";

// --- Data for the portfolio items (with two new cards added) ---
const works = [
  {
    title: "Blacmelo Web Design",
    description:
      "A beautiful web design built with React and Tailwind, focusing on responsiveness and modern aesthetics.",
    image:
      "https://i.postimg.cc/DfjH717v/clothes-laptop-bed-arrangement-high-angle.jpg",
    link: "https://blacmelo.com/",
  },
  {
    title: "Vkriti E-commerce",
    description:
      "E-commerce platform with modern UI/UX and fast performance, designed for high-volume sales and ease of use.",
    image:
      "https://i.postimg.cc/kXYTxskD/friends-shopping-second-hand-market.jpg",
    link: "https://vkriti.com/",
  },
  {
    title: "Nsmediaco Blog",
    description:
      "A mobile-responsive blog using Next.js and Markdown for rapid content delivery and an optimal reading experience.",
    image:
      "https://i.postimg.cc/c41xbRXw/professional-equipment-camera-tripod-stand-field-front-prepared-table-evening-time.jpg",
    link: "https://nsmediaco.com/",
  },
  {
    title: "Groom Meeting Details",
    description:
      "A luxury wedding portfolio showcasing elegant details — from the groom’s attire to accessories — captured with style and precision.",
    image:
      "https://i.postimg.cc/L8M7sV1h/groom-meeting-details-jacket-shoes-watches-buttons-wedding-day.jpg",
    link: "https://selorae.com/",
  },
  {
    title: "Fullmoon Cinema",
    description:
      "A cinematic project highlighting the art of storytelling through visuals, creativity, and immersive motion design.",
    image:
      "https://i.postimg.cc/3JhC4ftm/collage-about-movie-time-with-hands-holding-camera.jpg",
    link: "https://fullmooncinema.com/",
  },
];

// --- Classy & Attractive Styles ---
const classyStyles = {
  section: {
    padding: "6rem 2rem",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 300,
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
    gap: "2.5rem",
    maxWidth: "1100px", // keeps layout centered and 3 per row
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid #eee",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    width: "320px",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "1.5rem",
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
    backgroundColor: "#FF9900", // orange button
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
  buttonHover: {
    backgroundColor: "#e68900", // darker orange hover
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
              transform:
                hoveredCard === index ? "translateY(-10px)" : "translateY(0)",
              boxShadow:
                hoveredCard === index
                  ? "0 15px 40px rgba(0, 0, 0, 0.1)"
                  : classyStyles.card.boxShadow,
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
              <h3 style={classyStyles.cardTitle}>
                {work.title || `Project ${index + 1}`}
              </h3>
              <p style={classyStyles.description}>{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...classyStyles.button,
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


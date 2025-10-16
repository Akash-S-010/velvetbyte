import React from "react";

const AnimatedSection = () => {
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "#fffff", // dark background to make container pop
    fontFamily: "'Poppins', sans-serif",
  };

  const sectionStyle = {
    background: "linear-gradient(135deg, #000000 80%, #ffb84d 100%)",
    color: "white",
    textAlign: "center",
    borderRadius: "60px 15px 60px 15px",
    padding: "3rem 2.5rem",
    width: "80%",
    maxWidth: "800px", // 🔸 entire section smaller now
    boxShadow:
      "0 8px 40px rgba(255, 165, 0, 0.25), inset 0 0 25px rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    letterSpacing: "1.5px",
  };

  const paragraphStyle = {
    color: "#f5f5f5",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  return (
    <div style={wrapperStyle} className="bg-white pt-10">
      <section style={sectionStyle} className="animated-section">
        <h1 style={headingStyle} className="animated-heading">
          <span className="word word1">Design</span>{" "}
          <span className="word word2">Build</span>{" "}
          <span className="word word3">Market</span>
        </h1>
        <p style={paragraphStyle}>
          We bring ideas to life through creativity and innovation — crafting
          meaningful digital experiences that connect and inspire.
        </p>
      </section>

      {/* --- Animation Styles --- */}
      <style>{`
        @keyframes colorCycle {
          0% { color: #a8e6cf; }     /* light mint green */
          25% { color: #fff3b0; }    /* soft pastel yellow */
          50% { color: #a0c4ff; }    /* sky blue */
          75% { color: #ffffff; }    /* white */
          100% { color: #a8e6cf; }   /* mint again */
        }

        .word {
          display: inline-block;
          color: black;
          animation: colorCycle 6s infinite ease-in-out;
        }

        .word1 { animation-delay: 0s; }
        .word2 { animation-delay: 1.5s; }
        .word3 { animation-delay: 3s; }

        .animated-section:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 50px rgba(255, 180, 70, 0.3);
        }

        @media (max-width: 768px) {
          .animated-heading {
            font-size: 2rem;
          }
          .animated-section {
            padding: 2rem 1.5rem;
            border-radius: 40px 10px 40px 10px;
          }
          p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .animated-heading {
            font-size: 1.6rem;
          }
          .animated-section {
            width: 90%;
            border-radius: 30px 8px 30px 8px;
          }
          p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSection;

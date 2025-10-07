import React from 'react';

const CostSection = () => {
  // --- Styles as JavaScript Objects ---
  const styles = {
    sectionContainer: {
      // Adjusted background gradient for blackish with orange
      background: 'linear-gradient(135deg, #1A1A1A 0%, #301000 70%, #502000 100%)',
      // Starts very dark (#1A1A1A), transitions to a dark, muted orange (#301000),
      // and ends with a slightly brighter dark orange (#502000) at the corner.
      borderRadius: '12px',
      padding: '60px 5%',
      maxWidth: '1000px',
      margin: '80px auto',
      color: '#FFFFFF', // White text
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)', // Slightly stronger shadow for dark background
      position: 'relative',
      overflow: 'hidden',
    },
    title: {
      fontSize: '38px',
      fontWeight: '600',
      marginBottom: '20px',
      lineHeight: '1.2',
      maxWidth: '700px',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#E0E0E0',
      maxWidth: '800px',
    },
    dotIndicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#FFA500', // Clear orange for the dot
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      border: '1px solid rgba(255,255,255,0.3)',
    }
  };

  return (
    <div style={styles.sectionContainer}>
      <h2 style={styles.title}>
        Cost of Building Your Own Website in 2025
      </h2>
      <p style={styles.paragraph}>
        Thinking about building your own website? DIY website builders have profoundly evolved, making it easier than ever to
        create a professional looking site without needing any coding skills whatsoever. But is it the right choice for you? Let's
        break down the costs, pros, and cons so you can decide with confidence.
      </p>
      <div style={styles.dotIndicator}></div>
    </div>
  );
};

export default CostSection;
import React from 'react';
import './AgencyHighlights.css'; // Import the dedicated CSS file

const HighlightItem = ({ title, description }) => (
  <div className="highlight-item">
    {/* The small orange dot */}
    <span className="highlight-dot"></span>
    <h3 className="highlight-title">{title}</h3>
    <p className="highlight-description">{description}</p>
  </div>
);

const AgencyHighlights = () => {
  return (
    <div className="agency-highlights-section">
      <div className="section-header">
        <span className="dot-prefix"></span>
        <p className="subtitle">What Makes Us Different</p>
        <h1 className="main-title">What makes us a leading web development company</h1>
      </div>

      <div className="highlights-container">
        <HighlightItem
          title="More Innovation"
          description="From clean one-pagers to fully functional business websites, we build platforms that are fast, responsive, and tailored to your brand."
        />
        <HighlightItem
          title="Proven Expertise"
          description="Designs that look expensive, feel intuitive, and speak to your audience without draining your wallet"
        />
        <HighlightItem
          title="Startegic Vision"
          description="Launch your eCommerce store the right way with Shopify. From theme setup to payment gateway integration, we handle everything."
        />
      </div>

      {/* The 'SPEAK TO US' button at the bottom right */}
      
    </div>
  );
};

export default AgencyHighlights;
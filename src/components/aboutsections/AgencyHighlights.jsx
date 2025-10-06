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
        <h1 className="main-title">What makes us a leading web design agency</h1>
      </div>

      <div className="highlights-container">
        <HighlightItem
          title="Highly Rated"
          description="No.1 UK & Europe ranked web agency on Clutch out of 70,000 other agencies. We're proud to be independently one of the best at what we do."
        />
        <HighlightItem
          title="Fully Accredited"
          description="We hold quality standard certifications, including ISO and Google Partner. We're a partner you can trust."
        />
        <HighlightItem
          title="Fully Bespoke"
          description="Everything we do is designed unique to your requirements - no boring designs."
        />
      </div>

      {/* The 'SPEAK TO US' button at the bottom right */}
      
    </div>
  );
};

export default AgencyHighlights;
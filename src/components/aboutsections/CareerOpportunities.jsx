import React from 'react';

// --- Styles as JavaScript Objects ---
const styles = {
  // Color/Theme Variables
  accentPink: '#FF0066', // A vibrant pink from the image
  darkText: '#101010',
  lightText: '#555555',
  lightBackground: '#FFFFFF',
  
  // Main Section
  careerSection: {
    padding: '80px 10%',
    backgroundColor: 'var(--lightBackground)',
    fontFamily: 'Arial, sans-serif', // Use a standard font
  },

  // Header
  sectionHeader: {
    marginBottom: '60px',
  },
  
  dotPrefix: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    backgroundColor: 'orange',
    borderRadius: '50%',
    marginRight: '10px',
    verticalAlign: 'middle',
  },

  subtitle: {
    color: 'var(--lightText)',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '0',
    display: 'inline-block',
  },

  mainTitle: {
    color: 'var(--darkText)',
    fontSize: '42px',
    fontWeight: '500',
    margin: '10px 0 0 0',
  },

  // Job Listing Item
  jobItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',
    borderBottom: '1px solid #EEEEEE', // Light separator line
  },
  
  // Title (Job Role)
  jobTitle: {
    color: 'var(--darkText)',
    fontSize: '24px',
    fontWeight: '500',
    margin: '0',
  },

  // Tag Container (Remote/Development tags)
  tagsContainer: {
    display: 'flex',
    gap: '10px',
  },

  // Individual Tag (Pill)
  tag: {
    padding: '6px 15px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    border: '1px solid #CCCCCC',
    color: 'var(--darkText)',
    whiteSpace: 'nowrap',
  },
};

// Override the CSS variables with direct values for use in React's style prop
const getStyle = (styleName) => {
    const style = styles[styleName];
    // Replace CSS variables with their actual values
    return Object.fromEntries(
        Object.entries(style).map(([key, value]) => {
            if (typeof value === 'string') {
                value = value.replace('var(--accentPink)', styles.accentPink);
                value = value.replace('var(--darkText)', styles.darkText);
                value = value.replace('var(--lightText)', styles.lightText);
                value = value.replace('var(--lightBackground)', styles.lightBackground);
            }
            return [key, value];
        })
    );
};

// --- Job Listing Component ---
const JobListing = ({ title, tags }) => (
  <div style={getStyle('jobItem')}>
    <h3 style={getStyle('jobTitle')}>{title}</h3>
    <div style={getStyle('tagsContainer')}>
      {tags.map((tag, index) => (
        <span key={index} style={getStyle('tag')}>{tag}</span>
      ))}
    </div>
  </div>
);


// --- Main Career Component ---
const CareerOpportunities = () => {
  return (
    <div style={getStyle('careerSection')}>
      
      {/* Header */}
      <div style={getStyle('sectionHeader')}>
        <span style={getStyle('dotPrefix')}></span>
        <p style={getStyle('subtitle')}>Open Positions</p>
        <h1 style={getStyle('mainTitle')}>Explore Exciting Career Opportunities with Us</h1>
      </div>

      {/* Listings */}
      <div>
        <JobListing 
          title="Junior Front-End Developer" 
          tags={["Semi Remote", "Development"]} 
        />
        <JobListing 
          title="Copywriter (Part/Full-Time)" 
          tags={["Remote", "Copywriting"]} 
        />
        {/* Add more listings here if needed */}
        <div style={{...getStyle('jobItem'), borderBottom: 'none'}}> 
            {/* The last item from the image had no border, so we override it here. */}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;
import React from 'react';

// A functional component for the small tag/button at the bottom
const Tag = ({ children }) => (
  <span
    style={{
      padding: '5px 10px',
      marginRight: '8px',
      border: '1px solid #ccc',
      borderRadius: '20px',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
    }}
  >
    {children}
  </span>
);

// A functional component for a single article card
const ArticleCard = ({ title, summary, tags, imageUrl }) => (
  <div
    style={{
      flex: '1 1 30%',
      margin: '10px',
      maxWidth: '350px',
      minWidth: '250px',
    }}
  >
    {/* Image Area */}
    <div
      style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#000',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '5px',
        overflow: 'hidden',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!imageUrl && 'Image Placeholder'}
    </div>

    {/* Title */}
    <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
      {title}
    </h3>

    {/* Summary */}
    <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.4' }}>
      {summary}
    </p>

    {/* Tags and Link */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <div>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
      
      {/* Link Arrow */}
      <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer' }}>
        &rarr;
      </span>
    </div>
  </div>
);

// Main component to render all cards
const ArticlePreviews = () => {
  // Data for the three cards with your actual image URLs
  const articlesData = [
    {
      title: 'AI Websites: The Future of Lead Generation',
      summary:
        "Most Websites Don't Convert. Here Are 5 AI Fixes. A good website is not everything—98% of the visitors will exit...",
      tags: ['Website Design'],
      imageUrl: 'https://i.postimg.cc/YC6FXW5f/igor-miske-JVSgc-V8-vb4-unsplash.jpg',
    },
    {
      title: '8 Interactive Website Examples & Creative Animations',
      summary:
        'One of the things we focus on as an website design agency is staying sharp on what makes a website...',
      tags: ['Website Design', 'Web Development'],
      imageUrl: 'https://i.postimg.cc/k5MyKs2w/solidpixels-TCBw4j-AIJDY-unsplash.jpg',
    },
    {
      title: 'Fewer Revisions, Faster Approvals – How to Manage the Web Design Feedback Loop',
      summary:
        'If you have worked on a design project, you likely understand how frustrating endless revisions can be, if feedback loops...',
      tags: ['Website Design'],
      imageUrl: 'https://i.postimg.cc/7Z93HzKJ/analysis-strategy-study-information-business-planning.jpg',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {articlesData.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          summary={article.summary}
          tags={article.tags}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
};

export default ArticlePreviews;
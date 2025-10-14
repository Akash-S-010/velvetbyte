import React from "react";

const CreativeWebHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center relative px-5 py-20 font-sans">
      {/* Header Tag */}
      <div className="flex items-center mb-5">
        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
        <span className="text-gray-500 font-medium text-sm">VelvetByte</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 max-w-3xl mb-8 leading-tight">
        Need a quick fix, a new feature, or a monthly dev partner? Hire us like a freelancer
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-base text-gray-500 max-w-3xl mb-12 leading-relaxed">
        We work with startups, small businesses, eCommerce brands, and service providers. Whether you need a basic site, a custom landing page, or a full online store, we’ve got you covered
      </p>

      {/* Scroll Indicator */}
      <div className="w-6 h-6 border-2 border-gray-500 rounded-full opacity-70 hover:opacity-100 transition"></div>
    </div>
  );
};

export default CreativeWebHero;

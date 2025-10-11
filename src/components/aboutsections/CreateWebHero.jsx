import React from "react";

const CreativeWebHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center relative px-5 py-20 font-sans">
      {/* Header Tag */}
      <div className="flex items-center mb-5">
        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
        <span className="text-gray-500 font-medium text-sm">CreativeWeb</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 max-w-3xl mb-8 leading-tight">
        We design bespoke & engaging websites for businesses and enterprises worldwide
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-base text-gray-500 max-w-3xl mb-12 leading-relaxed">
        Founded in 2013, the company has evolved from a small boutique web design
        studio into a thriving web design agency, designing & developing over 500
        bespoke websites to date. We are an established, experienced, and trusted
        team with over a decade of experience in providing bespoke web solutions.
      </p>

      {/* Scroll Indicator */}
      <div className="w-6 h-6 border-2 border-gray-500 rounded-full opacity-70 hover:opacity-100 transition"></div>
    </div>
  );
};

export default CreativeWebHero;

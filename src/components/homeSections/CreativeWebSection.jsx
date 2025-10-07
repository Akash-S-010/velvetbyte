import React from "react";

const CreativeWebSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Images */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <img
              src="https://i.postimg.cc/kgK4rtYT/html-system-websites-concept.jpg"
              alt="Creative work 1"
              className="rounded-2xl shadow-lg w-40 h-40 object-cover max-w-full"
            />
            <img
              src="https://i.postimg.cc/Z54MFG3J/3d-rendering-three-devices-with-responsive-directory-interior-design-website-screen-wooden-desktop-t.jpg"
              alt="Creative work 2"
              className="rounded-2xl shadow-lg w-44 md:w-60 h-40 object-cover max-w-full"
            />
          </div>
          <img
            src="https://i.postimg.cc/LXW0Jwmv/data-analysis-insights.jpg"
            alt="Creative work 3"
            className="rounded-2xl shadow-lg w-full h-64 object-cover max-w-full mt-4"
          />
        </div>

        {/* Right Text */}
        <div className="mt-6 lg:mt-0">
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-4">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-600"></span>
            Web Design Agency
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Creative<span className="text-primary">{" "}Web.</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            We design unique and stunning websites for businesses and enterprises worldwide,
            offering a personalised, hands-on service, from our London web design team, that adds true value.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            We break the process down into easy, manageable steps, working closely with you at every turn.
            From <span className="underline font-medium">WordPress web design</span> and
            <span className="underline font-medium"> interactive website design</span> to branding,
            <span className="underline font-medium"> SEO optimisation</span>,
            <span className="underline font-medium"> multilingual web design</span> and UI/UX,
            we take care of every detail to create a solution that’s tailored just for you.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
            With a passion for high-performance, immersive digital experiences, we focus on giving our
            clients a competitive edge and delivering strong ROI on their investment.
          </p>

          <button className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-800 rounded-lg text-sm sm:text-base hover:bg-gray-900 hover:text-white transition w-full sm:w-auto">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeWebSection;
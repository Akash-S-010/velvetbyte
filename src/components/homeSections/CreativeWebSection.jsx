import React from "react";

const CreativeWebSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <img
              src="https://i.postimg.cc/kgK4rtYT/html-system-websites-concept.jpg"
              alt="Creative work 1"
              className="rounded-2xl shadow-lg w-40 h-40 object-cover"
            />
            <img
              src="https://i.postimg.cc/Z54MFG3J/3d-rendering-three-devices-with-responsive-directory-interior-design-website-screen-wooden-desktop-t.jpg"
              alt="Creative work 2"
              className="rounded-2xl shadow-lg object-cover w-60 h-40"
            />
          </div>
          <img
            src="https://i.postimg.cc/LXW0Jwmv/data-analysis-insights.jpg"
            alt="Creative work 3"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
        </div>

        {/* Right Text */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
            Web Design Agency
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Creative<span className="text-pink-600">Web.</span>
          </h2>

          <p className="text-gray-700 mb-4">
            We design unique and stunning websites for businesses and enterprises worldwide,
            offering a personalised, hands-on service, from our London web design team, that adds true value.
          </p>

          <p className="text-gray-700 mb-4">
            We break the process down into easy, manageable steps, working closely with you at every turn.
            From <span className="underline font-medium">WordPress web design</span> and
            <span className="underline font-medium"> interactive website design</span> to branding,
            <span className="underline font-medium"> SEO optimisation</span>,
            <span className="underline font-medium"> multilingual web design</span> and UI/UX,
            we take care of every detail to create a solution that’s tailored just for you.
          </p>

          <p className="text-gray-700 mb-6">
            With a passion for high-performance, immersive digital experiences, we focus on giving our
            clients a competitive edge and delivering strong ROI on their investment.
          </p>

          <button className="px-6 py-3 border border-gray-800 rounded-lg hover:bg-gray-900 hover:text-white transition">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeWebSection;
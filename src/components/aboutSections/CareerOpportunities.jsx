import React from "react";

const JobListing = ({ title, tags }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6 border-b border-gray-200">
      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2 sm:mb-0">{title}</h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full border border-gray-300 whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const CareerOpportunities = () => {
  return (
    <div
      className="
        px-4 py-12       /* mobile */
        sm:px-8 sm:py-16  /* tablets */
        lg:px-20 lg:py-24  /* desktops */
        bg-white font-sans
      "
    >
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full mr-2"></span>
        <p className="uppercase text-gray-500 tracking-wide text-xs sm:text-sm inline-block">
          Open Positions
        </p>
        <h1 className="text-2xl sm:text-4xl font-medium text-gray-900 mt-2 leading-snug">
          Explore Exciting Career Opportunities with Us
        </h1>
      </div>

      {/* Job Listings */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <JobListing title="Junior Front-End Developer" tags={["Semi Remote", "Development"]} />
        <JobListing title="Copywriter (Part/Full-Time)" tags={["Remote", "Copywriting"]} />
        {/* Additional listings can go here */}
      </div>
    </div>
  );
};

export default CareerOpportunities;

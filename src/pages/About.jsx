import React from "react";
import CreativeWebHero from "../components/aboutSections/CreativeWebHero";
import AgencyHighlights from "../components/aboutSections/AgencyHighlights";
import CareerOpportunities from "../components/aboutSections/CareerOpportunities";
import StatsSection from "../components/aboutSections/StatsSection";
import ProfileCard from "../components/aboutSections/ProfileCard";
function AboutUs() {
  return (
    <div>
      <CreativeWebHero />
      <StatsSection />
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-semibold mb-10">Meet Our <span className="text-primary">Team</span></h1>
        <ProfileCard />
      </div>
      <AgencyHighlights />
      <CareerOpportunities />
    </div>
    
  );
}

export default AboutUs;

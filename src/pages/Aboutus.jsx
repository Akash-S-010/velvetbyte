import React from "react";
import CreativeWebHero from "../components/aboutsections/CreateWebHero";
import CareerOpportunities from "../components/aboutsections/CareerOpportunities";
import StatsSection from "../components/aboutSections/StatsSection";
import AgencyHighlights from "../components/aboutSections/AgencyHighlights";
function AboutUs() {
  return (
    <div>
      <CreativeWebHero />
      <StatsSection />
      <AgencyHighlights />
      <CareerOpportunities />
    </div>
  );
}

export default AboutUs;

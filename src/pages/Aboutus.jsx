import React from "react";
import CreativeWebHero from "../components/aboutsections/CreateWebHero";
import AgencyHighlights from "../components/aboutsections/AgencyHighlights";
import CareerOpportunities from "../components/aboutsections/CareerOpportunities";
import StatsSection from "../components/aboutsections/StatsSection";
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

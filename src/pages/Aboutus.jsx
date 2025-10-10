import React from "react";
import CreativeWebHero from "../components/aboutsections/CreateWebHero";
import StatsSection from "../components/aboutsections/StatsSection";
import AgencyHighlights from "../components/aboutsections/AgencyHighlights";
import CareerOpportunities from "../components/aboutsections/CareerOpportunities";
import SpeakUsBtn from "../components/ui/SpeakUsBtn";
function AboutUs() {
  return (
    <div>
      <CreativeWebHero />
      <StatsSection />
      <AgencyHighlights />
      <CareerOpportunities />
      <SpeakUsBtn>Speak to Us</SpeakUsBtn>
    </div>
  );
}

export default AboutUs;

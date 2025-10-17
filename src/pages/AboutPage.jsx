import React from "react";
import AboutHero from "../components/aboutSections/AboutHero";
import AgencyHighlights from "../components/aboutSections/AgencyHighlights";
import CareerOpportunities from "../components/aboutSections/CareerOpportunities";
import StatsSection from "../components/aboutSections/StatsSection";
import ProfileCard from "../components/aboutSections/ProfileCard";
import ClientSection from "../components/ui/ClientSection";
function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <ClientSection />
      <StatsSection />
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold mb-6 md:mb-10">
          Meet Our <span className="text-primary">Team</span>
        </h1>
        <ProfileCard />
      </div>
      <AgencyHighlights />
      <CareerOpportunities />
    </div>
  );
}

export default AboutPage;

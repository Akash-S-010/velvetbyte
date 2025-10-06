import React from 'react'
import CreativeWebHero from '../components/aboutsections/CreateWebHero'
import Navbar from '../components/Navbar'
import StatsSection from '../components/aboutsections/StatsSection'
import AgencyHighlights from '../components/aboutsections/AgencyHighlights'
import SpeakUsBtn from '../components/ui/SpeakUsBtn'
import CareerOpportunities from '../components/aboutsections/CareerOpportunities'
function AboutUs() {
  return (
    <div>
        
      
        <CreativeWebHero/>
        <StatsSection/>
        <AgencyHighlights/>
        <SpeakUsBtn/>
        <CareerOpportunities/>

    </div>
  )
}

export default AboutUs
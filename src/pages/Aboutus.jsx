import React from 'react'
import CreativeWebHero from '../components/aboutsections/CreateWebHero'
import Navbar from '../components/Navbar'
import StatsSection from '../components/aboutsections/StatsSection.JSX'

function Aboutus() {
  return (
    <div>
        <Navbar/>
      
        <CreativeWebHero/>
        <StatsSection/>
    </div>
  )
}

export default Aboutus
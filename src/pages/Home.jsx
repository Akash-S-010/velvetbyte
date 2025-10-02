import React from 'react'
import Hero from '../components/homeSections/Hero'
import Navbar from '../components/Navbar'
import About from '../components/homeSections/About'
import VideoSection from '../components/homeSections/VideoSection'
import ServicesComponent from '../components/homeSections/ServicesComponent'
import Footer from '../components/Footer'
import StickySections from '../components/ui/StickySection'
import ContactSection from '../components/homeSections/ContactSection'
import PortfolioSection from '../components/homeSections/PortfolioSection'

const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Hero />
      <About />
      <VideoSection />
      <ServicesComponent />
      <StickySections />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import Hero from '../components/homeSections/Hero'
import Navbar from '../components/Navbar'
import VideoSection from '../components/homeSections/VideoSection'
import Footer from '../components/Footer'
import ContactSection from '../components/homeSections/ContactSection'
import PortfolioSection from '../components/homeSections/PortfolioSection'
import AboutSection from '../components/homeSections/AboutSection'
import ServiceSection from '../components/homeSections/ServiceSection'
import StickyScroll from '../components/ui/StickyScroll'
import ArticlePreviews from '../components/homeSections/ArticlePreviews'
import CreativeWebSection from '../components/homeSections/CreativeWebSection'

const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Hero />
      <AboutSection />
      <ArticlePreviews />
      <VideoSection />
      <CreativeWebSection />
      <StickyScroll />
      <ServiceSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home


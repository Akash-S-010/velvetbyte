import React from 'react'
import Hero from '../components/homeSections/Hero'
import VideoSection from '../components/homeSections/VideoSection'
import Footer from '../components/Footer'
import PortfolioSection from '../components/homeSections/PortfolioSection'
import AboutSection from '../components/homeSections/AboutSection'
import ServiceSection from '../components/homeSections/ServiceSection'
import StickyScroll from '../components/ui/StickyScroll'
import ArticlePreviews from '../components/homeSections/ArticlePreviews'
import CreativeWebSection from '../components/homeSections/CreativeWebSection'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ArticlePreviews />
      <VideoSection />
      <CreativeWebSection />
      <StickyScroll />
      <ServiceSection />
      <PortfolioSection />
      <ContactUs />
    </>
  )
}

export default Home


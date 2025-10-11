import React from 'react'
import Hero from '../components/homeSections/Hero'
import VideoSection from '../components/homeSections/VideoSection'
import PortfolioSection from '../components/homeSections/PortfolioSection'
import ServiceSection from '../components/homeSections/ServiceSection'
import StickyScroll from '../components/homeSections/StickyScroll'
import ArticlePreviews from '../components/homeSections/ArticlePreviews'
import CreativeWebSection from '../components/homeSections/CreativeWebSection'
import Testimonial from '../components/homeSections/Testimonial'
import ClientSection from '../components/ui/ClientSection'

const Home = () => {
  return (
    <>
      <Hero />
      <ClientSection />
      <ArticlePreviews />
      <VideoSection />
      <CreativeWebSection />
      <StickyScroll />
      <ServiceSection />
      <PortfolioSection />
      <Testimonial />
    </>
  )
}

export default Home


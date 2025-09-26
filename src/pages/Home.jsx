import React from 'react'
import Hero from '../components/homeSections/Hero'
import Navbar from '../components/Navbar'
import About from '../components/homeSections/About'
import VideoSection from '../components/homeSections/VideoSection'
import ServicesComponent from '../components/homeSections/ServicesComponent'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Hero />
      <About />
      <VideoSection />
      <ServicesComponent />
      <Footer />
    </div>
  )
}

export default Home

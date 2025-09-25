import React from 'react'
import Hero from '../components/homeSections/Hero'
import Navbar from '../components/Navbar'
import About from '../components/homeSections/About'
import VideoSection from '../components/homeSections/VideoSection'

const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Hero />
      <About />
      <VideoSection />
      <About />

    </div>
  )
}

export default Home

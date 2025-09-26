import React from 'react'
import ParallaxSection from '../ui/ParallaxSection'
import Button from '../ui/Button'

const PortfolioSection = () => {
  return (
    <div className='h-screen bg-black text-center'>
      <ParallaxSection
          imageUrl="https://i.pinimg.com/736x/6b/8f/fe/6b8ffec3b8865694a5bde6acbc906768.jpg"
          height={"h-screen"}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl mx-auto leading-10 sm:leading-18 max-w-4xl">
              Have any project in mind?<br />
              <span className="text-primary font-bold text-5xl sm:text-7xl">
                We are here
              </span>
            </h1>
            <div className="mt-6">
              <Button theme="black" text="Get Started"/>
            </div>
          </div>
        </ParallaxSection>
    </div>
  )
}

export default PortfolioSection

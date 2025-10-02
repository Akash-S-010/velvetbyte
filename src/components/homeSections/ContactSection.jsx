import React from 'react'
import ParallaxSection from '../ui/ParallaxSection'
import Button from '../ui/Button'
import FloatingInput from '../ui/FloatingInput'

const ContactSection = () => {
  return (
    <>
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

     {/* Contact Form */}
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center space-y-14">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">Let's Talk</h1>
        </div>
        <form className="w-full max-w-4xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingInput label="Name" type="text" />
            <FloatingInput label="Email" type="email" />
            <FloatingInput label="Phone Number" type="tel" />
            <FloatingInput label="Required Service" type="text" />
          </div>
          <FloatingInput label="Message" type="text" />
          <div className="pt-8">
            <Button
              text="Send Message"
              theme="white"
              type={"submit"}
              width={"full"}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactSection

import React from 'react'
import whatsapp from '../../assets/whatsapp.png'

const WhatsappBtn = () => {
  return (
    <>
      <a
        href="https://wa.me/919865214756"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-center justify-center size-10 md:size-14 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src={whatsapp}
          fill="currentColor"
          className="size-full"
        />
      </a>
    </>
  )
}

export default WhatsappBtn

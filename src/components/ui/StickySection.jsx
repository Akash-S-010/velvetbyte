import React from "react";
import { motion } from "framer-motion";

const StickySections = () => {
  return (
    <div className="relative">
      {/* Branding Section */}
      <section className="min-h-screen bg-white">
        <div className="grid grid-cols-2 h-full">
          {/* Left sticky title */}
          <motion.div
            className="sticky top-0 h-screen flex items-center justify-start pl-32 z-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl font-bold text-black leading-tight">
              Branding
            </h1>
          </motion.div>

          {/* Right content panels (normal flow) */}
          <div className="relative">
            {/* Panel 1 */}
            <motion.div
              className="min-h-screen flex items-start justify-start px-8 pt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full space-y-8">
                <div className="flex justify-start space-x-4">
                  <div className="w-40 h-40 bg-purple-900 rounded-lg flex items-center justify-center">
                    <div className="text-white text-6xl">∧</div>
                  </div>
                  <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-10 h-20 bg-blue-300 rounded"></div>
                  <div className="w-10 h-20 bg-purple-900 rounded"></div>
                </div>
                <div className="flex space-x-2 text-sm">
                  <span>#250D61</span>
                  <span>#72CDFB</span>
                  <span>#FFEFFF</span>
                </div>
                <p className="text-lg text-gray-700 max-w-xl">
                  Our talented London-based web design team includes highly
                  experienced graphic designers who specialise in creating
                  stunning brand identities that truly capture the essence of
                  your business. We focus on what sets you apart, helping define
                  your brand and align it with your target audience&apos;s
                  expectations.
                </p>
                <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
                  SPEAK TO US
                </button>
              </div>
            </motion.div>

            {/* Panel 2 */}
            <motion.div
              className="min-h-screen flex items-start justify-start px-8 pt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full space-y-8">
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center text-white">
                  <span className="text-sm">↑ BRANDING</span>
                </div>
                <h2 className="text-3xl font-semibold">Logo Design</h2>
                <h2 className="text-3xl font-semibold">Visual Identity</h2>
                <h2 className="text-3xl font-semibold">Brand Guidelines</h2>
                <h2 className="text-3xl font-semibold">Communications</h2>
              </div>
            </motion.div>

            {/* Panel 3 */}
            <motion.div
              className="min-h-screen flex items-center justify-center px-8 bg-gray-100 text-gray-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Additional Branding Content (Scrollable Area)
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="min-h-screen bg-white">
        <div className="grid grid-cols-2 h-full">
          {/* Left sticky title */}
          <motion.div
            className="sticky top-0 h-screen flex items-center justify-start pl-32 z-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl font-bold text-black leading-tight">
              Digital Marketing
            </h1>
          </motion.div>

          {/* Right content panels */}
          <div className="relative">
            {/* Panel 1 */}
            <motion.div
              className="min-h-screen flex items-start justify-start px-8 pt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full space-y-8">
                <div className="flex space-x-4">
                  <div className="w-48 h-32 bg-purple-800 rounded-lg flex items-center justify-center text-white">
                    +160% Increase in Organic Clicks
                  </div>
                  <div className="w-24 h-32 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                    A Page Rank
                  </div>
                </div>
                <div className="w-full h-48 bg-black rounded-lg flex items-end justify-start space-x-1 p-2">
                  <div className="w-4 bg-orange-500 h-4"></div>
                  <div className="w-4 bg-orange-500 h-8"></div>
                  <div className="w-4 bg-orange-500 h-12"></div>
                  <div className="w-4 bg-orange-500 h-16"></div>
                  <div className="w-4 bg-orange-500 h-20"></div>
                  <div className="w-4 bg-orange-500 h-24"></div>
                  <div className="w-4 bg-orange-500 h-32"></div>
                  <div className="w-4 bg-orange-500 h-40"></div>
                  <div className="w-4 bg-orange-500 h-48"></div>
                </div>
                <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
                  SPEAK TO US
                </button>
              </div>
            </motion.div>

            {/* Panel 2 */}
            <motion.div
              className="min-h-screen flex items-start justify-start px-8 pt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full space-y-8">
                <p className="text-lg text-gray-700 max-w-xl">
                  As a Google certified web design agency, we provide complete
                  SEO and digital marketing solutions, all managed in-house by
                  our dedicated account managers.
                </p>
                <p className="text-lg text-gray-700 max-w-xl">
                  Our team offers a variety of digital marketing services across
                  multiple channels, from social and email marketing to PPC,
                  content creation, and SEO. We&apos;re focused on delivering
                  measurable ROI, ensuring your business reaches the right
                  audience, stands out, and drives meaningful growth.
                </p>
              </div>
            </motion.div>

            {/* Panel 3 */}
            <motion.div
              className="min-h-screen flex items-center justify-center px-8 bg-gray-100 text-gray-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Additional Digital Marketing Content (Scrollable Area)
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StickySections;

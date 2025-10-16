import React from 'react'
import WebsiteCostChart from '../components/portfoliosections/WebsiteCostChart'
import CostSection from '../components/portfoliosections/CostSection'
import ComparisonTable from '../components/portfoliosections/ComparisonTable'
import OurWorks from '../components/portfoliosections/OurWorks'
import ImageGallery from '../components/portfoliosections/ImageGallery'
import AnimatedSection from '../components/portfoliosections/AnimatedSection'
function Portfolio() {
  return (
    <div className='bg-gray-100'>
      <ImageGallery />
        <AnimatedSection/>
          <OurWorks/>
        <CostSection/>
        {/* <ComparisonTable/> */}
    </div>
  )
}

export default Portfolio
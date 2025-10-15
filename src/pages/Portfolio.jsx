import React from 'react'
import WebsiteCostChart from '../components/portfoliosections/WebsiteCostChart'
import CostSection from '../components/portfoliosections/CostSection'
import ComparisonTable from '../components/portfoliosections/ComparisonTable'
import OurWorks from '../components/portfoliosections/OurWorks'
import ImageGallery from '../components/portfoliosections/ImageGallery'
function Portfolio() {
  return (
    <div>
      <ImageGallery />
        <WebsiteCostChart/>
          <OurWorks/>
        <CostSection/>
        {/* <ComparisonTable/> */}
    </div>
  )
}

export default Portfolio
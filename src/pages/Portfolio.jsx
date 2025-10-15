import React from 'react'
import WebsiteCostChart from '../components/portfoliosections/WebsiteCostChart'
import CostSection from '../components/portfoliosections/CostSection'
import ComparisonTable from '../components/portfoliosections/ComparisonTable'
import OurWorks from '../components/portfoliosections/OurWorks'
function Portfolio() {
  return (
    <div>
        
          <OurWorks/>
        <CostSection/>
        <ComparisonTable/>
    </div>
  )
}

export default Portfolio
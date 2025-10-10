import React from 'react'
import WebsiteCostChart from '../components/portfoliosections/WebsiteCostChart'
import CostSection from '../components/portfoliosections/CostSection'
import ComparisonTable from '../components/portfoliosections/ComparisonTable'
function Portfolio() {
  return (
    <div>
        <WebsiteCostChart/>
        <CostSection/>
        <ComparisonTable/>
    </div>
  )
}

export default Portfolio
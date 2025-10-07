import React from 'react'
import WebsiteCostChart from '../components/portfoliosections/WebsiteCostChart'
import CostSection from '../components/portfoliosections/CostSection'
import ComparisonTable from '../components/portfoliosections/ComparisonTable'
import SpeakUsBtn from '../components/ui/SpeakUsBtn'
function Portfolio() {
  return (
    <div>
        <WebsiteCostChart/>
        <CostSection/>
        <ComparisonTable/>
        <SpeakUsBtn/>
    </div>
  )
}

export default Portfolio
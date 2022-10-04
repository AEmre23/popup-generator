import React from 'react'
import Header from './utilities/header'

// !Components 
import VisitorDevice from './EditRulesComponents/VisitorDevice'
import AfterXSection from './EditRulesComponents/AfterXSection'
import TrafficSource from './EditRulesComponents/TrafficSource'
import BrowserLanguage from './EditRulesComponents/BrowserLanguage'
import ExitIntentTargeting from './EditRulesComponents/ExitIntentTargeting'

const EditRules = () => {
  return (
    <div className="w-full flex flex-col justify-around px-24 py-12 bigscreen:py-44">
      <Header number='4' text='Targeting Rules' />
      <VisitorDevice />
      <AfterXSection />
      <TrafficSource />
      <BrowserLanguage />
      <ExitIntentTargeting />
    </div>
  )
}

export default EditRules

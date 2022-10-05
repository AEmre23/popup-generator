import React from 'react'
import Properties from './FooterComponents/Properties'
import FAQ from './FooterComponents/FAQ'
import Targeting from './FooterComponents/Targeting'

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[86%] flex flex-col gap-24 justify-center items-center font-poppins">
        <Properties />
        <FAQ />
        <Targeting />
      </div>
    </div>
  )
}

export default Footer
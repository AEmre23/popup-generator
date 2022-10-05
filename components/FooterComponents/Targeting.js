import React from 'react'
import Image from 'next/image'
import poplogo from '../assets/poplogo.png'
import logo1 from '../assets/fb1.png'
import logo2 from '../assets/fb2.png'
import logo3 from '../assets/fb3.png'
import logo4 from '../assets/fb4.png'

const Targeting = () => {
  return (
    <div className="w-full">
      <div className="font-semibold text-4xl mb-16 text-center">Build great popups without code</div>
      <div className="flex justify-between bigscreen:px-40">
        <div className="flex flex-col gap-8 transition-all hover:bg-slate-50 hover:scale-105 cursor-pointer p-3 rounded-xl text-center items-center">
          <div className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-[#7D4AEA]">
            <Image src={logo1} alt='target-icons' />
          </div>
          <div className="font-semibold text-lg">Targeting Options</div>
          <div className="text-sm">Target +26 trigger to your visitors</div>
        </div>
        <div className="flex flex-col gap-8 transition-all hover:bg-slate-50 hover:scale-105 cursor-pointer p-3 rounded-xl text-center items-center">
          <div className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-[#7D4AEA]">
            <Image src={logo2} alt='target-icons' />
          </div>
          <div className="font-semibold text-lg">No Code</div>
          <div className="text-sm">
            No code required while<br />
            you’re creating a popup
          </div>
        </div>
        <div className="flex flex-col gap-8 transition-all hover:bg-slate-50 hover:scale-105 cursor-pointer p-3 rounded-xl text-center items-center">
          <div className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-[#7D4AEA]">
            <Image src={logo3} alt='target-icons' />
          </div>
          <div className="font-semibold text-lg">Targeting Options</div>
          <div className="text-sm">
            Integrated with your marketing<br />
            and CRM platforms
          </div>
        </div>
        <div className="flex flex-col gap-8 transition-all hover:bg-slate-50 hover:scale-105 cursor-pointer p-3 rounded-xl text-center items-center">
          <div className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-[#7D4AEA]">
            <Image src={logo4} alt='target-icons' />
          </div>
          <div className="font-semibold text-lg">Targeting Options</div>
          <div className="text-sm">
            Don’t worry about speed and <br />
            Amazon AWS resources
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center text-center pt-24 pb-6">
        <Image src={poplogo} alt='brand-logo' />
        <div className="text-xs">Powered by Popupsmart <sup>©</sup></div>
      </div>
    </div>
  )
}

export default Targeting
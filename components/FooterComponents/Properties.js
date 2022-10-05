import React from 'react'
import Image from 'next/image'
import box1Img from '../assets/f1.png'
import box2Img from '../assets/f2.png'
import box3Img from '../assets/f3.png'

const Properties = () => {
  return (
    <div className="flex flex-col gap-20 mt-12 w-full">
      <div className="font-semibold text-4xl text-center">Conversion & UX ready popups & modals</div>
      <div className="flex justify-between w-full bigscreen:px-24">
        <div className="w-[378px] transition-all hover:scale-105 cursor-pointer bg-[#F5F5F5] h-[267px] pb-6 rounded-2xl flex flex-col gap-6 justify-center items-center">
          <Image src={box1Img} alt='box-icon' className="" />
          <div className="font-semibold text-lg">Pixel Perfect</div>
          <div className="text-sm px-12 text-center">
            Helps you calculate your email
            marketing roi to measure success.
          </div>
        </div>
        <div className="w-[378px] transition-all hover:scale-105 cursor-pointer bg-[#F5F5F5] h-[267px] rounded-2xl flex flex-col gap-6 justify-center items-center">
          <Image src={box2Img} alt='box-icon' />
          <div className="font-semibold text-lg">Conversion Ready</div>
          <div className="text-sm px-20 text-center">
            Empowers your emails by
            generating afree code for
            a CTA in your subject line.
          </div>
        </div>
        <div className="w-[378px] transition-all hover:scale-105 cursor-pointer bg-[#F5F5F5] h-[267px] rounded-2xl flex flex-col gap-6 justify-center items-center">
          <Image src={box3Img} alt='box-icon' />
          <div className="font-semibold text-lg">Modern & Useful</div>
          <div className="text-sm px-20 text-center">
            Enables you to estimate the
            total profit of your investment
            on a popup service.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties
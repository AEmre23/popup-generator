import React from 'react'
import Image from 'next/image'
import heroModal from './assets/hero.png'
import glass from './assets/glass.png'
import hero1 from './assets/hero-i1.png'
import hero2 from './assets/hero-i2.png'
import {AiOutlineCheck} from 'react-icons/ai'
import Header from './Header'

const Hero = () => {
  return (
    <>
    <div className="h-screen relative bg-gradient-to-t from-[#E3F2F7] flex flex-col items-center to-white">
      <Header />
      <div className="w-10/12 scale-95 mr-14 bigscreen:scale-100 bigscreen:mr-0 flex flex-col justify-between gap-8 bigscreen:gap-14 items-start">
        <div className="pt-12 bigscreen:pt-28 font-poppins font-semibold text-6xl bigscreen:text-7xl leading-[1.15] bigscreen:leading-tight ">
          Simple modal <br /> card creator
        </div>
        <div className="text-2xl bigscreen:text-3xl leading-[1.4]">
          A utility-first CSS framework packed with classeslike flex, pt-4, text-center and<br />
          rotate-90 that can becomposed to build any design, directly in your markup.
          </div>
        <a href="#templates">
          <button className="bg-[#7D4AEA] p-4 px-6 text-lg text-white rounded-xl transition-all hover:brightness-110 shadow-[0px_5px_10px_2px_#7D4AEA45] font-inter">
            Try it out now
          </button>
        </a>
        <div className="flex gap-8 font-poppins text-[13px]">
          <div className="flex items-center gap-4">
            <AiOutlineCheck className="h-4 w-4 mb-1" />
            <div>Free and paid plans</div>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineCheck className="h-4 w-4 mb-1" />
            <div>Setup in minutes</div>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineCheck className="h-4 w-4 mb-1" />
            <div>No credit card required*</div>
          </div>
        </div>
      </div>
      <div className="absolute z-20 -bottom-52 bigscreen:-bottom-52 left-[8.1%]">
        <div className="relative">
          <Image src={heroModal} width={700} height={400} alt='modal-example' />
          <div className="flex gap-2 bg-white/80 absolute top-20 px-4 -right-32 p-2 rounded-xl">
            <Image src={hero1} alt='hero-icon' />
            <div className="font-poppins font-medium text-base">Grow email list</div>
          </div>
          <div className="flex gap-2 bg-white/80 absolute top-32 -right-48 p-2 rounded-xl">
            <Image src={hero2} alt='hero-icon' />
            <div className="font-poppins font-medium text-base">Increase sales conversion</div>
          </div>  
        </div>
      </div>
      <div className="absolute -bottom-24 left-[43%] bigscreen:left-[40%] bigscreen:-bottom-14">
        <Image src={glass} alt='glass-effect' />
      </div>
      </div>
      <div className="h-[550px] w-full flex items-end justify-center z-10 bg-[#666666]">
        <div className="w-10/12 pb-24 text-white flex justify-between pr-56 bigscreen:pr-80">
          <div className="flex flex-col gap-8">
            <div className="text-7xl font-semibold">3x</div>
            <div className="font-inter font-medium">Increase <br /> Conversion Rate</div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-7xl font-semibold">120%</div>
            <div className="font-inter font-medium">Email <br /> Subscribers</div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-7xl font-semibold">390%</div>
            <div className="font-inter font-medium">More Customer <br /> Engagement</div>
          </div>
          <div className="text-3xl font-medium">Popupsmart meets<br />all your business<br />needs.</div>
        </div>
      </div>
      <div className="bg-white h-[300px] flex justify-center items-center w-full">
        <div className="w-10/12">
          <div className="font-poppins mb-6 font-semibold text-4xl">
            Modal Card Generator
          </div>
          <div className="font-poppins w-[480px]">
            Measure your return on email marketing efforts easier and
            faster by using thebest online tools. Popupsmart is ready to
            help you build an efficient email list!
          </div>
        </div>
      </div>
    </>

  )
}
export default Hero
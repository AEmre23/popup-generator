import React,{useContext} from 'react'
import Image from 'next/image'
import headerImg from './assets/header.png'
import { AiOutlineDown } from 'react-icons/ai'
import { ModalsContext } from './Contexts/ModalContexts'

const Header = () => {
  const {setOpenEditor} = useContext(ModalsContext)
  return (
    <div className='w-full flex items-center justify-center'>
      <div className="w-10/12 h-14 flex justify-between items-end">
        <div className="w-3/5 flex justify-between items-center h-auto">
          <div className="flex gap-3 items-center cursor-pointer transition-all hover:scale-105">
            <Image src={headerImg} width={36} h={36} alt='header-logo' />
            <div className="font-extrabold text-xl">modal.cards</div>
          </div>
          <div className="flex gap-8 font-medium pr-14 bigscreen:pr-52">
            <div className="flex hover:text-gray-500 transition-all gap-2 items-center cursor-pointer">
              <div className="">Solutions</div>
              <AiOutlineDown className="mt-1 h-4"/>
            </div>
            <div className="hover:text-gray-500 transition-all cursor-pointer hover:-translate-y-[2px]">Product Tour</div>
            <div className="hover:text-gray-500 transition-all cursor-pointer hover:-translate-y-[2px]">Showcase</div>
            <div className="hover:text-gray-500 transition-all cursor-pointer hover:-translate-y-[2px]">Pricing</div>
          </div>
        </div>
        <div className="w-2/5 flex justify-end gap-6 items-center h-auto">
          <button className="transition-all py-[2px] px-3 border-2 rounded-xl border-white hover:shadow-md hover:border-black">Sign In</button>
          <a href="#templates"><button onClick={()=> setOpenEditor(true)} className="bg-[#7D4AEA] py-1 px-3 rounded-xl text-white shadow-md transition-all border-2 border-[#7D4AEA] hover:bg-white hover:text-[#7D4AEA]">Try for free</button></a>
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useContext } from 'react'
import Image from 'next/image'
import { ModalsContext } from './Contexts/ModalContexts'
import { SelectedContext } from './Contexts/SelectedContext'
import Header from './utilities/header'

const ChooseTemplate = () => {
  const { modalArray, setChosenModal } = useContext(ModalsContext)
  const { setPopupImage } = useContext(SelectedContext)

  const editTemplate = (selectedTemplate) => {
      //* selectedTemplate array is like this : ['Modal Component','Popup Picture from figma','picture of popup', true/false'(boolean for does popup have logo section?)']
    setChosenModal([selectedTemplate[0],selectedTemplate[3],selectedTemplate[2]])
    setPopupImage(selectedTemplate[2])
  }
  return (
    <div id='templates' className="h-screen w-full my-6 bg-white rounded-3xl">
      <div className='px-32 py-4'>
        <Header number='1' text='Choose Your Template' />
        <div className="flex flex-wrap justify-between items-center gap-[4%] gap-y-5">
          {modalArray.map((selectedTemplate, i) => (
            <div key={i} className="bg-[#EAEAEA] w-[22%] h-[22%] p-6 rounded-xl relative">
              <div className="flex items-center justify-center">
                <Image src={selectedTemplate[1]} alt='template-image' /> 
              </div>
            <div className='bg-purple-800/60 w-full h-full p-8 absolute flex items-center justify-center top-0 left-0 rounded-xl transition-all opacity-0 hover:opacity-100'>
              <a href='#edit'>
                <button onClick={() => editTemplate(selectedTemplate)} className="bg-white  text-[#7D4AEA] w-40 py-3 rounded-lg transition-all hover:scale-105 font-bold shadow-lg">
                  Select Template
                </button>
              </a>
            </div>    
          </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default ChooseTemplate

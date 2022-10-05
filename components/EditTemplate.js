import React,{useContext} from 'react'
import { ModalsContext } from './Contexts/ModalContexts'
import { SelectedContext } from './Contexts/SelectedContext'
import EditAppearance from './EditAppearance'
import EditContent from './EditContent'
import EditRules from './EditRules'
import SettingsAndCode from './SettingAndCode'
import {MdOutlineChangeCircle} from 'react-icons/md'

const EditTemplate = () => {
  const {chosenModal,setChosenModal } = useContext(ModalsContext)
  const {
      selectedColor,
      selectedPosition,
      selectedSize,
      text1,
      text2,
      inputText1,
      inputText2,
      buttonText
  } = useContext(SelectedContext)

  const Modal = chosenModal[0]

  const changeTemplate = () => {
    if(window.confirm('Do you want to change template?')){
      setChosenModal([])
      document.getElementById('templates').scrollIntoView();
    }
  }

  return (
    <div id='edit' className="h-auto w-full my-8 flex bg-white rounded-3xl relative">
      {chosenModal.length > 0 &&
      <>
      <div className="w-1/3">
        <EditAppearance />
        <EditContent />
        <EditRules />
        <SettingsAndCode />
      </div>
      <div className="sticky top-0 w-2/3 h-screen">
        <div className=" m-3 w-full h-full border-4 rounded-lg scale-90 bg-slate-100 z-40">
          <div className="w-full h-full relative">
            <div className="absolute -top-7 left-1/2 w-full bg-white border-2 -translate-x-1/2 p-1 rounded-lg">
              Your popup going to look like this in screen
            </div>
            <button onClick={changeTemplate} className="group absolute -top-7 right-1 transition-all p-1 rounded-full">
              <MdOutlineChangeCircle className="w-7 h-7 rounded hover:-rotate-180 duration-1000 transition-all" alt='change template' />
              <p className="absolute pointer-events-none cursor opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 w-max top-1 transition-all font-medium duration-500 right-9 text-purple-700 ">Change Template</p>
            </button>
            <Modal />
          </div>
        </div>
      </div>
    </>
    }
    </div>
  )
}

export default EditTemplate

import React,{useContext,useState} from 'react'
import { ModalsContext } from './Contexts/ModalContexts'
import { SelectedContext } from './Contexts/SelectedContext'
import EditAppearance from './EditAppearance'
import EditContent from './EditContent'
import EditRules from './EditRules'
import SettingsAndCode from './SettingAndCode'
import {MdOutlineChangeCircle} from 'react-icons/md'

const EditTemplate = () => {
  const { chosenModal, setChosenModal } = useContext(ModalsContext)
  const [changeQuestion,setChangeQuestion] = useState(false)
  const {
      setText1,
      setText2,
      setinputText1,
      setinputText2,
      setbuttonText,
      setSelectedSize,
      setSelectedPosition,
      setSelectedColor,
  } = useContext(SelectedContext)

  const Modal = chosenModal[0]

  const questionAnswer = (e) => {

    if (e.target.value == 2) setChangeQuestion(false)
    else {
      setChosenModal([])
      setText1('')
      setText2('')
      setinputText1('')
      setinputText2('')
      setbuttonText('')
      setSelectedSize('medium')
      setSelectedPosition(5)
      setSelectedColor('bg-[#7D4AEA]')
      document.getElementById('templates').scrollIntoView();
      setChangeQuestion(false)
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
              Popup Viewer
            </div>
              <button onClick={() => {setChangeQuestion(true) } } className="group absolute -top-7 right-1 transition-all p-1 rounded-full">
              <MdOutlineChangeCircle className="w-7 h-7 rounded hover:-rotate-180 duration-1000 transition-all" alt='change template' />
              <p className="absolute pointer-events-none cursor opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 w-max top-1 transition-all font-medium duration-500 right-9 text-purple-700 ">Change Template</p>
              </button>
            <Modal />
          </div>
        </div>
      </div>
    </>
      }
      {changeQuestion &&
      <div className="fixed top-0 z-50 h-screen w-full bg-black/60 flex justify-center items-center">
        <div className="w-[450px] h-60 bg-white rounded-lg flex flex-col gap-12 justify-center items-center">
          <div className="font-semibold text-2xl text-center">Do you really want to change your template?</div>
          <div className="flex gap-12">
            <button onClick={questionAnswer} value='1' className="p-3 px-16 bg-green-600 bg-lime-500 transition-all hover:scale-105 shadow-lg rounded-xl text-white text-lg font-medium">Yes</button>
            <button onClick={questionAnswer} value='2' className="p-3 px-16 bg-red-600 rounded-xl transition-all hover:scale-105 shadow-lg text-white text-lg font-medium">No</button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default EditTemplate

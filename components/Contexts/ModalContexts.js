import { useState, createContext } from 'react'
import Modal1 from '../modals/modal1'
import modal1 from '../assets/modal1-pic.png' // Whole popup appearance
import Modal1Img from '../assets/modal1.png' //Only image

export const ModalsContext = createContext();

const ModalProvider = (props) => {

  const [openEditor,setOpenEditor] = useState(false)
  const [chosenModal,setChosenModal] = useState([])
  const [modalArray, setModalArray] = useState([
    // boolen is for model have a logo section or not
    [Modal1, modal1,Modal1Img,false],
  ])
  return (
    <ModalsContext.Provider value={{modalArray,setModalArray,chosenModal,setChosenModal,openEditor,setOpenEditor}}>
      {props.children}
    </ModalsContext.Provider>
  )
}
export default ModalProvider
import { useState, createContext } from 'react'
import Modal1 from '../modals/modal1'
import Modal2 from '../modals/modal2'

import modal1 from '../assets/modalpics/modal1-pic.png' // Whole popup appearance
import modal2 from '../assets/modalpics/modal2-pic.png'
import modal3 from '../assets/modalpics/modal3-pic.png'
import modal4 from '../assets/modalpics/modal4-pic.png'
import modal5 from '../assets/modalpics/modal5-pic.png'
import modal6 from '../assets/modalpics/modal6-pic.png'
import modal7 from '../assets/modalpics/modal7-pic.png'
import modal8 from '../assets/modalpics/modal8-pic.png'
import modal9 from '../assets/modalpics/modal9-pic.png'
import modal10 from '../assets/modalpics/modal10-pic.png'
import modal11 from '../assets/modalpics/modal11-pic.png'
import modal12 from '../assets/modalpics/modal12-pic.png'

import Modal1Img from '../assets/modal1.png' //Only image
import Modal2Img from '../assets/modal2.png'

export const ModalsContext = createContext();

const ModalProvider = (props) => {

  const [openEditor,setOpenEditor] = useState(false)
  const [chosenModal,setChosenModal] = useState([])
  const [modalArray, setModalArray] = useState([
    // first boolean is for model have a logo section or not, second one is for is this modal avaiable or not.
    [Modal1, modal1, Modal1Img, false,true],
    [Modal2, modal2, Modal2Img, false,true],
    [Modal1, modal3, Modal1Img, false,false],
    [Modal1, modal4, Modal1Img, false,false],
    [Modal1, modal5, Modal1Img, false,false],
    [Modal1, modal6, Modal1Img, false,false],
    [Modal1, modal7, Modal1Img, false,false],
    [Modal1, modal8, Modal1Img, false,false],
    [Modal1, modal9, Modal1Img, false,false],
    [Modal1, modal10, Modal1Img, false,false],
    [Modal1, modal11, Modal1Img, false,false],
    [Modal1, modal12, Modal1Img, false,false],                
  ])
  return (
    <ModalsContext.Provider value={{modalArray,setModalArray,chosenModal,setChosenModal,openEditor,setOpenEditor}}>
      {props.children}
    </ModalsContext.Provider>
  )
}
export default ModalProvider
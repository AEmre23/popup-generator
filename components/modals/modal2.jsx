import React,{useRef,useEffect,useContext} from 'react'
import { ImCancelCircle } from 'react-icons/im'

import { SelectedContext } from '../Contexts/SelectedContext'

import positionCheck from '../functions/positionChecker'

const Modal2 = () => {
  const {
    text1,
    text2,
    selectedColor,
    selectedPosition,
    selectedSize,
    popupImage,
    setText1,
    setText2,
    setImageURL
  } = useContext(SelectedContext)
  
  const close = useRef()

  function popUpShower() {
    close.current.style.display = 'block'
    setTimeout(() => { close.current.style.opacity = 1 }, 300)
  }
  useEffect(() => {
    setText1('Reach and grow your audience')
    setText2('Build a better popup today.')
    setImageURL('https://thumbsnap.com/i/Z9JiaxgZ.png')
    popUpShower()
  }, []);

  const popUpCloser = () => {
    console.log('not working in here :)')
  }
  
  let newColor
  function colorCheck() {
    switch (selectedColor) {
      case 'bg-[#F37C34]':
          newColor = `bg-[#F37C34]`
        break
      case 'bg-[#7D4AEA]':
          newColor = `bg-[#7D4AEA]`
        break
      case 'bg-black':
          newColor = `bg-black`
        break
      case 'bg-blue-400':
          newColor = `bg-blue-400`
        break
      case 'bg-[#777777]':
          newColor = `bg-[#777777]`
        break
      default:
          newColor = `bg-[#7D4AEA]`
        break
    }
  }
  colorCheck()
  function sizeCheck() {
    if (selectedSize == 'small') return {height:'130px',width: '600px'}
    if (selectedSize == 'large') return {height:'180px',width: '800px'}
    else return {height:'150px',width: '740px'}
  }

  return (
    <div ref={close} style={positionCheck(selectedPosition)} className={`relative rounded-xl shadow-lg bg-white hidden`}>
      <div style={sizeCheck()} className="p-7 flex justify-start gap-8 items-center">
        <div style={{backgroundImage:`url(${popupImage.src ? popupImage.src : popupImage})`}} className={`w-[90px] h-[90px] ${selectedSize == 'large' && 'w-[100px] h-[100px]'} ${newColor} bg-no-repeat bg-center rounded-full `}>
          <ImCancelCircle onClick={popUpCloser} className="scale-150 hover:scale-[1.58] cursor-pointer absolute top-6 right-6 text-gray-600 transition-all"/>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`${selectedSize == 'large' && 'text-3xl'} font-bold text-2xl`}>{text1}</div>
          <div className={`${selectedSize == 'large' && 'text-2xl'} text-xl text-[#777777]`}>{text2}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal2
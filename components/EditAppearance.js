import React, { useContext } from 'react'
import { SelectedContext } from './Contexts/SelectedContext'
import { ModalsContext } from './Contexts/ModalContexts'
import Header from './utilities/header'

const EditAppearance = () => {
  const { chosenModal } = useContext(ModalsContext)
  const { setSelectedSize, setSelectedPosition, setSelectedColor} = useContext(SelectedContext)
  //const
  const modalLogo = chosenModal[1]
  const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const allColors = ['bg-[#7D4AEA]', 'bg-[#F37C34]', 'bg-blue-400', 'bg-black', 'bg-[#777777]']
  
    const selectSize = (e) => {
    let parentSizeClass = document.getElementById('sizeClasses')
    if (!e.target.classList.contains('selected')) {
      parentSizeClass.childNodes.forEach((x) => { x.classList.remove('selected') })
      e.target.classList.add('selected')
    }
    setSelectedSize(e.currentTarget.innerText.toLowerCase())
  }

  const selectPosition = (e) => {
    let parentSizeClass = document.getElementById('positionClasses')
    if (!e.target.classList.contains('selected-position')) {
      parentSizeClass.childNodes.forEach((x) => { x.classList.remove('selected-position') })
      e.target.classList.add('selected-position')
    }
    setSelectedPosition(e.currentTarget.value)
  }

  const selectColor = (e) => {
    let parentSizeClass = document.getElementById('colorClasses')
    if (!e.target.classList.contains('selected-color')) {
      parentSizeClass.childNodes.forEach((x) => { x.classList.remove('selected-color') })
      e.target.classList.add('selected-color')
    }
    setSelectedColor(e.currentTarget.value)
  }

  const FileDeleter = () => {
    document.getElementById('file').value = "";
  }

  return (
    <div className="w-full flex flex-col h-screen justify-around px-24 py-12 bigscreen:py-28">
      <Header number='2' text='Appearance' subtext=' (Size,colors,logo)' /> 
      <div className="flex flex-col gap-2">
        <div className="font-medium">Size</div>
        <span id='sizeClasses' className="flex items-center transition-all justify-center font-medium px-3 gap-6 bg-[#F5F5F5] w-min text-[#777777]  rounded-lg">
          <div className="cursor-pointer hover:text-black" onClick={selectSize}>Small</div>
          <div className="cursor-pointer hover:text-black selected" onClick={selectSize}>Medium</div>
          <div className="cursor-pointer hover:text-black" onClick={selectSize}>Large</div>
        </span>
        <span className="text-[#777777] text-xs">Size on the right side scaled for this screen. Normally its little bigger than this (%10 reduced).</span>
      </div>
      <div>
        <div className="font-medium mb-2">Position</div>
        <div id='positionClasses' className="flex w-28 flex-wrap gap-1">
          {positions.map((each, i) => (
            <button key={i} onClick={selectPosition} value={each} className={`${each==5 && 'selected-position'} w-8 h-5 border-2 hover:border-black`}></button>
          ))}
        </div>
      </div>
      <div>
        <div className="font-medium mb-2">Colors</div>
        <div id='colorClasses' className="flex gap-2">
          {allColors.map((each, i) => (
            <button key={i} onClick={selectColor} value={each} className={`${each} ${each=='bg-[#7D4AEA]' && 'selected-color'} w-10 h-10 rounded-md border-2 `}></button>
          ))}
        </div>
      </div>
      <div>
        <div className="font-medium mb-2">Upload Logo</div>
        {modalLogo &&
          <div className="p-4 border-2 border-dashed flex items-center justify-center gap-3">
            <div className="p-3 bg-purple-200 rounded-lg">
              <img src='/upload.png' alt='upload-logo'/>
            </div>
            <input id='file' type='file' className="cursor-pointer file:text-purple-800 file:font-bold file:rounded-lg file:cursor-pointer w-40 file:flex items-center justify-center file:border-none" />
            <button onClick={FileDeleter} className="bg-purple-300 font-bold text-xl text-purple-900 w-8 h-8 rounded-full transition-all hover:text-purple-100"> X </button>
          </div>  
          ||
          <div>This Modal Dont Have any Logo Section</div>
        }
      </div>
    </div>
  )
}

export default EditAppearance

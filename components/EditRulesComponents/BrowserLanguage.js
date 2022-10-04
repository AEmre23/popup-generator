import React,{useState,useEffect,useRef,useContext} from 'react'
import SwitchButton from '../utilities/switchButton'
import { AiOutlineDown } from 'react-icons/ai'
import { SelectedContext } from '../Contexts/SelectedContext'


const BrowserLanguage = () => {
  const [switchBrowserLanguage, setSwitchBrowserLanguage] = useState(false)
  const { browserLanguage, setBrowserLanguage } = useContext(SelectedContext)
  const languageSelector = useRef()
  const selectButton = useRef()
  const langs = ['English', 'Turkish', 'French', 'German', 'Polish', 'Dutch', 'Finnish', 'Spanish', 'Italian']
  let checkboxes = document.getElementsByName('countries')
  let selectAllCheckbox = document.getElementById('selectall')
  let everyOne = Object.values(checkboxes)
  
  useEffect(() => {
  if (switchBrowserLanguage) selectButton.current.removeAttribute('disabled')
  else {
    selectButton.current.setAttribute('disabled','true')
    setSwitchBrowserLanguage(false)
    setBrowserLanguage([])
    languageSelector.current.classList.add('hidden')
    selectButton.current.lastChild.classList.remove('rotate')
    if(selectAllCheckbox)selectAllCheckbox.checked = false
    for(var i=0;i<checkboxes.length;i++) {
    checkboxes[i].checked = false
    }

    }
  }, [switchBrowserLanguage])
  
  const removeLanguage = (e) => {
    let target = e.currentTarget.getAttribute('name')
    for (var i = 0; i < checkboxes.length; i++) { 
      if(checkboxes[i].value == target) checkboxes[i].checked = false
    } 
    setBrowserLanguage(browserLanguage.filter((each) => each != e.currentTarget.getAttribute('name')))
    selectAllCheckbox.checked = false
  }

  const handleBrowserLanguage = (e, lang) => {   
    if (e.target.checked) setBrowserLanguage([...browserLanguage,lang])
    else if (!e.target.checked) setBrowserLanguage(browserLanguage.filter((each) => each != e.target.value))
    let checkIfEveryInputIsChecked =  everyOne.every((e)=>e.checked==true)
    if (checkIfEveryInputIsChecked) selectAllCheckbox.checked = true
    else selectAllCheckbox.checked = false
  }

  const selectAll = (e) => {
    for(var i=0;i<checkboxes.length;i++) {
    checkboxes[i].checked = e.target.checked
    }
    if (e.target.checked) setBrowserLanguage([...langs])
    else setBrowserLanguage([])
  }

  const clearAll = () => {
    for(var i=0;i<checkboxes.length;i++) {
      checkboxes[i].checked = false
    }
    selectAllCheckbox.checked = false
    setBrowserLanguage([])
  }
  
  return (
    <div className="mt-5 w-96">
      <div className="flex flex-col gap-4 mt-4 relative">
        <div className=" flex justify-between items-center">
          <div className="font-bold text-lg">Browser Language</div>
          <SwitchButton switchBoolean={switchBrowserLanguage} setSwitchBoolean={setSwitchBrowserLanguage} />
        </div>
        <button ref={selectButton} onClick={(e) => { languageSelector.current.classList.toggle('hidden');e.target.lastChild.classList.toggle('rotate') }} className="p-2 border-2 border-black disabled:border-gray-300 rounded-md flex items-center justify-between">
          <div className="pointer-events-none">Select</div>
          <AiOutlineDown className="pointer-events-none transition-all duration-300"/>
        </button>
        <div ref={languageSelector} className="absolute z-40 w-full bg-white top-24 h-72 hidden transition-all duration-500">
          <div className="w-full relative h-72 scrollbar overflow-y-scroll shadow-2xl rounded-t-lg border-black disabled:border-gray-400 focus:outline-purple-700">
            <div className="flex w-full bg-white z-10 sticky top-0 border-b-2 py-3 my-3 pb-3 justify-start items-center gap-3 px-4 py-1 transition-all">
              <input id='selectall' onChange={(e)=>selectAll(e)} type="checkbox" className="w-5 h-5 cursor-pointer rounded-md" />
              <div className="mt-2">All Languages</div>
            </div>
            {langs.map((lang, i) => (
            <div key={i} className="flex w-full justify-start items-center gap-3 px-4 py-1 hover:bg-gray-200 transition-all rounded-lg">
              <input onChange={(e)=>handleBrowserLanguage(e,lang)} value={lang} name='countries' type="checkbox" className="w-5 h-5 cursor-pointer focus:outline-none rounded-md" />
              <div>{lang}</div>
            </div>
            ))}
          </div>
          <div className="flex justify-between bg-white rounded-b-xl border-t-2 w-full absolute -bottom-16 border-b-2 py-3 my-3 pb-3 justify-start items-center gap-3 px-4 py-1 transition-all">
            <button onClick={clearAll} className="mt-2 hover:underline font-medium">Clear All</button>
            <button onClick={() => { languageSelector.current.classList.add('hidden'); selectButton.current.lastChild.classList.remove('rotate') }} className="mt-2 hover:underline">Close</button>
          </div>
        </div>
        {browserLanguage.length > 0 &&
          <div className="w-full p-3 relative border-2 flex flex-wrap gap-2">
            {browserLanguage.map((each,i) => (
              <div name={each} onClick={removeLanguage} key={i} className="group font-medium rounded-md flex cursor-pointer last hover:bg-white hover:border-red-300  bg-gray-200 gap-3 items-center p-1 border-2 px-2">
                <div>{each}</div>
                <div className="group-hover:text-white group-hover:bg-red-700 flex items-center justify-center pb-[1px] w-6 h-6 rounded-full cursor-pointer">x</div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default BrowserLanguage
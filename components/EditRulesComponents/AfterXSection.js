import React, { useState, useEffect, useRef, useContext } from 'react'
import SwitchButton from '../utilities/switchButton'
import { SelectedContext } from '../Contexts/SelectedContext'
const AfterXSection = () => {
  const { setAfterXSecond,setAfterXScroll } = useContext(SelectedContext)
  const [switchSecond, setSwitchSecond] = useState(false)
  const [switchScroll, setSwitchScroll] = useState(false)
  const inputSecond = useRef()
  const inputScroll = useRef()

  useEffect(() => {
    if (switchSecond) inputSecond.current.removeAttribute('disabled')
    else {
      inputSecond.current.setAttribute('disabled', 'true')
      inputSecond.current.value = ''
      setAfterXSecond('')
    }
    if (switchScroll) inputScroll.current.removeAttribute('disabled')
    else {
      inputScroll.current.setAttribute('disabled', 'true')
      inputScroll.current.value = ''
      setAfterXScroll('')
    }
  }, [switchSecond, switchScroll]);

  const handleSecond = (e) => {
    let customSecond = e.target.value
    if (customSecond < 201 && customSecond >= 0) setAfterXSecond(customSecond)
    else setAfterXSecond('')
  }
  const handleScroll = (e) => {
    let customScroll = e.target.value
    if (customScroll < 101 && customScroll >= 0) setAfterXScroll(customScroll)
    else setAfterXScroll('')
  }
  
  return (
    <div className="mt-5 w-96">
      <div className="flex flex-col gap-4 mt-4">
        <div className=" flex justify-between items-center">
          <div className="font-bold text-lg">After X seconds</div>
          <SwitchButton switchBoolean={switchSecond} setSwitchBoolean={setSwitchSecond} />
        </div>
        <input onBlur={handleSecond} ref={inputSecond} pattern="[0-9]{1,3}" type='number' max={200} min={0} className="w-full invalid:border-red-700 invalid:text-red-700 border-2 rounded-lg border-black disabled:border-gray-300 p-2 focus:outline-purple-700" placeholder="Enter a number between 0-200" disabled/>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <div className=" flex justify-between items-center">
          <div className="font-bold text-lg">After % Scroll</div>
          <SwitchButton switchBoolean={switchScroll} setSwitchBoolean={setSwitchScroll} />
        </div>
        <input onBlur={handleScroll} ref={inputScroll} pattern="[0-9]{1,3}" max={100} min={0} type='number' className="w-full invalid:border-red-700 invalid:text-red-700 border-2 rounded-lg border-black disabled:border-gray-300 p-2 focus:outline-purple-700" placeholder="Enter a number between 0-100" disabled/>
      </div>
    </div>
  )
}

export default AfterXSection
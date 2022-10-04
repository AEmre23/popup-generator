import React,{useRef,useEffect,useState,useContext} from 'react'
import { BsLaptop } from 'react-icons/bs'
import { BsPhone } from 'react-icons/bs'
import SwitchButton from '../utilities/switchButton'
import { SelectedContext } from '../Contexts/SelectedContext'

const VisitorDevice = () => {
  const { setTargetPhone, setTargetLaptop } = useContext(SelectedContext)
  const [switchBoolean, setSwitchBoolean] = useState(false)
  const [inputBoolean,setInputBoolean] = useState(false)
  const deviceLaptop = useRef()
  const devicePhone = useRef()

  useEffect(() => {
    let inputs = document.querySelectorAll('.inputs')
    if (switchBoolean) inputs.forEach((x) => x.removeAttribute('disabled'))
    else inputs.forEach((each) => each.setAttribute("disabled", "true"))
    if (!switchBoolean) {
      devicePhone.current.checked=false
      deviceLaptop.current.checked = false
      devicePhone.current.nextElementSibling.style.color = 'black'
      deviceLaptop.current.nextElementSibling.style.color = 'black'
      setTargetPhone(false)
      setTargetLaptop(false)
    }
  }, [switchBoolean])

  useEffect(() => {
    if (devicePhone.current.checked) {
      devicePhone.current.nextElementSibling.style.color = '#7D4AEA'
      setTargetPhone(true)
      setTargetLaptop(false)
    }
    else devicePhone.current.nextElementSibling.style.color = 'black'
    if (deviceLaptop.current.checked) {
      deviceLaptop.current.nextElementSibling.style.color = '#7D4AEA'
      setTargetPhone(false)
      setTargetLaptop(true)
    }
    else deviceLaptop.current.nextElementSibling.style.color = 'black'
    if (!devicePhone.current.checked && !deviceLaptop.current.checked) {
      setTargetPhone(false)
      setTargetLaptop(false)      
    }
  }, [inputBoolean]);

  return (

  <div className="mt-3 w-96">
    <div className=" flex justify-between items-center">
      <div className="font-bold text-lg">Visitor Device</div>
      <SwitchButton switchBoolean={switchBoolean} setSwitchBoolean={setSwitchBoolean} />
    </div>
    <div className="flex justify-between w-full mt-4">
      <div className="flex gap-3 items-center w-44 p-4 bg-[#F5F5F5] rounded-2xl">
        <input ref={deviceLaptop} onChange={() => {devicePhone.current.checked=false;setInputBoolean(!inputBoolean)} } type='checkbox' className="accent-purple-600 scale-125 cursor-pointer inputs disabled:cursor-default" disabled />
        <BsLaptop />
        <div>Laptop</div>
      </div>
      <div className="flex gap-3 items-center w-44 p-4 bg-[#F5F5F5] rounded-2xl">
        <input ref={devicePhone} onChange={() => {deviceLaptop.current.checked=false;setInputBoolean(!inputBoolean)} } type='checkbox' className="accent-purple-600 scale-125 cursor-pointer inputs disabled:cursor-default" disabled />
        <BsPhone />
        <div>Phone</div>
      </div>
    </div>
  </div>
  )
}

export default VisitorDevice
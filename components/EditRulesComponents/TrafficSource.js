import React,{useState,useEffect,useRef,useContext} from 'react'
import { SelectedContext } from '../Contexts/SelectedContext'
import SwitchButton from '../utilities/switchButton'

const TrafficSource = () => {
  const {setTrafficSourceDomain} = useContext(SelectedContext)
  const trafficDomain = useRef()

  const [switchTrafficSource, setSwitchTrafficSource] = useState(false)
  useEffect(() => {
    if (switchTrafficSource) trafficDomain.current.removeAttribute('disabled')
    else {
      trafficDomain.current.setAttribute('disabled', 'true')
      trafficDomain.current.value=''
      setTrafficSourceDomain('')
    }
  }, [switchTrafficSource]);
  
  const handleTraffic = (e) => {
    let trafficDomain = e.target.value
    setTrafficSourceDomain(trafficDomain)
  }

  return (
    <div className="mt-5 w-96">
      <div className="flex flex-col gap-4 mt-4">
        <div className=" flex justify-between items-center">
          <div className="font-bold text-lg">Traffic Source</div>
          <SwitchButton switchBoolean={switchTrafficSource} setSwitchBoolean={setSwitchTrafficSource} />
        </div>
        <input onBlur={handleTraffic} ref={trafficDomain} className="w-full invalid:border-red-700 invalid:text-red-700 border-2 rounded-lg border-black disabled:border-gray-300 p-2 focus:outline-purple-700" placeholder="Enter your traffic source domain" disabled/>
      </div>
    </div>
  )
}

export default TrafficSource
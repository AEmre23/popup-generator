import React,{useState,useContext} from 'react'
import { SelectedContext } from '../Contexts/SelectedContext'
import SwitchButton from '../utilities/switchButton'


const ExitIntentTargeting = () => {
  const { exitIntentTargeting, setExitIntentTargeting } = useContext(SelectedContext)
  return (
    <div className="mt-5 w-96">
      <div className=" flex justify-between items-center">
        <div className="font-bold text-lg">Exit Intent Targeting</div>
        <SwitchButton switchBoolean={exitIntentTargeting} setSwitchBoolean={setExitIntentTargeting} />
      </div>
    </div>
  )
}

export default ExitIntentTargeting
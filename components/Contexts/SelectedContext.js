import React from 'react'
import { useState, createContext } from 'react'

export const SelectedContext = createContext();

const SelectedProvider = (props) => {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedPosition, setSelectedPosition] = useState(5)
  const [selectedColor, setSelectedColor] = useState('bg-[#7D4AEA]')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [inputText1, setinputText1] = useState('')
  const [inputText2, setinputText2] = useState('')
  const [buttonText, setbuttonText] = useState('')
  const [popupImage, setPopupImage] = useState()
  const [imageURL, setImageURL] = useState('')
  const [targetPhone, setTargetPhone] = useState(false)
  const [targetLaptop, setTargetLaptop] = useState(false)
  const [afterXSecond, setAfterXSecond] = useState('')
  const [afterXScroll, setAfterXScroll] = useState('')
  const [trafficSourceDomain, setTrafficSourceDomain] = useState('')
  const [browserLanguage, setBrowserLanguage] = useState([])
  const [exitIntentTargeting, setExitIntentTargeting] = useState(false)
  const [webhookURL,setWebhookURL] = useState({url:'',formSubmission:false,clickData:false})
  
  return (
    <SelectedContext.Provider
      value={{
        selectedSize, setSelectedSize,
        selectedPosition, setSelectedPosition,
        selectedColor, setSelectedColor,
        text1, setText1,
        text2, setText2,
        inputText1, setinputText1,
        inputText2, setinputText2,
        buttonText, setbuttonText,
        popupImage, setPopupImage,
        imageURL, setImageURL,
        targetPhone, setTargetPhone,
        targetLaptop, setTargetLaptop,
        afterXSecond, setAfterXSecond,
        afterXScroll, setAfterXScroll,
        trafficSourceDomain, setTrafficSourceDomain,
        browserLanguage, setBrowserLanguage,
        exitIntentTargeting, setExitIntentTargeting,
        webhookURL,setWebhookURL
      }}
    >
    {props.children}
    </SelectedContext.Provider>
  )
}

export default SelectedProvider

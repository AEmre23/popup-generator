import React,{useContext,useState} from 'react'
import { SelectedContext } from './Contexts/SelectedContext'
import { ModalsContext } from './Contexts/ModalContexts'
import Header from './utilities/header'
import Highlight from 'react-highlight'
import {AiOutlineInfoCircle} from 'react-icons/ai'


const SettingAndCode = () => {

  const {
      selectedSize,
      selectedPosition,
      selectedColor,
      text1,
      text2,
      inputText1,
      inputText2,
      buttonText,
      popupImage,
      imageURL,
      targetPhone,
      targetLaptop,
      afterXSecond,
      afterXScroll,
      trafficSourceDomain,
      browserLanguage,
      exitIntentTargeting,
      webhookURL,setWebhookURL
  } = useContext(SelectedContext)
  const {chosenModal} = useContext(ModalsContext)
  const [giveCode, setGiveCode] = useState(false)

  function selectedLanguages() {
    let arrayOfLangs=[]
    for (let x = 0; x < browserLanguage.length;x++) {
      arrayOfLangs.push(browserLanguage[x].join())
    }
    return arrayOfLangs
  }

  function modalName() {
    let modalName = chosenModal[0].name.toLowerCase()
    switch (modalName) {
      case 'modal1':
        return 'http://yourjavascript.com/4025542511/modal1.js'
      case 'modal2':
        return ''
    }
  }

  const codeCopier = (e) => {
    var range = document.createRange();
    range.selectNode(document.getElementById("textToCopy"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    e.target.innerText = 'Text Copied!'
    e.target.style.backgroundColor = 'green'
    setTimeout(() => {
    e.target.innerText = 'Copy the Code'
    e.target.style.backgroundColor = '#7D4AEA'
    },1500)
  }

  const codeGiver = (e) => {
    setGiveCode(true)
  }

  return (
    <div className="w-full cursor-default flex flex-col text-sm h-auto justify-around px-24 py-12 bigscreen:py-44">
      <Header number='5' text='Settings and Code' />
      <div className="text-lg font-bold mt-3 mb-3">
        Webhook to Send data
      </div>
      <p>Enter your Webhook URL</p>
      <p>You can  create a simple one with <a href='https://www.make.com/en' target='_blank' rel="noreferrer" className="underline hover:text-[#7D4AEA]">make.com</a></p>
      <input onBlur={(e)=> setWebhookURL({...webhookURL, url:e.target.value})}  type='text' placeholder='Your Webhook URL' className="my-3 w-96 rounded-lg p-2 border-2 focus:outline-[#7D4AEA]" />
      <div className="font-medium flex flex-col gap-2 mt-2 text-base">
        <div className="flex gap-5 items-center">
          <input onChange={(e)=>setWebhookURL({...webhookURL,formSubmission:e.target.checked})} type='checkbox' className="accent-[#7D4AEA] w-4 h-4 cursor-pointer" />
          <p>Send form submissions</p>
        </div>
        <div className="flex gap-5 items-center">
          <input onChange={(e)=>setWebhookURL({...webhookURL,clickData:e.target.checked})} type='checkbox' className="accent-[#7D4AEA] w-4 h-4 cursor-pointer" />
          <p>Send click data</p>
        </div>
      </div>
      {giveCode ||
        <button onClick={codeGiver} className="bg-[#7D4AEA] active:scale-95 w-56 mt-5 py-4 text-lg text-white shadow-xl transition-all hover:scale-105 duration-500 hover:shadow-none rounded-xl">Get your Code</button>
      }
      {giveCode &&
        <>
        <div className="relative w-96">
          <p className="text-xs ml-1 mt-3 text-green-600">You can still make changes in your modal, code will update automatically.</p>
          <div id='textToCopy'>
            <Highlight className="rounded-lg p-3 break-words text-xs mt-8 w-[400px] h-72 scrollbarcode overflow-x-auto overflow-y-auto" language="javascript">
              {`<script type="text/javascript"
 src="${modalName()}">
 </script>
<script> window.customizePopup({
  size:'${selectedSize}',
  position:'${selectedPosition}',
  color:'${selectedColor}',
  text1:'${text1}',
  text2:'${text2}',
  inputText1:'${inputText1}',
  inputText2:'${inputText2}',
  buttonText:'${buttonText}',
  imageURL:'${imageURL}',
  targetPhone:${targetPhone},
  targetLaptop:${targetLaptop},
  afterXSecond:'${afterXSecond}',
  afterXScroll:'${afterXScroll}',
  trafficSourceDomain:'${trafficSourceDomain}',
  browserLanguages:[${browserLanguage.length>0 ? '"' : ''}${browserLanguage.join('","')}${browserLanguage.length>0 ? '"' : ''}],
  exitIntentTargeting:${exitIntentTargeting},
  webhookURL:{url:'${webhookURL.url}',
  formSubmission:${webhookURL.formSubmission},
  clickData:${webhookURL.clickData}},
  },content)
  </script>`}
            </Highlight>
        </div>
        <button onClick={codeCopier} className="text-md bg-[#7D4AEA] py-1 rounded-2xl transition-all hover:scale-105 active:scale-95 absolute bottom-6 right-3 text-white w-44">Copy the Code</button>
      </div>
      <div className="flex items-start mt-2 gap-3 w-96">
        <AiOutlineInfoCircle className="w-8 h-6" />
        <p className="text-xs">
          Copy and paste the embed code above just before the
          closing &lt;/body&gt; tag of your website template file.
        </p>
      </div>
      </>}
    </div>
  )
}

export default SettingAndCode
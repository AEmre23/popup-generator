import React,{useContext,useEffect} from 'react'
import { SelectedContext } from './Contexts/SelectedContext'
import { ModalsContext } from './Contexts/ModalContexts'
import Header from './utilities/header'
import axios from 'axios'

const EditContent = () => {
  const {
    text1,setText1,
    text2,setText2,
    inputText1,setinputText1,
    inputText2,setinputText2,
    buttonText,setbuttonText,
    setPopupImage,
    setImageURL
  } = useContext(SelectedContext)
  const { chosenModal } = useContext(ModalsContext)
  let defaultImg = chosenModal[2]

  const text1Handler = (e) => {
    let value = e.target.value
    if(value.length>0) setText1(e.target.value)
    e.target.value=''
  }
  const text2Handler = (e) => {
    let value = e.target.value
    if(value.length>0) setText2(e.target.value)
    e.target.value=''
  }
  const inputText1Handler = (e) => {
    let value = e.target.value
    if(value.length>0) setinputText1(e.target.value)
    e.target.value=''
  }
  const inputText2Handler = (e) => {
    let value = e.target.value
    if(value.length>0) setinputText2(e.target.value)
    e.target.value=''
  }
  const buttonTextHandler = (e) => {
    let value = e.target.value
    if(value.length>0) setbuttonText(e.target.value)
    e.target.value=''
  }
  const FileDeleter = () => {
    setPopupImage(defaultImg)
    setImageURL('https://thumbsnap.com/i/BZktJYoK.png')
    document.getElementById('file').value = "";
  }
  const imageChanger = (e) => {
    var selectedFile = e.target.files[0]
    const fd = new FormData()
    fd.append('key', '0000214dcf97bc4bab3bb0e205ac9b51') //API key from thumbsnap api
    fd.append('media', selectedFile)

    var reader = new FileReader()
    reader.onload = function (e) {
      axios.post('https://thumbsnap.com/api/upload', fd).then(({ data }) => {
        setImageURL(data.data.media)
        setPopupImage(e.target.result)
      })
    }
    reader.readAsDataURL(selectedFile);   
  }

  return (
    <div className="w-full flex flex-col h-screen justify-around px-24 py-12 bigscreen:py-28">
      <Header number='3' text='Content' />
      <div className="text-md mt-3 mb-3">
        Edit your content
      </div>
      <div className="flex flex-col gap-2">
        {text1.length > 0 &&
        <input onBlur={text1Handler} type='text' placeholder={text1} className="p-2 w-96 text-sm border-2 rounded-lg focus:outline-purple-500 focus:shadow-xs focus:shadow-purple-500"/>
        }
        {text2.length > 0 &&
        <input onBlur={text2Handler} type='text' placeholder={text2} className="p-2 w-96 text-sm border-2 rounded-lg focus:outline-purple-500 focus:shadow-xs focus:shadow-purple-500" />
        }
        {inputText1.length > 0 &&
        <input onBlur={inputText1Handler} type='text' placeholder={inputText1} className="p-2 w-96 text-sm border-2 rounded-lg focus:outline-purple-500 focus:shadow-xs focus:shadow-purple-500" />
        }
        {inputText2.length > 0 &&
        <input onBlur={inputText2Handler} type='text' placeholder={inputText2} className="p-2 w-96 text-sm border-2 rounded-lg focus:outline-purple-500 focus:shadow-xs focus:shadow-purple-500" />
        }
        {buttonText.length > 0 &&
        <input onBlur={buttonTextHandler} type='text' placeholder={buttonText} className="p-2 w-96 text-sm border-2 rounded-lg focus:outline-purple-500 focus:shadow-xs focus:shadow-purple-500" />
        }
      </div>
      <div className="text-md mt-4 mb-4">
        Upload Image
      </div>
      <div className="p-4 border-2  w-96 border-dashed flex items-center justify-between gap-3">
        <div className="p-3 bg-purple-200 rounded-lg">
          <img src='/upload.png' alt='upload-logo'/>
        </div>
        <input onChange={imageChanger} id='file' type='file' accept="image/png, image/jpeg, .svg" className="cursor-pointer file:text-purple-800 file:font-bold file:rounded-lg file:cursor-pointer w-40 file:flex items-center justify-center file:border-none" />
        <button onClick={FileDeleter}  className="bg-purple-300 font-bold text-xl text-purple-900 w-8 h-8 pl-[1px] rounded-full transition-all hover:text-purple-100"> X </button>
      </div> 
    </div>
  )
}

export default EditContent

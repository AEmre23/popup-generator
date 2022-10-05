import React,{useRef,useEffect,useContext} from 'react'
import { ImCancelCircle } from 'react-icons/im'

import { SelectedContext } from '../Contexts/SelectedContext'

import { validateEmail } from '../functions/emailValidation'

import positionCheck from '../functions/positionChecker'

const Modal1 = (props) => {
  const {
    buttonText,
    popupImage,
    setText1,
    setText2,
    setinputText1,
    setinputText2,
    setbuttonText,
    setImageURL
  } = useContext(SelectedContext)
  
  const close = useRef()
  const validate = useRef()

  function popUpShower() {
    close.current.style.display = 'block'
    setTimeout(() => { close.current.style.opacity = 1 }, 300)
  }
  useEffect(() => {
    setText1('Sign Up')
    setText2('Join new adventure')
    setinputText1('Enter fullname')
    setinputText2('Enter your email')
    setbuttonText('Sign up')
    setImageURL('https://thumbsnap.com/i/BZktJYoK.png')
    popUpShower()
  }, []);

  const popUpCloser = () => {
    console.log('not working in here :)')
  }
  
  const formHandler = (e) => {
    e.preventDefault()
    let fullName = document.getElementById('fullname').value.trim()
    let email = document.getElementById('email').value.trim()
    if (fullName.length < 2 || !validateEmail(email)) {
      validate.current.style.backgroundColor = 'red'
      validate.current.innerText = 'Invalid Info'
      validate.current.classList.add('animate-pulse') 
    }else{
      validate.current.style.backgroundColor = 'lightgreen'
      validate.current.innerText = 'Done!'
      validate.current.classList.remove('animate-pulse') 
    }
    setTimeout(() => {
      let name = document.getElementById('fullname'), mail=document.getElementById('email')
      validate.current.style.backgroundColor = ''
      validate.current.innerText = buttonText
      validate.current.classList.remove('animate-pulse')
      name.value='', mail.value=''
    }, 2000)
  }

  let newColor
  function colorCheck() {
    switch (props.color) {
      case 'bg-[#F37C34]':
        newColor = {
          button: `bg-[#F37C34]`,
          inputFocus: `focus:outline-[#F37C34]`,
          inputIcon:`hover:text-[#F37C34]`,
        }
        break
      case 'bg-[#7D4AEA]':
        newColor = {
          button: `bg-[#7D4AEA]`,
          inputFocus: `focus:outline-[#7D4AEA]`,
          inputIcon:`hover:text-[#7D4AEA]`,
        }
        break
      case 'bg-black':
        newColor = {
          button: `bg-black`,
          inputFocus: `focus:outline-black`,
          inputIcon:`hover:text-black`,
        }
        break
      case 'bg-blue-400':
        newColor = {
          button: `bg-blue-400`,
          inputFocus: `focus:outline-blue-400`,
          inputIcon:`hover:text-blue-400`,
        }
        break
      case 'bg-[#777777]':
        newColor = {
          button: `bg-[#777777]`,
          inputFocus: `focus:outline-[#777777]`,
          inputIcon:`hover:text-[#777777]`,
        }
        break
      default:
          newColor = {
          button: `bg-[#7D4AEA]`,
          inputFocus: `focus:outline-[#7D4AEA]`,
          inputIcon:`hover:text-[#7D4AEA]`,
        }
        break
    }
  }
  colorCheck()
  function sizeCheck() {
    if (props.size == 'small') return {height:'300px',width: '500px'}
    if (props.size == 'large') return {height:'450px',width: '800px'}
    else return {height:'350px',width: '600px'}
  }

  return (
    <div ref={close} style={positionCheck(props)}  className="hidden opacity-0 cursor-default transition-opacity duration-300 ">
      <div style={sizeCheck()} className="flex rounded-xl overflow-hidden w-full h-full shadow-2xl">
        <div  className={`flex flex-col justify-around bg-white w-1/2 p-6`}>
          <div className={` ${props.size == 'small' && 'text-2xl'} ${props.size == 'large' && 'text-4xl'} text-3xl break-words font-bold`}>
            {props.text1}
          </div>
          <div className={` ${props.size == 'small' && 'text-base '} ${props.size == 'large' && 'text-2xl -mt-7'} break-words text-xl font-medium`}>
            {props.text2}
          </div>
          <form onSubmit={formHandler} className="flex flex-col gap-4 ">
            <div className="border-2 rounded-md text-sm">
              <input id="fullname" className={` ${newColor.inputFocus} p-2 w-full placeholder:text-black`} type="text" placeholder={props.inputText1} />
            </div>
            <div className="border-2 rounded-md text-sm">
              <input id="email" className={` ${newColor.inputFocus} p-2 w-full placeholder:text-black`} type="text" placeholder={props.inputText2} />
            </div>
            <button ref={validate} className={`active:scale-95 hover:brightness-125 text-sm transition-all flex items-center justify-center ${newColor.button} text-white px-2 py-2.5 rounded-lg`}>
              {props.buttonText}
            </button>
          </form>

          <div className="flex w-full justify-between text-xs">
            <div className="cursor-pointer transition-all hover:underline">Forgot password</div>
            <div className="cursor-pointer transition-all hover:underline">Log In</div>
          </div>

        </div>
        <div style={{backgroundImage:`url(${popupImage.src ? popupImage.src : popupImage})`}} className="bg-no-repeat bg-center bg-cover w-1/2 relative">
          <ImCancelCircle onClick={popUpCloser} className="scale-150 hover:scale-[1.58] cursor-pointer absolute top-6 right-6 text-gray-600 transition-all"/>
        </div>
      </div>
    </div>
  )
}

export default Modal1
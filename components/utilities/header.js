import React from 'react'

const Header = (props) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="bg-[#EAEAEA] w-10 h-10 text-lg font-medium flex items-center justify-center rounded-full">{props.number}</div>
      <div className="text-lg font-bold">
        {props.text}
        {props.subtext &&
        <span className="font-medium">{props.subtext}</span>
        }
      </div>
    </div>
  )
}

export default Header

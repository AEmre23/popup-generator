import React from 'react'

const SwitchButton = (props) => {
  const {setSwitchBoolean,switchBoolean} = props
  return (
    <label onChange={()=>setSwitchBoolean(!switchBoolean)} className="switch">
      <input type="checkbox"  />
      <span className="slider round"></span>
    </label>
  )
}

export default SwitchButton
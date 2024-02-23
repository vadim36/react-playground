import React from "react";

const Input: React.FC<any> = ({...props}) => {
  return (
    <input className="outline outline-2 outline-sky-500 text-2xl rounded p-1" 
      {...props}/>
  )
}

export default Input
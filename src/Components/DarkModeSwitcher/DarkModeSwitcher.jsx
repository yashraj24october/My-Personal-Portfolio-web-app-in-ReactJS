import React, { useReducer, useRef, useState } from 'react'
import './DarkModeSwitcher.css'

const DarkModeSwitcher = () => {
  let [darkMode,setDarkMode] = useState(true);
  let modeSwitcherRef = useRef(0);
//  let [modeText,setModeText] = useState("Dark");
 let toggleMode =()=>{
if(darkMode){
  setDarkMode(false);
  modeSwitcherRef.current.classList.add('light');
  document.body.classList.add("light-mode");
}else{
  setDarkMode(true);
  modeSwitcherRef.current.classList.remove('light');
  document.body.classList.remove("light-mode");
}
 }
  return (
    <>
      <button ref={modeSwitcherRef} className="dark-mode-button" onClick={toggleMode}></button>
    </>
  )
}

export default DarkModeSwitcher

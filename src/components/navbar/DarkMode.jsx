import React, { useEffect, useState } from 'react'

export const DarkMode = () => {
  const [theme,setTheme]=useState("light" )
  const element=document.documentElement
  useEffect(()=>{
    if(theme==="dark")
    {
      element.classList.add("dark")
      localStorage.setItem("theme","dark")
    }
    else{
      element.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[theme])
  return (
    
        <label className="inline-flex items-center cursor-pointer translate-y-[2px]">
             <input type="checkbox" value="" className="sr-only peer" onChange={()=>{theme==="dark" ? setTheme("light") : setTheme("dark")}}/>
             <div className="relative w-11 h-6 bg-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-blue-900 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white  peer-checked:bg-black"></div>
        </label>
  )
}

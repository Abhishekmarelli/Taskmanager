import React, { useEffect, useState } from 'react'
import img from '../task-management.png'

const Header = () => {

  const [theme ,settheme] =useState(JSON.parse(localStorage.getItem("theme"))||'light')

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)
  },[theme])
  return (
    <header>
        <div className='logo'>
            <img src ={img}/>
            <span>TaskManager</span>
        </div>
        <div className='themeSelector'>

            <span onClick={()=>settheme('light')} className= {theme === 'light' ? 'light activeTheme' : 'light'}></span>
            <span onClick={()=>settheme('dark')}  className={theme === 'dark' ? 'dark activeTheme' : 'dark'}></span>
        </div>
    </header>
  )
}

export default Header
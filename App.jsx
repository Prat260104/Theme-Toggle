import { Themecontext } from './context/Theme'
import './App.css'
import { Themeprovider } from './context/Theme'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {

  const [thememode,setThememode]=useState('light')

  const lighttheme=()=>{
    setThememode('light')
  }

  const darktheme=()=>{
    setThememode('dark')
  }
 
//actual change in theme 

useEffect(()=>{
document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(thememode)
},[thememode])


  return (
     //wrapping inside theme provider taki access mil paye 
    <Themeprovider value={{thememode,lighttheme,darktheme}}>
     
<div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*  theme button  */}

                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*  card */}
                       <Card/>
                    </div>
                </div>
            </div>

            </Themeprovider>
  )
}

export default App
